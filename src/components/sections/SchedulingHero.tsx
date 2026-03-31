"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { RefreshCcw, Route, PhoneCall, CalendarClock } from "lucide-react";

const marqueeData = [
  "Who can cover this shift right now?",
  "What happens if a caregiver calls out at the last minute?",
  "How do we avoid double booking or missed visits?",
  "Can we reach available caregivers by call and text automatically?",
  "How do we recover open shifts faster without more back-and-forth?",
  "Can this work with the scheduling system we already use?",
  "How do we track who was contacted and when?",
  "What if we need to escalate to a supervisor?",
  "How do we keep clients informed during a shift change?",
  "Can we automate outreach without losing control?",
  "How do we handle last-minute shift gaps at night or on weekends?",
  "How do we reduce the back-and-forth between coordinators and caregivers?",
];

const features = [
  {
    icon: RefreshCcw,
    title: "Call-Out Recovery",
    description:
      "Detect call-outs fast, trigger outreach automatically, and keep shift recovery moving without manual back-and-forth.",
  },
  {
    icon: Route,
    title: "AI Shift Matching",
    description:
      "Match open shifts to the right caregivers based on availability, fit, and scheduling logic.",
  },
  {
    icon: PhoneCall,
    title: "Calls and Texts",
    description:
      "Reach caregivers through voice and text so your team can move faster across the channels they already use.",
  },
  {
    icon: CalendarClock,
    title: "Tailored Workflows",
    description:
      "Set rules, escalation paths, and recovery flows around how your agency already schedules care.",
  },
];

const m1 = marqueeData.slice(0, 4);
const m2 = marqueeData.slice(4, 8);
const m3 = marqueeData.slice(8);

export function SchedulingHero() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center space-y-4 mb-10"
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl">
            From scheduling chaos to coordinated care
          </h1>
        </motion.div>

        {/* Marquee rows */}
        <div className="relative overflow-hidden mb-0 max-w-3xl mx-auto">
          <div className="absolute left-0 z-10 h-full w-24 [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="absolute right-0 z-10 h-full w-24 [mask-image:linear-gradient(to_left,black,transparent)]" />

          <div className="flex flex-col gap-2 -mx-4">
            <InfiniteSlider gap={8} speed={45}>
              {m1.map((q) => (
                <span
                  key={q}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm text-foreground whitespace-nowrap"
                >
                  {q}
                </span>
              ))}
            </InfiniteSlider>

            <InfiniteSlider gap={8} speed={50} reverse>
              {m2.map((q) => (
                <span
                  key={q}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm text-foreground whitespace-nowrap"
                >
                  {q}
                </span>
              ))}
            </InfiniteSlider>

            <InfiniteSlider gap={8} speed={42}>
              {m3.map((q) => (
                <span
                  key={q}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm text-foreground whitespace-nowrap"
                >
                  {q}
                </span>
              ))}
            </InfiniteSlider>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-dashed divide-black/15 border-t border-dashed border-black/15 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-5 px-5 py-8 lg:px-6 lg:py-10"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2 pt-8 lg:pt-16">
                  <h3 className="font-heading text-2xl sm:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

