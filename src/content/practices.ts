export type PracticeId = "engineering" | "analytics" | "ai" | "products";

export type PracticeSummary = {
  id: PracticeId;
  number: string;
  label: string;
  title: string;
  buyerProblem: string;
  deliverable: string;
  preview: string;
  tags: string[];
  href: "/engineering" | "/analytics" | "/ai" | "/products";
  accent: "amber" | "green" | "cyan" | "blue";
};

export type TypicalEngagement = {
  label: "Typical engagement";
  title: string;
  situation: string;
  intervention: string;
  delivers: string[];
  change: string;
  disclaimer: string;
};

export const PRACTICES: PracticeSummary[] = [
  {
    id: "engineering",
    number: "01",
    label: "Platforms",
    title: "Data platforms",
    buyerProblem:
      "Critical reporting and products depend on pipelines nobody fully trusts.",
    deliverable:
      "A maintainable data foundation with contracts, tests, observability and handover.",
    preview:
      "Stabilise one valuable domain, prove the operating model, then migrate the next.",
    tags: ["Warehouses", "Pipelines", "Quality"],
    href: "/engineering",
    accent: "amber",
  },
  {
    id: "analytics",
    number: "02",
    label: "Decisions",
    title: "Analytics & decisions",
    buyerProblem:
      "Leaders spend the meeting debating the number instead of acting on it.",
    deliverable:
      "Shared metrics, operating views and a review cadence tied to real decisions.",
    preview:
      "Turn a disputed monthly pack into one owned, repeatable operating view.",
    tags: ["Metrics", "Forecasts", "Experiments"],
    href: "/analytics",
    accent: "green",
  },
  {
    id: "ai",
    number: "03",
    label: "Intelligence",
    title: "AI & automation",
    buyerProblem:
      "A valuable workflow is still trapped in inboxes, documents and repeated judgement.",
    deliverable:
      "A governed workflow with grounding, evaluation, human review and a safe fallback.",
    preview:
      "Move one repetitive process from manual handling to a traceable production loop.",
    tags: ["Workflows", "Assistants", "Agents"],
    href: "/ai",
    accent: "cyan",
  },
  {
    id: "products",
    number: "04",
    label: "Products",
    title: "Digital products",
    buyerProblem:
      "A high-value idea has no clear route from concept to software people can use.",
    deliverable:
      "A focused product slice connected to real users, data and enterprise systems.",
    preview:
      "Ship the smallest credible product, observe real use, then earn the next release.",
    tags: ["Web apps", "Internal tools", "Experiences"],
    href: "/products",
    accent: "blue",
  },
];

export const TYPICAL_ENGAGEMENTS: Record<PracticeId, TypicalEngagement> = {
  engineering: {
    label: "Typical engagement",
    title: "Stabilise one data domain, then expand",
    situation:
      "A business-critical domain relies on brittle ingestion, duplicated models and manual reconciliation.",
    intervention:
      "Map the source contracts, design the serving model, rebuild the critical path and pair with the client team through cutover.",
    delivers: [
      "Source and data contracts",
      "Tested pipelines and serving models",
      "Observability, runbooks and handover",
    ],
    change:
      "The team gains one maintainable path for the domain and a repeatable pattern for the next migration.",
    disclaimer:
      "Illustrative delivery pattern, not a client case study or measured outcome.",
  },
  analytics: {
    label: "Typical engagement",
    title: "Create one operating view the room can use",
    situation:
      "A leadership pack takes days to assemble and still produces competing definitions of performance.",
    intervention:
      "Map the decisions, agree metric contracts, automate the pack and establish owners for the review cadence.",
    delivers: [
      "Decision and source map",
      "Metric contracts and quality rules",
      "Operating pack, exceptions and review cadence",
    ],
    change:
      "The recurring discussion starts from one owned view, with exceptions and next actions made explicit.",
    disclaimer:
      "Illustrative delivery pattern, not a client case study or measured outcome.",
  },
  ai: {
    label: "Typical engagement",
    title: "Turn an inbox process into a governed AI workflow",
    situation:
      "A team repeatedly reads, classifies and routes high-volume requests using email and shared sheets.",
    intervention:
      "Baseline the work, define the human decision points, ground the model, build evaluations and ship a monitored workflow with fallback.",
    delivers: [
      "Process baseline and stop criteria",
      "Evaluation set, grounding and review rules",
      "Traceable workflow, monitoring and kill switch",
    ],
    change:
      "Routine work moves through a consistent path while ambiguous cases remain visible to a named reviewer.",
    disclaimer:
      "Illustrative delivery pattern, not a client case study or measured outcome.",
  },
  products: {
    label: "Typical engagement",
    title: "Replace a shared workbook with a working product",
    situation:
      "An operational team runs a valuable process through spreadsheets, messages and undocumented hand-offs.",
    intervention:
      "Shape the first user journey, connect the real data, build the product surface and instrument the workflow before extending it.",
    delivers: [
      "First-release scope and service flow",
      "Authenticated product with real data",
      "Usage instrumentation, runbook and next-release plan",
    ],
    change:
      "The team gets a dependable product surface and evidence for what should—or should not—be built next.",
    disclaimer:
      "Illustrative delivery pattern, not a client case study or measured outcome.",
  },
};
