import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { PracticeFlipCards } from "@/components/PracticeFlipCards";
import { TOOL_LOGOS, ToolMark } from "@/components/ToolLogos";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { PortfolioPath } from "@/components/sections/PortfolioPath";
import { RoleArchetypes } from "@/components/sections/RoleArchetypes";
import { TrustCharter } from "@/components/sections/TrustCharter";
import { HOMEPAGE_NARRATIVE, SITE_IDENTITY } from "@/content/identity";
import { HOME_TRUST_CONTROLS } from "@/content/trust";
import { CONTACT_MAILTO } from "@/lib/site";

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
          <div className="hero-ctas">
            <StartProject className="btn-primary">{SITE_IDENTITY.primaryCta} →</StartProject>
            <Link href="/about" className="btn-ghost">
              Meet the collective
            </Link>
          </div>
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
          <div className="reasoning-viz">
            <div className="reasoning-svg-wrap">
              <canvas id="reasoningCanvas" aria-label="Animated reasoning engine visual" />
            </div>
            <div className="reasoning-phase" id="reasoningPhase" aria-live="polite" />
          </div>
          <PracticeFlipCards />
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
          <PortfolioPath />
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
            <span className="label">Knowledge Center</span>
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
            <TrustCharter controls={HOME_TRUST_CONTROLS} />
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
