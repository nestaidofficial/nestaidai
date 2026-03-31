"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ManagementHero() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm">
              <span className="text-foreground">Client & Caregiver Management</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-5">
            Manage records, AI workflows, and automations in one place
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Keep client and caregiver details organized while AI helps power follow-ups, reminders, email, SMS, and calls across your workflow.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-12">
            <Link
              href="https://calendly.com/rahulchettri601/nestaid-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-white/80 transition-colors"
            >
              Book a Free Demo
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
