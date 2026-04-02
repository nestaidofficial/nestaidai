"use client";

import { useState, useEffect } from "react";
import { Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { WorkflowAnimation } from "@/components/ui/workflow-animation";

export function HowItWorks() {
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleCall() {
    if (!phone.replace(/\D/g, "").match(/^\d{10}$|^1\d{10}$/)) {
      setStatus("error");
      setMessage("Enter a valid 10-digit phone number");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/retell/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Call failed");
      setStatus("success");
      setMessage("Nessa is calling you now!");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

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
    <section id="how-it-works" className="section-padding overflow-hidden">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
            The ops team you{" "}
            <em className="italic">never had to hire</em>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
            Scheduling, EVV, follow-ups — handled automatically, so your team focuses on care.
          </p>

          {/* Phone number capture */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <div className="flex items-stretch h-11 mb-3 w-full max-w-[300px] sm:max-w-sm">
              <div className="flex items-center gap-2 flex-1 border border-r-0 border-black/10 rounded-l-xl bg-white px-3 sm:px-4 min-w-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground shrink-0" />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setStatus("idle"); setMessage(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleCall()}
                  className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground min-w-0"
                />
              </div>
              <Button
                variant="default"
                className="h-11 rounded-l-none rounded-r-xl px-4 sm:px-5 text-sm font-medium shrink-0"
                onClick={handleCall}
                disabled={status === "loading"}
              >
                {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Call Nessa"}
              </Button>
            </div>
            {message ? (
              <p className={`text-xs ${status === "error" ? "text-red-500" : "text-green-600"}`}>
                {message}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Experience Nessa in 30 seconds
              </p>
            )}
            <p className="mt-4 text-sm text-muted-foreground">
              or{" "}
              <a
                href="#"
                className="underline underline-offset-2 font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Book a Demo
              </a>
            </p>
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
