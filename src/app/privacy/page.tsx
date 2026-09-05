import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="meta">Last updated: 31 August 2026 · Solo / freelancer</p>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <p>
            DatabyPassion is a founder-led studio operated by an individual (not a registered
            company on this page). Contact:{" "}
            <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
          </p>
          <h2>What we collect</h2>
          <p>
            The project brief builder runs in your browser and does not submit its fields to
            DatabyPassion. If you choose Open email draft and then send that email yourself, we
            process the information you send so we can reply.
          </p>
          <h2>Cookies</h2>
          <p>
            We use local storage key <code>dbp_consent</code> to remember your cookie choice.
            Analytics are not wired yet. Essential storage does not require marketing consent.
          </p>
          <h2>Legal basis (GDPR)</h2>
          <p>
            Pre-contract steps at your request, or legitimate interests in answering an enquiry.
            You may ask us to delete enquiry data by emailing the address above.
          </p>
          <h2>Sharing</h2>
          <p>We do not sell personal data. Hosting may be on Vercel in the EU/US as configured.</p>
          <h2>Retention</h2>
          <p>Enquiry data is kept only as long as needed to reply and follow up, then deleted.</p>
        </div>
      </section>
    </>
  );
}
