import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PhoneIncoming, BrainCircuit, CalendarCheck, TrendingUp, Rocket, Users, Headphones, UserCheck } from "lucide-react";

const pricingPillars = [
  {
    icon: PhoneIncoming,
    title: "AI Receptionist",
    subtitle: "Priced by AI-handled call volume",
    description:
      "From inbound calls to intake and routing, you pay for the conversations Nestaid manages.",
  },
  {
    icon: BrainCircuit,
    title: "AI Coordinator",
    subtitle: "Priced by completed actions",
    description:
      "From call-out handling to caregiver outreach and shift coordination, pricing reflects real work completed.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduling Outcomes",
    subtitle: "Priced around support delivered",
    description:
      "When Nestaid helps move care coverage forward, your cost stays tied to actual operational value.",
  },
];

const includedFeatures = [
  {
    icon: Rocket,
    title: "Guided implementation",
    description: "Setup support to get your team live faster.",
  },
  {
    icon: Users,
    title: "Tailored onboarding",
    description: "Onboarding built around your agency's workflow.",
  },
  {
    icon: Headphones,
    title: "Technical support",
    description: "Ongoing help when your team needs it.",
  },
  {
    icon: UserCheck,
    title: "Dedicated account support",
    description: "A point of contact for rollout and growth.",
  },
];

export default function PricingClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="font-subheading text-lg sm:text-xl text-foreground max-w-2xl mx-auto mb-4">
                Value-based pricing for home care teams
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Pay for the work Nestaid handles — not for unused seats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {pricingPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-6 sm:p-8 rounded-2xl border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ borderColor: "#F4C6AC" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6" style={{ color: "#F4C6AC" }} />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl mb-2">{pillar.title}</h3>
                  <p className="font-subheading text-sm sm:text-base text-foreground mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-black/10 bg-white mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl mb-3">
                    Flexible as your operations grow
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Your cost scales with call volume, coordination needs, and agency complexity — so pricing stays aligned with usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black/10 p-10 sm:p-12 rounded-2xl text-center mb-12">
              <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6 text-foreground">
                Ready to get started?
              </h2>
              <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">
                Talk to our team to learn how Nestaid can transform your home care operations.
              </p>
              <Button variant="default" size="lg" className="text-base px-8" asChild>
                <a href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">Talk to Sales</a>
              </Button>
            </div>

            <div className="text-center">
              <h3 className="font-heading text-2xl sm:text-3xl mb-8">All Plans Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {includedFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-black/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground text-left">
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground text-left pl-11">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
