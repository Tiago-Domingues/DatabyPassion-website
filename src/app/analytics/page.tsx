import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Analytics & decisions" };

export default function AnalyticsPage() {
  return (
    <ServicePage
      kicker="Analytics & decisions"
      titleRest="Analytics that"
      titleEm="decide"
      sub="KPI packs, forecasts and operating views the team actually opens — one definition of the number, used in the room."
      cta="Start an analytics project"
      accentVar="#67e8f9"
      stages={[
        {
          num: "01",
          title: "Understand",
          hint: "Decisions",
          heading: "Map the calls that move the business",
          body: "We start with the decisions that are slow, disputed or gut-feel — and the people who make them today.",
          points: [
            { title: "Decision inventory", text: "Which calls need a better number." },
            { title: "Source map", text: "Where those numbers really live." },
          ],
        },
        {
          num: "02",
          title: "Shape",
          hint: "Definitions",
          heading: "Lock one definition of the number",
          body: "Revenue, churn, margin — named, owned and reusable. No more three versions of the same KPI.",
          points: [
            { title: "Metric contracts", text: "Names, grains and owners." },
            { title: "Quality rules", text: "What “good” looks like before it hits a pack." },
          ],
        },
        {
          num: "03",
          title: "Build",
          hint: "Packs",
          heading: "Ship the pack, not a dashboard graveyard",
          body: "Executive views, experiment readouts and self-serve only where someone will actually query.",
          points: [
            { title: "Operating packs", text: "Repeatable, not rebuilt every month." },
            { title: "Forecasts", text: "A range the team can plan against." },
          ],
        },
        {
          num: "04",
          title: "Evolve",
          hint: "Cadence",
          heading: "Keep the operating rhythm",
          body: "A weekly and monthly cadence with owners — then the next question, sharper.",
          points: [
            { title: "Cadence", text: "Who reviews what, when." },
            { title: "Exceptions", text: "Alerts that mean something." },
          ],
        },
      ]}
      workflows={[
        {
          label: "Workflow: Operating pack",
          title: "One pack, one grain, one owner",
          body: "A weekly or monthly pack the leadership team actually opens — assembled from the same definitions, not a month-end scramble.",
          headwinds: ["Conflicting KPI definitions", "Manual month-end assembly", "No lineage when numbers are challenged"],
          stats: [
            { val: "—", desc: "Cycle time (placeholder)" },
            { val: "—", desc: "Manual hours (placeholder)" },
          ],
        },
        {
          label: "Workflow: Forecast",
          title: "A number the plan can use",
          body: "Demand, cash or capacity forecasts tied to the same metric layer as the weekly pack.",
          headwinds: ["Forecasts nobody trusts", "Plans built on last year’s actuals"],
          stats: [
            { val: "—", desc: "Forecast lag (placeholder)" },
            { val: "—", desc: "Plan variance (placeholder)" },
          ],
        },
      ]}
      results={[
        { val: "—", desc: "Placeholder · time-to-pack" },
        { val: "—", desc: "Placeholder · metric disputes" },
        { val: "—", desc: "Placeholder · forecast use" },
        { val: "—", desc: "Placeholder · coverage" },
      ]}
    />
  );
}
