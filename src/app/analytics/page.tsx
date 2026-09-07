import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_DELIVERABLES, PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      deliverables={PRACTICE_DELIVERABLES.analytics}
    />
  );
}
