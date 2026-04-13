"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { WorkflowAnimation } from "@/components/ui/workflow-animation";

export function HowItWorks() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="how-it-works" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm">
              <span className="inline-flex items-center justify-center rounded-md bg-black text-white px-2 py-0.5 text-xs font-semibold">
                24/7
              </span>
              <span className="text-foreground">
                AI-powered call-out handling
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-6">
            Step <em className="italic">into</em> the future
            <br />
            of home care — AI + human care
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
            Nestaid uses AI agents to run scheduling, caregiver coordination, EVV, and operations — so your team can focus on care and growth.
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="flex items-stretch h-10 w-full max-w-[300px] sm:max-w-md">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 h-10 rounded-l-lg border border-r-0 border-black/10 bg-white px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent min-w-0"
              />
              <Button
                variant="default"
                className="h-10 rounded-l-none rounded-r-lg px-4 sm:px-6 shrink-0"
                asChild
              >
                <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">
                  Get free trial
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Phone + floating stats */}
        <div className="relative flex items-center justify-center min-h-[300px]">
          {/* Left stat — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute left-0 lg:left-16 top-1/3 -translate-y-1/2 z-10">
            <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">5</span> min average fill time
              </span>
            </div>
          </div>

          {/* Right stat top — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute right-0 lg:right-16 top-1/4 z-10">
            <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">24/7</span> AI call-out handling
              </span>
            </div>
          </div>

          {/* Right stat bottom — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute right-0 lg:right-8 bottom-1/4 z-10">
            <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">91%</span> less manual coordination
              </span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative z-0 flex items-center justify-center">
            <div className="relative w-[300px] sm:w-[340px] md:w-[380px]">
              <Iphone15Pro
                width={433}
                height={882}
                className="w-full h-auto relative z-[1]"
              />

              {/* Workflow animation — inset-0 so it fully fills behind the SVG bezel */}
              <div className="absolute inset-0 overflow-hidden bg-[#F6F6F3] z-0">
                <WorkflowAnimation />
              </div>

              {/* Bottom fade overlay — sits above content, below bezel */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[28%] pointer-events-none z-[2] rounded-b-[40px] overflow-hidden"
                style={{ background: "linear-gradient(to bottom, transparent 0%, #F6F6F3 75%)" }}
              />

              {/* Status bar overlay — positioned over the phone screen area */}
              {time && (
                <div
                  className="absolute pointer-events-none flex items-center justify-between z-[2]"
                  style={{
                    top: "3.2%",
                    left: "4.91%",  /* 21.25 / 433 */
                    right: "5.14%", /* 22.25 / 433 */
                    height: "5.5%",
                    paddingLeft: "4%",
                    paddingRight: "3%",
                  }}
                >
                  {/* Time */}
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-black leading-none tracking-tight">
                    {time}
                  </span>

                  {/* Right-side indicators */}
                  <div className="flex items-center gap-[3px]">
                    {/* Cellular signal bars */}
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                      <rect x="0"   y="7"   width="3" height="4"  rx="0.6" fill="black" />
                      <rect x="4.5" y="4.5" width="3" height="6.5" rx="0.6" fill="black" />
                      <rect x="9"   y="2.5" width="3" height="8.5" rx="0.6" fill="black" />
                      <rect x="13.5" y="0"  width="3" height="11" rx="0.6" fill="black" />
                    </svg>

                    {/* WiFi */}
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="black">
                      <circle cx="8" cy="11" r="1.3" />
                      <path d="M4.9 7.9a4.4 4.4 0 0 1 6.2 0l1.1-1.1a6 6 0 0 0-8.4 0l1.1 1.1Z" />
                      <path d="M2.1 5.1a8 8 0 0 1 11.8 0L15 4A9.7 9.7 0 0 0 1 4l1.1 1.1Z" />
                    </svg>

                    {/* Battery icon */}
                    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                      <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="black" strokeOpacity="0.4" strokeWidth="1" />
                      <rect x="21" y="3.5" width="2.5" height="5" rx="1" fill="black" fillOpacity="0.4" />
                      <rect x="2"   y="2"   width="9"  height="8"  rx="2" fill="black" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile-only stats row — shown only below md */}
        <div className="flex md:hidden justify-center gap-3 mt-6 flex-wrap">
          <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
            <span className="font-sans text-[15px] font-light text-gray-800">
              <span className="font-sans font-bold text-[#16A34A]">5</span> min average fill time
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
            <span className="font-sans text-[15px] font-light text-gray-800">
              <span className="font-sans font-bold text-[#16A34A]">24/7</span> AI call-out handling
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-peach rounded-2xl px-5 py-3 shadow-sm">
            <span className="font-sans text-[15px] font-light text-gray-800">
              <span className="font-sans font-bold text-[#16A34A]">91%</span> less manual coordination
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
