"use client";

import { useEffect, useState } from "react";
import type { PracticeId } from "@/content/practices";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return reduced;
}

function PipelineMotif() {
  return (
    <svg className="practice-motif-svg" viewBox="0 0 180 48" fill="none" aria-hidden="true">
      <path d="M8 24 H172" stroke="currentColor" strokeWidth="1.5" opacity="0.28" />
      <circle cx="18" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="68" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="118" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="162" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle className="motif-anim motif-dot-a" cx="18" cy="24" r="4" fill="currentColor" />
      <circle className="motif-anim motif-dot-b" cx="18" cy="24" r="4" fill="currentColor" />
      <circle className="motif-anim motif-dot-c" cx="18" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

function BarsMotif() {
  return (
    <svg className="practice-motif-svg" viewBox="0 0 180 48" fill="none" aria-hidden="true">
      <path d="M16 40 H164" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <rect className="motif-anim motif-bar motif-bar-1" x="28" y="28" width="14" height="12" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-2" x="54" y="18" width="14" height="22" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-3" x="80" y="12" width="14" height="28" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-4" x="106" y="20" width="14" height="20" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-5" x="132" y="16" width="14" height="24" rx="2" fill="currentColor" />
    </svg>
  );
}

function SignalMotif() {
  return (
    <svg className="practice-motif-svg" viewBox="0 0 180 48" fill="none" aria-hidden="true">
      <path
        className="motif-anim motif-signal"
        d="M10 28 C28 28 32 10 46 10 C60 10 64 38 80 38 C96 38 100 16 116 16 C132 16 136 30 152 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle className="motif-anim motif-signal-head" cx="152" cy="30" r="3.4" fill="currentColor" />
      <circle cx="164" cy="16" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <path
        className="motif-anim motif-tick"
        d="M160 16.5 L163.2 19.6 L169 13.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WindowMotif() {
  return (
    <svg className="practice-motif-svg" viewBox="0 0 180 48" fill="none" aria-hidden="true">
      <rect
        className="motif-anim motif-window"
        x="48"
        y="6"
        width="84"
        height="36"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path className="motif-anim motif-window-bar" d="M48 14 H132" stroke="currentColor" strokeWidth="1.2" />
      <circle className="motif-anim motif-window-dot motif-window-dot-1" cx="56" cy="10" r="1.4" fill="currentColor" />
      <circle className="motif-anim motif-window-dot motif-window-dot-2" cx="62" cy="10" r="1.4" fill="currentColor" />
      <rect className="motif-anim motif-window-pane motif-window-pane-1" x="54" y="18" width="34" height="18" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-window-pane motif-window-pane-2" x="92" y="18" width="32" height="8" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-window-pane motif-window-pane-3" x="92" y="28" width="32" height="8" rx="2" fill="currentColor" />
    </svg>
  );
}

const MOTIFS = {
  engineering: PipelineMotif,
  analytics: BarsMotif,
  ai: SignalMotif,
  products: WindowMotif,
} as const;

export function PracticeMotif({ kind, paused }: { kind: PracticeId; paused: boolean }) {
  const reduced = usePrefersReducedMotion();
  const Motif = MOTIFS[kind];

  return (
    <div
      className={`practice-motif practice-motif--${kind}${paused ? " is-paused" : ""}${reduced ? " is-still" : ""}`}
      aria-hidden="true"
    >
      <Motif />
    </div>
  );
}
