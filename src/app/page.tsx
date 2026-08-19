import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Credibility } from "@/components/home/credibility";
import { Problems } from "@/components/home/problems";
import { Opportunities } from "@/components/home/opportunities";
import { ServicePreview } from "@/components/home/service-preview";
import { HowWeWork } from "@/components/home/how-we-work";
import { SolutionBento } from "@/components/home/solution-bento";
import { CasePreview } from "@/components/home/case-preview";
import { WhyUs } from "@/components/home/why-us";
import { InsightsPreview } from "@/components/home/insights-preview";
import { CtaBand } from "@/components/home/cta-band";
import { site } from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  areaServed: "ID",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.contact.email,
    telephone: site.contact.phone,
    availableLanguage: ["Indonesian", "English"],
  },
};

export const metadata: Metadata = {
  description: site.description,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <Credibility />
      <Problems />
      <Opportunities />
      <ServicePreview />
      <HowWeWork />
      <SolutionBento />
      <CasePreview />
      <WhyUs />
      <InsightsPreview />
      <CtaBand />
    </>
  );
}