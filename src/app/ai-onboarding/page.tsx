import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIOnboardingHero } from "@/components/sections/AIOnboardingHero";
import { AIOnboardingFeatures } from "@/components/sections/AIOnboardingFeatures";
import { AIOnboardingCTA } from "@/components/sections/AIOnboardingCTA";

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
