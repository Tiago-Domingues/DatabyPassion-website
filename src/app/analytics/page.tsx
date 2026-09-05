import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { TYPICAL_ENGAGEMENTS } from "@/content/practices";

export const metadata: Metadata = {
  title: "Analytics & decisions",
  description:
    "Shared metric definitions, operating packs and decision rhythms from DatabyPassion.",
};

export default function AnalyticsPage() {
  return (
    <ServicePage
      kicker="Analytics & decisions"
      titleRest="Analytics that"
      titleEm="decide"
      sub="KPI packs, forecasts and operating views the team actually opens — one definition of the number, used in the room."
      cta="Create an analytics brief"
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
      typicalEngagements={[TYPICAL_ENGAGEMENTS.analytics]}
      deliverables={[
        {
          title: "Decision and source map",
          body: "The recurring decisions, owners, source systems and points where today’s process loses time or trust.",
        },
        {
          title: "Metric contracts",
          body: "Named definitions, grains, owners, quality rules and lineage for the measures used in the room.",
        },
        {
          title: "Operating pack",
          body: "A repeatable view of performance, exceptions and actions assembled from the shared metric layer.",
        },
        {
          title: "Review cadence",
          body: "A practical rhythm for review, challenge, annotation and ownership of the next decision.",
        },
      ]}
    />
  );
}
