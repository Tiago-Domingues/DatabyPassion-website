"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TOOL_LOGOS, ToolMark } from "@/components/ToolLogos";

type ToolId = (typeof TOOL_LOGOS)[number]["id"];

function slotCountForWidth(width: number) {
  if (width < 1024) return 4;
  return 6;
}

function LogoSlotGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(6);
  const [visible, setVisible] = useState<ToolId[]>(() => TOOL_LOGOS.slice(0, 6).map((t) => t.id));
  const [fading, setFading] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);
  const visibleRef = useRef(visible);
  const fadingRef = useRef(false);
  visibleRef.current = visible;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const apply = () => setCount(slotCountForWidth(window.innerWidth));
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    setVisible((prev) => {
      const next = prev.filter((id, i) => prev.indexOf(id) === i);
      for (const tool of TOOL_LOGOS) {
        if (next.length >= count) break;
        if (!next.includes(tool.id)) next.push(tool.id);
      }
      return next.slice(0, count);
    });
  }, [count]);

  useEffect(() => {
    if (reduced) return;
    const tick = window.setInterval(() => {
      if (fadingRef.current) return;
      const current = visibleRef.current;
      const pool = TOOL_LOGOS.map((t) => t.id).filter((id) => !current.includes(id));
      if (!current.length || !pool.length) return;
      const slot = Math.floor(Math.random() * current.length);
      const incoming = pool[Math.floor(Math.random() * pool.length)];
      fadingRef.current = true;
      setFading(slot);
      window.setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          if (slot < next.length) next[slot] = incoming;
          return next;
        });
        setFading(null);
        fadingRef.current = false;
      }, 400);
    }, 5000);
    return () => window.clearInterval(tick);
  }, [reduced, count]);

  const items = useMemo(
    () =>
      visible.map((id) => TOOL_LOGOS.find((t) => t.id === id)).filter((t): t is (typeof TOOL_LOGOS)[number] => !!t),
    [visible],
  );

  return (
    <div className="logos-slots" ref={wrapRef} aria-label="Technologies we work with">
      {items.map((tool, i) => (
        <span
          className={`logo-item logo-slot${fading === i ? " is-out" : ""}`}
          key={`${tool.id}-${i}`}
          aria-label={tool.label}
          title={tool.label}
        >
          <ToolMark name={tool.id} />
          <span className="logo-name">{tool.label}</span>
        </span>
      ))}
    </div>
  );
}

export function ToolLogoStrip() {
  const marquee = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <section className="logos-section">
      <div className="logos-label">Built with the technologies that fit the problem.</div>
      <div className="logos-track-wrapper logos-marquee">
        <div className="logos-track">
          {marquee.map((tool, i) => (
            <span className="logo-item" key={`${tool.id}-${i}`} aria-label={tool.label} title={tool.label}>
              <ToolMark name={tool.id} />
              <span className="logo-name">{tool.label}</span>
            </span>
          ))}
        </div>
      </div>
      <LogoSlotGrid />
    </section>
  );
}
