import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 sm:p-16 text-center text-white">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              No credit card required
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to build something
              <br />
              extraordinary?
            </h2>

            <p className="text-xl sm:text-2xl text-white/80 max-w-xl mx-auto mb-10">
              Join 10,000+ teams already using Nessa to ship faster and grow
              smarter. Start for free today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-white text-gray-900 hover:bg-white/90 shadow-xl font-semibold"
                asChild
              >
                <Link href="/signup">
                  Start for free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">Book a demo</Link>
              </Button>
            </div>

            <p className="text-sm text-white/60 mt-6">
              Free forever plan available · 14-day Pro trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
