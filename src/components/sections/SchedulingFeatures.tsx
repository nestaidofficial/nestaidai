"use client";

import {
  PhoneCall,
  Users,
  Activity,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Call-out handling",
    description: "Log issues quickly and trigger the next steps fast.",
  },
  {
    icon: Users,
    title: "Caregiver outreach",
    description: "Contact the right caregivers through AI-supported email, SMS, and calls.",
  },
  {
    icon: Activity,
    title: "Live scheduling status",
    description: "See where every case stands from new issue to confirmed coverage.",
  },
  {
    icon: AlertTriangle,
    title: "Escalation support",
    description: "Route urgent or sensitive cases to the right human when needed.",
  },
];

export function SchedulingFeatures() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
            Built for the scheduling work home care teams deal with every day
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group p-5 rounded-2xl border bg-white/60 backdrop-blur-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ borderColor: "#F4C6AC" }}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-black/70" />
              </div>
              <h3 className="font-semibold text-base mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
