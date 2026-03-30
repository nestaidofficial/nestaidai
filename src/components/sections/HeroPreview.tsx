"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Calendar,
  BrainCircuit,
  CheckSquare,
  Users,
  CreditCard,
} from "lucide-react";

const TABS = [
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "ai-coordinator", label: "AI Coordinator", icon: BrainCircuit },
  { id: "tasks", label: "Tasks", icon: CheckSquare },
  { id: "clients", label: "Onboarding", icon: Users },
  { id: "billing", label: "Forms", icon: CreditCard },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function HeroPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("schedule");

  return (
    <div className="w-full px-6 sm:px-16 lg:px-24">
      {/* Outer card — thin outline, glass surface */}
      <div className="rounded-xl border border-black/12 bg-white/60 backdrop-blur-sm overflow-hidden shadow-[0_4px_40px_-8px_rgba(0,0,0,0.08)] h-[480px] sm:h-[560px] flex flex-col">

        {/* ── Top tab bar — scrollable on mobile, centered on sm+ ── */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-black/10 bg-[#F6F6F3]/80 shrink-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all shrink-0",
                  isActive
                    ? "bg-white border border-black/10 shadow-sm text-black/85"
                    : "text-black/45 hover:text-black/65 hover:bg-black/5"
                )}
              >
                <Icon
                  className={cn(
                    "w-3.5 h-3.5 shrink-0",
                    isActive ? "text-[#F4C6AC]" : "text-black/30"
                  )}
                />
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Content area ── */}
        <div className="relative flex-1 overflow-hidden">
          {activeTab === "schedule" && (
            <Image
              src="/schedulenew.png"
              alt="Schedule view"
              fill
              className="object-cover object-left-top sm:object-top"
              priority
            />
          )}
          {activeTab === "ai-coordinator" && (
            <Image
              src="/coordinator.png"
              alt="AI Coordinator view"
              fill
              className="object-cover object-left-top"
            />
          )}
          {activeTab === "billing" && (
            <Image
              src="/form.png"
              alt="Forms view"
              fill
              className="object-cover object-left-top sm:object-top"
            />
          )}
          {activeTab === "clients" && (
            <Image
              src="/onboarding.png"
              alt="Onboarding view"
              fill
              className="object-cover object-left-top sm:object-top"
            />
          )}
          {activeTab === "tasks" && (
            <Image
              src="/task .png"
              alt="Tasks view"
              fill
              className="object-cover object-left-top sm:object-top"
            />
          )}
          {/* Bottom fade gradient */}
          <div
            aria-hidden
            className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35% pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
