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
  { id: "ai-coordinator", label: "Management", icon: BrainCircuit },
  { id: "tasks", label: "Tasks", icon: CheckSquare },
  { id: "clients", label: "Onboarding", icon: Users },
  { id: "billing", label: "Forms", icon: CreditCard },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function HeroPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("schedule");

  return (
    <div className="w-full px-6 sm:px-16 lg:px-24">
      {/* Outer card — Mac Safari-style chrome */}
      <div className="rounded-xl border border-black/12 bg-white/95 backdrop-blur-sm overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] h-[520px] sm:h-[600px] flex flex-col">

        {/* ── Product tab bar — scrollable on mobile, centered on sm+ ── */}
        <div className="relative flex items-center gap-1 px-4 py-2 border-b border-black/10 bg-[#F6F6F3]/80 shrink-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
          {/* Mac traffic-light dots */}
          <div className="hidden sm:flex items-center space-x-2 absolute left-4 top-1/2 -translate-y-1/2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5" />
          </div>
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all shrink-0 border",
                  isActive
                    ? "bg-white border-black/10 shadow-sm text-black/85"
                    : "border-transparent text-black/45 hover:text-black/65 hover:bg-black/5"
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
              src="/schedule1.png"
              alt="Schedule view"
              fill
              className="object-cover object-left-top scale-95 origin-top-left"
              priority
            />
          )}
          {activeTab === "ai-coordinator" && (
            <Image
              src="/management.png"
              alt="Management view"
              fill
              className="object-cover object-left-top scale-115 origin-top-left"
            />
          )}
          {activeTab === "billing" && (
            <Image
              src="/form.png"
              alt="Forms view"
              fill
              className="object-cover object-left-top"
            />
          )}
          {activeTab === "clients" && (
            <Image
              src="/onboarding.png"
              alt="Onboarding view"
              fill
              className="object-cover object-left-top"
            />
          )}
          {activeTab === "tasks" && (
            <Image
              src="/Task.png"
              alt="Tasks view"
              fill
              className="object-cover object-left-top"
            />
          )}
          {/* Bottom fade gradient */}
          <div
            aria-hidden
            className="bg-gradient-to-b to-white absolute inset-0 z-10 from-transparent from-5% pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
