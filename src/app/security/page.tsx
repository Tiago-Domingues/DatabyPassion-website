import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { TrustCharter } from "@/components/sections/TrustCharter";
import { TRUST_CONTROLS } from "@/content/trust";
import { CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "DatabyPassion controls, engagement choices and current disclosures for procurement, security and AI review.",
};

const TRUST_SECTIONS = [
  {
    id: "governance",
    label: "Governance",
    title: "Accountability starts before access",
    description:
      "Confidentiality, roles and the support needed for a specific engagement are made explicit during scoping.",
    categories: ["Governance"],
  },
  {
    id: "environments-access",
    label: "Environments & access",
    title: "Named environments, limited access",
    description:
      "Studio-controlled environments are the working default. Client-controlled environments are available when policy or architecture requires them.",
    categories: ["Environments"],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    title: "Use is tied to the agreed purpose",
    description:
      "Access, retention, model use and human review are scoped around the workflow rather than assumed from a generic policy.",
    categories: ["Data", "AI"],
  },
  {
    id: "development-continuity",
    label: "Development & continuity",
    title: "The delivery record should outlive the engagement",
    description:
      "Source, secrets, specialist access, key decisions and handover artefacts are part of the operating model.",
    categories: ["Delivery", "Continuity"],
  },
  {
    id: "providers-certifications",
    label: "Providers & certifications",
    title: "Current facts, without implied assurance",
    description:
      "Website providers are not presented as project subprocessors. Project cloud and model providers are named for the engagement.",
    categories: ["Providers", "Certifications"],
  },
] as const;

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero trust-page-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">Security &amp; Trust</div>
          <h1>Controls you can assess before the work starts</h1>
          <p className="page-hero-sub">
            This page separates practices operating today from decisions agreed for each
            engagement. It is a starting point for procurement and security review—not a
            substitute for contract terms or client policy.
          </p>
          <div className="trust-scope-key" aria-label="Control scope key">
            <span className="scope-badge scope-badge--current">Operating today</span>
            <span className="scope-badge scope-badge--engagement">Agreed per engagement</span>
            <span className="scope-badge scope-badge--disclosure">Current disclosure</span>
          </div>
        </div>
      </section>

      <nav className="trust-nav" aria-label="Trust page sections">
        <div className="container">
          {TRUST_SECTIONS.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="trust-page">
        {TRUST_SECTIONS.map((section) => {
          const controls = TRUST_CONTROLS.filter((control) =>
            section.categories.some((category) => category === control.category),
          );
          return (
            <section className="trust-detail-section section-pad" id={section.id} key={section.id}>
              <div className="container">
                <div className="section-heading-split">
                  <div>
                    <span className="label">{section.label}</span>
                    <h2 className="sh">{section.title}</h2>
                  </div>
                  <p className="sb">{section.description}</p>
                </div>
                <TrustCharter controls={controls} numbered={false} />
              </div>
            </section>
          );
        })}
      </div>

      <section className="procurement-note section-pad">
        <div className="container procurement-note__inner">
          <div>
            <span className="label">For procurement teams</span>
            <h2 className="sh">Turn a public overview into engagement terms</h2>
            <p className="sb">
              A statement of work can name the systems, people, providers, permitted data,
              retention/deletion expectations, incident contacts and handover required for the
              engagement.
            </p>
          </div>
          <div className="procurement-note__actions">
            <StartProject className="btn-primary">Create a project brief →</StartProject>
            <a className="btn-ghost" href={CONTACT_MAILTO}>
              Email a security question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
