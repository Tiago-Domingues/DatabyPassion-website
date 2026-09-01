"use client";

import { useState } from "react";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";

export type ChainStage = {
  num: string;
  title: string;
  hint: string;
  heading: string;
  body: string;
  points: { title: string; text: string }[];
};

export type Workflow = {
  label: string;
  title: string;
  body: string;
  headwinds: string[];
  stats: { val: string; desc: string }[];
};

export function ServicePage({
  kicker,
  titleEm,
  titleRest,
  sub,
  cta,
  accentVar,
  stages,
  workflows,
  results,
}: {
  kicker: string;
  titleEm: string;
  titleRest: string;
  sub: string;
  cta: string;
  accentVar?: string;
  stages: ChainStage[];
  workflows: Workflow[];
  results: { val: string; desc: string }[];
}) {
  const [active, setActive] = useState(0);
  const stage = stages[active]!;
  const cols = stages.length;

  return (
    <div style={accentVar ? ({ ["--accent" as string]: accentVar } as React.CSSProperties) : undefined}>
      <section className="ind-hero">
        <div className="container">
          <Link href="/#platform" className="ind-hero-back">
            ← Back to services
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
            <div className="label">End-to-end</div>
            <h2 className="sh">
              How we work across the <span className="g">value chain</span>
            </h2>
            <p className="sb">Click any stage to see how DatabyPassion delivers that part of the work.</p>
          </div>
          <div className="chain-viz">
            <div
              className="chain-pipeline"
              style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
            >
              {stages.map((s, i) => (
                <button
                  type="button"
                  key={s.num}
                  className={`chain-node${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <div className="chain-node-num">{s.num}</div>
                  <h4>{s.title}</h4>
                  <p>{s.hint}</p>
                  <span className="gp-badge">DBP Enabled</span>
                </button>
              ))}
            </div>
          </div>
          <div className="chain-detail visible" style={{ marginTop: 40 }}>
            <div className="chain-detail-num">{stage.num}</div>
            <h3 className="chain-detail-cap">{stage.heading}</h3>
            <p className="chain-detail-desc">{stage.body}</p>
            <div className="chain-detail-grid">
              {stage.points.map((p) => (
                <div key={p.title} className="detail-accent">
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="workflows-section section-pad">
        <div className="container">
          <div className="workflows-header">
            <div className="label">How it lands</div>
            <h2 className="sh">
              Engagements in the <span className="g">studio</span>
            </h2>
            <p className="sb">Placeholder workflows — replace with named work when you are ready.</p>
          </div>
          <div className="workflows-grid">
            {workflows.map((w) => (
              <article className="wf-card" key={w.title}>
                <div className="wf-card-label">{w.label}</div>
                <h3>{w.title}</h3>
                <p className="wf-card-desc">{w.body}</p>
                <div className="wf-card-headwinds">
                  {w.headwinds.map((h) => (
                    <div className="headwind" key={h}>
                      {h}
                    </div>
                  ))}
                </div>
                <div className="wf-card-impact">
                  {w.stats.map((s) => (
                    <div className="impact-stat" key={s.desc}>
                      <div className="impact-val">{s.val}</div>
                      <div className="impact-label">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section section-pad">
        <div className="container">
          <div className="results-header">
            <div className="label">Proof points</div>
            <h2 className="sh">Impact you can measure</h2>
            <p className="sb">Placeholder metrics until you confirm real numbers.</p>
          </div>
          <div className="results-grid">
            {results.map((r) => (
              <div className="result-cell" key={r.desc}>
                <div className="result-num">{r.val}</div>
                <div className="result-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>See this practice on your stack</h2>
          <p className="sb">Start a project and we will map the first 90 days.</p>
          <div className="cta-buttons">
            <StartProject className="btn-primary">{cta} →</StartProject>
            <a href="mailto:tiagopaixaodomingues@gmail.com" className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
