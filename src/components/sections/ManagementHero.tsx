
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ManagementHero() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-black/20 px-4 py-1.5 font-sans text-xs font-light tracking-wide text-muted-foreground">
              <span className="text-foreground">Client & Caregiver Management</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            Manage <span style={{ color: "#F58D42" }}>records</span>, <span style={{ color: "#F58D42" }}>AI workflows</span>, and <span style={{ color: "#F58D42" }}>automations</span> in one place
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
              className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
            >
              Book a Free Demo
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
