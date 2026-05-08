"use client";

import { useState, useEffect } from "react";
import { Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { WorkflowAnimation } from "@/components/ui/workflow-animation";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

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
    <section id="how-it-works" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealGroup className="text-center mb-10 sm:mb-16" stagger={0.1} amount={0.3}>
          <RevealItem>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm">
                <span className="inline-flex items-center justify-center rounded-md bg-[#FFDAB9] text-black px-2 py-0.5 text-xs font-semibold">
                  24/7
                </span>
                <span className="text-foreground">
                  AI-powered call-out handling
                </span>
              </div>
            </div>
          </RevealItem>
          <RevealItem>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-6">
              Grow your home care agency with a <br />24/7 AI teammate.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-[17px] text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
              Nestaid's AI agents handles your calls, captures leads and fills call outs, so you can focus on business and scale faster.
            </p>
          </RevealItem>
          <RevealItem>
          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <div className="flex items-stretch h-11 mb-3 w-full max-w-[300px] sm:max-w-sm">
              <div className="flex items-center gap-2 flex-1 border border-r-0 border-black/10 rounded-l-xl bg-white px-3 sm:px-4 min-w-0">
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
                className="group relative overflow-hidden h-11 rounded-l-none rounded-r-xl pl-4 pr-12 sm:pl-5 sm:pr-14 text-sm font-medium shrink-0"
                onClick={handleCall}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span className="transition-opacity duration-500 group-hover:opacity-0">
                      Try Nestaid
                    </span>
                    <i className="absolute right-1 top-1 bottom-1 rounded-md z-10 grid w-9 place-items-center transition-all duration-500 bg-black text-white group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                      <Phone size={16} strokeWidth={2} aria-hidden="true" />
                    </i>
                  </>
                )}
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
                href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Book a Demo
              </a>
            </p>
          </div>
          </RevealItem>
        </RevealGroup>

        {/* Phone + floating stats */}
        <Reveal direction="up" duration={0.9} amount={0.15} className="relative flex items-center justify-center min-h-[300px]">
          {/* Left stat — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute left-0 lg:left-16 top-1/3 -translate-y-1/2 z-10">
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">5</span> min average fill time
              </span>
            </div>
          </div>

          {/* Right stat top — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute right-0 lg:right-16 top-1/4 z-10">
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">24/7</span> AI call-out handling
              </span>
            </div>
          </div>

          {/* Right stat bottom — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute right-0 lg:right-8 bottom-1/4 z-10">
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
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

              {/* Workflow animation — clipped to the phone's rounded shape so the white screen doesn't bleed past the bezel */}
              <div className="absolute inset-0 overflow-hidden z-0 rounded-[50px] sm:rounded-[56px] md:rounded-[64px]">
                <WorkflowAnimation />
              </div>

              {/* Bottom fade overlay — sits above content, clipped to match the phone's bottom curve */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none z-[2] overflow-hidden rounded-b-[50px] sm:rounded-b-[56px] md:rounded-b-[64px]"
                style={{ background: "linear-gradient(to bottom, transparent 0%, #FFFFFF 70%)" }}
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
        </Reveal>

        {/* Mobile-only stats row — shown only below md */}
        <RevealGroup className="flex md:hidden justify-center gap-3 mt-6 flex-wrap" stagger={0.1} amount={0.3}>
          <RevealItem>
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">5</span> min average fill time
              </span>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">24/7</span> AI call-out handling
              </span>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="bg-white border-2 border-[#EAEAE3] rounded-2xl px-5 py-3 shadow-[4px_4px_0_0_#EAEAE3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <span className="font-sans text-[15px] font-light text-gray-800">
                <span className="font-sans font-bold text-[#16A34A]">91%</span> less manual coordination
              </span>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
