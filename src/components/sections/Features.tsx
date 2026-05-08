"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NessaCrmFlow from "@/components/ui/nessa-crm-flow";
import SmoothWavyCanvas from "@/components/ui/smooth-wavy-canvas";
import {
  Phone,
  UserCog,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

const supportingCards = [
  {
    eyebrow: "Records",
    title: "Client & Caregiver Management",
    description:
      "Keep all client profiles, care plans, and caregiver credentials in one place — always accurate and easy to access.",
  },
  {
    eyebrow: "EVV",
    title: "Electronic Visit Verification",
    description:
      "Track visits with GPS-based check-in and check-out — fully compliant with Medicaid EVV requirements.",
  },
  {
    eyebrow: "Onboarding",
    title: "AI-Powered Onboarding",
    description:
      "Help clients and caregivers complete onboarding faster with guided workflows, reminders, and progress tracking.",
  },
];

// ────────── Chat mockup ──────────

type Bubble =
  | { kind: "ai"; text: string }
  | { kind: "user"; text: string }
  | { kind: "typing"; side: "ai" | "user" }
  | { kind: "card"; title: string; subtitle: string };

const BUBBLES: Record<string, Bubble> = {
  "ai-1": {
    kind: "ai",
    text: "Hi Maya — Sarah's Tuesday 9 AM visit just opened up. Are you free to cover?",
  },
  "user-typing": { kind: "typing", side: "user" },
  "user-1": {
    kind: "user",
    text: "Yes, I can take it 👍",
  },
  "ai-typing": { kind: "typing", side: "ai" },
  "ai-2": {
    kind: "ai",
    text: "Perfect — you're booked. Address & care plan are in your app.",
  },
  card: {
    kind: "card",
    title: "Shift confirmed",
    subtitle: "Tue · 9:00 AM · Johnson residence",
  },
};

const PHASES: string[][] = [
  [],
  ["ai-1"],
  ["ai-1", "user-typing"],
  ["ai-1", "user-1"],
  ["ai-1", "user-1", "ai-typing"],
  ["ai-1", "user-1", "ai-2"],
  ["ai-1", "user-1", "ai-2", "card"],
];

// delay before transitioning OUT of each phase
const PHASE_DELAYS = [800, 1500, 1100, 1500, 1100, 1500, 2800];

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-[3px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-1.5 w-1.5 rounded-full bg-current"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -1, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </span>
  );
}

const SMS_GREEN = "#34C759";

function ChatBubble({
  bubble,
  showRead,
  readDate,
}: {
  bubble: Bubble;
  showRead?: boolean;
  readDate?: string;
}) {
  if (bubble.kind === "typing") {
    const isAi = bubble.side === "ai";
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "flex w-full",
          isAi ? "justify-start" : "justify-end"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-3.5 py-3",
            isAi
              ? "bg-[#E9E9EB] text-foreground/45 rounded-bl-md"
              : "text-white/80 rounded-br-md"
          )}
          style={!isAi ? { backgroundColor: SMS_GREEN, opacity: 0.7 } : undefined}
        >
          <TypingDots />
        </div>
      </motion.div>
    );
  }

  if (bubble.kind === "card") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.96 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex w-full justify-center pt-1"
      >
        <div className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl shrink-0">
            <Image
              src="/calendar-icon.png"
              alt="Calendar"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-body text-sm font-semibold text-foreground leading-tight inline-flex items-center gap-1.5">
              {bubble.title}
              <CheckCircle2
                className="h-3.5 w-3.5"
                style={{ color: SMS_GREEN }}
                strokeWidth={2.25}
              />
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {bubble.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  const isAi = bubble.kind === "ai";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex w-full",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div className={cn("max-w-[82%] flex flex-col", isAi ? "items-start" : "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-3.5 py-2 text-[15px] leading-snug",
            isAi
              ? "bg-[#E9E9EB] text-foreground rounded-bl-md"
              : "text-white rounded-br-md"
          )}
          style={!isAi ? { backgroundColor: SMS_GREEN } : undefined}
        >
          {bubble.text}
        </div>
        {!isAi && showRead && readDate && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] text-muted-foreground mt-1 mr-1"
          >
            <span className="font-semibold text-foreground/70">Read</span>{" "}
            <span className="tabular-nums">{readDate}</span>
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

function formatHeader(d: Date) {
  const day = d.toLocaleDateString("en-US", { weekday: "short" });
  const md = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${day}, ${md} at ${time}`;
}

function formatReadDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
}

function CallMockup() {
  const [phase, setPhase] = useState(0);
  const [now, setNow] = useState<Date | null>(null);

  // Initialize and tick the live clock every minute
  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const delay = PHASE_DELAYS[phase] ?? 2000;
    const t = setTimeout(() => {
      setPhase((p) => (p >= PHASES.length - 1 ? 0 : p + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [phase]);

  const visible = PHASES[phase];

  // Show "Read" under the user's last delivered bubble once Nestaid begins responding (phase >= 4)
  const showRead = phase >= 4;
  const readDate = now ? formatReadDate(now) : "";
  const headerLabel = now ? formatHeader(now) : " "; // non-breaking space placeholder during SSR

  return (
    <div className="relative mt-6 rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Header — iMessage-style contact */}
      <div className="flex flex-col items-center justify-center px-4 py-3 border-b border-black/5 bg-white">
        <div className="relative mb-1">
          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-black/5">
            <Image
              src="/logo.svg"
              alt="Nestaid"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white"
            style={{ backgroundColor: SMS_GREEN }}
          />
        </div>
        <p className="text-[13px] font-medium text-foreground leading-tight">
          Nestaid
        </p>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          Active now
        </p>
      </div>

      {/* Conversation */}
      <div className="px-4 py-4 space-y-2 min-h-[340px] bg-white">
        {/* Live date/time separator */}
        <p
          className="text-center text-[11px] text-muted-foreground py-1 select-none"
          suppressHydrationWarning
        >
          {headerLabel}
        </p>

        <AnimatePresence mode="popLayout">
          {visible.map((id) => (
            <ChatBubble
              key={id}
              bubble={BUBBLES[id]}
              showRead={id === "user-1" && showRead}
              readDate={readDate}
            />
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
            One smart teammate for home care operations
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-2xl">
            Nestaid handles scheduling, caregiver coordination, EVV, and daily
            operations — so your team can focus on care and growth.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Hero card — AI Coordinator */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-3"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <SmoothWavyCanvas
                backgroundColor="#F8F8F7"
                primaryColor="52, 52, 52"
                secondaryColor="98, 98, 98"
                accentColor="130, 130, 130"
                lineOpacity={0.8}
                animationSpeed={0.006}
              />
              {/* Glow accent */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#F8F8F6] blur-3xl" />

              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-wider text-[#C97B5B] mb-3">
                  AI Coordinator & Receptionist
                </p>
                <h3 className="font-body font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-3 max-w-md">
                  Answers calls, handles call-outs, keeps schedules on track —
                  24/7.
                </h3>
                <p className="text-sm sm:text-[15px] text-muted-foreground max-w-md leading-relaxed">
                  Every update happens in real time, so coordinators stay in
                  control without chasing calls or texts.
                </p>
                <CallMockup />
              </div>
            </div>
          </motion.div>

          {/* Supporting cards */}
          {supportingCards.map((card) => {
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="lg:col-span-1 lg:row-span-1"
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#F4C6AC]/60">
                  <SmoothWavyCanvas
                    backgroundColor="#F8F8F7"
                    primaryColor="52, 52, 52"
                    secondaryColor="98, 98, 98"
                    accentColor="130, 130, 130"
                    lineOpacity={0.8}
                    animationSpeed={0.006}
                  />
                  <div className="relative z-10">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#C97B5B] mb-1.5">
                    {card.eyebrow}
                  </p>
                  <h3 className="font-body font-bold text-lg sm:text-xl tracking-tight text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CRM Flow diagram — centered below bento */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <NessaCrmFlow
            className="h-[620px] sm:h-[540px] lg:h-[540px] w-full max-w-3xl"
            bottomBadges={{ first: "AI Receptionist", second: "AI Coordinator" }}
            bottomIcons={{ first: Phone, second: UserCog }}
          />
        </motion.div>
      </div>
    </section>
  );
}
