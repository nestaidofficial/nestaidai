import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Gelasio, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const gelasio = Gelasio({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const siteUrl = "https://www.nestaid.us";
const siteName = "Nestaid";
const defaultTitle = "Nestaid — AI-native platform for home care agencies";
const defaultDescription =
  "The AI-native platform for home care agencies. Nestaid's AI receptionist, coordinator, and scheduler answer calls, cover call-outs, onboard caregivers, and keep schedules moving 24/7.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Nestaid",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "AI-native home care platform",
    "AI-native care operations platform",
    "AI receptionist",
    "home care software",
    "home care scheduling",
    "caregiver coordination",
    "home care agency platform",
    "AI phone agent",
    "call-out management",
    "Nessa AI",
    "Nestaid",
  ],
  authors: [{ name: "Nestaid", url: siteUrl }],
  creator: "Nestaid",
  publisher: "Nestaid",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nestaid",
  alternateName: "Nessa AI",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logomain.jpg`,
    width: 512,
    height: 195,
  },
  description: defaultDescription,
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Rabina Adhikari", jobTitle: "Co-founder & CEO" },
    { "@type": "Person", name: "Rahul Chettri", jobTitle: "Co-founder & CTO" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "rahul@nestaid.us",
      url: "https://calendly.com/rahulchettri601/nestaid-demo-call",
      availableLanguage: ["en"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: siteName,
  description: defaultDescription,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nestaid",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Home Care Operations",
  operatingSystem: "Web",
  url: siteUrl,
  description: defaultDescription,
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
    description: "Usage-based pricing — talk to sales for a quote.",
  },
  publisher: {
    "@type": "Organization",
    name: "Nestaid",
    url: siteUrl,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        {gtmId ? (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
      </head>
      <body
        className={`${gelasio.variable} ${ibmPlexSans.variable} ${inter.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        {/* Site-wide dotted background */}
        <div aria-hidden="true" className="fixed inset-0 -z-20 bg-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]"
          />
        </div>
        {children}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
