"use client";

import { Badge } from "@/components/ui/badge";
import NessaCrmFlow from "@/components/ui/nessa-crm-flow";
import {
  Users,
  CalendarDays,
  ShieldCheck,
  MapPin,
  Phone,
  UserCog,
} from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Client & Caregiver Management",
    description:
      "Keep all client profiles, care plans, and caregiver credentials in one place — always accurate and easy to access.",
  },
  {
    icon: CalendarDays,
    title: "AI Coordinator & Receptionist",
    description:
      "Nestaid answers calls, handles call-outs, reaches caregivers, and helps keep schedules on track 24/7.",
  },
  {
    icon: MapPin,
    title: "Electronic Visit Verification (EVV)",
    description:
      "Track visits with GPS-based check-in and check-out — fully compliant with Medicaid EVV requirements.",
  },
  {
    icon: ShieldCheck,
    title: "AI-Powered Onboarding",
    description:
      "Help clients and caregivers complete onboarding faster with guided workflows, reminders, and progress tracking.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
              One super employee for home care operations
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-lg">
              Nestaid handles scheduling, caregiver coordination, EVV, and daily operations — so your team can focus on care and growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-5 rounded-2xl border bg-white/60 backdrop-blur-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderColor: "#F4C6AC" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-3">
                    <pillar.icon className="w-5 h-5 text-black/70" />
                  </div>
                  <h3 className="font-semibold text-base mb-1.5">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — diagram */}
          <div className="flex justify-center lg:justify-end">
            <NessaCrmFlow 
              className="h-[620px] sm:h-[540px] lg:h-[540px]"
              bottomBadges={{ first: "AI Receptionist", second: "AI Coordinator" }}
              bottomIcons={{ first: Phone, second: UserCog }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
