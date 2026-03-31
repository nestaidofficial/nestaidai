"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
            Built for the scheduling work home care teams deal with every day
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-5 rounded-2xl border bg-white/60 backdrop-blur-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ borderColor: "#F4C6AC" }}
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-black/70" />
              </div>
              <h3 className="font-semibold text-base mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
