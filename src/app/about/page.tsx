import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Lightbulb,
  Shield,
  Users,
  ArrowRight,
  Zap,
  Globe,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Nessa",
  description:
    "Learn about Nessa's mission to modernize home care operations with AI-powered tools that put people first.",
};

const values = [
  {
    icon: Heart,
    title: "Care First",
    description:
      "Every feature we build starts with one question: does this help caregivers spend more time with people who need them?",
  },
  {
    icon: Lightbulb,
    title: "Built for Simplicity",
    description:
      "Home care agencies shouldn't need an IT team. We design tools that anyone on your staff can pick up in minutes.",
  },
  {
    icon: Shield,
    title: "Trust & Compliance",
    description:
      "From Medicaid EVV to HIPAA, we bake compliance into the product so your team never has to think twice.",
  },
  {
    icon: Zap,
    title: "Speed That Matters",
    description:
      "When a caregiver calls out at 6 AM, you need answers fast. Nessa keeps operations moving around the clock.",
  },
  {
    icon: Globe,
    title: "Inclusive by Design",
    description:
      "We serve agencies of all sizes — from solo coordinators to multi-location enterprises — with the same dedication.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description:
      "We ship weekly, listen to every customer, and treat feedback as the most important feature on our roadmap.",
  },
];

const team: {
  name: string;
  role: string;
  bio: string;
  initials?: string;
  imageSrc?: string;
}[] = [
  {
    name: "Rabina Adhikari",
    role: "Co-founder & CEO",
    bio: "Former home care coordinator turned builder. After 10 years working on the caregiving and coordination side of home care agencies, Rabina started Nessa to fix the operational chaos she saw every day — burned-out coordinators, messy schedules, constant call-outs, and too much reliance on spreadsheets and sticky notes.",
    imageSrc: "/rabina.PNG",
  },
  {
    name: "Rahul Chettri",
    role: "Co-founder & CTO",
    bio: "Data Scientist with 4+ years of experience and a Master's in Data Science from Northeastern University. At KCC Capital Partners, he developed data-driven solutions and machine learning systems for financial intelligence — expertise he now brings to making home care operations smarter.",
    imageSrc: "/rahul.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="subtle" className="mb-5">Our Story</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-6">
                Built by people who{" "}
                <span className="gradient-text">lived the problem</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Home care is one of the most important industries in the world — and one of the most under-served by modern software. We started Nessa to change that.
              </p>
            </div>

            {/* Stat bar */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "24/7", label: "AI Reception Coverage" },
                { value: "Real-Time", label: "Call-Out Handling" },
                { value: "Less Chaos", label: "Schedule Coordination" },
                { value: "Built For", label: "Home Care Agencies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/60 backdrop-blur-sm border border-peach rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl sm:text-4xl font-heading text-black mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-subheading">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Badge variant="subtle" className="mb-4">Mission</Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-5">
                  Give care agencies a{" "}
                  <span className="gradient-text">superpower</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  Home care coordinators manage an impossible amount of complexity every day — scheduling, compliance, caregiver call-outs, client needs, billing, and more. Most do it with a patchwork of spreadsheets, phone calls, and sheer willpower.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nessa was built to give those coordinators back their time. We combine AI coordination, smart scheduling, real-time EVV, and seamless onboarding into one platform that actually fits how home care works.
                </p>
                <Button asChild variant="default" size="lg">
                  <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">
                    See Nessa in Action <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="bg-white/60 backdrop-blur-sm border border-peach rounded-3xl p-8 lg:p-10">
                  <blockquote className="text-2xl sm:text-3xl font-heading text-black leading-snug mb-6">
                    "We built the tool we wished existed when we were coordinators ourselves."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                      <Image
                        src="/rabina.PNG"
                        alt="Rabina Adhikari"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium text-black">Rabina Adhikari</p>
                      <p className="text-sm text-muted-foreground">Co-founder & CEO</p>
                    </div>
                  </div>
                </div>
                {/* Decorative accent */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border border-black/5 bg-white/30 backdrop-blur-sm -z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ─────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <Badge variant="subtle" className="mb-4">What We Stand For</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading tracking-tight mb-4">
                Values that guide every decision
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                We don't hang these on a wall — they show up in how we ship, how we support customers, and how we grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white/60 backdrop-blur-sm border border-peach rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-black/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{v.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <Badge variant="subtle" className="mb-4">The Team</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-4">
                People behind Nessa
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
                A small, focused team with deep roots in home care and a shared obsession with great software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-peach/35 backdrop-blur-sm border border-peach rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {member.imageSrc ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-peach flex-shrink-0 mb-4">
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-sm font-medium mb-4">
                      {member.initials}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-black leading-tight">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-subheading mb-3">{member.role}</p>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-10 sm:p-14 text-center">
              <Badge variant="subtle" className="mb-5">Join Us</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-5 max-w-2xl mx-auto">
                Ready to transform your home care operations?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Book a free 30-minute demo and see how Nessa can give your team time back, cut call-out stress, and grow your agency with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="default" size="lg">
                  <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">
                    Book a Free Demo <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
