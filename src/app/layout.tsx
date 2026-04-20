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
  weight: ["300", "400", "500"],
});

const siteUrl = "https://www.nestaid.us";
const siteName = "Nestaid";
const defaultTitle = "Nestaid — AI receptionist & coordinator for home care";
const defaultDescription =
  "AI operations platform for home care agencies. Handle calls, cover call-outs, and keep schedules moving 24/7 with Nessa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Nestaid",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
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
  logo: `${siteUrl}/logomain.jpg`,
  description: defaultDescription,
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Rabina Adhikari", jobTitle: "Co-founder & CEO" },
    { "@type": "Person", name: "Rahul Chettri", jobTitle: "Co-founder & CTO" },
  ],
  sameAs: [] as string[],
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
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

        {/* Fixed base background color */}
        <div aria-hidden="true" className="fixed inset-0 -z-20 bg-[#FAFAFA]" />
        {/* Fixed dot-grid on top of the base color */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 opacity-80 [background-size:20px_20px] [background-image:radial-gradient(#c8c8c4_1px,transparent_1px)]"
        />
        {/* Radial vignette — fades dots toward edges for depth */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-[#FAFAFA] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,black_100%)]"
        />
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
