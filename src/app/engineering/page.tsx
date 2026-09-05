import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { TYPICAL_ENGAGEMENTS } from "@/content/practices";

export const metadata: Metadata = {
  title: "Data platforms",
  description:
    "Reliable data platforms, domain migrations and operating handover from DatabyPassion.",
};

export default function EngineeringPage() {
  return (
    <ServicePage
      kicker="Data platforms"
      titleRest="Platforms that"
      titleEm="hold"
      sub="Warehouses, lakes and pipelines that stay trustworthy as the business grows — systems you can operate after we leave."
      cta="Create a platform brief"
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
      typicalEngagements={[TYPICAL_ENGAGEMENTS.engineering]}
      deliverables={[
        {
          title: "Domain contract and target design",
          body: "Named source ownership, grains, service expectations and a target architecture the client team can challenge.",
        },
        {
          title: "Migrated production path",
          body: "Tested ingestion, transformation and serving for the selected domain, with parity and cutover criteria.",
        },
        {
          title: "Reliability controls",
          body: "Data tests, freshness checks, monitoring and incident paths around the new flow.",
        },
        {
          title: "Operating handover",
          body: "Runbooks, cost visibility, access model and pairing so ownership can move without a hero.",
        },
      ]}
    />
  );
}
