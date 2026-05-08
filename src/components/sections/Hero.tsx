"use client";

import { HeroPreview } from "@/components/sections/HeroPreview";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <RevealGroup className="w-full max-w-4xl mx-auto text-center mb-10 sm:mb-16" stagger={0.1} amount={0.3}>
          <RevealItem>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm">
                <span className="inline-flex items-center justify-center rounded-md bg-[#FFDAB9] text-black px-2 py-0.5 text-xs font-semibold">
                  NEW
                </span>
                <span className="text-foreground">
                  Custom forms for every workflow
                </span>
              </div>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
              The ops team you{" "}
              <em className="italic">never had to hire</em>
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-[17px] text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
              Scheduling, EVV, follow-ups — handled automatically, so your team focuses on care.
            </p>
          </RevealItem>

        </RevealGroup>

        <Reveal direction="up" duration={0.9} amount={0.15}>
          <HeroPreview />
        </Reveal>
      </div>
    </section>
  );
}
