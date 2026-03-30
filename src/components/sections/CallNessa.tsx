import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallNessa() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-heading tracking-tight mb-4">
            Hear Nessa <em className="italic">in action</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
            Drop your number and Nessa will call you right now — no setup, no demo request.
          </p>

          {/* Input card */}
          <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl px-6 pt-5 pb-4 w-full max-w-sm shadow-sm">
            <div className="flex items-center gap-3 border border-black/10 rounded-xl bg-white px-4 h-12 mb-3">
              <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="tel"
                placeholder="Enter your number"
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="default" className="w-full h-11 text-sm font-medium">
              Call Nessa
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Experience Nessa in 30 seconds
            </p>
          </div>

          {/* Secondary link */}
          <p className="mt-6 text-sm text-muted-foreground">
            or{" "}
            <a
              href="#"
              className="underline underline-offset-2 font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Book a Demo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
