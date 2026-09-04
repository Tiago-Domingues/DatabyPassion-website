"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

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

const practices = [
  {
    id: "platforms",
    n: "01 — PLATFORMS",
    h: "Data platforms",
    p: "Warehouses, lakes and pipelines that stay trustworthy as the business grows.",
    tags: ["Warehouses", "Pipelines", "Quality"],
    href: "/engineering",
    accent: "amber" as const,
    Icon: IconLayers,
    detail:
      "Systems you can operate after we leave — mapped sources, a model the business can name, and pipelines that fail in the job, not in the meeting.",
    points: [
      "Connectors with contracts, not one-off scripts",
      "Raw → conformed → serving layers",
      "Quality checks and a maintainable handover",
    ],
  },
  {
    id: "analytics",
    n: "02 — ANALYTICS",
    h: "Analytics & decisions",
    p: "KPI packs, forecasts and operating views that turn data into decisions.",
    tags: ["KPI packs", "Forecasts", "Experiments"],
    href: "/analytics",
    accent: "green" as const,
    Icon: IconChart,
    detail:
      "One definition of the number, used in the room — operating packs and forecasts the team actually opens.",
    points: [
      "Decision inventory before dashboards",
      "Metric contracts with named owners",
      "Weekly cadence, not a dashboard graveyard",
    ],
  },
  {
    id: "ai",
    n: "03 — AUTOMATION",
    h: "AI & Automation",
    p: "Intelligent workflows and assistants that remove the grind from the work.",
    tags: ["Workflows", "Assistants", "Agents"],
    href: "/ai",
    accent: "cyan" as const,
    Icon: IconSpark,
    detail:
      "Intelligence in the workflow — grounded in your data and processes, with a human in the loop and a kill switch.",
    points: [
      "Pick a process that pays to automate",
      "Design the loop before the model",
      "Ship with traceability and a safe default",
    ],
  },
  {
    id: "products",
    n: "04 — PRODUCTS",
    h: "Digital Products",
    p: "Websites, web apps and internal tools shipped as working products.",
    tags: ["Web apps", "Internal tools", "Experiences"],
    href: "/products",
    accent: "blue" as const,
    Icon: IconWindow,
    detail:
      "Working software in production — a first slice that proves the product is real, then the next release with an honest backlog.",
    points: [
      "Start from the job, not a page count",
      "Auth, data and one workflow that ships",
      "Instrument, learn, extend",
    ],
  },
];

function PracticeCard({
  practice,
  flipped,
  onFlip,
}: {
  practice: (typeof practices)[number];
  flipped: boolean;
  onFlip: () => void;
}) {
  const labelId = useId();
  const backId = useId();

  return (
    <article
      className={`plat-flip reveal accent-${practice.accent}${flipped ? " is-flipped" : ""}`}
      data-practice={practice.id}
    >
      <div className="plat-flip-inner">
        <div className="plat-flip-face plat-flip-front" aria-hidden={flipped}>
          <Link
            href={practice.href}
            className="plat-flip-goto"
            aria-label={`Open ${practice.h} practice`}
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
              <practice.Icon />
            </span>
            <div className="plat-layer-num">{practice.n}</div>
            <h4>{practice.h}</h4>
            <p>{practice.p}</p>
            <div className="plat-layer-tags">
              {practice.tags.map((t) => (
                <span className="plat-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <span className="plat-flip-hint">Tap for details</span>
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
            aria-label={`Open ${practice.h} practice`}
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
            aria-label={`Flip back ${practice.h}`}
          >
            <div className="plat-layer-num">{practice.n}</div>
            <h4>{practice.h}</h4>
            <p className="plat-flip-detail">{practice.detail}</p>
            <ul className="plat-flip-points">
              {practice.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
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
      {practices.map((practice) => (
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
