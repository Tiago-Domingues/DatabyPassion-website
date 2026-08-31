import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { industrySvgs } from "@/lib/industry-svgs";

const LOGOS = [
  "Analytics",
  "Data Engineering",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Platforms",
  "Decision Support",
  "Pipelines",
  "Strategy",
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
            Enterprise data has a new <span className="em">operating system</span>
          </h1>
          <p className="hero-sub">
            Analytics, data engineering, ML, and AI — delivered as projects by a senior boutique.
            Explainable, governed, and built to last.
          </p>
          <div className="hero-ctas">
            <StartProject className="btn-primary">Start a project →</StartProject>
            <Link href="/#platform" className="btn-ghost">
              Explore services
            </Link>
          </div>
          <div className="hero-metrics">
            <div>
              <span className="hero-metric-val">8+</span>
              <span className="hero-metric-label">Years in production data</span>
            </div>
            <div className="hero-metric-divider" />
            <div>
              <span className="hero-metric-val">4</span>
              <span className="hero-metric-label">Practice areas</span>
            </div>
            <div className="hero-metric-divider" />
            <div>
              <span className="hero-metric-val">EU</span>
              <span className="hero-metric-label">Founder-led from Lisbon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="logos-section">
        <div className="logos-label">Built for operators who ship</div>
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

      <section className="problem-section section-pad" id="problem">
        <div className="container problem-grid">
          <div className="reveal">
            <div className="label">The category shift</div>
            <h2 className="sh">
              Dashboards used to mean reporting. Now they mean <span className="g">decisions</span>.
            </h2>
            <p className="sb">
              Enterprises don&apos;t lack tools, copilots, or models. They lack someone who will own
              the pipeline, the metric, and the production system. Generic AI predicts the next
              token. Your business needs the next move.
            </p>
          </div>
          <div className="problem-comparison reveal">
            <div className="problem-header">
              <div className="problem-header-cell llm">Generic tools / copilots</div>
              <div className="problem-header-cell gp">DatabyPassion</div>
            </div>
            {[
              ["Predict text, not decisions", "Reasons through the business problem"],
              ["Black-box outputs", "Full lineage, every step"],
              ["Hallucinate confidently", "Grounded in your data and constraints"],
              ["Stateless, no memory", "Pipelines that compound"],
              ["No constraint enforcement", "Business rules enforced, always"],
            ].map(([a, b]) => (
              <div className="problem-row" key={a}>
                <div className="problem-cell llm">{a}</div>
                <div className="problem-cell gp">{b}</div>
              </div>
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
                h: "Decision Analytics",
                p: "Metrics, experiments, and executive views that actually change what people do on Monday.",
                tags: ["KPI", "BI", "Experiment"],
              },
              {
                n: "02 — ENGINEERING",
                h: "Data Engineering",
                p: "Pipelines, lakehouses, and quality you can trust. We maintain the path from source to model.",
                tags: ["ETL", "Cloud", "Quality"],
              },
              {
                n: "03 — ML",
                h: "Machine Learning",
                p: "Models that sit in the workflow — scoring, forecasting, ranking — with monitoring after go-live.",
                tags: ["Forecast", "Score", "Monitor"],
              },
              {
                n: "04 — AI",
                h: "Applied AI",
                p: "LLM and neuro-symbolic systems grounded in your documents, rules, and proprietary context.",
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

      <section className="testimonial-section section-pad">
        <div className="container">
          <div className="testimonial-inner">
            <div className="testimonial-slide active">
              <p className="testimonial-quote">
                “Placeholder — a client quote will replace this. It is not about more data, it is
                about accurate decisions.”
              </p>
              <p className="testimonial-attr">
                <strong>Name forthcoming</strong> · Role, Organisation
              </p>
            </div>
            <div className="testimonial-slide">
              <p className="testimonial-quote">
                “Placeholder — DatabyPassion brings a level of analytical rigor that transforms how
                we evaluate risk and opportunity.”
              </p>
              <p className="testimonial-attr">
                <strong>Name forthcoming</strong> · Role, Organisation
              </p>
            </div>
            <div className="testimonial-slide">
              <p className="testimonial-quote">
                “Placeholder — the speed and precision of delivery has changed our
                decision-making process.”
              </p>
              <p className="testimonial-attr">
                <strong>Name forthcoming</strong> · Role, Organisation
              </p>
            </div>
          </div>
          <div className="testimonial-dots">
            <button type="button" className="testimonial-dot active" data-dot="0" aria-label="Quote 1" />
            <button type="button" className="testimonial-dot" data-dot="1" aria-label="Quote 2" />
            <button type="button" className="testimonial-dot" data-dot="2" aria-label="Quote 3" />
          </div>
        </div>
      </section>

      <section className="ecosystem-section section-pad" id="ecosystem">
        <div className="container">
          <div className="ecosystem-header reveal">
            <div className="label">Delivery partners</div>
            <h2 className="sh">
              Built with the <span className="g">stack you already run</span>
            </h2>
            <p className="sb">
              Placeholder partner cards — names to be confirmed. Not claimed alliances.
            </p>
          </div>
          <div className="ecosystem-grid">
            {[
              { name: "Partner 01", type: "Cloud", desc: "Placeholder — production cloud you already use." },
              { name: "Partner 02", type: "Lakehouse", desc: "Placeholder — data platform of record." },
              { name: "Partner 03", type: "MLOps", desc: "Placeholder — models from notebook to service." },
              { name: "Partner 04", type: "Governance", desc: "Placeholder — access, lineage, and audit." },
            ].map((c) => (
              <div className="eco-card reveal" key={c.name}>
                <div className="eco-card-logo">
                  <span className="wordmark" style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                    {c.name}
                  </span>
                </div>
                <div className="eco-card-name">{c.name}</div>
                <div className="eco-card-type">{c.type}</div>
                <p className="eco-card-desc">{c.desc}</p>
              </div>
            ))}
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
