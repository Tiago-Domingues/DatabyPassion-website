import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { PRACTICE_DELIVERABLES, PRACTICE_STAGES, TYPICAL_ENGAGEMENTS } from "@/content/practices";

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
      deliverables={PRACTICE_DELIVERABLES.products}
    />
  );
}
