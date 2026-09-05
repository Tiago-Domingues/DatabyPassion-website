"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { PRACTICES, TYPICAL_ENGAGEMENTS, type PracticeId } from "@/content/practices";

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m3 16 9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 15v-4M12 15V8M16 15v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconWindow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 7h.01M9.5 7h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const PRACTICE_ICONS: Record<PracticeId, typeof IconLayers> = {
  engineering: IconLayers,
  analytics: IconChart,
  ai: IconSpark,
  products: IconWindow,
};

function PracticeCard({
  practice,
  flipped,
  onFlip,
}: {
  practice: (typeof PRACTICES)[number];
  flipped: boolean;
  onFlip: () => void;
}) {
  const labelId = useId();
  const backId = useId();
  const Icon = PRACTICE_ICONS[practice.id];
  const engagement = TYPICAL_ENGAGEMENTS[practice.id];

  return (
    <article
      className={`plat-flip accent-${practice.accent}${flipped ? " is-flipped" : ""}`}
      data-practice={practice.id}
    >
      <div className="plat-flip-inner">
        <div className="plat-flip-face plat-flip-front" aria-hidden={flipped}>
          <Link
            href={practice.href}
            className="plat-flip-goto"
            aria-label={`Open ${practice.title} practice`}
            onClick={(e) => e.stopPropagation()}
          >
            Open practice
            <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="plat-flip-hit"
            onClick={onFlip}
            aria-expanded={flipped}
            aria-controls={backId}
            id={labelId}
          >
            <span className="plat-icon" aria-hidden="true">
              <Icon />
            </span>
            <div className="plat-layer-num">
              {practice.number} — {practice.label}
            </div>
            <h4>{practice.title}</h4>
            <p>{practice.buyerProblem}</p>
            <div className="plat-layer-tags">
              {practice.tags.map((tag) => (
                <span className="plat-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="plat-flip-hint">Tap for a typical engagement</span>
          </button>
        </div>

        <div
          className="plat-flip-face plat-flip-back"
          id={backId}
          role="region"
          aria-labelledby={labelId}
          aria-hidden={!flipped}
        >
          <Link
            href={practice.href}
            className="plat-flip-goto"
            aria-label={`Open ${practice.title} practice`}
            tabIndex={flipped ? 0 : -1}
          >
            Open practice
            <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="plat-flip-hit plat-flip-hit-back"
            onClick={onFlip}
            tabIndex={flipped ? 0 : -1}
            aria-label={`Flip back ${practice.title}`}
          >
            <div className="plat-layer-num">{engagement.label}</div>
            <h4>{engagement.title}</h4>
            <p className="plat-flip-detail">{practice.preview}</p>
            <ul className="plat-flip-points">
              {engagement.delivers.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <small className="plat-flip-disclaimer">{engagement.disclaimer}</small>
            <span className="plat-flip-hint">Tap to flip back</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export function PracticeFlipCards() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFlippedId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="platform-layers">
      {PRACTICES.map((practice) => (
        <PracticeCard
          key={practice.id}
          practice={practice}
          flipped={flippedId === practice.id}
          onFlip={() =>
            setFlippedId((current) => (current === practice.id ? null : practice.id))
          }
        />
      ))}
    </div>
  );
}
