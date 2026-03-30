"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  FileText,
  Send,
  Activity,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: AlertCircle,
    title: "Call-out detected",
    subtitle: "Issue logged",
    description: "A caregiver calls out or a shift opens up. The system captures the details and creates a new case automatically.",
    status: "done" as const,
  },
  {
    id: "02",
    icon: FileText,
    title: "Case created",
    subtitle: "Workflow starts",
    description: "The open shift is logged with all relevant details — time, location, client needs, and required skills.",
    status: "done" as const,
  },
  {
    id: "03",
    icon: Send,
    title: "AI starts outreach",
    subtitle: "Contacts sent",
    description: "Nestaid reaches out to qualified caregivers via email, SMS, and calls based on availability and preferences.",
    status: "in-progress" as const,
  },
  {
    id: "04",
    icon: Activity,
    title: "Responses tracked live",
    subtitle: "Real-time updates",
    description: "See who's been contacted, who responded, and who's available — all updating live as responses come in.",
    status: "upcoming" as const,
  },
  {
    id: "05",
    icon: CheckCircle,
    title: "Shift confirmed",
    subtitle: "Coverage secured",
    description: "Once a caregiver accepts, the shift is confirmed, schedules are updated, and everyone is notified automatically.",
    status: "upcoming" as const,
  },
];

const statusStyle = {
  done:          { dot: "bg-black",     line: "bg-black" },
  "in-progress": { dot: "bg-[#F4C6AC]", line: "bg-black/20" },
  upcoming:      { dot: "bg-black/15",  line: "bg-black/10" },
};

export function SchedulingHowItWorks() {
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
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            From call-out to confirmed coverage
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            How Nestaid fits into your scheduling workflow
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {/* Static line + dots */}
          <div className="relative mb-8 h-6">
            <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-black/15 -translate-y-1/2" />
            {steps.map((step, i) => {
              const isDone = i < activeStep;
              const isActive = i === activeStep;
              return (
                <div
                  key={step.id}
                  className="absolute"
                  style={{
                    left: `calc(${(i / (steps.length - 1)) * 80}% + 10%)`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={cn(
                    "rounded-full transition-all duration-300",
                    isActive ? "w-4 h-4 bg-[#F4C6AC]" : isDone ? "w-3 h-3 bg-black" : "w-3 h-3 bg-black/15"
                  )} />
                </div>
              );
            })}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-5 gap-3">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              const isUpcoming = i > activeStep;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={cn(
                    "rounded-2xl border p-4 flex flex-col gap-3 transition-all duration-300",
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
                        "w-4 h-4 transition-colors duration-300",
                        isUpcoming ? "text-black/30" : "text-foreground"
                      )} strokeWidth={1.5} />
                    </div>
                    <span className={cn(
                      "text-[10px] font-medium px-2 py-0.5 rounded-full transition-all duration-300",
                      isDone && "bg-black text-white",
                      isActive && "bg-[#F4C6AC]/30 text-black border border-[#F4C6AC]",
                      isUpcoming && "bg-black/5 text-black/40 border border-black/10"
                    )}>
                      {step.id}
                    </span>
                  </div>
                  <div>
                    <p className={cn(
                      "font-heading text-sm leading-snug mb-0.5 transition-colors duration-300",
                      isUpcoming && "text-black/40"
                    )}>{step.title}</p>
                    <p className={cn(
                      "text-[10px] font-medium mb-1.5 transition-colors duration-300",
                      isUpcoming ? "text-black/25" : "text-[#F4C6AC]"
                    )}>{step.subtitle}</p>
                    <p className={cn(
                      "text-xs leading-relaxed transition-colors duration-300",
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
