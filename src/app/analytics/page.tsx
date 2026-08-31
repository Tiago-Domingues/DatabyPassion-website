import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  return (
    <ServicePage
      kicker="Analytics"
      titleRest="Reasoning for"
      titleEm="decisions"
      sub="From metric design to executive packs. DatabyPassion builds analytics that operators actually use — lineage included."
      cta="Start an analytics project"
      accentVar="#67e8f9"
      stages={[
        { num: "01", title: "Discover", hint: "Questions & KPIs", heading: "Map the decision landscape", body: "We identify the decisions that move the P&L and the metrics that should govern them — with the people who make the calls today.", points: [{ title: "Decision inventory", text: "Which calls are slow, disputed, or gut-feel." }, { title: "Source map", text: "Where the numbers really live." }] },
        { num: "02", title: "Model", hint: "Definitions", heading: "Lock the semantic layer", body: "One definition of revenue, churn, or loss — documented, owned, and reusable across tools.", points: [{ title: "Metric contracts", text: "Names, grains, and owners." }, { title: "Quality rules", text: "What “good” looks like in the warehouse." }] },
        { num: "03", title: "Build", hint: "Packs & products", heading: "Ship the pack, not a graveyard of dashboards", body: "Executive views, self-serve where it earns its keep, and experiment readouts tied to the same definitions.", points: [{ title: "Board packs", text: "Repeatable, not rebuilt every month." }, { title: "Self-serve", text: "Only where the audience will actually query." }] },
        { num: "04", title: "Govern", hint: "Access & audit", heading: "Trust the number in the room", body: "Access, lineage, and change control so a KPI cannot silently drift.", points: [{ title: "Lineage", text: "From source field to slide." }, { title: "Access", text: "Least privilege by domain." }] },
        { num: "05", title: "Operate", hint: "Cadence", heading: "Keep the operating rhythm", body: "A weekly and monthly cadence with owners, not a one-off go-live.", points: [{ title: "Cadence", text: "Who reviews what, when." }, { title: "Exceptions", text: "Alerts that mean something." }] },
        { num: "06", title: "Compound", hint: "Next questions", heading: "The next decision, sharper", body: "Each cycle feeds the next set of questions — analytics that compounds, not a static BI project.", points: [{ title: "Backlog", text: "Prioritised next metrics." }, { title: "Enablement", text: "Your team can extend it." }] },
      ]}
      workflows={[
        { label: "Workflow: Executive pack", title: "Placeholder — wealth / finance operator", body: "A placeholder engagement: one pack, one grain, one owner. Replace with a named case when ready.", headwinds: ["Conflicting KPI definitions", "Manual month-end assembly", "No lineage when numbers are challenged"], stats: [{ val: "—", desc: "Cycle time (placeholder)" }, { val: "—", desc: "Manual hours (placeholder)" }] },
        { label: "Workflow: Experimentation", title: "Placeholder — product / growth team", body: "Design, power, and readout of experiments on a shared metric layer.", headwinds: ["Tests without a north-star metric", "Readouts that cannot be reproduced"], stats: [{ val: "—", desc: "Tests / quarter (placeholder)" }, { val: "—", desc: "Decision lag (placeholder)" }] },
      ]}
      results={[
        { val: "—", desc: "Placeholder · time-to-pack" },
        { val: "—", desc: "Placeholder · metric disputes" },
        { val: "—", desc: "Placeholder · self-serve adoption" },
        { val: "—", desc: "Placeholder · coverage" },
      ]}
    />
  );
}
