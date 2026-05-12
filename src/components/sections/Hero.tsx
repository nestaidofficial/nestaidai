
import { HeroPreview } from "@/components/sections/HeroPreview";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <RevealGroup className="w-full max-w-4xl mx-auto text-center mb-10 sm:mb-16" stagger={0.1} amount={0.3}>
          <RevealItem>
            <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
              Built for care operations and management
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-[17px] text-muted-foreground max-w-xs sm:max-w-2xl mx-auto mb-8 leading-relaxed">
              From client intake to scheduling, EVV, forms, and follow-ups, NestAid helps agencies run daily operations with less manual work.
            </p>
          </RevealItem>

        </RevealGroup>

        <Reveal direction="up" duration={0.9} amount={0.15}>
          <HeroPreview />
        </Reveal>
      </div>
    </section>
  );
}
