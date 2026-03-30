"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Layers3,
  RefreshCcw,
  Route,
  Sparkles,
  PhoneCall,
  Phone,
  Send,
  UserCheck,
  CheckCircle2,
  PhoneIncoming,
  MessageSquare,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

interface FeatureCardProps {
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  items?: string[];
  className?: string;
  showDiagram?: boolean;
  showBothDiagrams?: boolean;
  hideIcon?: boolean;
  hideDescription?: boolean;
}

const SchedulingDiagram = () => {
  const steps = [
    { icon: Phone, label: "Call-out detected", desc: "System identifies an open shift immediately" },
    { icon: Send, label: "Outreach started", desc: "Automated communication across all channels" },
    { icon: UserCheck, label: "Best match found", desc: "AI-driven prioritization based on skill and cost" },
    { icon: CheckCircle2, label: "Shift confirmed", desc: "Roster updated automatically in real-time" },
  ];

  return (
    <div className="mt-6 space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Layers3 className="w-4 h-4 text-foreground" />
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground">
          Nestaid Scheduling Layer
        </p>
      </div>
      
      <div className="relative space-y-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="relative">
              <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/80 p-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4C6AC]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground leading-tight mb-0.5">
                    {step.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-[calc(100%+4px)] w-px h-2 bg-black/10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ReceptionistDiagram = () => {
  const steps = [
    { icon: PhoneIncoming, label: "Call received", desc: "Inbound calls answered right away, any time of day" },
    { icon: MessageSquare, label: "Intent captured", desc: "AI identifies why the caller is reaching out" },
    { icon: ClipboardList, label: "Details collected", desc: "Key information is gathered without back-and-forth" },
    { icon: ArrowRight, label: "Next step triggered", desc: "Issue is routed, logged, or escalated automatically" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <PhoneIncoming className="w-4 h-4 text-foreground" />
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground">
          Nestaid Receptionist Layer
        </p>
      </div>
      
      <div className="relative space-y-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="relative">
              <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/80 p-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4C6AC]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground leading-tight mb-0.5">
                    {step.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-[calc(100%+4px)] w-px h-2 bg-black/10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  eyebrow,
  title,
  description,
  items = [],
  className,
  showDiagram = false,
  showBothDiagrams = false,
  hideIcon = false,
  hideDescription = false,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6",
        "flex flex-col justify-between",
        className
      )}
    >
      <div className="space-y-4">
        {!hideIcon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-foreground">
            {icon}
          </div>
        )}

        <div className="space-y-2">
          {eyebrow ? (
            <p className="text-[10px] font-medium uppercase tracking-wider text-[#F4C6AC]">
              {eyebrow}
            </p>
          ) : null}

          <h3 className="font-heading text-lg tracking-tight text-foreground">
            {title}
          </h3>

          {!hideDescription && (
            <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>

        {showDiagram && <SchedulingDiagram />}
        {showBothDiagrams && (
          <div className="flex flex-col">
            <SchedulingDiagram />
            <div className="my-8 border-t border-black/10" />
            <ReceptionistDiagram />
          </div>
        )}
      </div>

      {items.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export function SchedulingBento() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 auto-rows-[minmax(180px,auto)]"
        >
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3">
            <FeatureCard
              icon={<Layers3 className="h-5 w-5" />}
              eyebrow="AI Layers"
              title="Works with your current system"
              description="Nestaid adds AI layers on top of your existing home care software, so you can automate coordination without replacing what already works."
              showBothDiagrams={true}
              hideIcon={true}
              hideDescription={true}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
            <FeatureCard
              icon={<RefreshCcw className="h-5 w-5" />}
              eyebrow="Recovery"
              title="Outreach"
              description="Reach caregivers through calls, texts, and follow-up workflows so scheduling moves faster across the channels your team already uses."
              items={["46+ caregivers reached in 2 min", "Responses collected", "Matched with best caregiver"]}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              eyebrow="Go Live"
              title="Launch in weeks"
              description="Go live quickly with a scheduling layer tailored to your agency's process, not a long replacement project."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
            <FeatureCard
              icon={<Route className="h-5 w-5" />}
              eyebrow="Matching"
              title="AI Shift Matching"
              description="Match open shifts to the right caregivers based on availability, fit, and scheduling logic."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
            <FeatureCard
              icon={<PhoneCall className="h-5 w-5" />}
              eyebrow="Outreach"
              title="Calls and Texts"
              description="Reach caregivers through both voice and text so shift coverage can move faster across the channels teams already use."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
            <FeatureCard
              icon={<CalendarClock className="h-5 w-5" />}
              eyebrow="Workflow"
              title="Tailored Scheduling Workflows"
              description="Set up call flows, outreach logic, escalation paths, and shift recovery rules based on how your agency already operates."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
