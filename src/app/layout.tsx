import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nessa — The Smarter Way to Manage Your Business",
  description:
    "Nessa is the all-in-one SaaS platform that helps teams move faster, collaborate better, and grow with confidence.",
  keywords: ["SaaS", "productivity", "team collaboration", "business software"],
  authors: [{ name: "Nessa" }],
  openGraph: {
    title: "Nessa — The Smarter Way to Manage Your Business",
    description:
      "Nessa is the all-in-one SaaS platform that helps teams move faster, collaborate better, and grow with confidence.",
    type: "website",
    url: "https://nessa.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nessa — The Smarter Way to Manage Your Business",
    description:
      "Nessa is the all-in-one SaaS platform that helps teams move faster, collaborate better, and grow with confidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gelasio.variable} ${ibmPlexSans.variable} ${inter.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        {/* Fixed base background color */}
        <div aria-hidden="true" className="fixed inset-0 -z-20 bg-[#F6F6F3]" />
        {/* Fixed dot-grid on top of the base color */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 [background-size:20px_20px] [background-image:radial-gradient(#c8c8c4_1px,transparent_1px)]"
        />
        {/* Radial vignette — fades dots toward edges for depth */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-[#F6F6F3] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,black_100%)]"
        />
        {children}
      </body>
    </html>
  );
}
