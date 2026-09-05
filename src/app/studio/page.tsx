import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { PracticeFlipCards } from "@/components/PracticeFlipCards";
import { StudioVizFlip } from "@/components/StudioVizFlip";
import { HOMEPAGE_NARRATIVE, SITE_IDENTITY } from "@/content/identity";
import { CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Studio",
  description: HOMEPAGE_NARRATIVE.studio,
};

export default function StudioPage() {
  return (
    <>
      <section className="page-hero studio-page-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">The Studio</div>
          <h1>{HOMEPAGE_NARRATIVE.studioHeading}</h1>
          <p className="page-hero-sub">{HOMEPAGE_NARRATIVE.studio}</p>
        </div>
      </section>

      <section className="platform-section section-pad" id="platform">
        <div className="container">
          <StudioVizFlip />
          <PracticeFlipCards />
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>Start where the pain is.</h2>
          <p className="sb">
            Tell us the constraint — data, a decision, a workflow or a product that
            does not exist yet. We form the team around that problem.
          </p>
          <div className="cta-buttons">
            <StartProject className="btn-primary">{SITE_IDENTITY.primaryCta} →</StartProject>
            <a href={CONTACT_MAILTO} className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
