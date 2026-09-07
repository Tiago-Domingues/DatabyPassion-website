import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
