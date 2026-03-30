"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageCircle, Settings2, GitBranch, BrainCircuit, Zap, TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    subtitle: "We listen first",
    description: "We start by understanding how your agency runs today — your current process, pain points, and what matters most to your team.",
    status: "done" as const,
  },
  {
    id: "02",
    icon: Settings2,
    title: "Tailored Setup",
    subtitle: "Your process or ours",
    description: "If you have an existing workflow, we fit around it. If not, we help you define one that works — built specifically for home care.",
    status: "done" as const,
  },
  {
    id: "03",
    icon: GitBranch,
    title: "Pipeline Built",
    subtitle: "Everything connected",
    description: "Your intake, onboarding steps, documents, and compliance checkpoints are all wired together into a clean, automated pipeline.",
    status: "in-progress" as const,
  },
  {
    id: "04",
    icon: BrainCircuit,
    title: "AI Takes Over",
    subtitle: "Agents activated",
    description: "Our AI agents begin handling call-outs, scheduling coordination, caregiver outreach, and daily operations — 24/7.",
    status: "upcoming" as const,
  },
  {
    id: "05",
    icon: Zap,
    title: "Automations Live",
    subtitle: "Zero manual follow-up",
    description: "Reminders, document expiry alerts, SMS, email, and call automations run in the background so your admin team never chases anything.",
    status: "upcoming" as const,
  },
  {
    id: "06",
    icon: TrendingUp,
    title: "Scale Lean",
    subtitle: "Grow without overhead",
    description: "Your agency grows — more clients, more caregivers — without adding headcount. The system absorbs the operational load.",
    status: "upcoming" as const,
  },
];

const statusStyle = {
  done:          { dot: "bg-black",     line: "bg-black" },
  "in-progress": { dot: "bg-[#F4C6AC]", line: "bg-black/20" },
  upcoming:      { dot: "bg-black/15",  line: "bg-black/10" },
};

export function AgencyOnboarding() {
  const [activeStep, setActiveStep] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            How Nestaid complements your operations
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            From your first call to full automation — a clear path with no guesswork.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {/* Cards row */}
          <div className="grid grid-cols-6 gap-3">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              const isUpcoming = i > activeStep;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={cn(
                    "rounded-2xl border p-4 flex flex-col gap-3 transition-all duration-1000",
                    isUpcoming
                      ? "border-black/8 bg-white/40"
                      : "border-black/10 bg-white/60 backdrop-blur-sm"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                      isUpcoming ? "bg-black/5" : "bg-black/8"
                    )}>
                      <step.icon className={cn(
                        "w-4 h-4 transition-colors duration-1000",
                        isUpcoming ? "text-black/30" : "text-foreground"
                      )} strokeWidth={1.5} />
                    </div>
                    <span className={cn(
                      "text-[10px] font-medium px-2 py-0.5 rounded-full transition-all duration-1000",
                      isDone && "bg-black/8 text-black/50 border border-black/10",
                      isActive && "bg-[#F4C6AC]/30 text-black border border-[#F4C6AC]",
                      isUpcoming && "bg-black/5 text-black/40 border border-black/10"
                    )}>
                      {step.id}
                    </span>
                  </div>
                  <div>
                    <p className={cn(
                      "font-heading text-sm leading-snug mb-0.5 transition-colors duration-1000",
                      isUpcoming && "text-black/40"
                    )}>{step.title}</p>
                    <p className={cn(
                      "text-[10px] font-medium mb-1.5 transition-colors duration-1000",
                      isUpcoming ? "text-black/25" : "text-[#F4C6AC]"
                    )}>{step.subtitle}</p>
                    <p className={cn(
                      "text-xs leading-relaxed transition-colors duration-1000",
                      isUpcoming ? "text-black/30" : "text-muted-foreground"
                    )}>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical list */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={cn("w-3.5 h-3.5 rounded-full flex-shrink-0 mt-4", statusStyle[step.status].dot)} />
                {i < steps.length - 1 && (
                  <div className={cn("w-px flex-1 my-1", statusStyle[step.status].line)} />
                )}
              </div>
              <div className={cn(
                "flex-1 rounded-2xl border p-4 mb-3",
                step.status === "upcoming"
                  ? "border-black/8 bg-white/40"
                  : "border-black/10 bg-white/60 backdrop-blur-sm"
              )}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center",
                    step.status === "upcoming" ? "bg-black/5" : "bg-black/8"
                  )}>
                    <step.icon className={cn("w-3.5 h-3.5", step.status === "upcoming" ? "text-black/30" : "text-foreground")} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className={cn("font-heading text-sm", step.status === "upcoming" && "text-black/40")}>{step.title}</p>
                    <p className={cn("text-[10px] font-medium", step.status === "upcoming" ? "text-black/25" : "text-[#F4C6AC]")}>{step.subtitle}</p>
                  </div>
                </div>
                <p className={cn("text-xs leading-relaxed", step.status === "upcoming" ? "text-black/30" : "text-muted-foreground")}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
