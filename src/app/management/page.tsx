import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ManagementHero } from "@/components/sections/ManagementHero";
import { ManagementFeatures } from "@/components/sections/ManagementFeatures";
import { AgencyOnboarding } from "@/components/sections/AgencyOnboarding";
import { ManagementCTA } from "@/components/sections/ManagementCTA";

export const metadata: Metadata = {
  title: "Agency Management Platform for Home Care",
  description:
    "Run your entire home care agency in one place. Nestaid centralizes client records, caregiver coordination, onboarding, and compliance into a single AI-powered platform.",
  alternates: { canonical: "/management" },
  openGraph: {
    title: "Agency Management Platform for Home Care | Nestaid",
    description:
      "Centralize client records, caregiver coordination, onboarding, and compliance with Nestaid's AI-powered management platform for home care agencies.",
    url: "/management",
    type: "website",
  },
};

export default function ManagementPage() {
  return (
    <>
      <Navbar />
      <main>
        <ManagementHero />
        <ManagementFeatures />
        <AgencyOnboarding />
        <ManagementCTA />
      </main>
      <Footer />
    </>
  );
}
