import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_DELIVERABLES, PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

export const metadata: Metadata = {
  title: "AI & automation",
  description:
    "Governed AI workflows with evaluation, human review and safe fallback from DatabyPassion.",
};

export default function AiPage() {
  return (
    <ServicePage
      kicker="AI & Automation"
      titleRest="Intelligence in the"
      titleEm="workflow"
      sub="Intelligent workflows and assistants grounded in your data and processes — not a demo that dies in a notebook."
      cta="Create an AI brief"
      accentVar="#f472b6"
      stages={PRACTICE_STAGES.ai}
      typicalEngagements={[TYPICAL_ENGAGEMENTS.ai]}
      deliverables={PRACTICE_DELIVERABLES.ai}
    />
  );
}
