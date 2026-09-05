import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

const FACTS = [
  {
    label: "This site",
    body: "This website describes DatabyPassion services. It is not an offer. Project work starts only with a written statement of work.",
  },
  {
    label: "The studio",
    body: "DatabyPassion is operated as a solo practice. Illustrative engagement patterns are labelled and are not claims of past client results.",
  },
  {
    label: "Warranty",
    body: "Content is provided as-is. We will not be liable for decisions you make solely from this website.",
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="page-hero-sub">
            Conditions for using this website. Engagement terms are agreed in writing before work
            starts.
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
