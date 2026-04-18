import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchedulingHero } from "@/components/sections/SchedulingHero";
import { SchedulingProblem } from "@/components/sections/SchedulingProblem";
import { SchedulingBento } from "@/components/sections/SchedulingBento";
import { SchedulingFeatures } from "@/components/sections/SchedulingFeatures";

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
