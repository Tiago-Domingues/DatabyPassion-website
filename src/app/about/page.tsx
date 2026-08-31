import type { Metadata } from "next";
import { StartProject } from "@/components/StartProject";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="label">About DatabyPassion</div>
          <h1>
            Decisions are the last mile of <span className="em">enterprise data</span>
          </h1>
          <p className="about-hero-sub">
            We built a boutique that closes that gap. Analytics, engineering, ML and AI — the way
            your best operators already reason, at production quality.
          </p>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div>
            <div className="stat-val">8+</div>
            <div className="stat-label">Years in production data</div>
          </div>
          <div>
            <div className="stat-val">4</div>
            <div className="stat-label">Practices in one studio</div>
          </div>
          <div>
            <div className="stat-val">EU</div>
            <div className="stat-label">Founder-led from Lisbon</div>
          </div>
          <div>
            <div className="stat-val">1</div>
            <div className="stat-label">Accountable founder</div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-statement">
            <div className="label">Our mission</div>
            <h2>
              High-stakes decisions still run on intuition.{" "}
              <span className="g">We are changing that.</span>
            </h2>
            <p>
              DatabyPassion is a founder-led studio. Before this brand, the founder shipped data
              and AI inside large organisations — including Mercer (lead data engineering for
              wealth) and EY-Parthenon (AI engineering). Those names appear here, not as a client
              logo wall.
            </p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card-num">≠</div>
              <h3>Not a body shop</h3>
              <p>Senior delivery, not a bench of juniors billed as a platform.</p>
            </div>
            <div className="mission-card">
              <div className="mission-card-num">∴</div>
              <h3>Not a black box</h3>
              <p>Lineage and an audit trail on recommendations that matter.</p>
            </div>
            <div className="mission-card">
              <div className="mission-card-num">∞</div>
              <h3>Not a one-off deck</h3>
              <p>Pipelines and models that are still running after the kickoff glow fades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="principles-header">
            <div className="label">Principles</div>
            <h2>What we believe</h2>
            <p>These are the constraints we ship against.</p>
          </div>
          <div className="principles-grid">
            {[
              ["◇", "Reasoning-first", "We start from the decision, not from a tool catalogue."],
              ["⬡", "Operator-built", "Work is shaped by people who have sat in the same rooms."],
              ["◈", "Outcomes-obsessed", "Success is a changed operating number, not a dashboard count."],
              ["⊡", "Explainable by default", "If a committee cannot follow it, it is not done."],
              ["◎", "No training on your data", "We do not use client data to train our own models."],
              ["△", "Compound systems", "Each engagement should leave a sharper baseline."],
            ].map(([icon, h, p]) => (
              <div className="principle-card" key={h}>
                <div className="principle-icon">{icon}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-header">
            <div className="label">How we work</div>
            <h2>Not a twelve-month theatre</h2>
            <p>Discover, architect, ship, compound — in weeks where the problem allows it.</p>
          </div>
          <div className="approach-grid">
            {[
              ["01 Discover", "Map the decision landscape", "Highest-value decisions, data, rules, and the people who make the call today."],
              ["02 Architect", "Build the graph", "Entities, pipelines, and constraints so the system matches how the business actually works."],
              ["03 Deploy", "Go live", "Workflows and models in the tools you already open — with an audit trail."],
              ["04 Compound", "Leave it better", "Handover, monitoring, and a backlog that is honest about what is next."],
            ].map(([n, h, p]) => (
              <div className="approach-card" key={n}>
                <div className="approach-num">{n}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>Stop guessing. Start shipping.</h2>
          <p className="sb">A conversation with the founder — not a sales ladder.</p>
          <StartProject className="btn-primary">Start a project →</StartProject>
        </div>
      </section>
    </>
  );
}
