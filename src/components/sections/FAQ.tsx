"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does Nestaid replace our current home care software?",
    answer:
      "No. Nestaid is built to integrate with your existing home care software, not replace it. We sync and provide AI layer for scheduling, caregiver coordination, onboarding, EVV, and compliance.",
  },
  {
    question: "How does scheduling work in Nessa?",
    answer:
      "You can create shifts in seconds, match caregivers based on availability, and avoid double bookings with real-time updates. Smart scheduling tools give a full view of staff availability and shifts.",
  },
  {
    question: "Can Nestaid be tailored to our workflow?",
    answer:
      "Yes. Nestaid is designed to fit the way your agency already works. We can tailor workflows, call flows, and operational logic around your team, instead of forcing you into a rigid setup.",
  },
  {
    question: "Does Nestaid support both calls and text?",
    answer:
      "Yes. Nestaid supports both voice and text workflows, so your agency can manage inbound calls, caregiver outreach, updates, and coordination across both channels.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Agencies can get started in week, not months. Nestaid is built for faster setup, faster integration, and faster time to value.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Nestaid offers usage-based pricing, so you pay based on how much you use. That gives agencies a more flexible way to start, scale, and control costs as operations grow.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-black/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-sm leading-relaxed border-t border-black/10 bg-black/[0.02] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Nessa. Can&apos;t find the answer
              you&apos;re looking for?{" "}
              <Link href="/support" className="hover:underline">
                Reach out to our team.
              </Link>
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
