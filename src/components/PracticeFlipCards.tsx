"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { PracticeMotif } from "@/components/PracticeMotif";
import { PRACTICES, PRACTICE_BACKS, type PracticeId } from "@/content/practices";

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

function PracticeCard({ practice }: { practice: (typeof PRACTICES)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const labelId = useId();
  const backId = useId();
  const Icon = PRACTICE_ICONS[practice.id];
  const back = PRACTICE_BACKS[practice.id];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFlipped(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <article
      className={`plat-flip accent-${practice.accent}${flipped ? " is-flipped" : ""}`}
      data-practice={practice.id}
    >
      <div className="plat-flip-face plat-flip-front card-headlight" hidden={flipped} aria-hidden={flipped}>
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
          onClick={() => setFlipped(true)}
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
          <PracticeMotif kind={practice.id} paused={flipped} />
          <div className="plat-layer-tags">
            {practice.tags.map((tag) => (
              <span className="plat-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className="plat-flip-hint">Tap for the practice</span>
        </button>
      </div>

      <div
        className="plat-flip-face plat-flip-back card-headlight"
        id={backId}
        role="region"
        hidden={!flipped}
        aria-labelledby={labelId}
        aria-hidden={!flipped}
      >
        <Link
          href={practice.href}
          className="plat-flip-goto"
          aria-label={`Open ${practice.title} practice`}
        >
          Open practice
          <span aria-hidden="true">↗</span>
        </Link>
        <button
          type="button"
          className="plat-flip-hit plat-flip-hit-back"
          onClick={() => setFlipped(false)}
          aria-label={`Flip back ${practice.title}`}
        >
          <div className="plat-back-kicker">{back.kicker}</div>
          <h4 className="plat-back-headline">{back.headline}</h4>
          <p className="plat-back-sub">{back.subhead}</p>
          <p className="plat-back-body">{back.body}</p>
          <ul className="plat-back-caps">
            {back.capabilities.map((capability) => (
              <li className="plat-back-cap" key={capability.label}>
                <span className="plat-back-cap-label">{capability.label}</span>
                <span className="plat-back-cap-items">
                  {capability.items.map((item) => (
                    <span className="plat-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <span className="plat-flip-hint">Tap to flip back</span>
        </button>
      </div>
    </article>
  );
}

export function PracticeFlipCards() {
  return (
    <div className="platform-layers">
      {PRACTICES.map((practice) => (
        <PracticeCard key={practice.id} practice={practice} />
      ))}
    </div>
  );
}
