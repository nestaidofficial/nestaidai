"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, MessageSquareText, UserCheck } from "lucide-react";

const highlights = [
  { icon: MessageSquareText, label: "Intake Interviews", desc: "AI conducts structured intake calls" },
  { icon: BrainCircuit,      label: "Smart Matching",    desc: "Pairs caregivers by skills & preferences" },
  { icon: UserCheck,         label: "Instant Readiness", desc: "Clients ready for care in hours" },
];

export function AIOnboardingHero() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm gap-1.5">
              <BrainCircuit className="w-4 h-4 text-foreground" strokeWidth={1.5} />
              <span className="text-foreground">AI Onboarding</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-5">
            From first inquiry to matched caregiver — AI handles the intake
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Our AI collects client responses, runs structured intake interviews, and helps match the right caregiver to each client — so your team focuses on care, not paperwork.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-14">
            <Link
              href="https://calendly.com/rahulchettri601/nestaid-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
            >
              See It in Action
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Highlight pills row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-6 pb-2"
        >
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="workflow-item w-[160px] h-[160px] border-peach"
            >
              <Icon className="w-7 h-7 text-foreground flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm font-medium text-foreground text-center leading-tight">{label}</p>
              <p className="text-xs text-muted-foreground text-center leading-tight">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
