"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  Shield,
  Users,
  ArrowUpRight,
  Zap,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/grid-pattern";

const values = [
  {
    icon: Heart,
    title: "Care First",
    description:
      "Every feature we build starts with one question: does this help caregivers spend more time with people who need them?",
  },
  {
    icon: Lightbulb,
    title: "Built for Simplicity",
    description:
      "Home care agencies shouldn't need an IT team. We design tools that anyone on your staff can pick up in minutes.",
  },
  {
    icon: Shield,
    title: "Trust & Compliance",
    description:
      "From Medicaid EVV to HIPAA, we bake compliance into the product so your team never has to think twice.",
  },
  {
    icon: Zap,
    title: "Speed That Matters",
    description:
      "When a caregiver calls out at 6 AM, you need answers fast. Nestaid keeps operations moving around the clock.",
  },
  {
    icon: Globe,
    title: "Inclusive by Design",
    description:
      "We serve agencies of all sizes — from solo coordinators to multi-location enterprises — with the same dedication.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description:
      "We ship weekly, listen to every customer, and treat feedback as the most important feature on our roadmap.",
  },
];

const stats = [
  { value: "24/7", label: "AI reception coverage" },
  { value: "Real-Time", label: "Call-out handling" },
  { value: "Less Chaos", label: "Schedule coordination" },
  { value: "Built For", label: "Home care agencies" },
];

const team = [
  {
    name: "Rahul Chettri",
    role: "Co-founder & CTO",
    bio: "Data Scientist with 4+ years of experience and a Master's in Data Science from Northeastern University. At KCC Capital Partners, he developed data-driven solutions and machine learning systems for financial intelligence — expertise he now brings to making home care operations smarter.",
    imageSrc: "/rahul.jpg",
  },
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

export default function AboutClient() {
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
              <div className="mb-6 inline-flex items-center gap-2 border border-dashed border-black/20 px-3 py-1 font-sans text-xs font-light tracking-wide text-muted-foreground">
                <Sparkles className="size-3" />
                Our Story
              </div>
              <h1 className="font-sans text-[2.4rem] font-light leading-[1.05] tracking-tight sm:text-[3.2rem] lg:text-[4rem]">
                Built from watching
                <br />
                <span className="italic" style={{ color: "#f58d42" }}>my sister coordinate care.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                I didn&rsquo;t live the problem — my sister did. Watching her run a home care agency as a coordinator showed me how the work actually happens, and how badly it needs to change. The day I graduated, I started building.
              </p>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden border border-dashed border-black/15 p-5 text-center"
                >
                  <GridBackdrop />
                  <div className="relative">
                    <p className="font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-sans text-xs font-light text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-20">
          <div className="container-max">
            <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden border border-dashed border-black/15 p-8 sm:p-10"
              >
                <GridBackdrop />
                <div className="relative">
                  <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    Mission
                  </p>
                  <h2 className="mt-3 font-sans text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Built <span className="italic" style={{ color: "#F58D42" }}>brick by brick,</span> with the people who do the work.
                  </h2>
                  <p className="mt-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
                    I knew software alone wouldn&rsquo;t fix it. I needed to automate the part that was breaking coordinators — the calls, the call-outs, the constant chasing. So I started building a full AI-native platform from scratch, one piece at a time.
                  </p>
                  <p className="mt-4 font-sans text-base font-light leading-relaxed text-muted-foreground">
                    Brick by brick — talking to coordinators, owners, and caregivers, and reshaping the product around what they actually said. No legacy assumptions, no per-seat tax. Just AI agents that handle the work, built on top of how home care really runs.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
                    >
                      See Nestaid in action
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="relative overflow-hidden border border-dashed border-black/15 p-8 sm:p-10 flex flex-col justify-between"
              >
                <GridBackdrop />
                <div className="relative">
                  <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    From the founder
                  </p>
                  <blockquote className="mt-6 font-sans text-2xl font-light leading-snug tracking-tight sm:text-3xl">
                    &ldquo;My sister was a coordinator. Watching her run an agency showed me what software was missing — so I built it, brick by brick, with the people doing the work.&rdquo;
                  </blockquote>
                </div>
                <div className="relative mt-6">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-t border-dashed border-black/15 pt-4">
                    <Image
                      src="/rahul.jpg"
                      alt="Rahul Chettri"
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover object-top"
                    />
                    <div className="-space-y-0.5">
                      <p className="font-sans text-sm font-light md:text-base">Rahul Chettri</p>
                      <p className="font-sans text-[11px] font-light tracking-tight text-muted-foreground">
                        Co-founder &amp; CTO, Nestaid
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-dashed border-black/15 pt-5">
                    <li className="grid grid-cols-[auto_1fr] items-center gap-4">
                      <span className="flex size-12 items-center justify-center overflow-hidden rounded-md border border-dashed border-black/15 bg-white">
                        <Image
                          src="/neu-logo.png"
                          alt="Northeastern University"
                          width={44}
                          height={44}
                          className="size-11 object-contain"
                        />
                      </span>
                      <div className="-space-y-0.5">
                        <p className="font-sans text-sm font-light tracking-tight text-foreground md:text-base">
                          MS, Data Science
                        </p>
                        <p className="font-sans text-xs font-light tracking-tight text-muted-foreground">
                          Northeastern University, Boston
                        </p>
                      </div>
                    </li>
                    <li className="grid grid-cols-[auto_1fr] items-center gap-4">
                      <span className="flex size-12 items-center justify-center overflow-hidden rounded-md border border-dashed border-black/15 bg-white">
                        <Image
                          src="/salesian-college.jpg"
                          alt="Salesian College"
                          width={44}
                          height={44}
                          className="size-11 object-contain"
                        />
                      </span>
                      <div className="-space-y-0.5">
                        <p className="font-sans text-sm font-light tracking-tight text-foreground md:text-base">
                          BS, Computer Science
                        </p>
                        <p className="font-sans text-xs font-light tracking-tight text-muted-foreground">
                          Salesian College, India
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-2xl">
              <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                What we stand for
              </p>
              <h2 className="mt-3 font-sans text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Values that guide every decision — they show up in how we ship, support, and grow.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v, index) => (
                <motion.div
                  key={v.title}
                  initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.7 }}
                  className="relative overflow-hidden border border-dashed border-black/15 p-6"
                >
                  <GridBackdrop />
                  <div className="relative">
                    <div className="mb-5 inline-flex size-9 items-center justify-center border border-dashed border-black/20">
                      <v.icon className="size-4 text-foreground/80" />
                    </div>
                    <h3 className="font-sans text-base font-light tracking-tight text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-20">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-2xl">
              <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                The team
              </p>
              <h2 className="mt-3 font-sans text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                A small, focused team with deep roots in home care and a shared obsession with great software.
              </h2>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-2">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.7 }}
                  className="relative overflow-hidden border border-dashed border-black/15 p-6 sm:p-8"
                >
                  <GridBackdrop />
                  <div className="relative grid grid-cols-[auto_1fr] gap-x-5">
                    {member.imageSrc ? (
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        width={72}
                        height={72}
                        className="size-16 rounded-full object-cover object-top sm:size-[72px]"
                      />
                    ) : (
                      <div className="flex size-16 items-center justify-center rounded-full bg-black font-sans text-sm font-light text-white sm:size-[72px]">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-sans text-base font-light tracking-tight">{member.name}</p>
                      <p className="font-sans text-[11px] font-light tracking-tight text-muted-foreground">
                        {member.role}
                      </p>
                      <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden border border-dashed border-black/15 p-10 text-center sm:p-14"
            >
              <GridBackdrop />
              <div className="relative mx-auto max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 border border-dashed border-black/20 px-3 py-1 font-sans text-xs font-light tracking-wide text-muted-foreground">
                  <Users className="size-3" />
                  Join us
                </div>
                <h2 className="font-sans text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Ready to transform your <span className="italic" style={{ color: "#F58D42" }}>home care operations?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                  Book a free 30-minute demo and see how Nestaid can give your team time back, cut call-out stress, and grow your agency with confidence.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
                  >
                    Book a free demo
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-dashed border-black/25 px-6 py-3 font-sans text-sm font-light text-foreground transition-all hover:bg-black/[0.02]"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
