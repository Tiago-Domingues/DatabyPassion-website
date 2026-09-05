"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { RepresentativeEngagement } from "@/components/sections/RepresentativeEngagement";
import type { TypicalEngagement } from "@/content/practices";
import { CONTACT_MAILTO } from "@/lib/site";

export type ChainStage = {
  num: string;
  title: string;
  hint: string;
  heading: string;
  body: string;
  points: { title: string; text: string }[];
};

export type Deliverable = {
  title: string;
  body: string;
};

export function ServicePage({
  kicker,
  titleEm,
  titleRest,
  sub,
  cta,
  accentVar,
  stages,
  typicalEngagements,
  deliverables,
}: {
  kicker: string;
  titleEm: string;
  titleRest: string;
  sub: string;
  cta: string;
  accentVar?: string;
  stages: ChainStage[];
  typicalEngagements: TypicalEngagement[];
  deliverables: Deliverable[];
}) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId().replaceAll(":", "");
  const stage = stages[active]!;
  const cols = stages.length;

  function selectStage(index: number) {
    const next = (index + stages.length) % stages.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <div
      style={
        accentVar
          ? ({ ["--accent" as string]: accentVar } as React.CSSProperties)
          : undefined
      }
    >
      <section className="ind-hero">
        <div className="container">
          <Link href="/#platform" className="ind-hero-back">
            ← Back to The Studio
          </Link>
          <div className="label">{kicker}</div>
          <h1>
            {titleRest} <span className="em">{titleEm}</span>
          </h1>
          <p className="ind-hero-sub">{sub}</p>
          <StartProject className="btn-primary">{cta} →</StartProject>
        </div>
      </section>

      <section className="chain-section section-pad">
        <div className="container">
          <div className="chain-header">
            <div className="label">Understand → Shape → Build → Evolve</div>
            <h2 className="sh">
              How the practice moves from <span className="g">problem to product</span>
            </h2>
            <p className="sb">
              Select a stage to inspect the decisions and working outputs inside it.
            </p>
          </div>
          <div className="chain-viz">
            <div
              className="chain-pipeline"
              role="tablist"
              aria-label={`${kicker} delivery stages`}
              style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  selectStage(active + 1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  selectStage(active - 1);
                }
                if (event.key === "Home") {
                  event.preventDefault();
                  selectStage(0);
                }
                if (event.key === "End") {
                  event.preventDefault();
                  selectStage(stages.length - 1);
                }
              }}
            >
              {stages.map((item, index) => (
                <button
                  ref={(node) => {
                    tabsRef.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${idPrefix}-stage-${index}`}
                  aria-selected={index === active}
                  aria-controls={`${idPrefix}-panel`}
                  tabIndex={index === active ? 0 : -1}
                  key={item.num}
                  className={`chain-node${index === active ? " active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  <div className="chain-node-num">{item.num}</div>
                  <h3>{item.title}</h3>
                  <p>{item.hint}</p>
                  <span className="chain-node-state" aria-hidden="true">
                    {index === active ? "Selected" : "View stage"}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <section
            className="chain-detail visible"
            id={`${idPrefix}-panel`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-stage-${active}`}
            tabIndex={0}
            style={{ marginTop: 40 }}
          >
            <div className="chain-detail-num">{stage.num}</div>
            <h3 className="chain-detail-cap">{stage.heading}</h3>
            <p className="chain-detail-desc">{stage.body}</p>
            <div className="chain-detail-grid">
              {stage.points.map((point) => (
                <div key={point.title} className="detail-accent">
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="engagements-section section-pad">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">A representative pattern</span>
              <h2 className="sh">
                What a focused <span className="g">engagement can look like</span>
              </h2>
            </div>
            <p className="sb">
              This is an illustrative delivery pattern. It describes the shape of the work without
              implying a client, metric or measured case study.
            </p>
          </div>
          <div className="engagements-grid">
            {typicalEngagements.map((engagement) => (
              <RepresentativeEngagement engagement={engagement} key={engagement.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="deliverables-section section-pad">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">Concrete deliverables</span>
              <h2 className="sh">Useful artefacts, not empty activity</h2>
            </div>
            <p className="sb">
              The exact scope changes with the system and environment. These are the outputs the
              practice is designed to leave behind.
            </p>
          </div>
          <div className="deliverables-grid">
            {deliverables.map((deliverable, index) => (
              <article className="deliverable-card" key={deliverable.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>Put this practice against a real business problem</h2>
          <p className="sb">
            Create a brief you can copy or open as an email draft. Nothing is submitted from this
            website.
          </p>
          <div className="cta-buttons">
            <StartProject className="btn-primary">{cta} →</StartProject>
            <a href={CONTACT_MAILTO} className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
