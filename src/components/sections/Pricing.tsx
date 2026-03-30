"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, X, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams and solo founders.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get started free",
    ctaVariant: "outline" as const,
    featured: false,
    features: [
      { text: "Up to 5 team members", included: true },
      { text: "3 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "5 GB storage", included: true },
      { text: "Community support", included: true },
      { text: "Advanced automations", included: false },
      { text: "AI Copilot", included: false },
      { text: "Custom integrations", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that need more power.",
    monthlyPrice: 29,
    yearlyPrice: 19,
    cta: "Start free trial",
    ctaVariant: "gradient" as const,
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "Up to 50 team members", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "50 GB storage", included: true },
      { text: "Email & chat support", included: true },
      { text: "Advanced automations", included: true },
      { text: "AI Copilot", included: true },
      { text: "Custom integrations", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    cta: "Contact sales",
    ctaVariant: "outline" as const,
    featured: false,
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Custom analytics & reports", included: true },
      { text: "1 TB storage", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Advanced automations", included: true },
      { text: "AI Copilot + custom models", included: true },
      { text: "Custom integrations", included: true },
      { text: "Priority support + SLA", included: true },
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start for free. Scale as you grow. No hidden fees, no surprises.
            Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-black/5 border border-black/10">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                !isYearly
                  ? "bg-white shadow text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                isYearly
                  ? "bg-white shadow text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col",
                plan.featured
                  ? "border-primary shadow-xl shadow-primary/10 bg-white/80 backdrop-blur-sm"
                  : "border-black/10 bg-white/60 backdrop-blur-sm hover:shadow-md transition-shadow"
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient" className="gap-1 shadow">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {(isYearly ? plan.yearlyPrice : plan.monthlyPrice) > 0 && (
                    <span className="text-muted-foreground mb-2">/mo</span>
                  )}
                </div>
                {isYearly && plan.yearlyPrice > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/yr)
                  </p>
                )}
                {(isYearly ? plan.yearlyPrice : plan.monthlyPrice) === 0 && (
                  <p className="text-sm text-muted-foreground mt-1">Free forever</p>
                )}
              </div>

              {/* CTA */}
              <Button variant={plan.ctaVariant} size="lg" className="w-full mb-8" asChild>
                <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                  {plan.cta}
                </Link>
              </Button>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={cn(
                        "text-sm",
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/60"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          Need a custom plan?{" "}
          <Link href="/contact" className="text-primary font-medium hover:underline">
            Talk to our sales team
          </Link>{" "}
          for volume discounts and custom contracts.
        </p>
      </div>
    </section>
  );
}
