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
            One core. The right <span className="em">collective</span> around it
          </h1>
          <p className="about-hero-sub">
            DatabyPassion is a founder-led technology studio. A lean core holds the relationship
            and the standard. Trusted specialists join when the problem needs them.
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
            <div className="stat-label">Solution areas in one studio</div>
          </div>
          <div>
            <div className="stat-val">EU</div>
            <div className="stat-label">Founder-led from Lisbon</div>
          </div>
          <div>
            <div className="stat-val">1</div>
            <div className="stat-label">Founder you can email</div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-statement">
            <div className="label">The founder</div>
            <h2>
              Enterprise experience.{" "}
              <span className="g">Studio speed.</span>
            </h2>
            <p>
              Before this brand, the founder shipped data and AI inside large organisations —
              including Mercer (lead data engineering for wealth) and EY-Parthenon (AI
              engineering). Those names appear here, not as a client logo wall. You can email the
              founder. There is no sales ladder.
            </p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card-num">01</div>
              <h3>The core</h3>
              <p>One studio lead. Scope, quality and delivery stay in the same hands.</p>
            </div>
            <div className="mission-card">
              <div className="mission-card-num">02</div>
              <h3>The collective</h3>
              <p>Specialists pulled in for the work — then released. No invented bench.</p>
            </div>
            <div className="mission-card">
              <div className="mission-card-num">03</div>
              <h3>The standard</h3>
              <p>Working systems after the kickoff glow fades. Not a one-off deck.</p>
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
              ["◇", "Built around the problem", "We start from the job, not from a tool catalogue."],
              ["⬡", "Founder-led", "You talk to the person accountable for the work."],
              ["◈", "Collective, not a bench", "The right experts join. We do not claim a large team."],
              ["⊡", "AI-native execution", "Models, workflows and product surfaces designed together."],
              ["◎", "No training on your data", "We do not use client data to train our own models."],
              ["△", "Ship, then evolve", "The first release is a start. We keep tightening it."],
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
            <h2>Understand → Shape → Build → Evolve</h2>
            <p>A short loop from the real problem to a working product.</p>
          </div>
          <div className="approach-grid">
            {[
              ["01 Understand", "The real problem", "The business problem, the data, and the people who will use the thing."],
              ["02 Shape", "A sharp scope", "What ships first, what waits, and what success looks like."],
              ["03 Build", "Working software", "In the stack you already run. Visible progress, not a black box."],
              ["04 Evolve", "Keep tightening", "Measure, extend, refine. Handover that is honest about what is next."],
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
          <div className="cta-buttons">
            <StartProject className="btn-primary">Start a project →</StartProject>
            <a href="mailto:tiagopaixaodomingues@gmail.com" className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
