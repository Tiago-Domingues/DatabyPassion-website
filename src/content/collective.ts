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
