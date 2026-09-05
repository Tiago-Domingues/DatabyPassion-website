import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { TOOL_LOGOS, ToolMark } from "@/components/ToolLogos";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { PortfolioPath } from "@/components/sections/PortfolioPath";
import { RoleArchetypes } from "@/components/sections/RoleArchetypes";
import { TrustControlCard } from "@/components/sections/TrustControlCard";
import { COLLECTIVE_DIFFERENTIATORS } from "@/content/collective";
import { HOMEPAGE_NARRATIVE, SITE_IDENTITY } from "@/content/identity";
import { PRACTICES, type PracticeId } from "@/content/practices";
import { HOME_TRUST_CONTROLS } from "@/content/trust";
import { CONTACT_MAILTO } from "@/lib/site";

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

const PRACTICE_ICONS: Record<PracticeId, typeof IconLayers> = {
  engineering: IconLayers,
  analytics: IconChart,
  ai: IconSpark,
  products: IconWindow,
};

export default function HomePage() {
  const logos = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">{SITE_IDENTITY.category}</div>
          <h1>
            Enterprise expertise. <span className="em">Built at startup speed.</span>
          </h1>
          <p className="hero-sub">{SITE_IDENTITY.description}</p>
        </div>
      </section>

      <section className="logos-section">
        <div className="logos-label">Technologies we work with</div>
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
              Start with the problem. <span className="g">Build what earns the next step.</span>
            </h2>
            <p className="sb">{HOMEPAGE_NARRATIVE.studio}</p>
          </div>
          <div className="studio-visuals">
            <div className="reasoning-viz">
              <div className="reasoning-svg-wrap">
                <canvas id="reasoningCanvas" aria-label="Animated reasoning engine visual" />
              </div>
              <div className="reasoning-phase" id="reasoningPhase" aria-live="polite" />
            </div>
            <PortfolioPath compact />
          </div>
          <div className="platform-layers">
            {PRACTICES.map((practice) => {
              const Icon = PRACTICE_ICONS[practice.id];
              return (
                <Link
                  className={`plat-layer-card practice-preview-card reveal accent-${practice.accent}`}
                  href={practice.href}
                  key={practice.id}
                >
                  <span className="plat-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="plat-layer-num">
                    {practice.number} — {practice.label}
                  </div>
                  <h3>{practice.title}</h3>
                  <div className="practice-preview-card__block">
                    <span className="mono-label">The problem</span>
                    <p>{practice.buyerProblem}</p>
                  </div>
                  <div className="practice-preview-card__block">
                    <span className="mono-label">What we leave</span>
                    <p>{practice.deliverable}</p>
                  </div>
                  <div className="practice-preview-card__example">
                    <span className="scope-badge scope-badge--example">Typical engagement</span>
                    <p>{practice.preview}</p>
                    <small>Illustrative pattern, not a case study.</small>
                  </div>
                  <div className="plat-layer-tags">
                    {practice.tags.map((tag) => (
                      <span className="plat-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="plat-view">Explore this practice</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="studio-section studio-frost section-pad" id="collective">
        <div className="container">
          <div className="studio-header reveal">
            <div className="label">The right collective</div>
            <h2 className="sh">
              One accountable core. <span className="g">The right specialists around it.</span>
            </h2>
            <p className="sb">{HOMEPAGE_NARRATIVE.collective}</p>
          </div>
          <div className="why-grid collective-why-grid">
            {COLLECTIVE_DIFFERENTIATORS.map((item) => (
              <article className="studio-card reveal" key={item.title}>
                <span className="studio-kicker">How we operate</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="collective-story">
            <article className="collective-accountability reveal">
              <span className="label">Founder accountability</span>
              <h3>The relationship does not disappear behind an account layer.</h3>
              <p>
                One engagement lead holds the outcome, team shape and standard from the first
                working session through release. Specialists join for the decisions and build work
                that need their depth.
              </p>
              <p>
                Team size is engagement-specific. Independent legal support is optional and agreed
                for the engagement; it is not presented as an employee or permanent bench.
              </p>
              <Link href="/about" className="trust-link">
                See how the collective works →
              </Link>
            </article>
            <FounderVideo compact />
          </div>
          <div className="collective-role-intro">
            <span className="label">Six role archetypes</span>
            <p>Not a fixed team—an honest view of the senior capabilities that can form around the work.</p>
          </div>
          <RoleArchetypes compact />
        </div>
      </section>

      <section className="security-section section-pad" id="trust">
        <div className="container">
          <div className="security-inner reveal">
            <div className="label">Trust</div>
            <h2 className="sh">Clear controls before sensitive work starts</h2>
            <p className="sb" style={{ margin: "0 auto" }}>
              {HOMEPAGE_NARRATIVE.trust}
            </p>
            <div className="trust-grid">
              {HOME_TRUST_CONTROLS.map((control) => (
                <TrustControlCard control={control} compact key={control.id} />
              ))}
            </div>
            <Link href="/security" className="trust-link">
              Review controls and engagement choices →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad" id="project-brief">
        <div className="cta-inner">
          <h2>Stop guessing. Start shipping.</h2>
          <p className="sb">
            Tell us the problem — a data system that will not hold, a workflow still stuck in
            inboxes, or a product that needs to exist. We reply with a sharp next step.
          </p>
          <div className="cta-buttons">
            <StartProject className="btn-primary">Create a project brief →</StartProject>
            <a href={CONTACT_MAILTO} className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
