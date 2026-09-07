import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      deliverables={[
        {
          title: "Workflow baseline",
          body: "The current steps, volumes, decisions, failure modes and a stop rule for the product experiment.",
        },
        {
          title: "Evaluation and grounding set",
          body: "Representative examples, quality criteria, approved knowledge sources and documented model boundaries.",
        },
        {
          title: "Human-review design",
          body: "Named review points, confidence or exception rules, escalation paths and a safe fallback.",
        },
        {
          title: "Monitored production workflow",
          body: "A traceable workflow in the agreed system, with access controls, operational signals and a kill switch.",
        },
      ]}
    />
  );
}
