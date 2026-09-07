"use client";

import { useEffect, useRef, useState } from "react";
import { DELIVERY_METHOD } from "@/content/collective";

const CYCLE_MS = 20_000;
const STEP_MS = 5_000;

function readReducedMotion() {
  return (
    document.documentElement.classList.contains("dbp-a11y-motion") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function DeliveryMap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyReduced = () => {
      if (readReducedMotion()) {
        setReduced(true);
        setProgress(1);
        setActiveCount(DELIVERY_METHOD.length);
        return true;
      }
      setReduced(false);
      return false;
    };

    if (applyReduced()) {
      const onChange = () => applyReduced();
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    let frame = 0;
    const startedAt = performance.now();

    const measureNodes = () => {
      const track = trackRef.current;
      if (!track) return { height: 0, nodes: [] as number[] };
      const trackRect = track.getBoundingClientRect();
      const nodes = nodeRefs.current.map((node) => {
        if (!node) return 0;
        const rect = node.getBoundingClientRect();
        return rect.top + rect.height / 2 - trackRect.top;
      });
      return { height: trackRect.height, nodes };
    };

    const tick = (now: number) => {
      const { height, nodes } = measureNodes();
      if (height <= 0 || nodes.length === 0) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const elapsed = (now - startedAt) % CYCLE_MS;
      const lastIndex = nodes.length - 1;
      const travelMs = STEP_MS * lastIndex;
      let pulseY = nodes[0];

      if (elapsed >= travelMs) {
        const leftover = Math.min(1, (elapsed - travelMs) / STEP_MS);
        pulseY = nodes[lastIndex] + (height - nodes[lastIndex]) * leftover;
      } else {
        const segment = elapsed / STEP_MS;
        const index = Math.min(Math.floor(segment), lastIndex - 1);
        const local = segment - index;
        pulseY = nodes[index] + (nodes[index + 1] - nodes[index]) * local;
      }

      let active = 0;
      for (const nodeY of nodes) {
        if (pulseY + 1 >= nodeY) active += 1;
      }

      setProgress(Math.min(1, Math.max(0, pulseY / height)));
      setActiveCount(active);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    const onChange = () => {
      if (applyReduced()) window.cancelAnimationFrame(frame);
    };
    media.addEventListener("change", onChange);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onChange);
    };
  }, []);

  const fillPercent = reduced ? 100 : progress * 100;
  const pulsePercent = reduced ? 100 : progress * 100;

  return (
    <figure className={`delivery-map${reduced ? " delivery-map--static" : ""}`}>
      <figcaption className="delivery-map__caption">
        <span className="section-label">How we deliver</span>
        <strong>Understand → Shape → Build → Evolve</strong>
      </figcaption>
      <div className="delivery-map__track" aria-hidden="true" ref={trackRef}>
        <span className="delivery-map__spine" />
        <span className="delivery-map__fill" style={{ height: `${fillPercent}%` }} />
        {!reduced ? (
          <span className="delivery-map__pulse" style={{ top: `calc(${pulsePercent}% - 4px)` }} />
        ) : null}
      </div>
      <ol className="delivery-map__steps">
        {DELIVERY_METHOD.map((step, index) => (
          <li
            key={step.number}
            className={`delivery-map__step${index < activeCount ? " is-active" : ""}`}
          >
            <span
              className="delivery-map__node"
              aria-hidden="true"
              ref={(node) => {
                nodeRefs.current[index] = node;
              }}
            >
              {step.number}
            </span>
            <div>
              <h3>{step.title}</h3>
              <span className="delivery-map__output">{step.output}</span>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
