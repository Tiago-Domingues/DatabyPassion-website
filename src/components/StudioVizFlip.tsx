"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { StudioVizFigure } from "@/components/StudioVizFigure";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

const ORBIT_PHASES = [
  "A capability engages",
  "The studio shapes it",
  "Operating value in the client's hands",
] as const;

const ARCH_PHASES = [
  "Starting from the need",
  "Bringing studio expertise",
  "Turning expertise into value",
  "Operating value in hand",
] as const;

type Point = { x: number; y: number };
type Rect = { x: number; y: number; w: number; h: number };

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function useStudioPhase(flipped: boolean, paused: boolean) {
  const phases = flipped ? ARCH_PHASES : ORBIT_PHASES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [flipped]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % phases.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [paused, phases.length]);

  return phases[index] ?? phases[0];
}

function VizStage({
  flipped,
  phase,
  onFlip,
  onZoom,
  controlsId,
  hint,
  tabIndex,
  ariaExpanded,
}: {
  flipped: boolean;
  phase: string;
  onFlip: () => void;
  onZoom: () => void;
  controlsId?: string;
  hint: string;
  tabIndex?: number;
  ariaExpanded?: boolean;
}) {
  return (
    <div className="studio-viz-shell card-headlight">
      <div className="reasoning-svg-wrap">
        <div className="reasoning-phase" aria-live="polite">
          <span className="visible">{phase}</span>
        </div>
        <StudioVizFigure variant={flipped ? "architecture" : "orbit"} />
        <button
          type="button"
          className="studio-viz-zoom"
          onClick={(e) => {
            e.stopPropagation();
            onZoom();
          }}
          aria-label="Zoom in on the studio figure"
        >
          Zoom
        </button>
        <button
          type="button"
          className="studio-viz-flip-hit"
          onClick={onFlip}
          tabIndex={tabIndex}
          aria-expanded={ariaExpanded}
          aria-controls={controlsId}
          aria-label={hint}
        >
          <span className="plat-flip-hint">{hint}</span>
        </button>
      </div>
    </div>
  );
}

export function StudioVizFlip() {
  const [flipped, setFlipped] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [tool, setTool] = useState<"select" | "pan">("select");
  const [marquee, setMarquee] = useState<Rect | null>(null);
  const zoomedRef = useRef(false);
  const scaleRef = useRef(1);
  const panRef = useRef<Point>({ x: 0, y: 0 });
  const toolRef = useRef<"select" | "pan">("select");
  const dragRef = useRef<{
    pointerId: number;
    start: Point;
    originPan: Point;
    moved: boolean;
    mode: "select" | "pan";
  } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frontId = useId();
  const backId = useId();
  zoomedRef.current = zoomed;
  scaleRef.current = zoomScale;
  panRef.current = pan;
  toolRef.current = tool;

  const phase = useStudioPhase(flipped, zoomed);

  function closeZoom() {
    setZoomed(false);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
    setMarquee(null);
    setTool("select");
    dragRef.current = null;
  }

  function applyZoom(nextScale: number, nextPan: Point) {
    const scale = Number(clamp(nextScale, MIN_ZOOM, MAX_ZOOM).toFixed(2));
    const panNext = scale <= MIN_ZOOM ? { x: 0, y: 0 } : nextPan;
    setZoomScale(scale);
    setPan(panNext);
    scaleRef.current = scale;
    panRef.current = panNext;
  }

  function zoomToward(clientX: number, clientY: number, nextScale: number) {
    const stage = stageRef.current;
    if (!stage) {
      applyZoom(nextScale, panRef.current);
      return;
    }
    const box = stage.getBoundingClientRect();
    const mx = clientX - box.left;
    const my = clientY - box.top;
    const scale = scaleRef.current;
    const current = panRef.current;
    const contentX = (mx - current.x) / scale;
    const contentY = (my - current.y) / scale;
    const clamped = clamp(nextScale, MIN_ZOOM, MAX_ZOOM);
    applyZoom(clamped, { x: mx - contentX * clamped, y: my - contentY * clamped });
  }

  function zoomToRect(rect: Rect) {
    const stage = stageRef.current;
    if (!stage || rect.w < 12 || rect.h < 12) return;
    const box = stage.getBoundingClientRect();
    const scale = scaleRef.current;
    const current = panRef.current;
    const fit = Math.min(box.width / rect.w, box.height / rect.h) * 0.92;
    const nextScale = clamp(scale * fit, MIN_ZOOM, MAX_ZOOM);
    const cx = rect.x + rect.w / 2;
    const cy = rect.y + rect.h / 2;
    const contentX = (cx - current.x) / scale;
    const contentY = (cy - current.y) / scale;
    applyZoom(nextScale, {
      x: box.width / 2 - contentX * nextScale,
      y: box.height / 2 - contentY * nextScale,
    });
    setTool("pan");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (zoomedRef.current) {
        closeZoom();
        return;
      }
      setFlipped(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("studio-viz-zoomed", zoomed);
    return () => document.body.classList.remove("studio-viz-zoomed");
  }, [zoomed]);

  useEffect(() => {
    if (!zoomed) return;
    const stage = stageRef.current;
    if (!stage) return;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      zoomToward(e.clientX, e.clientY, scaleRef.current + (e.deltaY < 0 ? 0.12 : -0.12));
    }
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [zoomed]);

  function onStagePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    const start = { x: e.clientX - box.left, y: e.clientY - box.top };
    const mode = e.shiftKey ? "select" : toolRef.current;
    dragRef.current = {
      pointerId: e.pointerId,
      start,
      originPan: { ...panRef.current },
      moved: false,
      mode,
    };
    stage.setPointerCapture(e.pointerId);
    if (mode === "select") setMarquee({ x: start.x, y: start.y, w: 0, h: 0 });
  }

  function onStagePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const stage = stageRef.current;
    if (!drag || !stage || e.pointerId !== drag.pointerId) return;
    const box = stage.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    if (Math.hypot(x - drag.start.x, y - drag.start.y) > 6) drag.moved = true;
    if (drag.mode === "select") {
      setMarquee({
        x: Math.min(drag.start.x, x),
        y: Math.min(drag.start.y, y),
        w: Math.abs(x - drag.start.x),
        h: Math.abs(y - drag.start.y),
      });
      return;
    }
    applyZoom(scaleRef.current, {
      x: drag.originPan.x + (x - drag.start.x),
      y: drag.originPan.y + (y - drag.start.y),
    });
  }

  function onStagePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || e.pointerId !== drag.pointerId) return;
    const stage = stageRef.current;
    dragRef.current = null;
    if (drag.mode === "select") {
      setMarquee(null);
      if (stage && drag.moved) {
        const box = stage.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const rect = {
          x: Math.min(drag.start.x, x),
          y: Math.min(drag.start.y, y),
          w: Math.abs(x - drag.start.x),
          h: Math.abs(y - drag.start.y),
        };
        if (rect.w >= 12 && rect.h >= 12) {
          zoomToRect(rect);
          return;
        }
      }
      zoomToward(e.clientX, e.clientY, scaleRef.current + ZOOM_STEP);
      return;
    }
    if (!drag.moved && stage) {
      zoomToward(e.clientX, e.clientY, scaleRef.current + ZOOM_STEP);
    }
  }

  const lightbox =
    zoomed && typeof document !== "undefined" ? (
      <div className="studio-viz-lightbox" role="dialog" aria-modal="true" aria-label="Studio figure, zoomed">
        <button
          type="button"
          className="studio-viz-lightbox-backdrop"
          aria-label="Close zoom"
          onClick={closeZoom}
        />
        <div className="studio-viz-lightbox-panel">
          <div className="studio-viz-lightbox-bar">
            <div className="reasoning-phase" aria-live="polite">
              <span className="visible">{phase}</span>
            </div>
            <p className="studio-viz-zoom-hint">
              {tool === "select" ? "Drag a box to zoom in. Click to point." : "Drag to move. Scroll to zoom."}
            </p>
            <div className="studio-viz-zoom-controls">
              <button
                type="button"
                className={tool === "select" ? "is-active" : ""}
                onClick={() => setTool("select")}
                aria-pressed={tool === "select"}
              >
                Select
              </button>
              <button
                type="button"
                className={tool === "pan" ? "is-active" : ""}
                onClick={() => setTool("pan")}
                aria-pressed={tool === "pan"}
              >
                Move
              </button>
              <button
                type="button"
                onClick={() => {
                  const stage = stageRef.current;
                  if (!stage) {
                    applyZoom(zoomScale - ZOOM_STEP, pan);
                    return;
                  }
                  const box = stage.getBoundingClientRect();
                  zoomToward(box.left + box.width / 2, box.top + box.height / 2, zoomScale - ZOOM_STEP);
                }}
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => {
                  const stage = stageRef.current;
                  if (!stage) {
                    applyZoom(zoomScale + ZOOM_STEP, pan);
                    return;
                  }
                  const box = stage.getBoundingClientRect();
                  zoomToward(box.left + box.width / 2, box.top + box.height / 2, zoomScale + ZOOM_STEP);
                }}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  applyZoom(1, { x: 0, y: 0 });
                  setTool("select");
                }}
              >
                Reset
              </button>
              <button type="button" onClick={closeZoom}>
                Close
              </button>
            </div>
          </div>
          <div className="studio-viz-shell card-headlight">
            <div
              ref={stageRef}
              className={`reasoning-svg-wrap is-zoom-stage is-zoom-${tool}`}
              onPointerDown={onStagePointerDown}
              onPointerMove={onStagePointerMove}
              onPointerUp={onStagePointerUp}
              onPointerCancel={() => {
                dragRef.current = null;
                setMarquee(null);
              }}
            >
              <div
                className="studio-viz-zoom-frame"
                style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})` }}
              >
                <StudioVizFigure variant={flipped ? "architecture" : "orbit"} />
              </div>
              {marquee ? (
                <div
                  className="studio-viz-marquee"
                  style={{
                    left: marquee.x,
                    top: marquee.y,
                    width: marquee.w,
                    height: marquee.h,
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <article className={`studio-viz-flip${flipped ? " is-flipped" : ""}`}>
      <VizStage
        flipped={flipped}
        phase={phase}
        onFlip={() => setFlipped((open) => !open)}
        onZoom={() => {
          setZoomed(true);
          setZoomScale(1);
          setPan({ x: 0, y: 0 });
          setTool("select");
        }}
        controlsId={backId}
        hint={flipped ? "Tap to flip back" : "Tap for the delivery path"}
        ariaExpanded={flipped}
      />
      <span className="sr-only" id={frontId}>
        Studio value path
      </span>
      <span className="sr-only" id={backId}>
        Delivery path from client need through studio expertise to operating value
      </span>
      {lightbox ? createPortal(lightbox, document.body) : null}
    </article>
  );
}
