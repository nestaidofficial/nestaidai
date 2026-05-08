"use client";

import { X, CheckCircle } from "lucide-react";

const withoutItems = [
  "Manual outreach",
  "Slow response times",
  "No live status",
  "More chasing",
];

const withItems = [
  "AI starts outreach",
  "Faster coordination",
  "Live workflow updates",
  "Less admin work",
];

export function SchedulingProblem() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
            Scheduling gets messy when everything depends on manual follow-up
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A single shift change can mean calls, texts, outreach, updates, and back-and-forth. Nestaid adds an AI layer that helps your team respond faster and keep coverage moving.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Without Nestaid */}
          <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6" data-aos="fade-up">
            <h3 className="font-heading text-xl sm:text-2xl mb-4">Without Nestaid</h3>
            <ul className="space-y-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-black/40 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Nestaid */}
          <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6" data-aos="fade-up" data-aos-delay="120">
            <h3 className="font-heading text-xl sm:text-2xl mb-4">With Nestaid</h3>
            <ul className="space-y-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F4C6AC] flex-shrink-0" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
