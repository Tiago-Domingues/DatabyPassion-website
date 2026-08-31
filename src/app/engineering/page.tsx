import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Data Engineering" };

export default function EngineeringPage() {
  return (
    <ServicePage
      kicker="Data Engineering"
      titleRest="Pipelines that"
      titleEm="stay up"
      sub="From ingestion to a lakehouse your analysts and models can trust. We design, build, and hand over systems you can operate."
      cta="Start an engineering project"
      accentVar="#fbbf24"
      stages={[
        { num: "01", title: "Sources", hint: "Ingest", heading: "Get the data in, once", body: "Connect operational systems, files, and streams with contracts — not a pile of one-off scripts.", points: [{ title: "Connectors", text: "APIs, CDC, files, events." }, { title: "Contracts", text: "Schema and SLA per source." }] },
        { num: "02", title: "Model", hint: "Lakehouse", heading: "A model the business can name", body: "Bronze / silver / gold or the equivalent that your team will actually maintain.", points: [{ title: "Layers", text: "Raw, conformed, serving." }, { title: "Keys", text: "Entities that match how the business talks." }] },
        { num: "03", title: "Quality", hint: "Tests", heading: "Fail the pipeline, not the meeting", body: "Tests, freshness, and volume checks that page a human before a dashboard lies.", points: [{ title: "Tests", text: "Uniqueness, nulls, referential." }, { title: "Freshness", text: "SLAs that are visible." }] },
        { num: "04", title: "Serve", hint: "Consumers", heading: "One path to BI, ML, and ops", body: "Serving tables, features, and APIs without copying the warehouse into five tools.", points: [{ title: "BI", text: "Semantic layer ready." }, { title: "ML", text: "Feature tables with lineage." }] },
        { num: "05", title: "Ops", hint: "Run", heading: "On-call you can live with", body: "Orchestration, cost, and runbooks so the platform does not become a hero culture.", points: [{ title: "Orchestration", text: "Airflow, dbt, cloud native — fit to you." }, { title: "Cost", text: "FinOps on the warehouse bill." }] },
        { num: "06", title: "Handover", hint: "Your team", heading: "You own it after we leave", body: "Docs, diagrams, and pairing so this is not a black box consultancy drop.", points: [{ title: "Docs", text: "Architecture and runbooks." }, { title: "Pairing", text: "Your engineers in the loop." }] },
      ]}
      workflows={[
        { label: "Workflow: Lakehouse", title: "Placeholder — multi-source platform", body: "Stand up a maintainable lakehouse and retire spreadsheet pipelines.", headwinds: ["Point-to-point jobs", "No tests", "Cloud bill with no owner"], stats: [{ val: "—", desc: "Sources onboarded (placeholder)" }, { val: "—", desc: "Failed jobs / week (placeholder)" }] },
        { label: "Workflow: Migration", title: "Placeholder — warehouse move", body: "Move a critical domain without a big-bang weekend.", headwinds: ["Dual running forever", "Unclear cutover criteria"], stats: [{ val: "—", desc: "Domains cut over (placeholder)" }, { val: "—", desc: "Parity gaps (placeholder)" }] },
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
