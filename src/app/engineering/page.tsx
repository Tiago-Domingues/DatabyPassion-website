import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_DELIVERABLES, PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      stages={PRACTICE_STAGES.engineering}
      typicalEngagements={[TYPICAL_ENGAGEMENTS.engineering]}
      deliverables={PRACTICE_DELIVERABLES.engineering}
    />
  );
}
