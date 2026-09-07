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
  disclaimer: string;
};

export type PracticeStage = {
  num: string;
  title: string;
  hint: string;
  heading: string;
  body: string;
  points: { title: string; text: string }[];
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
  subhead: string;
  body: string;
  capabilities: PracticeCapability[];
};

export const PRACTICE_BACKS: Record<PracticeId, PracticeBack> = {
  engineering: {
    kicker: "01 — Data platforms",
    headline: "What runs underneath",
    subhead: "The engineering foundation behind trusted data",
    body: "From source systems to trusted datasets, we build the engineering foundations that make data reliable, scalable and usable.",
    capabilities: [
      { label: "Integration", items: ["Connectors", "APIs", "Databases", "Batch", "Streaming"] },
      { label: "Data engineering", items: ["SQL", "Spark", "Python", "Transformation", "Orchestration"] },
      { label: "Storage & serving", items: ["Warehouses", "Lakehouses", "Databases", "Data models"] },
      { label: "Reliability", items: ["Data quality", "Monitoring", "Observability", "Recovery"] },
    ],
  },
  analytics: {
    kicker: "02 — Analytics & decisions",
    headline: "The system behind better decisions",
    subhead: "From fragmented data to confident action",
    body: "We turn fragmented information into a shared understanding of the business — so teams can measure what matters, understand what is changing and act with confidence.",
    capabilities: [
      { label: "Define", items: ["KPIs", "Metrics", "Business logic", "Semantic models"] },
      { label: "Understand", items: ["Dashboards", "Analysis", "Exploration", "Reporting"] },
      { label: "Anticipate", items: ["Forecasts", "Scenarios", "Drivers", "Trends"] },
      { label: "Improve", items: ["Experiments", "Measurement", "Attribution", "Outcomes"] },
    ],
  },
  ai: {
    kicker: "03 — AI & automation",
    headline: "What makes work intelligent",
    subhead: "From repeated judgement to reliable intelligent systems",
    body: "We design and build AI-powered workflows that combine models, business knowledge and automation with the controls needed to operate them confidently.",
    capabilities: [
      { label: "Intelligence", items: ["LLMs", "Machine learning", "Classification", "Prediction"] },
      { label: "Knowledge", items: ["RAG", "Retrieval", "Search", "Context", "Knowledge bases"] },
      { label: "Automation", items: ["Workflows", "Agents", "Integrations", "Actions", "Human-in-the-loop"] },
      { label: "Control", items: ["Evaluation", "Guardrails", "Monitoring", "Traceability", "Governance"] },
    ],
  },
  products: {
    kicker: "04 — Digital products",
    headline: "What turns an idea into software",
    subhead: "From concept to products people can actually use",
    body: "We design and build digital products that connect real users, business workflows and technology into production-ready experiences.",
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

export const PRACTICE_STAGES: Record<PracticeId, PracticeStage[]> = {
  engineering: [
    {
      num: "01",
      title: "Understand",
      hint: "Data landscape",
      heading: "Map the data that the business depends on",
      body: "Identify the systems, data domains, dependencies and reliability gaps shaping the current environment.",
      points: [
        {
          title: "Critical data flows",
          text: "Which sources, transformations and consumers matter most.",
        },
        {
          title: "Trust boundaries",
          text: "Where data quality, ownership or lineage starts to break.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Architecture",
      heading: "Design the platform around the problem",
      body: "Define the target architecture, delivery boundaries and operating model for the first domain worth fixing.",
      points: [
        {
          title: "Target architecture",
          text: "Choose the right storage, processing and serving patterns.",
        },
        {
          title: "Data contracts",
          text: "Define ownership, quality expectations and interfaces between systems.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Platform",
      heading: "Build the foundation that products can depend on",
      body: "Deliver tested pipelines, governed data models and reliable access to the information that matters.",
      points: [
        {
          title: "Production pipelines",
          text: "Ingest, transform and serve data through repeatable engineering patterns.",
        },
        {
          title: "Quality and observability",
          text: "Make failures, changes and data issues visible before they become business problems.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Operate",
      heading: "Operate, improve and extend",
      body: "Monitor how the platform performs, strengthen reliability and expand into the next valuable domain.",
      points: [
        {
          title: "Operational visibility",
          text: "Track freshness, quality, failures and performance.",
        },
        {
          title: "Domain expansion",
          text: "Extend the platform where the next business outcome justifies the investment.",
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
      body: "Start with the decisions that are slow, disputed or based on gut feel — and the people who make them.",
      points: [
        {
          title: "Decision inventory",
          text: "Which calls need better evidence.",
        },
        {
          title: "Source map",
          text: "Where the numbers and signals behind those calls really live.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Definitions",
      heading: "Turn disagreement into a shared definition",
      body: "Define the metrics, business logic and ownership needed to make the numbers trusted and actionable.",
      points: [
        {
          title: "Metric contracts",
          text: "Agree what each measure means, how it is calculated and who owns it.",
        },
        {
          title: "Decision design",
          text: "Connect metrics and thresholds to the actions they are expected to support.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Operating view",
      heading: "Build the operating view around the decision",
      body: "Turn trusted data and agreed definitions into an interface that makes the next action clearer.",
      points: [
        {
          title: "Decision surfaces",
          text: "Dashboards, operating packs or applications designed around real questions.",
        },
        {
          title: "Exceptions and signals",
          text: "Make changes, risks and opportunities visible when they need attention.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Cadence",
      heading: "Turn insight into an operating rhythm",
      body: "Observe how the information is used and evolve the system around the decisions that create the most value.",
      points: [
        {
          title: "Review cadence",
          text: "Embed the right information into recurring business decisions.",
        },
        {
          title: "Continuous refinement",
          text: "Improve metrics, forecasts and views as the business changes.",
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
      body: "Map the workflow, decisions and repetitive judgement where AI can create meaningful leverage.",
      points: [
        {
          title: "Workflow baseline",
          text: "Understand how work moves today, where time is spent and where friction appears.",
        },
        {
          title: "Automation boundaries",
          text: "Identify what should be automated, assisted or kept under human control.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Intelligence design",
      heading: "Design the intelligence around the workflow",
      body: "Define the AI behaviour, knowledge sources, controls and evaluation model before moving into production.",
      points: [
        {
          title: "System design",
          text: "Shape how models, tools, data and users interact.",
        },
        {
          title: "Control model",
          text: "Define grounding, human review, permissions and failure boundaries.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Production loop",
      heading: "Turn the workflow into a production system",
      body: "Build and integrate the AI capability into the real environment where the work happens.",
      points: [
        {
          title: "Intelligent workflows",
          text: "Connect models, knowledge, tools and business systems.",
        },
        {
          title: "Production controls",
          text: "Add tracing, monitoring, fallback paths and operational safeguards.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Evaluation",
      heading: "Improve the system against real work",
      body: "Measure quality, cost and behaviour in production — then improve where the evidence supports it.",
      points: [
        {
          title: "Evaluation loops",
          text: "Continuously test outputs against representative business scenarios.",
        },
        {
          title: "Capability expansion",
          text: "Extend the workflow only when reliability and value have been demonstrated.",
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
      body: "Understand the problem, users and current workflow before deciding what software should exist.",
      points: [
        {
          title: "Problem framing",
          text: "Clarify what needs to change and why the current approach is not enough.",
        },
        {
          title: "User and workflow insight",
          text: "Understand who does the work, where friction happens and what success looks like.",
        },
      ],
    },
    {
      num: "02",
      title: "Shape",
      hint: "Product",
      heading: "Turn the opportunity into a credible product",
      body: "Define the smallest product that can create value without overbuilding the first release.",
      points: [
        {
          title: "Product definition",
          text: "Prioritise what ships now, what waits and what can be learned later.",
        },
        {
          title: "Experience and architecture",
          text: "Shape the user journey, technical approach and integration boundaries.",
        },
      ],
    },
    {
      num: "03",
      title: "Build",
      hint: "Release",
      heading: "Move from concept to working software",
      body: "Design and develop the product in visible loops, using AI-first ways of working to move faster without losing engineering discipline.",
      points: [
        {
          title: "Working product",
          text: "Build the application, integrations and data flows needed for the first real release.",
        },
        {
          title: "Production readiness",
          text: "Add authentication, monitoring, analytics and the controls needed to operate.",
        },
      ],
    },
    {
      num: "04",
      title: "Evolve",
      hint: "Growth",
      heading: "Learn from use and earn the next release",
      body: "Use real behaviour and business outcomes to decide what improves, expands or stops.",
      points: [
        {
          title: "Product signals",
          text: "Observe adoption, behaviour and the outcomes the product is creating.",
        },
        {
          title: "Next-release decisions",
          text: "Prioritise future investment based on evidence rather than assumptions.",
        },
      ],
    },
  ],
};
