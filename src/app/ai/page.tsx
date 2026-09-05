import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      stages={[
        {
          num: "01",
          title: "Understand",
          hint: "The grind",
          heading: "Pick a process that pays to automate",
          body: "We start with the inbox, the spreadsheet, the repeated judgement — and a stop rule if the lift is not there.",
          points: [
            { title: "Baseline", text: "What happens today, in hours and error." },
            { title: "Stop rule", text: "When we kill the experiment." },
          ],
        },
        {
          num: "02",
          title: "Shape",
          hint: "The loop",
          heading: "Design the workflow, not the model first",
          body: "Where a person must sign. Where a model or an agent can take the next step. What must be cited.",
          points: [
            { title: "Human in the loop", text: "The step that still needs a name." },
            { title: "Grounding", text: "Your corpus, your rules, your tools." },
          ],
        },
        {
          num: "03",
          title: "Build",
          hint: "Ship",
          heading: "In the system people already open",
          body: "An assistant, a batch score or an automated loop — with a fallback when the model is unsure.",
          points: [
            { title: "Serving", text: "Latency and a safe default." },
            { title: "Trace", text: "Why this answer or this score appeared." },
          ],
        },
        {
          num: "04",
          title: "Evolve",
          hint: "Watch",
          heading: "Workflows decay. We plan for it",
          body: "Monitoring, retraining and a kill switch. The first loop is a start.",
          points: [
            { title: "Drift", text: "Input and performance." },
            { title: "Retrain", text: "A calendar, not heroics." },
          ],
        },
      ]}
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
