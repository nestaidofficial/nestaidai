import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Nestaid — AI for Home Care Operations",
  description:
    "Meet the team modernizing home care operations with AI — including Nestaid, our AI receptionist and coordinator built for home care agencies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nestaid — AI for Home Care Operations",
    description:
      "Meet the team behind Nestaid — the AI-powered operations platform built for home care agencies.",
    url: "/about",
    type: "website",
  },
};

const SITE_URL_ABOUT = "https://www.nestaid.us";

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_ABOUT },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL_ABOUT}/about` },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL_ABOUT}/about`,
  name: "About Nestaid",
  description:
    "Nestaid is the AI-native operations platform for home care agencies — built by founders focused on giving coordinators their week back.",
  mainEntity: {
    "@type": "Organization",
    name: "Nestaid",
    url: SITE_URL_ABOUT,
  },
};

const rahulPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chettri",
  jobTitle: "Co-founder, Nestaid",
  worksFor: {
    "@type": "Organization",
    name: "Nestaid",
    url: SITE_URL_ABOUT,
  },
  url: `${SITE_URL_ABOUT}/about`,
  knowsAbout: [
    "AI-native home care software",
    "AI receptionist for home care",
    "home care scheduling",
    "caregiver call-out management",
    "Electronic Visit Verification (EVV)",
    "home care agency operations",
  ],
};

const rabinaPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rabina Adhikari",
  jobTitle: "Co-founder & CEO, Nestaid",
  worksFor: {
    "@type": "Organization",
    name: "Nestaid",
    url: SITE_URL_ABOUT,
  },
  url: `${SITE_URL_ABOUT}/about`,
  knowsAbout: [
    "home care operations",
    "home care scheduling software",
    "caregiver coordination",
    "agency growth",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rahulPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rabinaPersonSchema) }}
      />
      <AboutClient />
    </>
  );
}
