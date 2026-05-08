import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ManagementCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#F8F8F7] p-12 sm:p-16 lg:p-20 text-center text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]" data-aos="fade-up">
          {/* Background decoration */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6 text-white">
              Ready to add AI to your agency&apos;s workflow?
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              See how Nestaid can support records, outreach, scheduling, and daily follow-up — without changing how your agency already works.
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
