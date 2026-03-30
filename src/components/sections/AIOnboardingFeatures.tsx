"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  PhoneCall, ClipboardList, Brain, UserCheck2, FileCheck2,
  HeartHandshake, MessageCircleQuestion, ScanSearch, NotebookPen,
  ShieldCheck, CalendarCheck, Sparkles,
} from "lucide-react";

const intakeItems = [
  { icon: PhoneCall,            label: "AI Intake Call",         desc: "Automated voice or chat interview" },
  { icon: MessageCircleQuestion,label: "Needs Assessment",       desc: "Structured questions about care needs" },
  { icon: ClipboardList,        label: "Preference Capture",     desc: "Schedule, language, gender preferences" },
  { icon: ScanSearch,           label: "Caregiver Matching",     desc: "Skills, availability, and fit analysis" },
  { icon: NotebookPen,          label: "Summary Generated",      desc: "AI creates a ready-to-review profile" },
  { icon: FileCheck2,           label: "Documents Requested",    desc: "Auto-send required form checklist" },
  { icon: ShieldCheck,          label: "Compliance Verified",    desc: "Flags missing requirements instantly" },
];

const matchSteps = [
  {
    id: "01",
    icon: Brain,
    title: "AI Supports Intake",
    description: "AI helps guide intake through voice or chat using the workflow your agency wants to follow.",
  },
  {
    id: "02",
    icon: ScanSearch,
    title: "Information Gets Organized",
    description: "Client details, care needs, preferences, schedule, and requirements are structured into a clear record for your team.",
  },
  {
    id: "03",
    icon: UserCheck2,
    title: "AI Surfaces Insights",
    description: "AI highlights useful context, possible caregiver options, and recommended next steps based on your workflow.",
  },
  {
    id: "04",
    icon: HeartHandshake,
    title: "Your Team Reviews",
    description: "Admins review the profile, make decisions, and stay in control of approvals and scheduling.",
  },
  {
    id: "05",
    icon: CalendarCheck,
    title: "Care Moves Forward Faster",
    description: "With less back-and-forth and better visibility, your team can move cases forward more efficiently.",
  },
];

export function AIOnboardingFeatures() {
  return (
    <section className="section-padding">
      <div className="container-max">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            How AI Onboarding works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            Every new client goes through a consistent, AI-guided process — so nothing gets missed and care starts faster.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-6 sm:grid-cols-5">

          {/* Left large card — animated intake list */}
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-2 sm:rounded-2xl flex flex-col">
            <div className="p-6 pb-2">
              <p className="text-lg sm:text-xl lg:text-2xl font-heading text-center">
                Every intake step, handled automatically.
              </p>
            </div>
            <CardContent className="relative flex-1 px-4 pt-8 pb-6 overflow-hidden">
              <AnimatedList delay={400}>
                {intakeItems.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-peach bg-white/80 px-4 py-3.5"
                  >
                    <Icon className="w-5 h-5 text-foreground flex-shrink-0" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground leading-tight">{label}</p>
                      <p className="text-xs text-muted-foreground leading-tight truncate">{desc}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
            </CardContent>
          </Card>

          {/* Right tall card — matching steps */}
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-2xl">
            <CardHeader>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl sm:text-2xl mb-3">
                  From Inquiry to Matched Caregiver
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
                  The AI walks every new client through a thorough intake, then surfaces the best caregiver match — so your coordinators make great decisions fast.
                </p>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-8 md:px-8">
              <div className="flex flex-col gap-0">
                {matchSteps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                      </div>
                      {i < matchSteps.length - 1 && (
                        <div className="w-px flex-1 my-1 bg-black/10" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#F4C6AC]">{step.id}</span>
                        <p className="font-heading text-base leading-snug">{step.title}</p>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom full-width card — capabilities grid */}
          <div className="sm:col-span-5 mt-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl sm:text-3xl">What the AI captures during intake</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Structured data collected automatically — no manual forms, no missed details.
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-peach">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: CalendarCheck,  label: "Schedule availability", desc: "Preferred days, times, and frequency" },
                  { icon: ClipboardList,  label: "Care level needed", desc: "ADL support, medical care, companionship" },
                  { icon: Brain,          label: "Cognitive & physical needs", desc: "Mobility, memory, safety considerations" },
                  { icon: MessageCircleQuestion, label: "Language preference", desc: "Primary language and communication needs" },
                  { icon: UserCheck2,     label: "Caregiver gender preference", desc: "Client comfort and cultural preferences" },
                  { icon: NotebookPen,    label: "Medical conditions", desc: "Diagnoses, medications, allergies" },
                  { icon: HeartHandshake, label: "Family contact info", desc: "Emergency contacts and decision-makers" },
                  { icon: ShieldCheck,    label: "Insurance & authorization", desc: "Coverage, authorization numbers, billing" },
                ].map(({ icon: Icon, label, desc }, idx) => (
                  <div
                    key={label}
                    className={`bg-white/60 backdrop-blur-sm p-6 space-y-3 border-peach ${
                      idx < 4 ? 'border-b' : ''
                    } ${
                      idx % 4 !== 3 ? 'lg:border-r' : ''
                    } ${
                      idx % 2 === 0 ? 'sm:border-r sm:lg:border-r-0' : ''
                    } ${
                      idx === 1 || idx === 3 ? 'sm:lg:border-r' : ''
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Icon className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <h4 className="text-sm font-medium text-foreground leading-tight">{label}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
