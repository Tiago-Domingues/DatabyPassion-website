import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { TYPICAL_ENGAGEMENTS } from "@/content/practices";

export const metadata: Metadata = {
  title: "Digital products",
  description:
    "Focused web applications and internal products connected to real users and data.",
};

export default function ProductsPage() {
  return (
    <ServicePage
      kicker="Digital Products"
      titleRest="Products people"
      titleEm="actually use"
      sub="Websites, web apps, internal tools and digital experiences — shipped as working products, not a brochure that pretends."
      cta="Create a product brief"
      accentVar="#5bb8ff"
      stages={[
        {
          num: "01",
          title: "Understand",
          hint: "The job",
          heading: "Who uses this, and what must it do",
          body: "A site, an app or an internal tool is a product when someone depends on it. We start with that job, not a page count.",
          points: [
            { title: "Users", text: "Customers, operators, or both." },
            { title: "Outcomes", text: "What “done” looks like in the first release." },
          ],
        },
        {
          num: "02",
          title: "Shape",
          hint: "Scope",
          heading: "A first slice that can ship",
          body: "Information architecture, auth, data and the one workflow that proves the product is real.",
          points: [
            { title: "Surface", text: "Public site, logged-in app, or ops console." },
            { title: "Constraints", text: "Brand, stack, and what must stay internal." },
          ],
        },
        {
          num: "03",
          title: "Build",
          hint: "Ship",
          heading: "Working software in production",
          body: "A site that behaves like a product. A web app with real data. An internal tool that replaces the shared workbook.",
          points: [
            { title: "Product surface", text: "Look like the brand. Behave like software." },
            { title: "Internals", text: "Auth, data, and the workflow behind the glass." },
          ],
        },
        {
          num: "04",
          title: "Evolve",
          hint: "Next",
          heading: "The next release, not a handover dump",
          body: "Instrument, learn, extend. We leave you with something you can keep, or we stay on for the next slice.",
          points: [
            { title: "Measure", text: "What people actually do in the product." },
            { title: "Extend", text: "The honest backlog for release two." },
          ],
        },
      ]}
      typicalEngagements={[TYPICAL_ENGAGEMENTS.products]}
      deliverables={[
        {
          title: "First-release product frame",
          body: "A named user, critical journey, service boundary, backlog and acceptance criteria for the smallest credible product.",
        },
        {
          title: "Production product surface",
          body: "An authenticated web application or internal tool connected to the agreed real data and systems.",
        },
        {
          title: "Instrumented workflow",
          body: "Product events and operational signals that show where people succeed, hesitate or leave the process.",
        },
        {
          title: "Runbook and next-release decision",
          body: "Ownership, support path, known constraints and an evidence-based choice for release two.",
        },
      ]}
    />
  );
}
