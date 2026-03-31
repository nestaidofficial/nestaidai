import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroPreview } from "@/components/sections/HeroPreview";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-16 pb-16">
      {/* Text content — constrained width */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement pill */}
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

        {/* Headline with italic emphasis */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-6">
          Step <em className="italic">into</em> the future
          <br />
          of home care — AI + human care
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
          Nestaid uses AI agents to run scheduling, caregiver coordination, EVV, and operations — so your team can focus on care and growth.
        </p>

        {/* Email capture + CTA */}
        <div className="flex justify-center mb-10">
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

      {/* Dashboard placeholder — full width outside container */}


      <HeroPreview />
    </section>
  );
}
