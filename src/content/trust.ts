export type TrustScope = "current" | "engagement" | "disclosure";

export type TrustControl = {
  id: string;
  category:
    | "Governance"
    | "Environments"
    | "Data"
    | "AI"
    | "Delivery"
    | "Continuity"
    | "Providers"
    | "Certifications";
  title: string;
  body: string;
  scope: TrustScope;
};

export const TRUST_SCOPE_LABELS: Record<TrustScope, string> = {
  current: "Operating today",
  engagement: "Agreed per engagement",
  disclosure: "Current disclosure",
};

export const TRUST_CONTROLS: TrustControl[] = [
  {
    id: "confidentiality",
    category: "Governance",
    title: "Contractual confidentiality",
    body: "Client information is used only for the agreed engagement and handled under the confidentiality terms that apply to that work.",
    scope: "current",
  },
  {
    id: "legal-support",
    category: "Governance",
    title: "Independent legal-partner support",
    body: "Contract, privacy and AI-governance questions are handled with an independent practising counsel — not an employee and not a permanent bench member. The partner is brought in when the engagement needs that depth. Scope, confidentiality and access are agreed before any client context is shared.",
    scope: "engagement",
  },
  {
    id: "studio-environments",
    category: "Environments",
    title: "Studio-managed by default",
    body: "Work begins in named DatabyPassion-controlled environments. Access is limited to the delivery team for that engagement.",
    scope: "current",
  },
  {
    id: "client-environments",
    category: "Environments",
    title: "Client environments when required",
    body: "Delivery moves into client-controlled repositories, clouds and toolchains when architecture or policy requires it. That choice is named in the engagement terms.",
    scope: "engagement",
  },
  {
    id: "least-privilege",
    category: "Data",
    title: "Least-privilege access",
    body: "Access is limited to the systems, information and people needed for the agreed work.",
    scope: "current",
  },
  {
    id: "retention",
    category: "Data",
    title: "Retention and deletion",
    body: "What is retained, where it lives and when access or copies are removed is written into the engagement terms.",
    scope: "engagement",
  },
  {
    id: "no-training",
    category: "AI",
    title: "No unrelated model training",
    body: "Client data is not used to train DatabyPassion models or public models for unrelated purposes.",
    scope: "current",
  },
  {
    id: "ai-boundaries",
    category: "AI",
    title: "Model and workflow boundaries",
    body: "Approved providers, grounding, evaluation, human review and fallback rules are defined around the use case before the work starts.",
    scope: "engagement",
  },
  {
    id: "source-secrets",
    category: "Delivery",
    title: "Named source and secrets practices",
    body: "Repositories, secrets and access paths are documented for the work. They are not shared through public code or informal hand-offs.",
    scope: "current",
  },
  {
    id: "specialists",
    category: "Delivery",
    title: "Specialist obligations",
    body: "Specialists join an engagement under confidentiality and intellectual-property obligations appropriate to their role.",
    scope: "current",
  },
  {
    id: "continuity",
    category: "Continuity",
    title: "Visible decisions and handover",
    body: "Key decisions, code, designs and runbooks stay in the engagement record so ownership can transfer cleanly.",
    scope: "engagement",
  },
  {
    id: "providers",
    category: "Providers",
    title: "Named current providers",
    body: "The public website is hosted by Vercel. Source collaboration uses GitHub. Project cloud and model providers are named during scoping; they are not implied by this website.",
    scope: "disclosure",
  },
  {
    id: "soc2",
    category: "Certifications",
    title: "SOC 2 status",
    body: "DatabyPassion does not hold SOC 2 certification. Required controls and evidence are discussed before an engagement starts.",
    scope: "disclosure",
  },
];

export const HOME_TRUST_CONTROL_IDS = [
  "confidentiality",
  "least-privilege",
  "no-training",
  "specialists",
] as const;

export const HOME_TRUST_CONTROLS = HOME_TRUST_CONTROL_IDS.map(
  (id) => TRUST_CONTROLS.find((control) => control.id === id)!,
);
