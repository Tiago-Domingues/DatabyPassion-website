import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      accentVar="#34d399"
      stages={PRACTICE_STAGES.analytics}
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
