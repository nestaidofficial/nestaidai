"use client";

import { motion } from "framer-motion";
import {
  PhoneIncoming,
  BrainCircuit,
  CalendarCheck,
  Rocket,
  Users,
  Headphones,
  UserCheck,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/grid-pattern";

const pricingPillars = [
  {
    icon: PhoneIncoming,
    title: "AI Receptionist",
    subtitle: "Priced by AI-handled call volume",
    description:
      "From inbound calls to intake and routing, you pay for the conversations Nestaid manages.",
  },
  {
    icon: BrainCircuit,
    title: "AI Coordinator",
    subtitle: "Priced by completed actions",
    description:
      "From call-out handling to caregiver outreach and shift coordination, pricing reflects real work completed.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduling Outcomes",
    subtitle: "Priced around support delivered",
    description:
      "When Nestaid helps move care coverage forward, your cost stays tied to actual operational value.",
  },
];

const includedFeatures = [
  {
    icon: Rocket,
    title: "Guided implementation",
    description: "Setup support to get your team live faster.",
  },
  {
    icon: Users,
    title: "Tailored onboarding",
    description: "Onboarding built around your agency's workflow.",
  },
  {
    icon: Headphones,
    title: "Technical support",
    description: "Ongoing help when your team needs it.",
  },
  {
    icon: UserCheck,
    title: "Dedicated account support",
    description: "A point of contact for rollout and growth.",
  },
];

const differentiators = [
  "No per-caregiver fees",
  "No per-client fees",
  "No setup fees on annual plans",
  "EVV-aware workflows included",
];

const integrations = [
  "AxisCare",
  "WellSky Personal Care",
  "HHAeXchange",
  "AlayaCare",
  "CareSmartz360",
];

function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] to-black/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={25}
          height={25}
          x={-12}
          y={4}
          strokeDasharray="3"
          className="absolute inset-0 h-full w-full stroke-black/[0.08] mix-blend-overlay"
        />
      </div>
    </div>
  );
}

export default function PricingClient() {
  return (
    <>
      <Navbar />
      <main className="font-sans font-light text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,white,transparent)]">
            <GridPattern
              width={48}
              height={48}
              x={-1}
              y={-1}
              strokeDasharray="2"
              className="absolute inset-0 h-full w-full stroke-black/[0.06]"
            />
          </div>

          <div className="container-max relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1 font-sans text-xs font-light tracking-wide text-muted-foreground">
                <Sparkles className="size-3" />
                Usage-based pricing
              </div>
              <h1 className="font-sans text-[2.4rem] font-light leading-[1.05] tracking-tight sm:text-[3.2rem] lg:text-[4rem]">
                Pay for the work,
                <br />
                <span className="italic" style={{ color: "#f58d42" }}>not for the seats.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                Most home care software charges per seat — penalizing growth. Nestaid scales with the work our AI agents actually do: calls answered, call-outs covered, shifts coordinated.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
                >
                  Talk to Sales
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/ai-onboarding"
                  className="inline-flex items-center gap-2 border border-dashed border-black/25 px-6 py-3 font-sans text-sm font-light text-foreground transition-all hover:bg-black/[0.02]"
                >
                  See it in action
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-black/15 py-6"
            >
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 font-sans text-sm font-light text-muted-foreground sm:text-base"
                >
                  <Check className="size-4 text-foreground/60 sm:size-[18px]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Three pricing pillars */}
        <section className="py-16 sm:py-20">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-2xl">
              <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                Three usage levers
              </p>
              <h2 className="mt-3 font-sans text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Every quote is shaped by the work, sized in a short discovery call.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              {pricingPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.1, duration: 0.7 }}
                  className="group relative overflow-hidden rounded-2xl border border-black/15 p-6 sm:p-8"
                >
                  <GridBackdrop />
                  <div className="relative">
                    <div className="mb-6 inline-flex size-10 items-center justify-center rounded-lg border border-black/20">
                      <pillar.icon className="size-4 text-foreground/80" />
                    </div>
                    <h3 className="font-sans text-lg font-light tracking-tight sm:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs font-light tracking-tight text-muted-foreground">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Big featured price card */}
        <section className="pb-16 sm:pb-20">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-black/15"
            >
              <GridBackdrop />
              <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    Custom plan
                  </p>
                  <h2 className="mt-3 font-sans text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Built around <span className="italic" style={{ color: "#F58D42" }}>your call volume,</span> not a per-seat ceiling.
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-muted-foreground">
                    If your volume drops, your bill drops with it. If it grows, you scale on usage — never on headcount. Every plan includes guided implementation, EVV-aware workflows, and integration with the home care software you already use.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
                    >
                      Get a custom quote
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <span className="font-sans text-xs font-light text-muted-foreground">
                      15-min discovery call · no obligation
                    </span>
                  </div>
                </div>

                <div className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    Integrates with
                  </p>
                  <ul className="mt-4 space-y-3">
                    {integrations.map((integration) => (
                      <li
                        key={integration}
                        className="flex items-center justify-between border-b border-black/10 pb-3 font-sans text-sm font-light"
                      >
                        <span>{integration}</span>
                        <Check className="size-3.5 text-foreground/50" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Plans Include */}
        <section className="pb-24 sm:pb-32">
          <div className="container-max">
            <div className="mx-auto mb-10 max-w-2xl">
              <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                Included on every plan
              </p>
              <h2 className="mt-3 font-sans text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                The support, onboarding, and reliability you'd expect — built in.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {includedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.7 }}
                  className="relative overflow-hidden rounded-2xl border border-black/15 p-5"
                >
                  <GridBackdrop />
                  <div className="relative">
                    <div className="mb-4 inline-flex size-8 items-center justify-center rounded-lg border border-black/20">
                      <feature.icon className="size-3.5 text-foreground/80" />
                    </div>
                    <p className="font-sans text-sm font-light tracking-tight text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-1.5 font-sans text-xs font-light leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
