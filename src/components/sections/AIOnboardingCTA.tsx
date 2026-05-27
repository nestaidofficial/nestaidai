import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AIOnboardingCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-dashed border-black/15 p-10 text-center sm:p-14">
          <div className="relative mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-black/20 px-4 py-1.5 font-sans text-xs font-light tracking-wide text-muted-foreground">
              AI Onboarding
            </div>

            <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
              Let AI handle the intake so your team can focus on care
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Stop chasing forms and playing phone tag. Nessa&apos;s AI collects everything you need from new clients and surfaces the right caregiver match — before your coordinator even picks up the phone.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://calendly.com/rahulchettri601/nestaid-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
              >
                Book a Free Demo
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
