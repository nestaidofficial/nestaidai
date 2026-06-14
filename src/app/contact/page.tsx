import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalendarCheck, Mail, PhoneCall, ArrowRight, ArrowUpRight } from "lucide-react";

const SITE_URL = "https://www.nestaid.us";
const CALENDLY_URL = "https://calendly.com/rahulchettri601/nestaid-demo-call";
const CONTACT_EMAIL = "rahul@nestaid.us";

export const metadata: Metadata = {
  title: "Contact Nestaid — Talk to Our Home Care AI Team",
  description:
    "Book a free demo, email us, or talk to Nessa, our AI receptionist. See how Nestaid helps home care agencies handle calls, call-outs, and scheduling 24/7.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Nestaid — Talk to Our Home Care AI Team",
    description:
      "Book a free demo, email us, or talk to Nessa, our AI receptionist for home care agencies.",
    url: "/contact",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact Nestaid",
  description:
    "Get in touch with Nestaid — the AI-native operations platform for home care agencies. Book a demo, email the team, or try Nessa, our AI receptionist.",
  mainEntity: {
    "@type": "Organization",
    name: "Nestaid",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      areaServed: "US",
      availableLanguage: "English",
    },
  },
};

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We reply to every email within one business day. If you book a demo, you'll get an instant calendar confirmation and a reminder before the call.",
  },
  {
    question: "What happens on a demo call?",
    answer:
      "We learn how your agency handles calls, call-outs, and scheduling today, then show you exactly how Nestaid's AI agents would fit your workflow. Most demos run 20–30 minutes.",
  },
  {
    question: "Do I need a credit card to get started?",
    answer:
      "No. The demo and your initial consultation are free. We only set up billing once you decide Nestaid is the right fit for your agency.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const channels = [
  {
    icon: CalendarCheck,
    eyebrow: "Best for evaluating Nestaid",
    title: "Book a free demo",
    desc: "See Nestaid's AI receptionist and coordinator handle a live home care workflow. 20–30 minutes, no commitment.",
    cta: "Pick a time",
    href: CALENDLY_URL,
    external: true,
  },
  {
    icon: Mail,
    eyebrow: "Best for questions",
    title: "Email the team",
    desc: "Have a specific question about pricing, compliance, or integrations? Send us a note and we'll reply within one business day.",
    cta: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: PhoneCall,
    eyebrow: "Best for a quick taste",
    title: "Talk to Nessa now",
    desc: "Enter your number on our home page and Nessa, our AI receptionist, will call you in about 30 seconds so you can hear her live.",
    cta: "Try Nessa",
    href: "/#how-it-works",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-white" />
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl">
              <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-black/70">Contact</span>
              </nav>

              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Talk to the team behind{" "}
                <span style={{ color: "#F58D42" }}>Nestaid</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Whether you want a live demo, have a question about your agency&apos;s
                workflow, or just want to hear Nessa in action — here&apos;s how to
                reach us.
              </p>
            </div>

            {/* Contact channels */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="group flex flex-col rounded-none border border-dashed border-black/15 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#F4C6AC]/60"
                >
                  <div className="w-11 h-11 rounded-none bg-black/5 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-black/70" strokeWidth={1.75} />
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#C97B5B] mb-1.5">
                    {c.eyebrow}
                  </p>
                  <h2 className="font-body font-bold text-lg tracking-tight mb-2">
                    {c.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {c.desc}
                  </p>
                  <Link
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:gap-1.5 transition-all"
                  >
                    {c.cta}
                    {c.external ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Primary demo CTA */}
            <div className="mt-12 border border-dashed border-black/15 p-8 sm:p-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-body font-bold tracking-tight mb-3">
                  Ready to see Nestaid handle your call-outs?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Book a 20-minute demo and we&apos;ll walk through how Nestaid&apos;s
                  AI agents would fit your agency&apos;s calls, scheduling, and
                  onboarding — using your real workflow as the example.
                </p>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-black px-6 py-3 font-sans text-sm font-light text-white transition-all hover:bg-black/85"
                >
                  Book a free demo
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-body font-bold tracking-tight mb-8">
                Questions before you reach out
              </h2>
              <dl className="space-y-8">
                {faqs.map((f) => (
                  <div key={f.question} className="border-b border-black/10 pb-6">
                    <dt className="font-semibold text-base mb-2">{f.question}</dt>
                    <dd className="text-muted-foreground leading-relaxed">
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Internal links to product pages */}
            <div className="mt-16">
              <h2 className="text-xl sm:text-2xl font-heading tracking-tight mb-6">
                Explore the platform first
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    href: "/scheduling",
                    title: "AI Scheduling & Call-Outs",
                    desc: "Fill open shifts in under 5 minutes, 24/7.",
                  },
                  {
                    href: "/management",
                    title: "Agency Management",
                    desc: "Client records, credentials, and compliance in one place.",
                  },
                  {
                    href: "/ai-onboarding",
                    title: "AI Caregiver Onboarding",
                    desc: "Collect forms, verify compliance, and book interviews.",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-none border border-dashed border-black/15 bg-white/60 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <h3 className="text-base font-heading tracking-tight mb-1.5 group-hover:underline underline-offset-4 decoration-black/30">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-5">
                Or compare plans on the{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-black underline underline-offset-2 hover:opacity-70"
                >
                  pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
