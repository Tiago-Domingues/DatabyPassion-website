export type RoleArchetype = {
  code: string;
  title: string;
  sell: string;
  points: readonly string[];
  when: string;
  owns: string;
  body: readonly string[];
};

export const COLLECTIVE_DIFFERENTIATORS = [
  {
    title: "Senior accountability",
    body: "The person shaping the engagement stays close to the decisions, the build and the standard.",
  },
  {
    title: "A problem-shaped team",
    body: "Roles join because the work needs them—not to fill a pre-sold organisation chart.",
  },
  {
    title: "Continuity without theatre",
    body: "Decisions, artefacts and handover stay visible so progress does not depend on account layers or hidden context.",
  },
] as const;

export const FOUNDER_ROLE = {
  code: "CORE",
  title: "Founder-led",
  label: "Accountable core",
  sell: "The engagement lead stays in the work — not behind an account layer.",
  points: ["Outcome ownership", "Team shape", "Delivery standard"],
  when: "On every engagement — the relationship does not disappear behind an account layer.",
  owns: "A single engagement lead holds scope, quality, communication and the connection to the business outcome.",
  body: [
    "This is a senior practitioner who can sit with the sponsor, hold the architecture and stay close to the build. Specialists join when the work earns them; team shape and provider access are agreed for each engagement.",
    "Decisions, designs, code and runbooks live in the engagement record so context can move with the work. Evidence from the first release decides whether to expand the product, transfer ownership or end the work cleanly.",
  ],
} as const;

export const ROLE_ARCHETYPES: RoleArchetype[] = [
  {
    code: "P/S",
    title: "Product & strategy lead",
    sell: "A senior product lead who can hold the value case and the first release — not a slide-only strategist.",
    points: ["Opportunity framing", "Prioritisation", "Decision cadence"],
    when: "When the opportunity, value case or product direction needs sharpening.",
    owns: "Outcome, prioritisation and the decisions that hold the work together.",
    body: [
      "This is someone who has shaped products inside a real operating model — not a junior analyst filling a discovery deck. They sit with the sponsor, name the first credible product and keep the team pointed at evidence.",
      "They stay through Build and Evolve so the value case does not get lost between a workshop and the release.",
    ],
  },
  {
    code: "PD",
    title: "Product designer",
    sell: "A senior designer who understands users, service flow and adoption before anything is built.",
    points: ["Research", "Interaction design", "Adoption"],
    when: "When users, service flow and adoption need to be understood before build.",
    owns: "Research, interaction design and the product experience.",
    body: [
      "This is a designer who can work with executives and operators in the same week — and leave an experience the business can actually run. They do not decorate a specification after the decisions are made.",
      "They stay close to the people who must live with the product so adoption is designed in, not added as a handover slide.",
    ],
  },
  {
    code: "D/P",
    title: "Data & platform lead",
    sell: "A senior data and platform lead who can hold contracts, architecture and handover — not a tooling catalogue.",
    points: ["Data contracts", "Architecture", "Reliability"],
    when: "When trusted data, architecture or platform constraints shape the product.",
    owns: "Data contracts, platform choices, reliability and technical handover.",
    body: [
      "This is someone who has run platforms that other teams depend on. They name what can be trusted, what cannot, and which constraints will kill a clever idea in production.",
      "They leave contracts, runbooks and a handover the next owner can operate — not a diagram that only the consultant understands.",
    ],
  },
  {
    code: "AI",
    title: "AI & ML lead",
    sell: "A senior AI lead who can take a model to a governed workflow — not a demonstration without an owner.",
    points: ["Model choice", "Evaluation", "Safe fallback"],
    when: "When models, evaluation or intelligent workflows are part of the answer.",
    owns: "Model choice, grounding, evaluation, monitoring and safe fallback.",
    body: [
      "This is a practitioner who treats models as part of a product: grounding, evaluation, monitoring and a fallback when the model is wrong. They do not sell a demo with no route to production.",
      "They work with the people who own the workflow so the system is usable, reviewable and safe to run after we leave.",
    ],
  },
  {
    code: "SE",
    title: "Software & product engineer",
    sell: "A senior engineer who ships production surfaces — not a bench resource filling a ticket queue.",
    points: ["Working software", "Integration", "Maintainability"],
    when: "When a production surface, integration or workflow needs to ship.",
    owns: "Working software, integration, instrumentation and maintainability.",
    body: [
      "This is an engineer who can sit with the product decision and still write the code that ships. They work inside the agreed stack and control model, in short visible loops.",
      "They instrument the product so Evolve is based on use, and they leave something the client team can maintain.",
    ],
  },
  {
    code: "D/S",
    title: "Domain & security advisor",
    sell: "A senior advisor who changes the design when sector context, risk or privacy demands it.",
    points: ["Sector context", "Risk", "Challenge"],
    when: "When sector context, risk, privacy or specialised judgement changes the design.",
    owns: "Constraints, challenge and the evidence needed for a sound decision.",
    body: [
      "This is specialised judgement brought in because the work needs it — not a checkbox review at the end. They challenge the design while it can still change.",
      "They leave the constraints and evidence in the engagement record so the next decision does not depend on a conversation that was never written down.",
    ],
  },
];

export const HOW_WE_WORK = {
  titleLead: "Product cadence. Consultancy judgement.",
  titleEm: "Understand → Shape → Build → Evolve.",
  intro: [
    "The method was not licensed from a playbook. It is how senior product, engineering and consulting work already holds together when the outcome is software a business can run: Agile and Scrum for inspectable cadence, consultancy delivery for framing, decision rights and sponsor artefacts, and the operating habits of technology teams that ship inside real enterprises.",
    "It matured in our own delivery — tightened each time a workshop, a sprint or a handover failed to earn the next commitment. Understand, Shape, Build and Evolve is the sequence a sponsor can inspect. Each stage ends with a useful artefact and an explicit decision to go, reshape or stop. Scrum stays in service of that sequence; it does not become the work.",
  ],
} as const;

export const DELIVERY_METHOD = [
  {
    number: "01",
    title: "Understand",
    output: "A problem frame",
    body: "Map the business decision, real workflow, users, data and delivery constraints.",
    detail: [
      "Before anything is designed or built, we sit with the people who own the outcome. We map the decision they need to make, the workflow that exists today, who actually uses it, which data can be trusted, and the constraints that will kill a clever idea in production.",
      "The artefact is a problem frame the sponsor can recognise — not a discovery programme that invents a new transformation. If the problem is not valuable, owned or solvable in a first product, we say so here.",
    ],
  },
  {
    number: "02",
    title: "Shape",
    output: "A credible first product",
    body: "Choose what ships first, what waits, how risk is handled and what evidence matters.",
    detail: [
      "We do not sell a transformation. We choose the smallest product that can create evidence: what ships first, what waits, how risk is handled, and what “good” looks like in the business.",
      "Scope, team shape and controls are agreed here so Build is execution, not a second negotiation. The collective changes with that shape — specialists join for the decisions and delivery the work actually needs.",
    ],
  },
  {
    number: "03",
    title: "Build",
    output: "Working software",
    body: "Deliver in short, visible loops inside the agreed stack and control model.",
    detail: [
      "Senior people stay in the work. Delivery happens in short, visible loops inside the stack and control model you already run — or the one we agree for the engagement. Those loops follow Agile and Scrum discipline — planning, review and backlog — without turning the engagement into process theatre.",
      "You see working software, not status theatre. Decisions, designs and code live in the engagement record so context does not sit in an account layer or in someone’s head.",
    ],
  },
  {
    number: "04",
    title: "Evolve",
    output: "A portfolio decision",
    body: "Observe use, improve the product and decide whether to scale, transfer or stop.",
    detail: [
      "After release we watch real use. Improve what is working, transfer ownership when the client team can run it, or stop cleanly when the evidence does not support more investment.",
      "Expansion is a decision, not an assumption. A useful first product can earn the next — scale the product, add the next use case, or end the work. The next commitment is earned with evidence, not momentum.",
    ],
  },
] as const;

export const COLLECTIVE_PRINCIPLES = [
  {
    code: "01",
    title: "AI is the default",
    body: "Every task starts with how AI should help. People still own judgement, quality and the call to ship.",
  },
  {
    code: "02",
    title: "Match the artefact to the room",
    body: "A working note, a workshop and an executive product are not the same deliverable. Polish follows audience, not habit.",
  },
  {
    code: "03",
    title: "Need before tool",
    body: "Stack and tooling follow the problem and the people who must live with it. We do not install a product looking for a use.",
  },
  {
    code: "04",
    title: "Build first, then harden",
    body: "Prefer a working increment over a perfect plan. Add contracts, tests and controls as the product earns them.",
  },
  {
    code: "05",
    title: "Assume, name it, move",
    body: "When a decision is blocked, document the assumption and continue. Challenge the assumption — do not wait in silence.",
  },
  {
    code: "06",
    title: "Build and show",
    body: "Every increment leaves a shareable artefact the client can see, challenge and take into the business.",
  },
  {
    code: "07",
    title: "Involve to adopt",
    body: "Move fast to learn. Bring users into the work when they must live with the result — adoption is not a handover slide.",
  },
  {
    code: "08",
    title: "Design for people and agents",
    body: "Interfaces, APIs and context should be usable by humans today and by agents tomorrow. Document in the repo, not in someone’s head.",
  },
  {
    code: "09",
    title: "Work the way we recommend",
    body: "The collective uses the same AI-first, visible, accountable model it asks clients to trust. We do not sell a way of working we will not run ourselves.",
  },
  {
    code: "10",
    title: "Leave something they can run",
    body: "Code, contracts, runbooks and product context stay useful after we leave. The next release is earned with evidence, not momentum.",
  },
] as const;

export const BOUTIQUE_CONTRAST = {
  label: "The boutique",
  title: "Senior people stay in the work",
  points: [
    "The person shaping the engagement stays close to decisions, the build and the standard.",
    "The team is assembled around the problem — not a pre-sold organisation chart.",
    "A focused first product creates evidence before a wider commitment.",
    "Decisions, artefacts and handover stay visible. No account layer.",
  ],
} as const;

export const TRADITIONAL_CONTRAST = {
  label: "Traditional consulting",
  title: "Distance between the promise and the work",
  points: [
    "A partner sells the work; a junior bench is expected to deliver it.",
    "Staff augmentation or a pre-filled organisation chart billed as a team.",
    "Decks, workshops and AI demonstrations with no owner and no route to production.",
    "Programme machinery, scale claims or certifications this consultancy does not hold.",
  ],
} as const;
