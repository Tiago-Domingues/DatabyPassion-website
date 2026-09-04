import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Data platforms" };

export default function EngineeringPage() {
  return (
    <ServicePage
      kicker="Data platforms"
      titleRest="Platforms that"
      titleEm="hold"
      sub="Warehouses, lakes and pipelines that stay trustworthy as the business grows — systems you can operate after we leave."
      cta="Start a platforms project"
      accentVar="#fbbf24"
      stages={[
        {
          num: "01",
          title: "Understand",
          hint: "Sources",
          heading: "See what the business actually runs on",
          body: "Operational systems, files and tribal spreadsheets — mapped with contracts, not a pile of one-off scripts.",
          points: [
            { title: "Connectors", text: "APIs, CDC, files, events." },
            { title: "Contracts", text: "Schema and SLA per source." },
          ],
        },
        {
          num: "02",
          title: "Shape",
          hint: "Model",
          heading: "A model the business can name",
          body: "Layers your team will maintain. Entities that match how people already talk about the work.",
          points: [
            { title: "Layers", text: "Raw, conformed, serving." },
            { title: "Keys", text: "Customers, orders, products — named." },
          ],
        },
        {
          num: "03",
          title: "Build",
          hint: "Pipelines",
          heading: "Fail the pipeline, not the meeting",
          body: "Ingestion, tests and serving tables for analytics, AI and ops — one path, not five copies.",
          points: [
            { title: "Quality", text: "Uniqueness, freshness, volume." },
            { title: "Serve", text: "BI, features and APIs from the same core." },
          ],
        },
        {
          num: "04",
          title: "Evolve",
          hint: "Handover",
          heading: "You own it after we leave",
          body: "Runbooks, cost and pairing so the platform does not become a hero culture.",
          points: [
            { title: "Ops", text: "Orchestration you can live with." },
            { title: "Pairing", text: "Your engineers in the loop." },
          ],
        },
      ]}
      workflows={[
        {
          label: "Workflow: Platform",
          title: "A lakehouse the team can keep",
          body: "Stand up a maintainable platform and retire the spreadsheet pipelines that nobody wants to touch.",
          headwinds: ["Point-to-point jobs", "No tests", "A cloud bill with no owner"],
          stats: [
            { val: "—", desc: "Sources onboarded (placeholder)" },
            { val: "—", desc: "Failed jobs / week (placeholder)" },
          ],
        },
        {
          label: "Workflow: Migration",
          title: "Move a domain without a big-bang weekend",
          body: "Cut over one critical domain at a time, with parity checks and a stop rule.",
          headwinds: ["Dual running forever", "Unclear cutover criteria"],
          stats: [
            { val: "—", desc: "Domains cut over (placeholder)" },
            { val: "—", desc: "Parity gaps (placeholder)" },
          ],
        },
      ]}
      results={[
        { val: "—", desc: "Placeholder · pipeline SLAs" },
        { val: "—", desc: "Placeholder · incident rate" },
        { val: "—", desc: "Placeholder · cost / query" },
        { val: "—", desc: "Placeholder · time-to-source" },
      ]}
    />
  );
}
