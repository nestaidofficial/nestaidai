"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-2xl sm:text-4xl tracking-tight mb-3">
            Scheduling gets messy when everything depends on manual follow-up
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A single shift change can mean calls, texts, outreach, updates, and back-and-forth. Nestaid adds an AI layer that helps your team respond faster and keep coverage moving.
          </p>
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Without Nestaid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6"
          >
            <h3 className="font-heading text-lg mb-4">Without Nestaid</h3>
            <ul className="space-y-3">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <X className="w-4 h-4 text-black/40 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Nestaid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6"
          >
            <h3 className="font-heading text-lg mb-4">With Nestaid</h3>
            <ul className="space-y-3">
              {withItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F4C6AC] flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
