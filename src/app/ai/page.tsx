import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "AI & Automation" };

export default function AiPage() {
  return (
    <ServicePage
      kicker="AI & Automation"
      titleRest="Intelligence in the"
      titleEm="workflow"
      sub="Intelligent workflows and assistants grounded in your data and processes — not a demo that dies in a notebook."
      cta="Start an AI project"
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
      workflows={[
        {
          label: "Workflow: Automation",
          title: "From inbox to a reliable loop",
          body: "Take a process that still lives in email or a shared sheet and turn it into a workflow people can trust.",
          headwinds: ["Shadow IT scripts", "No owner when it breaks", "Exceptions that pile up"],
          stats: [
            { val: "—", desc: "Hours returned (placeholder)" },
            { val: "—", desc: "Exception rate (placeholder)" },
          ],
        },
        {
          label: "Workflow: Assistant",
          title: "Answers with a source trail",
          body: "An assistant over your policies, tickets or product data — cited, scoped, and not trained on your corpus.",
          headwinds: ["Hallucinated policy", "A chatbot nobody opens"],
          stats: [
            { val: "—", desc: "Cited answers (placeholder)" },
            { val: "—", desc: "Escalations (placeholder)" },
          ],
        },
      ]}
      results={[
        { val: "—", desc: "Placeholder · time saved" },
        { val: "—", desc: "Placeholder · time-to-prod" },
        { val: "—", desc: "Placeholder · exception rate" },
        { val: "—", desc: "Placeholder · human review" },
      ]}
    />
  );
}
