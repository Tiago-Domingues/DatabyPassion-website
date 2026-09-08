import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { LegalSupportBar } from "@/components/sections/LegalSupportBar";
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
    titleLead: "Accountability starts.",
    titleEm: "Before access.",
    description:
      "Confidentiality, roles and the support needed for a specific engagement are made explicit during scoping.",
    categories: ["Governance"],
  },
  {
    id: "environments-access",
    label: "Environments & access",
    titleLead: "Named environments.",
    titleEm: "Limited access.",
    description:
      "Studio-controlled environments are the working default. Client-controlled environments are available when policy or architecture requires them.",
    categories: ["Environments"],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    titleLead: "Use follows purpose.",
    titleEm: "Not a generic policy.",
    description:
      "Access, retention, model use and human review are scoped around the workflow rather than assumed from a generic policy.",
    categories: ["Data", "AI"],
  },
  {
    id: "development-continuity",
    label: "Development & continuity",
    titleLead: "The delivery record stays.",
    titleEm: "After the engagement.",
    description:
      "Source, secrets, specialist access, key decisions and handover artefacts stay in the operating record.",
    categories: ["Delivery", "Continuity"],
  },
  {
    id: "providers-certifications",
    label: "Providers & certifications",
    titleLead: "Providers are named.",
    titleEm: "Status is disclosed.",
    description:
      "Website hosts are not project subprocessors. Cloud and model providers for the work are named in the engagement.",
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
          <h1>
            Clear controls. <span className="em">Before sensitive work starts.</span>
          </h1>
          <p className="page-hero-sub">
            DatabyPassion publishes the controls that already operate, the choices agreed when
            an engagement starts, and the facts we will not overstate. Use this page in a
            procurement or security review. Contract terms and client policy still govern the
            work.
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
                    <h2 className="sh">
                      {section.titleLead} <span className="em">{section.titleEm}</span>
                    </h2>
                  </div>
                  <p className="sb">{section.description}</p>
                </div>
                <TrustCharter controls={controls} numbered={false} />
                {section.id === "governance" ? <LegalSupportBar href={null} /> : null}
              </div>
            </section>
          );
        })}
      </div>

      <section className="procurement-note section-pad">
        <div className="container procurement-note__inner">
          <div>
            <span className="label">For procurement teams</span>
            <h2 className="sh">
              Turn a public overview. <span className="em">Into engagement terms.</span>
            </h2>
            <p className="sb">
              The statement of work names the systems, people, providers, permitted data,
              retention and deletion, incident contacts and handover required for the
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
