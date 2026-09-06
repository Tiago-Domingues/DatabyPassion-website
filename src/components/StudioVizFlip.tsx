"use client";

import { useEffect, useId, useRef, useState } from "react";
import { initStudioViz } from "@/lib/studio-viz";

function VizFace({
  canvasRef,
  phaseRef,
  onFlip,
  onZoom,
  controlsId,
  canvasLabel,
  hint,
  tabIndex,
  ariaExpanded,
  ariaHidden,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  phaseRef: React.RefObject<HTMLDivElement | null>;
  onFlip: () => void;
  onZoom: () => void;
  controlsId?: string;
  canvasLabel: string;
  hint: string;
  tabIndex?: number;
  ariaExpanded?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <div className="studio-viz-flip-face-body" aria-hidden={ariaHidden}>
      <div className="reasoning-svg-wrap">
        <div className="reasoning-phase" ref={phaseRef} aria-live="polite" />
        <canvas ref={canvasRef} aria-label={canvasLabel} />
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
  const flippedRef = useRef(false);
  const zoomedRef = useRef(false);
  const frontCanvas = useRef<HTMLCanvasElement>(null);
  const backCanvas = useRef<HTMLCanvasElement>(null);
  const zoomCanvas = useRef<HTMLCanvasElement>(null);
  const frontPhase = useRef<HTMLDivElement>(null);
  const backPhase = useRef<HTMLDivElement>(null);
  const zoomPhase = useRef<HTMLDivElement>(null);
  const frontId = useId();
  const backId = useId();
  flippedRef.current = flipped;
  zoomedRef.current = zoomed;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (zoomedRef.current) {
        setZoomed(false);
        setZoomScale(1);
        return;
      }
      setFlipped(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    if (frontCanvas.current) {
      cleanups.push(
        initStudioViz(frontCanvas.current, {
          variant: "orbit",
          phaseEl: frontPhase.current,
          getPaused: () => flippedRef.current || zoomedRef.current,
        }),
      );
    }
    if (backCanvas.current) {
      cleanups.push(
        initStudioViz(backCanvas.current, {
          variant: "architecture",
          phaseEl: backPhase.current,
          getPaused: () => !flippedRef.current || zoomedRef.current,
        }),
      );
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    if (!zoomed || !zoomCanvas.current) return;
    const variant = flippedRef.current ? "architecture" : "orbit";
    return initStudioViz(zoomCanvas.current, {
      variant,
      phaseEl: zoomPhase.current,
    });
  }, [zoomed, flipped]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [flipped, zoomed]);

  useEffect(() => {
    document.body.classList.toggle("studio-viz-zoomed", zoomed);
    return () => document.body.classList.remove("studio-viz-zoomed");
  }, [zoomed]);

  function bumpZoom(delta: number) {
    setZoomScale((s) => Math.min(2.6, Math.max(1, Number((s + delta).toFixed(2)))));
  }

  return (
    <article className={`studio-viz-flip${flipped ? " is-flipped" : ""}`}>
      <div className="studio-viz-flip-inner">
        <div className="studio-viz-flip-face studio-viz-flip-front">
          <VizFace
            canvasRef={frontCanvas}
            phaseRef={frontPhase}
            onFlip={() => setFlipped(true)}
            onZoom={() => {
              setZoomed(true);
              setZoomScale(1.25);
            }}
            controlsId={backId}
            canvasLabel="Orbital studio: four capabilities around a studio core delivering operating value"
            hint="Tap for the delivery path"
            ariaExpanded={flipped}
            ariaHidden={flipped}
          />
        </div>
        <div className="studio-viz-flip-face studio-viz-flip-back" id={backId} role="region">
          <VizFace
            canvasRef={backCanvas}
            phaseRef={backPhase}
            onFlip={() => setFlipped(false)}
            onZoom={() => {
              setZoomed(true);
              setZoomScale(1.25);
            }}
            canvasLabel="Delivery path from client need through studio expertise to operating value"
            hint="Tap to flip back"
            tabIndex={flipped ? 0 : -1}
            ariaHidden={!flipped}
          />
        </div>
      </div>
      <span className="sr-only" id={frontId}>
        Studio value path
      </span>
      {zoomed ? (
        <div
          className="studio-viz-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Studio figure, zoomed"
        >
          <button
            type="button"
            className="studio-viz-lightbox-backdrop"
            aria-label="Close zoom"
            onClick={() => {
              setZoomed(false);
              setZoomScale(1);
            }}
          />
          <div className="studio-viz-lightbox-panel">
            <div className="studio-viz-lightbox-bar">
              <div className="reasoning-phase" ref={zoomPhase} aria-live="polite" />
              <div className="studio-viz-zoom-controls">
                <button type="button" onClick={() => bumpZoom(-0.25)} aria-label="Zoom out">
                  −
                </button>
                <button type="button" onClick={() => bumpZoom(0.25)} aria-label="Zoom in">
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setZoomed(false);
                    setZoomScale(1);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="reasoning-svg-wrap is-zoom-stage"
              onWheel={(e) => {
                e.preventDefault();
                bumpZoom(e.deltaY < 0 ? 0.12 : -0.12);
              }}
            >
              <div className="studio-viz-zoom-frame is-zoom-stage" style={{ transform: `scale(${zoomScale})` }}>
                <canvas
                  ref={zoomCanvas}
                  aria-label={
                    flipped
                      ? "Delivery path from client need through studio expertise to operating value"
                      : "Orbital studio: four capabilities around a studio core delivering operating value"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
