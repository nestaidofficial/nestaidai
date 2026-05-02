import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIOnboardingHero } from "@/components/sections/AIOnboardingHero";
import { AIOnboardingFeatures } from "@/components/sections/AIOnboardingFeatures";
import { AIOnboardingCTA } from "@/components/sections/AIOnboardingCTA";

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
  },
};

export default function AIOnboardingPage() {
  return (
    <>
      <Navbar />
      <main>
        <AIOnboardingHero />
        <AIOnboardingFeatures />
        <AIOnboardingCTA />
      </main>
      <Footer />
    </>
  );
}
