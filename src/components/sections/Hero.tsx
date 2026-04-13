"use client";

import { useState } from "react";
import { Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroPreview } from "@/components/sections/HeroPreview";

export function Hero() {
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

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="w-full max-w-4xl mx-auto text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm">
              <span className="inline-flex items-center justify-center rounded-md bg-black text-white px-2 py-0.5 text-xs font-semibold">
                NEW
              </span>
              <span className="text-foreground">
                Custom forms for every workflow
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
            The ops team you{" "}
            <em className="italic">never had to hire</em>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
            Scheduling, EVV, follow-ups — handled automatically, so your team focuses on care.
          </p>

          <div className="flex flex-col items-center">
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

        <HeroPreview />
      </div>
    </section>
  );
}
