"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-data";

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
        <span className="font-medium text-base pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-base leading-relaxed border-t border-black/10 bg-black/[0.02] pt-4">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Nestaid. Can&apos;t find the answer
              you&apos;re looking for?{" "}
              <a href="mailto:rahul@nestaid.us" className="hover:underline">
                Reach out to our team.
              </a>
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
