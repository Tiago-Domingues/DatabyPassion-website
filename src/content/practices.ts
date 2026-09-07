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
  accent: "amber" | "green" | "cyan" | "blue" | "rose";
};

export type TypicalEngagement = {
  label: "Typical engagement";
  title: string;
  situation: string;
  intervention: string;
  delivers: string[];
  change: string;
};

export type PracticeStage = {
  num: string;
  title: string;
  hint: string;
  heading: string;
  body: string;
  points: { title: string; text: string }[];
};

export type PracticeDeliverable = {
  title: string;
  body: string;
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
    accent: "rose",
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

export type PracticeCapability = {
  label: string;
  items: string[];
};

export type PracticeBack = {
  kicker: string;
  headline: string;
  headlineEm: string;
  body: string;
  capabilities: PracticeCapability[];
};

export const PRACTICE_BACKS: Record<PracticeId, PracticeBack> = {
  engineering: {
    kicker: "01 — Data platforms",
    headline: "Trusted data.",
    headlineEm: "Engineered to last.",
    body: "From source to warehouse, we design ingestion, transformation and quality so the business can trust what it runs on. The client team gets a foundation they can operate — not a pipeline only the last engineer understands.",
    capabilities: [
      { label: "Integration", items: ["Connectors", "APIs", "Databases", "Batch", "Streaming"] },
      { label: "Data engineering", items: ["SQL", "Spark", "Python", "Transformation", "Orchestration"] },
      { label: "Storage & serving", items: ["Warehouses", "Lakehouses", "Databases", "Data models"] },
      { label: "Reliability", items: ["Data quality", "Monitoring", "Observability", "Recovery"] },
    ],
  },
  analytics: {
    kicker: "02 — Analytics & decisions",
    headline: "Shared numbers.",
    headlineEm: "Decisions that move.",
    body: "We turn fragmented reporting into one definition of performance — so teams measure what matters, see what is changing, and walk into the room ready to act. Forecasts and experiments sit on that same number, not a side spreadsheet.",
    capabilities: [
      { label: "Define", items: ["KPIs", "Metrics", "Business logic", "Semantic models"] },
      { label: "Understand", items: ["Dashboards", "Analysis", "Exploration", "Reporting"] },
      { label: "Anticipate", items: ["Forecasts", "Scenarios", "Drivers", "Trends"] },
      { label: "Improve", items: ["Experiments", "Measurement", "Attribution", "Outcomes"] },
    ],
  },
  ai: {
    kicker: "03 — AI & automation",
    headline: "Intelligent work.",
    headlineEm: "Governed in production.",
    body: "We design AI-powered workflows that combine models, business knowledge and automation with the controls needed to run them. Assistants and agents take the repeated judgement; people keep the exceptions, the trace and the stop button.",
    capabilities: [
      { label: "Intelligence", items: ["LLMs", "Machine learning", "Classification", "Prediction"] },
      { label: "Knowledge", items: ["RAG", "Retrieval", "Search", "Context", "Knowledge bases"] },
      { label: "Automation", items: ["Workflows", "Agents", "Integrations", "Actions", "Human-in-the-loop"] },
      { label: "Control", items: ["Evaluation", "Guardrails", "Monitoring", "Traceability", "Governance"] },
    ],
  },
  products: {
    kicker: "04 — Digital products",
    headline: "Working software.",
    headlineEm: "Used by the business.",
    body: "We turn a high-value idea into a product people actually open — an internal tool or experience connected to real users, data and workflows. The first release is small enough to ship, instrumented enough to learn, and solid enough to operate.",
    capabilities: [
      { label: "Product design", items: ["Discovery", "UX", "User flows", "Prototyping", "Interfaces"] },
      { label: "Applications", items: ["Web apps", "Internal tools", "Portals", "Product experiences"] },
      { label: "Engineering", items: ["Frontend", "Backend", "APIs", "Integrations", "Architecture"] },
      { label: "Delivery & operations", items: ["Cloud", "CI/CD", "Security", "Monitoring", "Continuous improvement"] },
    ],
  },
};

export const TYPICAL_ENGAGEMENTS: Record<PracticeId, TypicalEngagement> = {
  engineering: {
    label: "Typical engagement",
    title: "Put one domain under orchestration, with quality the business can see",
    situation:
      "A critical warehouse feed lands late or silently wrong. Reports and products wait on a pipeline nobody owns, and no one can say whether the day’s data is complete.",
    intervention:
      "Map the sources, orchestrate ingestion and transformation for that domain, put tests on the grain that matters, and serve a trusted table the rest of the business can use.",
    delivers: [
      "Source map and data contracts",
      "Orchestrated warehouse pipeline",
      "Quality checks, alerts and handover",
    ],
    change:
      "One domain runs on a path the team can operate — with freshness and quality visible before the business notices a break.",
  },
  analytics: {
    label: "Typical engagement",
    title: "Give the room one KPI pack, with a forecast on the same number",
    situation:
      "The monthly pack is assembled by hand. The same KPI means three things, the forecast lives in a side spreadsheet, and the meeting spends its time debating the number.",
    intervention:
      "Agree metric contracts, automate the operating view from trusted data, add a short forecast and exception list, and put a named review cadence around it.",
    delivers: [
      "KPI and metric contracts",
      "Automated operating pack and forecast",
      "Exception view and review cadence",
    ],
    change:
      "The recurring discussion starts from one owned number, with exceptions and a next action made explicit.",
  },
  ai: {
    label: "Typical engagement",
    title: "Move high-volume judgement from the inbox to a governed assistant, then an agent",
    situation:
      "A team classifies, drafts and routes work from email and documents, hundreds of times a week. The same judgement is applied by hand, and nothing is traced.",
    intervention:
      "Ground an assistant in approved knowledge, wrap it in a workflow with human review, let an agent take the routine next action, and keep evaluation, fallback and a kill switch.",
    delivers: [
      "Workflow baseline and stop rules",
      "Grounded assistant with evaluation",
      "Agent actions, review path and kill switch",
    ],
    change:
      "Routine work moves through a consistent path. Ambiguous cases stay with a named reviewer, and every action can be traced.",
  },
  products: {
    label: "Typical engagement",
    title: "Ship an internal app that coordinates the number, the insight and the action",
    situation:
      "Dashboards, chat exceptions and spreadsheet follow-up never meet. Nobody has one place to see the metric, the insight and the work that should happen next.",
    intervention:
      "Build a focused internal tool on trusted metrics, surface the exceptions, and let a workflow or agent act — with the same controls as the practices underneath.",
    delivers: [
      "First-release product frame",
      "Authenticated operating surface",
      "Insight-to-action loop and runbook",
    ],
    change:
      "The team works from one product surface: the number, the exception and the next action, with evidence for what to build — or stop — next.",
  },
};

export const PRACTICE_DELIVERABLES: Record<PracticeId, PracticeDeliverable[]> = {
  engineering: [
    {
      title: "Source-to-warehouse design",
      body: "Named sources, grain, owners and the target path from ingestion to serving — a design the client team can challenge before build.",
    },
    {
      title: "Orchestrated production pipeline",
      body: "Scheduled ingest, transform and load for the selected domain, with tests at each contract rather than a hero script.",
    },
    {
      title: "Data quality and observability",
      body: "Freshness, completeness and anomaly checks on the grain that matters, with alerts before the business notices.",
    },
    {
      title: "Operating handover",
      body: "Runbooks, access, cost view and pairing so the client team can run the platform without the original builder.",
    },
  ],
  analytics: [
    {
      title: "Decision and KPI map",
      body: "The calls that matter, who owns them, and where today’s number is disputed or assembled by hand.",
    },
    {
      title: "Metric contracts",
      body: "One definition, grain, owner and quality rule for each measure the room will use.",
    },
    {
      title: "Operating pack",
      body: "The automated view of performance, exceptions and next actions, with a forecast on the same metric layer.",
    },
    {
      title: "Review cadence",
      body: "The rhythm for challenge, annotation and ownership of the next decision — not another unused report.",
    },
  ],
  ai: [
    {
      title: "Workflow baseline",
      body: "Steps, volume, judgement points, failure modes and a stop rule for the first live loop.",
    },
    {
      title: "Grounding and evaluation set",
      body: "Approved knowledge, representative cases and quality bars agreed before anything ships.",
    },
    {
      title: "Human-review and agent design",
      body: "Where the assistant drafts, where the agent acts, and where a named person must still decide.",
    },
    {
      title: "Monitored production loop",
      body: "A traceable workflow in the real system, with fallback, operational signals and a kill switch.",
    },
  ],
  products: [
    {
      title: "First-release product frame",
      body: "Named users, the critical journey, the data it sits on, and what is explicitly out of scope.",
    },
    {
      title: "Production product surface",
      body: "An authenticated internal app or experience connected to real data and systems.",
    },
    {
      title: "Insight-to-action loop",
      body: "Exceptions, workflows and — where relevant — agents operating on that surface.",
    },
    {
      title: "Runbook and next-release decision",
      body: "Ownership, support path, and evidence for what to build next — or stop.",
    },
  ],
};

export const PRACTICE_STAGES: Record<PracticeId, PracticeStage[]> = {
  engineering: [
    {
      num: "01",
      title: "Understand",
      hint: "Data landscape",
      heading: "Map the data the business depends on",
      body: "Start with the systems, domains and consumers that actually move the business — not a catalogue of every table. We identify where trust, ownership and lineage already break, so the first platform work is aimed at a real operating problem. The output is a map the client team can challenge: what must be trusted first, who owns it, and what can wait.",
      points: [
        {
          title: "Critical data flows",
          text: "Which sources, transformations and consumers sit on the path that reporting, products or operations cannot afford to get wrong.",
        },
        {
          title: "Trust boundaries",
          text: "Where quality, ownership or lineage fails today — late loads, silent duplicates, or a number nobody will defend.",
        },
        {
          title: "First domain",
          text: "The smallest valuable slice worth fixing now — named sources, consumers and a success condition the business recognises.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Architecture",
      heading: "Design the platform around the problem",
      body: "Choose the architecture, contracts and operating model for the first domain worth fixing. The design is small enough to build, explicit enough for the client team to challenge, and ready to extend without a rewrite. We settle how data will move, how quality will be proven, and how the team will run the path after handover.",
      points: [
        {
          title: "Target architecture",
          text: "Storage, processing, orchestration and serving patterns that fit this domain and the way the team will run them.",
        },
        {
          title: "Data contracts",
          text: "Named owners, grains, quality expectations and interfaces between systems, so the next pipeline is not a one-off.",
        },
        {
          title: "Operating model",
          text: "How the client team will own freshness, incidents and change — including access, runbooks and what is explicitly out of the first build.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Platform",
      heading: "Build the foundation products can depend on",
      body: "Deliver tested ingestion, transformation and serving for the selected domain. Quality checks and observability sit on the path, so a break is visible before it becomes a business incident. The team sees a working pipeline they can operate, not a script only the last engineer understands.",
      points: [
        {
          title: "Production pipelines",
          text: "Orchestrated ingest, transform and load through repeatable engineering patterns — not a hero script.",
        },
        {
          title: "Quality and observability",
          text: "Freshness, completeness and failure signals on the grain that matters, with a path to act when they fire.",
        },
        {
          title: "Handover-ready path",
          text: "Documented jobs, owners and recovery steps so the foundation can run without the original builder.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Operate",
      heading: "Operate, improve and extend",
      body: "Run the new path with the client team. Use freshness, quality and cost to decide where to harden, then expand only where the next business outcome justifies it. The platform grows by repeating a proven pattern, not by adding another one-off pipeline.",
      points: [
        {
          title: "Operational visibility",
          text: "Track freshness, quality, failures and cost so the platform can be owned without the original builder.",
        },
        {
          title: "Domain expansion",
          text: "Reuse the same contracts and patterns on the next valuable domain, rather than starting from a blank pipeline.",
        },
        {
          title: "Cost and hardening",
          text: "Use operational signals to decide what to lock down, simplify or leave alone before the next domain starts.",
        },
      ],
    },
  ],
  analytics: [
    {
      num: "01",
      title: "Understand",
      hint: "Decisions",
      heading: "Map the calls that move the business",
      body: "Begin with the decisions that are slow, disputed or still made on gut feel — and the people who make them. We map the sources behind those calls so the work starts from a real meeting, not a dashboard wishlist. The first output is a short list of calls worth a trusted number, and where that number is currently lost.",
      points: [
        {
          title: "Decision inventory",
          text: "Which recurring calls need a trusted number, an owner and a next action — not another chart.",
        },
        {
          title: "Source map",
          text: "Where those numbers actually live today, and where the process loses time or trust on the way to the room.",
        },
        {
          title: "Trust gaps",
          text: "Where the same KPI means three things, lives in a side spreadsheet, or arrives too late to change the call.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Definitions",
      heading: "Turn disagreement into a shared definition",
      body: "Agree what each KPI means, how it is calculated and who owns it. Connect those definitions to the actions they are supposed to support, so the pack is built for a decision rather than a slide. Forecasts and exceptions are specified on the same layer before anything is built.",
      points: [
        {
          title: "Metric contracts",
          text: "Named definitions, grains, owners and quality rules for the measures the room will use.",
        },
        {
          title: "Decision design",
          text: "Thresholds, exceptions and the actions those signals are expected to trigger.",
        },
        {
          title: "Pack frame",
          text: "What the room will see, in what cadence, and which views are explicitly out of the first operating pack.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Operating view",
      heading: "Build the operating view around the decision",
      body: "Turn trusted data and agreed definitions into the pack the team actually opens. Forecasts and exception views sit on the same metric layer, not a side spreadsheet. The surface is automated enough to survive the next reporting cycle without a hero rebuild.",
      points: [
        {
          title: "Decision surfaces",
          text: "Dashboards, operating packs or applications designed around the questions asked in the room.",
        },
        {
          title: "Exceptions and signals",
          text: "Changes, risks and opportunities made visible when they need attention — including a short forecast on the same number.",
        },
        {
          title: "Named ownership",
          text: "Who maintains each measure, who annotates exceptions, and who owns the next action when a threshold is crossed.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Cadence",
      heading: "Turn insight into an operating rhythm",
      body: "Watch how the pack is used. Improve the metrics, forecasts and exceptions around the decisions that create value, and retire the views that do not. The cadence stays useful only if the room keeps using it to decide.",
      points: [
        {
          title: "Review cadence",
          text: "A practical rhythm for review, challenge and ownership of the next action.",
        },
        {
          title: "Continuous refinement",
          text: "Metrics, forecasts and experiments evolve with the business, still on one definition of performance.",
        },
        {
          title: "Retire or extend",
          text: "Evidence from the live pack decides which views to keep, which to stop, and which decision to bring in next.",
        },
      ],
    },
  ],
  ai: [
    {
      num: "01",
      title: "Understand",
      hint: "Workflow",
      heading: "Find the work worth making intelligent",
      body: "Map the workflow, the repeated judgement and the volume where an assistant or agent would actually save time. We separate what should be automated, what should be assisted, and what must stay with a person. The first output is a baseline of today's work, with a stop rule for anything that must not go live.",
      points: [
        {
          title: "Workflow baseline",
          text: "How the work moves today, where time is spent, and where the same judgement is applied hundreds of times.",
        },
        {
          title: "Automation boundaries",
          text: "What an assistant can draft, what an agent can do, and what a named reviewer must still decide.",
        },
        {
          title: "Risk and volume",
          text: "Where errors hurt, how often the judgement repeats, and whether the case is large enough to justify a production loop.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Intelligence design",
      heading: "Design the intelligence around the workflow",
      body: "Define behaviour, knowledge sources, evaluation and controls before anything reaches production. The design is specific enough to build and strict enough to stop if quality does not hold. Assistant, agent and human review each have a named job — not a vague 'AI layer'.",
      points: [
        {
          title: "System design",
          text: "How models, tools, data and users interact inside the real process — not a demo notebook.",
        },
        {
          title: "Control model",
          text: "Grounding, human review, permissions, fallback and a clear stop rule.",
        },
        {
          title: "Evaluation bar",
          text: "Representative cases and quality thresholds agreed in advance, including what happens when the system is unsure.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Production loop",
      heading: "Turn the workflow into a production system",
      body: "Integrate the assistant or agent into the environment where the work already happens. Tracing, monitoring and a kill switch ship with the first live loop. Routine cases move; ambiguous ones stay with a named reviewer, and every action can be inspected.",
      points: [
        {
          title: "Intelligent workflows",
          text: "Models, knowledge, tools and business systems connected so routine work can move without an inbox pile.",
        },
        {
          title: "Production controls",
          text: "Evaluation, tracing, fallback paths and operational safeguards the client team can run.",
        },
        {
          title: "Fallback path",
          text: "What happens when quality drops, a tool fails, or a reviewer is unavailable — including how to stop the loop.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Evaluation",
      heading: "Improve the system against real work",
      body: "Measure quality, cost and behaviour in production. Extend the workflow only when the evidence says the next step is safe and useful. Expansion is a decision from evaluation, not a backlog of extra prompts.",
      points: [
        {
          title: "Evaluation loops",
          text: "Test outputs against representative business cases as the work changes.",
        },
        {
          title: "Capability expansion",
          text: "Add the next action or domain when reliability and value have been demonstrated — not before.",
        },
        {
          title: "Cost and quality",
          text: "Track whether the loop still earns its keep as volume, models and the underlying work change.",
        },
      ],
    },
  ],
  products: [
    {
      num: "01",
      title: "Understand",
      hint: "Opportunity",
      heading: "Find the product worth building",
      body: "Understand the users, the current workaround and the data or workflow the product must sit on. We decide what software should exist before we discuss screens. The first output names the job to be done, who is accountable, and why the spreadsheet or handover is no longer enough.",
      points: [
        {
          title: "Problem framing",
          text: "What must change, why the current spreadsheet or handover is not enough, and who is accountable for the outcome.",
        },
        {
          title: "User and workflow insight",
          text: "Who does the work, where it stalls, and what a first useful product would take off their plate.",
        },
        {
          title: "Constraints",
          text: "Systems, data, access and operational limits the first product has to live inside — including what is out of scope.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Product",
      heading: "Turn the opportunity into a credible product",
      body: "Define the smallest product that can create value without overbuilding the first release. The frame names the user, the journey, the data it uses, and what is explicitly out of scope. Experience and architecture are designed together so the first slice can actually ship.",
      points: [
        {
          title: "Product definition",
          text: "What ships now, what waits, and what we need to learn from real use.",
        },
        {
          title: "Experience and architecture",
          text: "The user journey, the systems it connects to, and how insights or agents may act on that surface later.",
        },
        {
          title: "Success condition",
          text: "What 'working' means for the first release — who uses it, for which job, and what evidence would justify the next slice.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Release",
      heading: "Move from concept to working software",
      body: "Design and develop in visible loops, connected to real data and the controls needed to operate. The first release is an authenticated product people can use — not a prototype that pretends. Instrumentation ships with the surface so the next decision is based on use, not opinion.",
      points: [
        {
          title: "Working product",
          text: "The application, integrations and data flows required for the first real release.",
        },
        {
          title: "Production readiness",
          text: "Authentication, monitoring, analytics and the operational path the client team will run.",
        },
        {
          title: "Operating path",
          text: "Support, access, monitoring and a named owner so the product can run after the first release lands.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Growth",
      heading: "Learn from use and earn the next release",
      body: "Use adoption, behaviour and business outcomes to decide what improves, expands or stops. The next slice is a decision, not a backlog by default. Transfer, invest or stop with evidence from the live product.",
      points: [
        {
          title: "Product signals",
          text: "Where people succeed, hesitate or leave, and whether the product is changing the work.",
        },
        {
          title: "Next-release decisions",
          text: "Invest, transfer or stop based on evidence from the live product.",
        },
        {
          title: "Transfer",
          text: "How the client team owns the surface day to day, and what would have to be true before a larger release is earned.",
        },
      ],
    },
  ],
};
