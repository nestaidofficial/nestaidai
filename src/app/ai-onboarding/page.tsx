import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIOnboardingHero } from "@/components/sections/AIOnboardingHero";
import { AIOnboardingFeatures } from "@/components/sections/AIOnboardingFeatures";
import { AIOnboardingCTA } from "@/components/sections/AIOnboardingCTA";
import { ProductCrossLinks } from "@/components/sections/ProductCrossLinks";

export const metadata: Metadata = {
  title: "AI Caregiver Onboarding for Home Care Agencies",
  description:
    "Turn caregiver onboarding into one workflow. Nestaid's AI collects forms, verifies compliance, and books interviews — without phone tag.",
  alternates: { canonical: "/ai-onboarding" },
  openGraph: {
    title: "AI Caregiver Onboarding | Nestaid",
    description:
      "Automate caregiver intake, compliance verification, and interview scheduling with Nestaid's AI onboarding workflow.",
    url: "/ai-onboarding",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const SITE_URL = "https://www.nestaid.us";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Caregiver Onboarding",
      item: `${SITE_URL}/ai-onboarding`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Caregiver Onboarding",
  serviceType: "Caregiver Onboarding Automation",
  provider: { "@type": "Organization", name: "Nestaid", url: SITE_URL },
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType: "Home care agencies",
  },
  description:
    "AI-driven caregiver onboarding for home care agencies. Collects documents over text, verifies credentials, schedules interviews, and enrolls caregivers into the scheduling and EVV systems — without paperwork chasing.",
  url: `${SITE_URL}/ai-onboarding`,
};

export default function AIOnboardingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        <AIOnboardingHero />
        <AIOnboardingFeatures />
        <ProductCrossLinks current="ai-onboarding" />
        <AIOnboardingCTA />
      </main>
      <Footer />
    </>
  );
}
