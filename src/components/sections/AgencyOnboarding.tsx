"use client";

import { useState, useEffect, useRef } from "react";
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
  },
  {
    id: "02",
    icon: Settings2,
    title: "Tailored Setup",
    subtitle: "Your process or ours",
    description: "If you have an existing workflow, we fit around it. If not, we help you define one that works — built specifically for home care.",
  },
  {
    id: "03",
    icon: GitBranch,
    title: "Pipeline Built",
    subtitle: "Everything connected",
    description: "Your intake, onboarding steps, documents, and compliance checkpoints are all wired together into a clean, automated pipeline.",
  },
  {
    id: "04",
    icon: BrainCircuit,
    title: "AI Takes Over",
    subtitle: "Agents activated",
    description: "Our AI agents begin handling call-outs, scheduling coordination, caregiver outreach, and daily operations — 24/7.",
  },
  {
    id: "05",
    icon: Zap,
    title: "Automations Live",
    subtitle: "Zero manual follow-up",
    description: "Reminders, document expiry alerts, SMS, email, and call automations run in the background so your admin team never chases anything.",
  },
  {
    id: "06",
    icon: TrendingUp,
    title: "Scale Lean",
    subtitle: "Grow without overhead",
    description: "Your agency grows — more clients, more caregivers — without adding headcount. The system absorbs the operational load.",
  },
];

const VIEW_W = 1200;
const VIEW_H = 480;
const STATION_X = [100, 300, 500, 700, 900, 1100];
const PATH_D =
  "M 100 240 Q 200 140 300 240 Q 400 340 500 240 Q 600 140 700 240 Q 800 340 900 240 Q 1000 140 1100 240";
const DISCOVERY_GRID_STYLE = {
  backgroundImage:
    "linear-gradient(to right, #F8F8F7 1px, transparent 1px), linear-gradient(to bottom, #F8F8F7 1px, transparent 1px)",
  backgroundSize: "12px 12px",
};

export function AgencyOnboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setActiveStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = (i: number) => {
    pausedRef.current = true;
    setActiveStep(i);
  };
  const handleLeave = () => {
    pausedRef.current = false;
  };

  const drawnFraction =
    steps.length > 1 ? activeStep / (steps.length - 1) : 0;

  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-14" data-aos="fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
            How Nestaid complements your operations
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From your first call to full automation — a clear path with no guesswork.
          </p>
        </div>

        {/* Desktop journey (lg+) */}
        <div
          className="hidden lg:block relative h-[480px]"
          data-aos="fade-up"
          onMouseLeave={handleLeave}
        >
          {/* Curved SVG path */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={PATH_D}
              fill="none"
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="#F4C6AC"
              strokeWidth={2.5}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              animate={{ strokeDashoffset: 1 - drawnFraction }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cards (alternating above / below) */}
          {steps.map((step, i) => {
            const isAbove = i % 2 === 0;
            const isActive = i === activeStep;
            const isDone = i < activeStep;
            const isUpcoming = i > activeStep;
            const xPct = (STATION_X[i] / VIEW_W) * 100;
            const Icon = step.icon;

            return (
              <motion.div
                key={`card-${step.id}`}
                initial={{ opacity: 0, y: isAbove ? -12 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                className={cn(
                  "absolute w-[160px] xl:w-[180px] rounded-2xl border p-4 cursor-pointer",
                  "transition-[border-color,background-color,box-shadow,opacity] duration-500",
                  isAbove ? "top-0" : "bottom-0",
                  isActive &&
                    "border-[#F4C6AC] bg-white shadow-[0_0_0_4px_rgba(244,198,172,0.18)]",
                  isDone && "border-black/10 bg-white/70 backdrop-blur-sm",
                  isUpcoming && "border-black/10 bg-white/40 opacity-70"
                )}
                style={{
                  left: `${xPct}%`,
                  transform: "translateX(-50%)",
                  ...DISCOVERY_GRID_STYLE,
                }}
                onMouseEnter={() => handleEnter(i)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                      isUpcoming ? "bg-black/5" : "bg-black/8"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors duration-500",
                        isUpcoming ? "text-black/30" : "text-foreground"
                      )}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-[11px] font-medium leading-tight",
                      isUpcoming ? "text-black/30" : "text-[#F4C6AC]"
                    )}
                  >
                    {step.subtitle}
                  </span>
                </div>
                <p
                  className={cn(
                    "font-heading text-sm leading-snug mb-1",
                    isUpcoming && "text-black/40"
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    "text-xs leading-relaxed",
                    isUpcoming ? "text-black/30" : "text-muted-foreground"
                  )}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}

          {/* Station nodes (centered on path midline) */}
          {steps.map((step, i) => {
            const isActive = i === activeStep;
            const isDone = i < activeStep;
            const isUpcoming = i > activeStep;
            const xPct = (STATION_X[i] / VIEW_W) * 100;

            return (
              <button
                key={`node-${step.id}`}
                type="button"
                aria-label={`Step ${step.id}: ${step.title}`}
                onMouseEnter={() => handleEnter(i)}
                onFocus={() => handleEnter(i)}
                onBlur={handleLeave}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                  "w-11 h-11 rounded-full flex items-center justify-center",
                  "text-xs font-semibold transition-all duration-500",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C6AC] focus-visible:ring-offset-2",
                  isDone && "bg-black text-white",
                  isActive &&
                    "bg-[#F4C6AC] text-black ring-4 ring-[#F4C6AC]/30",
                  isUpcoming &&
                    "bg-white border border-black/15 text-black/40"
                )}
                style={{ left: `${xPct}%` }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-[#F4C6AC] opacity-40 animate-ping"
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{step.id}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile / tablet — vertical timeline with animated peach spine */}
        <div className="relative lg:hidden" data-aos="fade-up">
          <div
            className="absolute left-[7px] top-4 bottom-4 w-px bg-black/10"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[7px] top-4 w-px bg-[#F4C6AC] origin-top"
            style={{ bottom: 16 }}
            animate={{ scaleY: (activeStep + 1) / steps.length }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              const isUpcoming = i > activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="flex gap-4 relative"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex flex-col items-center pt-4 z-10">
                    <span
                      className={cn(
                        "w-3.5 h-3.5 rounded-full flex-shrink-0 relative transition-colors duration-500",
                        isDone && "bg-black",
                        isActive && "bg-[#F4C6AC]",
                        isUpcoming && "bg-black/15"
                      )}
                    >
                      {isActive && (
                        <span
                          className="absolute inset-0 rounded-full bg-[#F4C6AC] opacity-50 animate-ping"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "flex-1 rounded-2xl border p-4 mb-3 transition-all duration-500",
                      isActive && "border-[#F4C6AC] bg-white",
                      isDone && "border-black/10 bg-white/60 backdrop-blur-sm",
                      isUpcoming && "border-black/10 bg-white/40"
                    )}
                    style={DISCOVERY_GRID_STYLE}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center",
                          isUpcoming ? "bg-black/5" : "bg-black/8"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-4 h-4",
                            isUpcoming ? "text-black/30" : "text-foreground"
                          )}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p
                          className={cn(
                            "font-heading text-base",
                            isUpcoming && "text-black/40"
                          )}
                        >
                          {step.title}
                        </p>
                        <p
                          className={cn(
                            "text-xs font-medium",
                            isUpcoming ? "text-black/25" : "text-[#F4C6AC]"
                          )}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        isUpcoming ? "text-black/30" : "text-muted-foreground"
                      )}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
