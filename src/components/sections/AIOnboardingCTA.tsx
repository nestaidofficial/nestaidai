import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AIOnboardingCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-black p-12 sm:p-16 lg:p-20 text-center text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-base font-medium text-white/50 uppercase tracking-widest mb-4">
              AI Onboarding
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6 text-white">
              Let AI handle the intake so your team can focus on care
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop chasing forms and playing phone tag. Nessa&apos;s AI collects everything you need from new clients and surfaces the right caregiver match — before your coordinator even picks up the phone.
            </p>

            <Button
              size="xl"
              className="bg-white text-gray-900 hover:bg-white/90 shadow-xl font-semibold"
              asChild
            >
              <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">
                Book a Free Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
