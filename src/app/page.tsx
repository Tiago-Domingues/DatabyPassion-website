import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { TOOL_LOGOS, ToolMark } from "@/components/ToolLogos";

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
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.5 4.2-1.1 7-4.3 7-8.5V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconScale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v18M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 7 4 13h6L7 7ZM17 7l-3 6h6l-3-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconKey({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.5 11.5 20 3M17 3h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V6l8-3 8 3v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 5 13h6l-1 9 9-12h-6l0-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconPeople({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M14 14c2.5 0 5 1.5 5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 3" />
    </svg>
  );
}

const practices = [
  {
    n: "01 — PLATFORMS",
    h: "Data platforms",
    p: "Warehouses, lakes and pipelines that stay trustworthy as the business grows.",
    tags: ["Warehouses", "Pipelines", "Quality"],
    href: "/engineering",
    accent: "amber" as const,
    Icon: IconLayers,
  },
  {
    n: "02 — ANALYTICS",
    h: "Analytics & decisions",
    p: "KPI packs, forecasts and operating views that turn data into decisions.",
    tags: ["KPI packs", "Forecasts", "Experiments"],
    href: "/analytics",
    accent: "green" as const,
    Icon: IconChart,
  },
  {
    n: "03 — AUTOMATION",
    h: "AI & Automation",
    p: "Intelligent workflows and assistants that remove the grind from the work.",
    tags: ["Workflows", "Assistants", "Agents"],
    href: "/ai",
    accent: "cyan" as const,
    Icon: IconSpark,
  },
  {
    n: "04 — PRODUCTS",
    h: "Digital Products",
    p: "Websites, web apps and internal tools shipped as working products.",
    tags: ["Web apps", "Internal tools", "Experiences"],
    href: "/products",
    accent: "blue" as const,
    Icon: IconWindow,
  },
];

const whyUs = [
  {
    title: "Enterprise experience",
    body: "Years inside large consulting and complex programmes. We know how the hard work actually gets done.",
    Icon: IconBuilding,
  },
  {
    title: "Startup agility",
    body: "A lean studio. Short loops. You talk to the people who build, not a layer of account theatre.",
    Icon: IconBolt,
  },
  {
    title: "AI-native execution",
    body: "Models, workflows and product surfaces designed together — not bolted on after the deck.",
    Icon: IconSpark,
  },
  {
    title: "The right experts",
    body: "A small core, then specialists around the problem. No invented bench. No large-team claim.",
    Icon: IconPeople,
  },
];

const trustCards = [
  {
    title: "Confidential by default",
    body: "Client work stays off this site until it is cleared to publish.",
    Icon: IconShield,
  },
  {
    title: "No model training on your data",
    body: "We do not use client data to train public or studio models.",
    Icon: IconLock,
  },
  {
    title: "GDPR-minded",
    body: "Scoped access and EU-minded handling for European clients.",
    Icon: IconScale,
  },
  {
    title: "Least-privilege access",
    body: "Only the systems and people the engagement needs.",
    Icon: IconKey,
  },
];

export default function HomePage() {
  const logos = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];
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
              <Link
                className={`plat-layer-card reveal accent-${c.accent}`}
                href={c.href}
                key={c.n}
              >
                <span className="plat-icon" aria-hidden="true">
                  <c.Icon />
                </span>
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

      <section className="studio-section studio-frost section-pad" id="collective">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">The right collective</div>
            <h2 className="sh">
              Enterprise thinking. <span className="g">Startup execution.</span>
            </h2>
            <p className="sb">
              Senior judgement from large programmes, delivered at studio speed — with the right
              people around the problem. A lean founder-led core holds the relationship, the
              architecture and the standard. Trusted specialists join when the problem needs them.
              We do not pretend to be a large bench.
            </p>
          </div>
          <div className="why-grid collective-why-grid">
            {whyUs.map((item) => (
              <article className="studio-card reveal" key={item.title}>
                <span className="studio-icon" aria-hidden="true">
                  <item.Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="collective-split collective-core-grid">
            <article className="studio-card reveal">
              <span className="studio-icon" aria-hidden="true">
                <IconCore />
              </span>
              <div className="studio-kicker">The core</div>
              <h3>One studio lead you can email</h3>
              <p>
                Scope, quality and delivery stay in the same hands from the first call to the last
                release.
              </p>
            </article>
            <article className="studio-card reveal">
              <span className="studio-icon" aria-hidden="true">
                <IconPeople />
              </span>
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

      <section className="security-section section-pad" id="contact">
        <div className="container">
          <div className="security-inner reveal">
            <div className="label">Trust</div>
            <h2 className="sh">Your data is always confidential</h2>
            <p className="sb" style={{ margin: "0 auto" }}>
              We do not train models on client data. Engagements are scoped, access is
              least-privilege, and we work in a GDPR-minded way for EU clients.
            </p>
            <div className="trust-grid">
              {trustCards.map((card) => (
                <article className="trust-card" key={card.title}>
                  <span className="studio-icon" aria-hidden="true">
                    <card.Icon />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
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
