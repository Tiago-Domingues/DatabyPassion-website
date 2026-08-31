import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "ML & AI" };

export default function AiPage() {
  return (
    <ServicePage
      kicker="ML & AI"
      titleRest="Models in the"
      titleEm="workflow"
      sub="From classical ML to applied LLM systems. Grounded in your data, your rules, and an audit trail — not a demo that dies in a notebook."
      cta="Start an AI project"
      accentVar="#f472b6"
      stages={[
        { num: "01", title: "Use case", hint: "Value", heading: "Pick a decision that pays", body: "We will not start with a model. We start with a decision, a baseline, and a stop rule.", points: [{ title: "Baseline", text: "What happens today, in hours and error." }, { title: "Stop rule", text: "When we kill the experiment." }] },
        { num: "02", title: "Data", hint: "Fit", heading: "The data you actually have", body: "Labels, leakage, and coverage — before architecture theatre.", points: [{ title: "Labels", text: "Who labelled them, and how noisy." }, { title: "Leakage", text: "What must not be in training." }] },
        { num: "03", title: "Build", hint: "Train / retrieve", heading: "Classical ML or grounded AI", body: "Forecasts, ranking, and RAG — chosen for the job, not the hype cycle.", points: [{ title: "Classical ML", text: "When a gradient booster is enough." }, { title: "Applied AI", text: "Retrieval and tools over your corpus." }] },
        { num: "04", title: "Govern", hint: "Audit", heading: "Explainable enough for the committee", body: "We do not claim SOC 2. We do claim you will know why a score or an answer appeared.", points: [{ title: "Trace", text: "Features, prompts, sources." }, { title: "Human in the loop", text: "Where a person must sign." }] },
        { num: "05", title: "Ship", hint: "Serve", heading: "In the system of record", body: "An API, a batch score, or an assistant in the tool people already open.", points: [{ title: "Serving", text: "Latency and fallback." }, { title: "UX", text: "No orphan chatbot." }] },
        { num: "06", title: "Watch", hint: "Drift", heading: "Models decay. We plan for it", body: "Monitoring, retraining cadence, and a kill switch.", points: [{ title: "Drift", text: "Input and performance." }, { title: "Retrain", text: "Calendar, not heroics." }] },
      ]}
      workflows={[
        { label: "Workflow: Scoring", title: "Placeholder — risk / ops model", body: "A production score with monitoring, not a notebook on a laptop.", headwinds: ["Shadow IT models", "No monitoring", "Unclear owners"], stats: [{ val: "—", desc: "Lift vs baseline (placeholder)" }, { val: "—", desc: "Time-to-score (placeholder)" }] },
        { label: "Workflow: Grounded AI", title: "Placeholder — document / policy assistant", body: "Answers with citations over your corpus. We do not train on your data.", headwinds: ["Hallucinated policy", "No source trail"], stats: [{ val: "—", desc: "Cited answers (placeholder)" }, { val: "—", desc: "Escalations (placeholder)" }] },
      ]}
      results={[
        { val: "—", desc: "Placeholder · model lift" },
        { val: "—", desc: "Placeholder · time-to-prod" },
        { val: "—", desc: "Placeholder · drift incidents" },
        { val: "—", desc: "Placeholder · human review rate" },
      ]}
    />
  );
}
