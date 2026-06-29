
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, MessageSquareText, UserCheck } from "lucide-react";

const highlights = [
  { icon: MessageSquareText, label: "Intake Interviews", desc: "AI conducts structured intake calls" },
  { icon: BrainCircuit,      label: "Smart Matching",    desc: "Pairs caregivers by skills & preferences" },
  { icon: UserCheck,         label: "Instant Readiness", desc: "Clients ready for care in hours" },
];

export function AIOnboardingHero() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1.5 font-sans text-xs font-light tracking-wide text-muted-foreground">
              <BrainCircuit className="w-4 h-4 text-foreground" strokeWidth={1.5} />
              <span className="text-foreground">AI Onboarding</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            From first inquiry to matched caregiver — AI handles the intake
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Our AI collects client responses, runs structured intake interviews, and helps match the right caregiver to each client — so your team focuses on care, not paperwork.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-14">
            <Link
              href="https://calendly.com/rahulchettri601/nestaid-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
            >
              See It in Action
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Highlight pills row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-6 pb-2">
          {highlights.map(({ icon: Icon, label, desc }, idx) => (
            <div
              key={label}
              className="workflow-item w-[160px] h-[160px] border-peach rounded-2xl"


            >
              <Icon className="w-7 h-7 text-foreground flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm font-medium text-foreground text-center leading-tight">{label}</p>
              <p className="text-xs text-muted-foreground text-center leading-tight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
