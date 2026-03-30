"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  FileText, Shield, UserRoundPlus, MessageSquareText, BrainCircuit, Shuffle, HeartHandshake,
  CalendarClock, ClipboardCheck, Stethoscope, UserCog, BookUser, AlertCircle, ShieldCheck,
  Users, Search, Plus,
} from "lucide-react";

const featureItems = [
  { icon: CalendarClock,   label: "Document expiries",       desc: "Track cert and ID renewal dates" },
  { icon: Stethoscope,     label: "Care requirements",        desc: "Client-specific needs and preferences" },
  { icon: ClipboardCheck,  label: "Skills needed",            desc: "Match caregivers to care demands" },
  { icon: UserCog,         label: "Client preferences",       desc: "Preferred schedules, caregivers, notes" },
  { icon: BookUser,        label: "Contacts & notes",         desc: "Emergency contacts and care notes" },
  { icon: AlertCircle,     label: "Incidents",                desc: "Log and track incident reports" },
  { icon: ShieldCheck,     label: "Compliance alerts",        desc: "Stay ahead of audit requirements" },
];

export function ManagementFeatures() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid gap-6 sm:grid-cols-5">
          {/* Large card - Left side (3 columns) */}
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-2xl">
            <CardHeader>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl sm:text-2xl mb-3">
                  Client & Caregiver Management
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
                  Keep client details, caregiver profiles, care plans, and credentials organized in one clear place.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12 pb-6 md:pb-8">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,#F6F6F3_100%)]"></div>

              <div className="bg-white/80 overflow-hidden rounded-tl-2xl border-l border-t border-black/10 pl-3 pt-3 relative">
                <div className="aspect-[4/3] rounded-tl-xl overflow-hidden relative">
                  <Image
                    src="/client management.png"
                    alt="Client & Caregiver Management Dashboard"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover object-left shadow"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#F6F6F3] via-[#F6F6F3]/70 to-transparent from-0% via-50% to-70%"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Tall card - Right side (2 columns) */}
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-2 sm:rounded-2xl flex flex-col">
            <div className="p-6 pb-2">
              <p className="text-lg sm:text-xl lg:text-2xl font-heading text-center">
                Keep every profile, plan, and credential easy to find and update.
              </p>
            </div>

            <CardContent className="relative flex-1 px-4 pt-8 pb-6 overflow-hidden">
              <AnimatedList delay={400}>
                {featureItems.map(({ icon: Icon, label, desc }) => (
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

          {/* Bottom left card (2 columns) */}
          <Card className="group shadow-black/5 sm:col-span-2 sm:rounded-2xl flex flex-col">
            <CardHeader className="p-6 md:p-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-heading text-center">
                Give your team one place to manage client records, care details, and AI-driven workflows.
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-6 pb-6 md:px-8 md:pb-8">
              <div className="flex justify-center gap-3">
                <div className="workflow-item w-[78px]">
                  <Search className="size-6 text-foreground flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">Search Records</span>
                </div>
                <div className="workflow-item w-[78px]">
                  <Plus className="size-6 text-foreground flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">Add Client</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom right card (3 columns) */}
          <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-2xl flex flex-col">
            <CardHeader className="p-6 md:p-8">
              <h3 className="font-heading text-xl sm:text-2xl mb-3">
                Client Onboarding Workflows
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
                We first understand how your agency works, then tailor the onboarding workflow to match it. Once that is in place, our AI can move faster and support the process more accurately.
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-6 pb-6 md:px-8 md:pb-8">
              <div className="grid grid-cols-4 gap-3 md:grid-cols-6">
                {[
                  { icon: UserRoundPlus,    label: "New Client Inquiry" },
                  { icon: MessageSquareText,label: "Intake Started" },
                  { icon: BrainCircuit,     label: "Care Needs Reviewed" },
                  { icon: FileText,         label: "Documents in Progress" },
                  { icon: Shuffle,          label: "Care Plan Confirmed" },
                  { icon: HeartHandshake,   label: "Ready to Start Care" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="workflow-item"
                  >
                    <Icon className="size-6 text-foreground flex-shrink-0" />
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
