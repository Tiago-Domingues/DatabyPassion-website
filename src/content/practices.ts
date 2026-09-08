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
  who: string;
  team: string;
  evidence: string;
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
      "A critical warehouse feed lands late or silently wrong. Reports, downstream products and month-end packs wait on a pipeline nobody owns. When a number looks off, the room cannot say whether yesterday’s load finished, which source was incomplete, or who is accountable for the grain. The next domain is already being requested on the same informal path.",
    intervention:
      "We start with the domain the business already depends on — not a platform rewrite. Map the sources, grain and owners. Put ingestion and transformation under orchestration with tests on the contracts that actually break. Serve one trusted table the rest of the organisation can use, with freshness and completeness visible before a meeting notices. Pair on the run so the client team can operate it without the original builder.",
    delivers: [
      "Source map, grain and data contracts",
      "Orchestrated warehouse pipeline for the domain",
      "Quality checks, alerts and an operating view of freshness",
      "Runbook, access and handover the next owner can run",
    ],
    change:
      "One domain runs on a path the team can operate. Completeness and freshness are visible before the business notices a break, and the next domain is a decision — not another informal feed.",
    who: "The data or platform owner, the operators who currently firefight the load, and the business consumer who depends on the number — usually finance, risk or a product lead who already feels the failure in a meeting.",
    team: "Founder-led, with a data and platform lead on contracts, architecture and reliability. Analytics joins if the served table has to become an operating view. Independent legal-partner support only if the domain carries a confidentiality or access question.",
    evidence:
      "The engagement is working when the named consumer can trust yesterday’s load without a side check, and the client team can explain a miss from the runbook. Expand to the next domain only when that operating model holds. Stop or transfer if the source cannot be contracted or no owner will take the grain.",
  },
  analytics: {
    label: "Typical engagement",
    title: "Give the room one KPI pack, with a forecast on the same number",
    situation:
      "The monthly pack is assembled by hand from three extracts and a side spreadsheet. The same KPI means different things in finance, operations and the product team. The forecast lives somewhere else, exceptions arrive as Slack messages, and the meeting spends its time debating the number instead of deciding what to do. Nobody owns the definition, so every cycle starts again.",
    intervention:
      "Sit with the people who use the pack, not only the people who produce it. Agree metric contracts — definition, grain, owner and quality rule — for the measures the room will actually use. Automate the operating view from trusted data, put a short forecast and exception list on the same grain, and attach a named review cadence so challenge and next action have a place to live.",
    delivers: [
      "Decision map and KPI / metric contracts",
      "Automated operating pack from the contracted grain",
      "Forecast and exception view on the same number",
      "Named review cadence, owners and next-action rule",
    ],
    change:
      "The recurring discussion starts from one owned number. Exceptions and a next action are explicit, and the forecast is no longer a separate artefact the room has to reconcile.",
    who: "The executive or operating sponsor who chairs the review, the analysts who currently assemble the pack, and the named owner of each contracted metric. The people who act on the exceptions must be in the room when the cadence is designed.",
    team: "Founder-led, with a product and strategy lead holding the decision cadence and a data / platform lead on the metric layer. A product designer joins if the operating view has to be used daily, not only presented. AI capability joins only if exceptions are already a high-volume judgement problem.",
    evidence:
      "The engagement is working when the sponsor can open the pack without a pre-meeting reconciliation, and each exception has an owner. Expand the metric set only when those contracts hold in a live review. Stop if no one will own the definition, or if the underlying data cannot be trusted enough to automate.",
  },
  ai: {
    label: "Typical engagement",
    title: "Move high-volume judgement from the inbox to a governed assistant, then an agent",
    situation:
      "A team classifies, drafts and routes work from email and documents, hundreds of times a week. The same judgement is applied by hand, quality depends on who is on shift, and nothing is traced. A demonstration model may already exist. It has no grounding contract, no evaluation set, no fallback, and no named person who can stop it.",
    intervention:
      "Baseline the workflow: steps, volume, judgement points, failure modes and a stop rule. Ground an assistant in approved knowledge, wrap it in a path with human review on ambiguous cases, then let an agent take only the routine next action. Evaluation, a safe fallback and a kill switch are part of the first live loop — not a later hardening phase.",
    delivers: [
      "Workflow baseline, volume and stop rules",
      "Approved knowledge, evaluation set and quality bar",
      "Grounded assistant with a named human-review path",
      "Agent actions, operational signals, fallback and kill switch",
    ],
    change:
      "Routine work moves through a consistent, traceable path. Ambiguous cases stay with a named reviewer, and the organisation can see — and stop — what the system did.",
    who: "The operations or process owner, the reviewers who currently apply the judgement, and a named accountable lead who can authorise a kill switch. Legal-partner support is scoped before any client context if the workflow carries confidentiality, regulated language or access constraints.",
    team: "Founder-led, with an AI and ML lead on grounding, evaluation and the production loop. A product designer shapes the review surface. Data and platform join if retrieval or logging has to sit on a trusted store. Practising counsel is optional and only when the engagement needs that depth.",
    evidence:
      "The engagement is working when sampled cases meet the agreed quality bar, traces exist for actions taken, and a reviewer can stop the loop. Let the agent take more of the path only when those controls hold. Stop or keep the assistant in draft-only if the knowledge cannot be approved, or if no one will own the exceptions.",
  },
  products: {
    label: "Typical engagement",
    title: "Ship an internal app that coordinates the number, the insight and the action",
    situation:
      "Dashboards, chat exceptions and spreadsheet follow-up never meet. A lead can see a metric, hear that something is off, and still have no place to record the work that should happen next. The idea for a better tool has been socialised; it has no named users, no first journey, and no connection to the data and controls underneath.",
    intervention:
      "Frame the smallest product that can be used: named users, the critical journey, the data it sits on, and what is explicitly out of scope. Build an authenticated operating surface on trusted metrics, surface the exceptions, and let a workflow or agent act on that same surface — with the same review, trace and stop rules as the practices underneath. Instrument use so the next release is a decision.",
    delivers: [
      "First-release product frame and out-of-scope list",
      "Authenticated operating surface on trusted data",
      "Insight-to-action loop with review where it is needed",
      "Runbook, ownership and evidence for the next release — or a stop",
    ],
    change:
      "The team works from one product surface: the number, the exception and the next action. What to build next — or whether to stop — is visible from real use, not from a backlog of ideas.",
    who: "The sponsor who owns the operating outcome, the people who will use the surface every week, and the owners of the metrics or workflows it sits on. If the product will trigger actions, the reviewer of those actions is in the frame before build.",
    team: "Founder-led, with a product and strategy lead and a product designer on the first journey. Data, platform or AI specialists join only for the slice the surface actually needs. The engagement lead stays close to build; this is not a brief handed to a junior bench.",
    evidence:
      "The engagement is working when the named users open the surface in the real workflow and a decision can be made from the evidence. Expand the product only when that first journey holds. Transfer or stop if adoption does not appear, or if the underlying number or action path is not trusted enough to sit in software.",
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
