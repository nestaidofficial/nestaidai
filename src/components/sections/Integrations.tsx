
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const integrations = [
  { name: "WellSky", logo: "/wellsky.png", logoWidth: 240, logoHeight: 74 },
  { name: "AxisCare", logo: "/axiscare.png", logoWidth: 280, logoHeight: 82 },
] as const;

export function Integrations() {
  return (
    <section id="integrations" className="section-padding overflow-hidden">
      <div className="container-max">
        <Reveal direction="up" duration={0.8} amount={0.3} className="mx-auto max-w-4xl text-center">
          <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            We build <span style={{ color: "#F58D42" }}>custom integrations</span> into your systems.
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            We connect to your software so our team can schedule like your best
            coordinator. Don&apos;t see yours?{" "}
            <a
              href="mailto:rahul@nestaid.us"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Let us know.
            </a>
          </p>
        </Reveal>

        <Reveal
          direction="up"
          duration={0.9}
          delay={0.1}
          amount={0.2}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 sm:gap-x-24"
        >
          {integrations.map((integration) => (
            <Image
              key={integration.name}
              src={integration.logo}
              alt={`${integration.name} logo`}
              width={integration.logoWidth}
              height={integration.logoHeight}
              className="h-10 sm:h-12 w-auto object-contain opacity-90"
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
