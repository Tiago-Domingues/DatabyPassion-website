import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { canonicalUrl, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How this website handles information. The project brief stays in your browser until you send an email yourself. Analytics are not wired.",
  alternates: { canonical: canonicalUrl("/privacy") },
};

const FACTS: { label: string; body: ReactNode }[] = [
  {
    label: "Collect",
    body: "The project brief builder runs in your browser and does not submit its fields to DatabyPassion. If you choose Open email draft and then send that email yourself, we process the information you send so we can reply.",
  },
  {
    label: "Store",
    body: (
      <>
        We use local storage key <code>dbp_consent</code> so the cookie notice does not return.
        Analytics are not wired. Essential storage does not require marketing consent.
      </>
    ),
  },
  {
    label: "Share",
    body: "We do not sell personal data. Hosting may be on Vercel in the EU/US as configured.",
  },
  {
    label: "Retain",
    body: "Enquiry data is kept only as long as needed to reply and follow up, then deleted.",
  },
  {
    label: "Legal basis",
    body: "Pre-contract steps at your request, or legitimate interests in answering an enquiry. You may ask us to delete enquiry data by emailing the address above.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="page-hero-sub">
            How this website handles information. DatabyPassion is a founder-led studio operated by
            an individual.
          </p>
          <dl className="legal-meta">
            <div>
              <dt>Updated</dt>
              <dd>31 August 2026</dd>
            </div>
            <div>
              <dt>Operator</dt>
              <dd>Individual, not a registered company on this page</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="legal-content legal-facts">
        <div className="container">
          <dl className="legal-fact-list">
            {FACTS.map((fact) => (
              <div className="legal-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
