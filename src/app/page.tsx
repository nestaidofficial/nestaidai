import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/lib/faq-data";

const siteUrl = "https://www.nestaid.us";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nestaid — AI Receptionist & Coordinator",
  provider: {
    "@type": "Organization",
    name: "Nestaid",
    url: siteUrl,
  },
  areaServed: "United States",
  serviceType: "Home care operations software",
  description:
    "AI receptionist and coordinator for home care agencies. Handles inbound calls, caregiver outreach, call-out coordination, scheduling, and onboarding 24/7.",
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/pricing`,
    priceCurrency: "USD",
    description: "Usage-based pricing across AI Receptionist, AI Coordinator, and Scheduling Outcomes.",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "Nestaid",
  description:
    "Nestaid is the AI-powered operations platform built for home care agencies.",
  publisher: {
    "@type": "Organization",
    name: "Nestaid",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HowItWorks />
        <Features />
        <Hero />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
