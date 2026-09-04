import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { TOOL_LOGOS, ToolMark } from "@/components/ToolLogos";

const practices = [
  {
    n: "01 — PLATFORMS",
    h: "Data platforms",
    p: "Warehouses, lakes and pipelines that stay trustworthy as the business grows.",
    tags: ["Warehouses", "Pipelines", "Quality"],
    href: "/engineering",
  },
  {
    n: "02 — ANALYTICS",
    h: "Analytics & decisions",
    p: "KPI packs, forecasts and operating views that turn data into decisions.",
    tags: ["KPI packs", "Forecasts", "Experiments"],
    href: "/analytics",
  },
  {
    n: "03 — AUTOMATION",
    h: "AI & Automation",
    p: "Intelligent workflows and assistants that remove the grind from the work.",
    tags: ["Workflows", "Assistants", "Agents"],
    href: "/ai",
  },
  {
    n: "04 — PRODUCTS",
    h: "Digital Products",
    p: "Websites, web apps and internal tools shipped as working products.",
    tags: ["Web apps", "Internal tools", "Experiences"],
    href: "/products",
  },
];

const weBuild = [
  {
    title: "Intelligent data systems",
    body: "Platforms that collect, clean and serve the numbers the business actually runs on.",
  },
  {
    title: "AI-powered workflows",
    body: "Automation that takes a process from inbox or spreadsheet to a reliable loop.",
  },
  {
    title: "AI products",
    body: "Assistants and decision tools people use every day — not a demo that dies in a slide.",
  },
  {
    title: "Internal tools",
    body: "Ops consoles and working software for the team, instead of another shared workbook.",
  },
  {
    title: "Web applications",
    body: "Product surfaces with real auth, data and workflows — not a brochure that pretends.",
  },
  {
    title: "Digital experiences",
    body: "Sites and journeys that look like the brand and behave like a product.",
  },
];

const whyUs = [
  {
    title: "Enterprise experience",
    body: "Years inside large consulting and complex programmes. We know how the hard work actually gets done.",
  },
  {
    title: "Startup agility",
    body: "A lean studio. Short loops. You talk to the people who build, not a layer of account theatre.",
  },
  {
    title: "AI-native execution",
    body: "Models, workflows and product surfaces designed together — not bolted on after the deck.",
  },
  {
    title: "The right experts",
    body: "A small core, then specialists around the problem. No invented bench. No large-team claim.",
  },
];

const process = [
  {
    n: "01 Understand",
    h: "The real problem",
    p: "The business problem, the data, and the people who will use the thing.",
  },
  {
    n: "02 Shape",
    h: "A sharp scope",
    p: "What ships first, what waits, and what success looks like — before a line of code.",
  },
  {
    n: "03 Build",
    h: "Working software",
    p: "In the stack you already run. Visible progress, not a black box.",
  },
  {
    n: "04 Evolve",
    h: "Keep tightening",
    p: "Measure, extend, refine. The first release is a start, not a finish line.",
  },
];

export default function HomePage() {
  const logos = [...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">Founder-led technology studio</div>
          <h1>
            Enterprise expertise. <span className="em">Built at startup speed.</span>
          </h1>
          <p className="hero-sub">
            DatabyPassion is a founder-led technology studio helping companies turn ideas and
            complex business problems into data systems, intelligent workflows and digital
            products.
          </p>
        </div>
      </section>

      <section className="logos-section">
        <div className="logos-label">In production with</div>
        <div className="logos-track-wrapper">
          <div className="logos-track">
            {logos.map((tool, i) => (
              <span className="logo-item" key={`${tool.id}-${i}`} aria-label={tool.label} title={tool.label}>
                <ToolMark name={tool.id} />
                <span className="logo-name">{tool.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section section-pad" id="platform">
        <div className="container">
          <div className="platform-header reveal">
            <div className="label">The studio</div>
            <h2 className="sh">
              What we <span className="g">help you build</span>
            </h2>
            <p className="sb">
              Data platforms, analytics, AI and digital products — one studio, scoped to the
              problem in front of you.
            </p>
          </div>
          <div className="reasoning-viz">
            <div className="reasoning-svg-wrap">
              <canvas id="reasoningCanvas" />
            </div>
            <div className="reasoning-phase" id="reasoningPhase" />
          </div>
          <div className="platform-layers">
            {practices.map((c) => (
              <Link className="plat-layer-card reveal" href={c.href} key={c.n}>
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
                <span className="plat-view">View practice</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section section-pad" id="build">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">Outcomes</div>
            <h2 className="sh">
              What we <span className="g">build</span>
            </h2>
            <p className="sb">Tangible systems and products — not a menu of disciplines.</p>
          </div>
          <div className="build-grid">
            {weBuild.map((item) => (
              <article className="studio-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section section-pad" id="why">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">Why us</div>
            <h2 className="sh">
              Enterprise thinking. <span className="g">Startup execution.</span>
            </h2>
            <p className="sb">
              Senior judgement from large programmes, delivered at studio speed — with the right
              people around the problem.
            </p>
          </div>
          <div className="why-grid">
            {whyUs.map((item) => (
              <article className="studio-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section section-pad" id="collective">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">The collective</div>
            <h2 className="sh">
              One core. <span className="g">The right collective around it.</span>
            </h2>
            <p className="sb">
              A lean founder-led core holds the relationship, the architecture and the standard.
              Trusted specialists join when the problem needs them. We do not pretend to be a
              large bench.
            </p>
          </div>
          <div className="collective-split">
            <article className="studio-card reveal">
              <div className="studio-kicker">The core</div>
              <h3>One studio lead you can email</h3>
              <p>
                Scope, quality and delivery stay in the same hands from the first call to the last
                release.
              </p>
            </article>
            <article className="studio-card reveal">
              <div className="studio-kicker">The collective</div>
              <h3>Specialists around the problem</h3>
              <p>
                Designers, engineers and domain specialists pulled in for the work — then released.
                Right-sized for the problem, not a standing army.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="studio-section section-pad" id="process">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">How we work</div>
            <h2 className="sh">
              Understand → Shape → <span className="g">Build → Evolve</span>
            </h2>
            <p className="sb">
              A short loop from the real problem to a working product — then we keep tightening it.
            </p>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="studio-card reveal" key={item.n}>
                <div className="studio-kicker">{item.n}</div>
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </article>
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
              { t: "4", suf: "", label: "Solution areas in one studio" },
              { t: "3", suf: "", label: "Engagement shapes — project, retain, embed" },
              { t: "1", suf: "", label: "Founder you can email" },
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
            Tell us the problem — a data system that will not hold, a workflow still stuck in
            inboxes, or a product that needs to exist. We reply with a sharp next step.
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
