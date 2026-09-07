"use client";

import { useEffect, useRef } from "react";
import { DELIVERY_METHOD } from "@/content/collective";

const STEP_MS = 5_000;
const CYCLE_MS = STEP_MS * DELIVERY_METHOD.length;

export function DeliveryMap() {
  const mapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const map = mapRef.current;
    const track = trackRef.current;
    if (!map || !track) return;

    map.style.setProperty("--usbe-step-ms", `${STEP_MS}ms`);
    map.style.setProperty("--usbe-cycle-ms", `${CYCLE_MS}ms`);

    const alignTrack = () => {
      const nodes = nodeRefs.current.filter((node): node is HTMLSpanElement => Boolean(node));
      if (nodes.length < 2) return;

      const mapRect = map.getBoundingClientRect();
      const cs = getComputedStyle(map);
      const padTop =
        mapRect.top + parseFloat(cs.borderTopWidth) + parseFloat(cs.paddingTop);
      const padBottom =
        mapRect.bottom - parseFloat(cs.borderBottomWidth) - parseFloat(cs.paddingBottom);
      const padLeft =
        mapRect.left + parseFloat(cs.borderLeftWidth) + parseFloat(cs.paddingLeft);

      const first = nodes[0].getBoundingClientRect();
      const last = nodes[nodes.length - 1].getBoundingClientRect();
      const firstCenter = first.top + first.height / 2;
      const lastCenter = last.top + last.height / 2;
      const nodeCenterX = first.left + first.width / 2;

      track.style.top = `${Math.max(0, firstCenter - padTop)}px`;
      track.style.bottom = `${Math.max(0, padBottom - lastCenter)}px`;
      track.style.left = `${nodeCenterX - padLeft - 2}px`;
    };

    const siteReduced = () => document.documentElement.classList.contains("dbp-a11y-motion");

    const setPlaying = (playing: boolean) => {
      if (siteReduced()) {
        map.classList.remove("is-playing");
        alignTrack();
        return;
      }
      map.classList.toggle("is-playing", playing);
      alignTrack();
    };

    alignTrack();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          if (!map.classList.contains("is-playing")) setPlaying(true);
          return;
        }
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: [0, 0.2, 0.45, 1] },
    );
    observer.observe(map);

    const onResize = () => alignTrack();
    window.addEventListener("resize", onResize);
    const resizeObserver = new ResizeObserver(alignTrack);
    resizeObserver.observe(map);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure ref={mapRef} className="delivery-map">
      <figcaption className="delivery-map__caption">
        <span className="section-label">How we deliver</span>
        <strong>Understand → Shape → Build → Evolve</strong>
      </figcaption>
      <div className="delivery-map__track" aria-hidden="true" ref={trackRef}>
        <span className="delivery-map__spine" />
        <span className="delivery-map__fill" />
        <span className="delivery-map__pulse" />
      </div>
      <ol className="delivery-map__steps">
        {DELIVERY_METHOD.map((step, index) => (
          <li key={step.number} className="delivery-map__step">
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
