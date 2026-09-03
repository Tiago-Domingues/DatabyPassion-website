import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Digital Products" };

export default function ProductsPage() {
  return (
    <ServicePage
      kicker="Digital Products"
      titleRest="Products people"
      titleEm="actually use"
      sub="Websites, web apps, internal tools and digital experiences — shipped as working products, not a brochure that pretends."
      cta="Start a product project"
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
      workflows={[
        {
          label: "Workflow: Web application",
          title: "A product surface with real data",
          body: "Auth, workflows and the data the business already has — a web app people can log into, not a static mock.",
          headwinds: ["A brochure that pretends to be a product", "No owner after launch"],
          stats: [
            { val: "—", desc: "Time-to-first-release (placeholder)" },
            { val: "—", desc: "Weekly active (placeholder)" },
          ],
        },
        {
          label: "Workflow: Internal tool",
          title: "Replace the shared workbook",
          body: "An ops console or working tool for the team — scoped to the job, not a second ERP.",
          headwinds: ["Tribal spreadsheets", "Shadow IT nobody can maintain"],
          stats: [
            { val: "—", desc: "Manual hours (placeholder)" },
            { val: "—", desc: "Error rate (placeholder)" },
          ],
        },
      ]}
      results={[
        { val: "—", desc: "Placeholder · time-to-ship" },
        { val: "—", desc: "Placeholder · adoption" },
        { val: "—", desc: "Placeholder · cycle time" },
        { val: "—", desc: "Placeholder · issues after launch" },
      ]}
    />
  );
}
