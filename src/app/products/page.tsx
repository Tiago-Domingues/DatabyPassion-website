import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

export const metadata: Metadata = {
  title: "Digital products",
  description:
    "Focused web applications and internal products connected to real users and data.",
};

export default function ProductsPage() {
  return (
    <ServicePage
      kicker="Digital Products"
      titleRest="Products people"
      titleEm="actually use"
      sub="Websites, web apps, internal tools and digital experiences — shipped as working products, not a brochure that pretends."
      cta="Create a product brief"
      accentVar="#5bb8ff"
      stages={PRACTICE_STAGES.products}
      typicalEngagements={[TYPICAL_ENGAGEMENTS.products]}
      deliverables={[
        {
          title: "First-release product frame",
          body: "A named user, critical journey, service boundary, backlog and acceptance criteria for the smallest credible product.",
        },
        {
          title: "Production product surface",
          body: "An authenticated web application or internal tool connected to the agreed real data and systems.",
        },
        {
          title: "Instrumented workflow",
          body: "Product events and operational signals that show where people succeed, hesitate or leave the process.",
        },
        {
          title: "Runbook and next-release decision",
          body: "Ownership, support path, known constraints and an evidence-based choice for release two.",
        },
      ]}
    />
  );
}
