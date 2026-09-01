import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { industrySvgs } from "@/lib/industry-svgs";

const LOGOS = [
  "Databricks",
  "Azure",
  "AWS",
  "Fabric",
  "Cursor",
  "GitHub",
  "Vercel",
  "OpenAI",
];

export default function HomePage() {
  const logos = [...LOGOS, ...LOGOS];
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-canvas">
          <canvas id="heroCanvas" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">The data and AI studio</div>
          <h1>
            Senior data expertise. <span className="em">Built for business.</span>
          </h1>
          <p className="hero-sub">
            We help SMEs design, build and scale modern data and AI capabilities — combining
            strategic thinking with hands-on technical delivery.
          </p>
          <div className="hero-ctas">
            <StartProject className="btn-primary">Start a project →</StartProject>
            <Link href="/#platform" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="logos-section">
        <div className="logos-label">Tools we ship with</div>
        <div className="logos-track-wrapper">
          <div className="logos-track">
            {logos.map((name, i) => (
              <span className="logo-item" key={`${name}-${i}`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section section-pad" id="platform">
        <div className="container">
          <div className="platform-header reveal">
            <div className="label">The delivery stack</div>
            <h2 className="sh">
              One studio. <span className="g">Four practices.</span>
            </h2>
            <p className="sb">
              From raw data to models in production. Four layers working as one. Every
              recommendation explainable, every pipeline owned.
            </p>
          </div>
          <div className="reasoning-viz">
            <div className="reasoning-svg-wrap">
              <canvas id="reasoningCanvas" />
            </div>
            <div className="reasoning-phase" id="reasoningPhase" />
          </div>
          <div className="platform-layers">
            {[
              {
                n: "01 — ANALYTICS",
                h: "Analytics",
                p: "KPIs, reporting, and decision packs SMEs can run every week, not a dashboard graveyard.",
                tags: ["KPI", "BI", "Experiment"],
              },
              {
                n: "02 — ENGINEERING",
                h: "Data Engineering",
                p: "Pipelines and cloud data platforms you can trust, maintain, and afford.",
                tags: ["ETL", "Cloud", "Quality"],
              },
              {
                n: "03 — ML",
                h: "ML & Statistics",
                p: "Forecasting, scoring, and rigorous measurement in the workflow, with monitoring after go-live.",
                tags: ["Forecast", "Score", "Monitor"],
              },
              {
                n: "04 — AI",
                h: "AI Products",
                p: "Generative AI, agents, and small apps/sites grounded in your data and processes.",
                tags: ["LLM", "RAG", "Agents"],
              },
            ].map((c) => (
              <div className="plat-layer-card reveal" key={c.n}>
                <div className="plat-layer-num">{c.n}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
                <div className="plat-layer-tags">
                  {c.tags.map((t) => (
                    <span className="plat-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="counters-section section-pad" id="results">
        <div className="container">
          <div className="counters-header reveal">
            <div className="label">Measurable impact</div>
            <h2 className="sh">
              Delivery that <span className="g">compounds</span>
            </h2>
            <p className="sb">
              Placeholder figures — we will replace these with numbers you stand behind.
            </p>
          </div>
          <div className="counters-grid">
            {[
              { t: "8", suf: "+", label: "Years shipping data systems" },
              { t: "4", suf: "", label: "Practices in one studio" },
              { t: "3", suf: "", label: "Clouds in production use" },
              { t: "1", suf: "", label: "Founder accountable to you" },
            ].map((c) => (
              <div className="counter-cell" key={c.label}>
                <div className="counter-val" data-target={c.t} data-suffix={c.suf}>
                  0
                </div>
                <div className="counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section section-pad" id="industries">
        <div className="container">
          <div className="industries-header reveal">
            <div className="label">In production</div>
            <h2 className="sh">
              Practices deployed in the <span className="g">market</span>
            </h2>
            <p className="sb">
              Purpose-built delivery across analytics, engineering, and applied AI.
            </p>
          </div>
          <div className="industries-grid">
            <article className="industry-card ind-insurance reveal">
              <div
                className="industry-card-visual"
                dangerouslySetInnerHTML={{ __html: industrySvgs.analytics }}
              />
              <div className="industry-card-content">
                <h3>Analytics</h3>
                <p className="industry-card-sub">
                  Decision-grade metrics, executive reporting, and experiment design for operators.
                </p>
                <div className="industry-card-metric">
                  <span className="metric-val">KPI</span>
                  <span className="metric-desc">from source to board pack</span>
                </div>
              </div>
              <Link href="/analytics" className="industry-card-link">
                Explore Analytics <span className="arrow">→</span>
              </Link>
            </article>
            <article className="industry-card ind-industrial reveal">
              <div
                className="industry-card-visual"
                dangerouslySetInnerHTML={{ __html: industrySvgs.engineering }}
              />
              <div className="industry-card-content">
                <h3>Data Engineering</h3>
                <p className="industry-card-sub">
                  Pipelines, lakehouses, and operational data platforms that stay maintainable.
                </p>
                <div className="industry-card-metric">
                  <span className="metric-val">ETL</span>
                  <span className="metric-desc">owned end to end</span>
                </div>
              </div>
              <Link href="/engineering" className="industry-card-link">
                Explore Engineering <span className="arrow">→</span>
              </Link>
            </article>
            <article className="industry-card ind-cpg reveal">
              <div
                className="industry-card-visual"
                dangerouslySetInnerHTML={{ __html: industrySvgs.ai }}
              />
              <div className="industry-card-content">
                <h3>ML &amp; AI</h3>
                <p className="industry-card-sub">
                  Models and applied AI in the workflow — governed, monitored, not a slide deck.
                </p>
                <div className="industry-card-metric">
                  <span className="metric-val">AI</span>
                  <span className="metric-desc">grounded in your data</span>
                </div>
              </div>
              <Link href="/ai" className="industry-card-link">
                Explore AI <span className="arrow">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="security-section section-pad" id="contact">
        <div className="container">
          <div className="security-inner reveal">
            <div className="label">Trust</div>
            <h2 className="sh">Your data is always confidential</h2>
            <p className="sb" style={{ margin: "0 auto" }}>
              We do not train models on client data. Engagements are scoped, access is
              least-privilege, and we work in a GDPR-minded way for EU clients.
            </p>
            <div className="security-badges">
              <span className="sec-badge">Confidential by default</span>
              <span className="sec-badge">No model training on your data</span>
              <span className="sec-badge">GDPR-minded</span>
              <span className="sec-badge">Least-privilege access</span>
            </div>
            <Link href="/security" className="trust-link">
              Visit our Trust page →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>Stop guessing. Start shipping.</h2>
          <p className="sb">
            See how a senior boutique delivers analytics, engineering, ML and AI — measurable
            outcomes, not another unused dashboard.
          </p>
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
