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
  const mapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const pulseRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setProgress = (progress: number, activeCount: number) => {
      const clamped = Math.min(1, Math.max(0, progress));
      if (fillRef.current) fillRef.current.style.height = `${clamped * 100}%`;
      if (pulseRef.current) pulseRef.current.style.top = `calc(${clamped * 100}% - 5px)`;
      stepRefs.current.forEach((step, index) => {
        step?.classList.toggle("is-active", index < activeCount);
      });
    };

    const alignTrack = () => {
      const map = mapRef.current;
      const track = trackRef.current;
      const nodes = nodeRefs.current.filter((node): node is HTMLSpanElement => Boolean(node));
      if (!map || !track || nodes.length < 2) return { height: 0, nodes: [] as number[] };

      const mapRect = map.getBoundingClientRect();
      const first = nodes[0].getBoundingClientRect();
      const last = nodes[nodes.length - 1].getBoundingClientRect();
      const top = first.top + first.height / 2 - mapRect.top;
      const bottom = mapRect.bottom - (last.top + last.height / 2);
      track.style.top = `${top}px`;
      track.style.bottom = `${bottom}px`;

      const trackRect = track.getBoundingClientRect();
      return {
        height: trackRect.height,
        nodes: nodes.map((node) => {
          const rect = node.getBoundingClientRect();
          return rect.top + rect.height / 2 - trackRect.top;
        }),
      };
    };

    const applyReduced = () => {
      if (readReducedMotion()) {
        setReduced(true);
        alignTrack();
        setProgress(1, DELIVERY_METHOD.length);
        return true;
      }
      setReduced(false);
      return false;
    };

    if (applyReduced()) {
      const onChange = () => applyReduced();
      media.addEventListener("change", onChange);
      window.addEventListener("resize", alignTrack);
      return () => {
        media.removeEventListener("change", onChange);
        window.removeEventListener("resize", alignTrack);
      };
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const { height, nodes } = alignTrack();
      if (height <= 0 || nodes.length === 0) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const elapsed = (now - startedAt) % CYCLE_MS;
      const lastIndex = nodes.length - 1;
      const travelMs = STEP_MS * lastIndex;
      let pulseY = nodes[0];

      if (elapsed >= travelMs) {
        pulseY = nodes[lastIndex];
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

      setProgress(pulseY / height, active);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    const onChange = () => {
      if (applyReduced()) window.cancelAnimationFrame(frame);
    };
    media.addEventListener("change", onChange);
    window.addEventListener("resize", alignTrack);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onChange);
      window.removeEventListener("resize", alignTrack);
    };
  }, []);

  return (
    <figure ref={mapRef} className={`delivery-map${reduced ? " delivery-map--static" : ""}`}>
      <figcaption className="delivery-map__caption">
        <span className="section-label">How we deliver</span>
        <strong>Understand → Shape → Build → Evolve</strong>
      </figcaption>
      <div className="delivery-map__track" aria-hidden="true" ref={trackRef}>
        <span className="delivery-map__spine" />
        <span className="delivery-map__fill" ref={fillRef} />
        {!reduced ? <span className="delivery-map__pulse" ref={pulseRef} /> : null}
      </div>
      <ol className="delivery-map__steps">
        {DELIVERY_METHOD.map((step, index) => (
          <li
            key={step.number}
            className="delivery-map__step"
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
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
