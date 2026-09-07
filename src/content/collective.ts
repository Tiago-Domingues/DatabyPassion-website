export type RoleArchetype = {
  code: string;
  title: string;
  when: string;
  owns: string;
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

export const ROLE_ARCHETYPES: RoleArchetype[] = [
  {
    code: "P/S",
    title: "Product & strategy lead",
    when: "When the opportunity, value case or product direction needs sharpening.",
    owns: "Outcome, prioritisation and the decisions that hold the work together.",
  },
  {
    code: "PD",
    title: "Product designer",
    when: "When users, service flow and adoption need to be understood before build.",
    owns: "Research, interaction design and the product experience.",
  },
  {
    code: "D/P",
    title: "Data & platform lead",
    when: "When trusted data, architecture or platform constraints shape the product.",
    owns: "Data contracts, platform choices, reliability and technical handover.",
  },
  {
    code: "AI",
    title: "AI & ML lead",
    when: "When models, evaluation or intelligent workflows are part of the answer.",
    owns: "Model choice, grounding, evaluation, monitoring and safe fallback.",
  },
  {
    code: "SE",
    title: "Software & product engineer",
    when: "When a production surface, integration or workflow needs to ship.",
    owns: "Working software, integration, instrumentation and maintainability.",
  },
  {
    code: "D/S",
    title: "Domain & security advisor",
    when: "When sector context, risk, privacy or specialised judgement changes the design.",
    owns: "Constraints, challenge and the evidence needed for a sound decision.",
  },
];

export const DELIVERY_METHOD = [
  {
    number: "01",
    title: "Understand",
    output: "A problem frame",
    body: "Map the business decision, real workflow, users, data and delivery constraints.",
  },
  {
    number: "02",
    title: "Shape",
    output: "A credible first product",
    body: "Choose what ships first, what waits, how risk is handled and what evidence matters.",
  },
  {
    number: "03",
    title: "Build",
    output: "Working software",
    body: "Deliver in short, visible loops inside the agreed stack and control model.",
  },
  {
    number: "04",
    title: "Evolve",
    output: "A portfolio decision",
    body: "Observe use, improve the product and decide whether to scale, transfer or stop.",
  },
] as const;

export const OPERATING_MODEL = [
  {
    number: "01",
    title: "One accountable lead",
    body: "A single engagement lead holds scope, quality, communication and the connection to the business outcome.",
  },
  {
    number: "02",
    title: "Specialists when the work earns them",
    body: "The collective changes with the problem. Team shape and provider access are agreed for each engagement.",
  },
  {
    number: "03",
    title: "Shared delivery record",
    body: "Decisions, designs, code and runbooks live in the engagement record so context can move with the work.",
  },
  {
    number: "04",
    title: "Scale, hand over or stop",
    body: "Evidence from the first release decides whether to expand the product, transfer ownership or end the work cleanly.",
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

export const BEST_FIT = [
  "A valuable business problem has an accountable executive or functional sponsor.",
  "A focused first product can create evidence before a wider commitment.",
  "The client team can work directly with senior practitioners and make decisions.",
  "The work crosses product, data, AI or engineering boundaries.",
] as const;

export const NOT_THE_RIGHT_FIT = [
  "Commodity staff augmentation or a pre-filled organisation chart.",
  "An AI demonstration with no owner, workflow or route to production.",
  "A transformation with no empowered sponsor or product decision-maker.",
  "A requirement for certifications or delivery scale the consultancy does not hold.",
] as const;
