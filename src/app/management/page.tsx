import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ManagementHero } from "@/components/sections/ManagementHero";
import { ManagementFeatures } from "@/components/sections/ManagementFeatures";
import { AgencyOnboarding } from "@/components/sections/AgencyOnboarding";
import { ManagementCTA } from "@/components/sections/ManagementCTA";

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
