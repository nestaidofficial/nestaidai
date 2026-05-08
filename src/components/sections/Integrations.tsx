"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const integrations = [
  {
    name: "AxisCare",
    logo: "/axiscare.png",
    logoWidth: 280,
    logoHeight: 82,
  },
  {
    name: "WellSky",
    logo: "/wellsky.png",
    logoWidth: 240,
    logoHeight: 74,
  },
] as const;

function IntegrationsColumn({
  items,
  reverse = false,
}: {
  items: readonly (typeof integrations)[number][];
  reverse?: boolean;
}) {
  const orderedItems = reverse ? [...items].reverse() : items;

  return (
    <div className={reverse ? "hidden sm:block" : ""}>
      <motion.div
        animate={{ y: reverse ? "50%" : "-50%" }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex flex-col gap-4">
            {orderedItems.map((integration) => (
              <div
                key={`${copyIndex}-${integration.name}`}
                className="group flex min-h-40 w-[min(100%,20rem)] items-center justify-center rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={integration.logoWidth}
                  height={integration.logoHeight}
                  className="h-auto max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal direction="right" duration={0.8} amount={0.3} className="mx-auto max-w-2xl text-center lg:text-left">
            <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight">
              Works with the systems your team already uses
            </h2>
            <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Keep your operations connected with the platforms home care teams
              trust every day.
            </p>
          </Reveal>

          <Reveal direction="left" duration={0.9} amount={0.2} className="mx-auto flex h-[420px] w-full max-w-md items-center justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
            <IntegrationsColumn items={integrations} />
            <IntegrationsColumn items={integrations} reverse />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
