import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Usage-based Plans for Home Care",
  description:
    "Nestaid's usage-based pricing scales with call volume, coordination needs, and agency complexity. Pay for the work — not for unused seats.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Nestaid Pricing — Usage-based Plans for Home Care",
    description:
      "Value-based pricing across AI Receptionist, AI Coordinator, and Scheduling Outcomes.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
