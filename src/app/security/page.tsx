import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";

export const metadata: Metadata = { title: "Security & Trust" };

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Security &amp; Trust</div>
          <h1>Your data is always confidential</h1>
          <p className="page-hero-sub">
            DatabyPassion is a solo boutique. We do not claim SOC 2. We do work in a GDPR-minded
            way, we do not train models on client data, and we use least-privilege access.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">How we handle data</h2>
          <p className="section-desc">Soft commitments we will stand behind in writing on a statement of work.</p>
          <div className="practice-grid">
            {[
              ["Confidential by default", "Client data is used only to deliver the engagement."],
              ["No model training", "We do not train DatabyPassion models on your proprietary data."],
              ["Least privilege", "Access is scoped to the systems the work requires."],
              ["GDPR-minded", "EU clients: purpose limitation, minimisation, and a right to end access."],
              ["No silent copies", "We do not keep shadow copies of your warehouse for our own R&D."],
              ["You can ask", "Get in touch for how a specific engagement will be isolated."],
            ].map(([h, p]) => (
              <div className="practice-card" key={h}>
                <h4>✓ {h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="cta-box">
            <h3>Need it in a contract</h3>
            <p>We will put data handling in the statement of work for every engagement.</p>
            <StartProject className="btn-primary">Start a project →</StartProject>
          </div>
        </div>
      </section>
    </>
  );
}
