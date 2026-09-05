import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="meta">Last updated: 31 August 2026 · Solo / freelancer</p>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <p>
            This website describes DatabyPassion services. It is not an offer. Project work starts
            only with a written statement of work.
          </p>
          <h2>The studio</h2>
          <p>
            DatabyPassion is operated as a solo practice. Illustrative engagement patterns are
            labelled and are not claims of past client results.
          </p>
          <h2>No warranty on the site</h2>
          <p>
            Content is provided as-is. We will not be liable for decisions you make solely from
            this website.
          </p>
          <h2>Contact</h2>
          <p>
            <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
