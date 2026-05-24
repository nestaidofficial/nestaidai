import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchedulingHero } from "@/components/sections/SchedulingHero";
import { SchedulingProblem } from "@/components/sections/SchedulingProblem";
import { SchedulingBento } from "@/components/sections/SchedulingBento";
import { SchedulingFeatures } from "@/components/sections/SchedulingFeatures";
import { ProductCrossLinks } from "@/components/sections/ProductCrossLinks";

export const metadata: Metadata = {
  title: "AI Scheduling & Call-Out Coordination for Home Care",
  description:
    "Handle call-outs, open shifts, and caregiver coordination without the 6 AM scramble. Nestaid's AI coordinator keeps schedules moving 24/7.",
  alternates: { canonical: "/scheduling" },
  openGraph: {
    title: "AI Scheduling & Call-Out Coordination | Nestaid",
    description:
      "Handle call-outs, open shifts, and caregiver coordination 24/7 with Nestaid's AI coordinator.",
    url: "/scheduling",
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
      name: "AI Scheduling & Call-Out Coordination",
      item: `${SITE_URL}/scheduling`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Scheduling & Call-Out Coordination",
  serviceType: "Home Care Scheduling and Call-Out Coordination",
  provider: { "@type": "Organization", name: "Nestaid", url: SITE_URL },
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType: "Home care agencies",
  },
  description:
    "AI-native scheduling and Coverage Coordinator Agent for home care agencies. Fills caregiver call-outs in under 5 minutes with parallel voice and text outreach to qualified caregivers.",
  url: `${SITE_URL}/scheduling`,
};

export default function SchedulingPage() {
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
        <SchedulingHero />
        <SchedulingProblem />
        <SchedulingBento />
        <SchedulingFeatures />
        <ProductCrossLinks current="scheduling" />
      </main>
      <Footer />
    </>
  );
}
