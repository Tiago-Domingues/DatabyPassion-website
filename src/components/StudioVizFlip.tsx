"use client";

import { useEffect, useId, useRef, useState } from "react";
import { initStudioViz } from "@/lib/studio-viz";

export function StudioVizFlip() {
  const [flipped, setFlipped] = useState(false);
  const flippedRef = useRef(false);
  const frontCanvas = useRef<HTMLCanvasElement>(null);
  const backCanvas = useRef<HTMLCanvasElement>(null);
  const frontPhase = useRef<HTMLDivElement>(null);
  const backPhase = useRef<HTMLDivElement>(null);
  const frontId = useId();
  const backId = useId();
  flippedRef.current = flipped;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFlipped(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    if (frontCanvas.current) {
      cleanups.push(
        initStudioViz(frontCanvas.current, {
          variant: "architecture",
          phaseEl: frontPhase.current,
          getPaused: () => flippedRef.current,
        }),
      );
    }
    if (backCanvas.current) {
      cleanups.push(
        initStudioViz(backCanvas.current, {
          variant: "orbit",
          phaseEl: backPhase.current,
          getPaused: () => !flippedRef.current,
        }),
      );
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [flipped]);

  return (
    <article className={`studio-viz-flip${flipped ? " is-flipped" : ""}`}>
      <div className="studio-viz-flip-inner">
        <div className="studio-viz-flip-face studio-viz-flip-front" aria-hidden={flipped}>
          <button
            type="button"
            className="studio-viz-flip-hit"
            onClick={() => setFlipped(true)}
            aria-expanded={flipped}
            aria-controls={backId}
          >
            <div className="reasoning-svg-wrap">
              <canvas
                ref={frontCanvas}
                aria-label="Value translation from client need through studio expertise to operating value"
              />
            </div>
            <div className="reasoning-phase" ref={frontPhase} aria-live="polite" />
            <span className="plat-flip-hint">Tap for another view</span>
          </button>
        </div>
        <div
          className="studio-viz-flip-face studio-viz-flip-back"
          id={backId}
          role="region"
          aria-hidden={!flipped}
        >
          <button
            type="button"
            className="studio-viz-flip-hit"
            onClick={() => setFlipped(false)}
            tabIndex={flipped ? 0 : -1}
            aria-label="Flip back to the architecture view"
          >
            <div className="reasoning-svg-wrap">
              <canvas
                ref={backCanvas}
                aria-label="Orbital studio: four capabilities around a studio core becoming a working product"
              />
            </div>
            <div className="reasoning-phase" ref={backPhase} aria-live="polite" />
            <span className="plat-flip-hint">Tap to flip back</span>
          </button>
        </div>
      </div>
      <span className="sr-only" id={frontId}>
        Studio value path
      </span>
    </article>
  );
}
