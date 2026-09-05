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
    <svg
      className="practice-motif-svg practice-motif-svg--wide"
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 24 H392" stroke="currentColor" strokeWidth="1.5" opacity="0.28" />
      <circle cx="18" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="142" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="266" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle cx="382" cy="24" r="3.2" fill="currentColor" opacity="0.45" />
      <circle className="motif-anim motif-dot-a" cx="18" cy="24" r="4" fill="currentColor" />
      <circle className="motif-anim motif-dot-b" cx="18" cy="24" r="4" fill="currentColor" />
      <circle className="motif-anim motif-dot-c" cx="18" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

function BarsMotif() {
  return (
    <svg
      className="practice-motif-svg practice-motif-svg--wide"
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 40 H392" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <rect className="motif-anim motif-bar motif-bar-1" x="16" y="26" width="28" height="14" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-2" x="64" y="16" width="28" height="24" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-3" x="112" y="10" width="28" height="30" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-4" x="160" y="18" width="28" height="22" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-5" x="208" y="12" width="28" height="28" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-6" x="256" y="20" width="28" height="20" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-7" x="304" y="14" width="28" height="26" rx="2" fill="currentColor" />
      <rect className="motif-anim motif-bar motif-bar-8" x="352" y="22" width="28" height="18" rx="2" fill="currentColor" />
    </svg>
  );
}

function RobotGlyph() {
  return (
    <svg className="practice-motif-icon" viewBox="0 0 36 48" fill="none" aria-hidden="true">
      <path className="motif-anim motif-robot-antenna" d="M18 6 V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle className="motif-anim motif-robot-antenna" cx="18" cy="4.4" r="1.6" fill="currentColor" />
      <g className="motif-anim motif-robot-head">
        <rect x="7" y="12" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="19.5" r="1.6" fill="currentColor" />
        <circle cx="22" cy="19.5" r="1.6" fill="currentColor" />
        <path d="M14 24 H22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <rect x="10" y="29" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 33 H4 M26 33 H32" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SparkGlyph() {
  return (
    <svg className="practice-motif-icon" viewBox="0 0 36 48" fill="none" aria-hidden="true">
      <g className="motif-anim motif-spark">
        <path
          d="M18 8 V14 M18 34 V40 M8 24 H14 M22 24 H28 M10.6 12.6 L14.4 16.4 M21.6 31.6 L25.4 35.4 M25.4 12.6 L21.6 16.4 M14.4 31.6 L10.6 35.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="24" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function SignalMotif() {
  return (
    <div className="practice-motif-row">
      <RobotGlyph />
      <svg
        className="practice-motif-svg practice-motif-svg--wide"
        viewBox="0 0 260 48"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="motif-anim motif-signal"
          d="M4 28 C24 28 28 10 46 10 C64 10 68 38 90 38 C112 38 116 16 140 16 C164 16 168 30 196 30 C218 30 224 18 252 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle className="motif-anim motif-signal-head" cx="252" cy="18" r="3.2" fill="currentColor" />
      </svg>
      <SparkGlyph />
      <svg className="practice-motif-icon" viewBox="0 0 28 48" fill="none" aria-hidden="true">
        <circle cx="14" cy="24" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
        <path
          className="motif-anim motif-tick"
          d="M10 24.2 L12.8 27 L18.6 20.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function WindowMotif() {
  return (
    <div className="practice-motif-row">
      <svg className="practice-motif-device" viewBox="0 0 120 48" fill="none" aria-hidden="true">
        <rect
          className="motif-anim motif-window"
          x="4"
          y="6"
          width="112"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path className="motif-anim motif-window-bar" d="M4 14 H116" stroke="currentColor" strokeWidth="1.2" />
        <circle className="motif-anim motif-window-dot motif-window-dot-1" cx="12" cy="10" r="1.4" fill="currentColor" />
        <circle className="motif-anim motif-window-dot motif-window-dot-2" cx="18" cy="10" r="1.4" fill="currentColor" />
        <rect className="motif-anim motif-window-pane motif-window-pane-1" x="10" y="18" width="48" height="18" rx="2" fill="currentColor" />
        <rect className="motif-anim motif-window-pane motif-window-pane-2" x="64" y="18" width="42" height="8" rx="2" fill="currentColor" />
        <rect className="motif-anim motif-window-pane motif-window-pane-3" x="64" y="28" width="42" height="8" rx="2" fill="currentColor" />
      </svg>
      <svg className="practice-motif-device practice-motif-device--phone" viewBox="0 0 28 48" fill="none" aria-hidden="true">
        <rect
          className="motif-anim motif-phone"
          x="4"
          y="4"
          width="20"
          height="40"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect className="motif-anim motif-phone-screen" x="7" y="10" width="14" height="24" rx="1.5" fill="currentColor" />
        <path className="motif-anim motif-phone-bar" d="M11 38 H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <svg className="practice-motif-device" viewBox="0 0 92 48" fill="none" aria-hidden="true">
        <circle className="motif-anim motif-agent motif-agent-a" cx="18" cy="24" r="7" stroke="currentColor" strokeWidth="1.3" />
        <circle className="motif-anim motif-agent motif-agent-a" cx="18" cy="21.4" r="2" fill="currentColor" />
        <path className="motif-anim motif-agent motif-agent-a" d="M13.2 28.4 C14.6 26.2 21.4 26.2 22.8 28.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path
          className="motif-anim motif-agent-link"
          d="M28 24 H64"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <circle className="motif-anim motif-agent motif-agent-b" cx="74" cy="24" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path
          className="motif-anim motif-agent motif-agent-b"
          d="M74 16 V20 M74 28 V32 M66 24 H70 M78 24 H82 M68.4 18.4 L71 21 M77 27 L79.6 29.6 M79.6 18.4 L77 21 M71 27 L68.4 29.6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
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
