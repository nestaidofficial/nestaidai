import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ManagementHero } from "@/components/sections/ManagementHero";
import { ManagementFeatures } from "@/components/sections/ManagementFeatures";
import { AgencyOnboarding } from "@/components/sections/AgencyOnboarding";
import { ProductCrossLinks } from "@/components/sections/ProductCrossLinks";

export const metadata: Metadata = {
  title: "Agency Management Platform for Home Care",
  description:
    "Run your home care agency in one place. Nestaid centralizes client records, caregiver coordination, onboarding, and compliance — AI-powered.",
  alternates: { canonical: "/management" },
  openGraph: {
    title: "Agency Management Platform for Home Care | Nestaid",
    description:
      "Centralize client records, caregiver coordination, onboarding, and compliance with Nestaid's AI-powered management platform.",
    url: "/management",
    type: "website",
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
      name: "Agency Management Platform",
      item: `${SITE_URL}/management`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Care Agency Management Platform",
  serviceType: "Home Care Agency Management Software",
  provider: { "@type": "Organization", name: "Nestaid", url: SITE_URL },
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType: "Home care agencies",
  },
  description:
    "AI-native management platform for home care agencies. Centralizes client records, caregiver profiles, credentialing, care plans, EVV monitoring, and compliance — operated by AI agents.",
  url: `${SITE_URL}/management`,
};

export default function ManagementPage() {
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
        <ManagementHero />
        <ManagementFeatures />
        <AgencyOnboarding />
        <ProductCrossLinks current="management" />
      </main>
      <Footer />
    </>
  );
}
