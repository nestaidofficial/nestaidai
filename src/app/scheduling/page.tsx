import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchedulingHero } from "@/components/sections/SchedulingHero";
import { SchedulingProblem } from "@/components/sections/SchedulingProblem";
import { SchedulingBento } from "@/components/sections/SchedulingBento";
import { SchedulingFeatures } from "@/components/sections/SchedulingFeatures";

export default function SchedulingPage() {
  return (
    <>
      <Navbar />
      <main>
        <SchedulingHero />
        <SchedulingProblem />
        <SchedulingBento />
        <SchedulingFeatures />
      </main>
      <Footer />
    </>
  );
}
