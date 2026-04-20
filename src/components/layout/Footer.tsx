"use client";

import * as React from "react";
import Link from "next/link";
import {
  Star,
  DollarSign,
  LayoutDashboard,
  Calendar,
  Users,
  Info,
  Shield,
  FileText,
} from "lucide-react";

const brand = {
  name: "Nestaid",
  description:
    "The AI-powered operations platform for home care agencies. Handle calls, coordinate call-outs, and keep schedules moving 24/7 with Nessa, your AI receptionist.",
};

const socialLinks = [
  { name: "Email", href: "mailto:rahul@nestaid.us" },
  { name: "Book a demo", href: "https://calendly.com/rahulchettri601/nestaid-demo-call" },
];

const columns = [
  {
    title: "Product",
    links: [
      { name: "Features", Icon: Star, href: "/#features" },
      { name: "Management", Icon: LayoutDashboard, href: "/management" },
      { name: "Scheduling", Icon: Calendar, href: "/scheduling" },
      { name: "AI Onboarding", Icon: Users, href: "/ai-onboarding" },
      { name: "Pricing", Icon: DollarSign, href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", Icon: Info, href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", Icon: Shield, href: "/privacy" },
      { name: "Terms of Service", Icon: FileText, href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-gray-500 pt-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <Link href="/" className="inline-flex items-center mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Nestaid" className="h-8 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400/80">
              {brand.description}
            </p>
            <p className="text-sm font-light text-gray-500 mt-4">
              {socialLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    className="hover:text-black transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    href={link.href}
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className="mx-1.5 opacity-40">•</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
            {columns.map(({ title, links }) => (
              <div key={title} className="last:mt-12 md:last:mt-0">
                <h3 className="text-sm font-semibold text-black">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ name, Icon, href }) => (
                    <li key={name}>
                      <Link
                        href={href || "#"}
                        className="text-sm transition-colors text-gray-500 hover:text-black group flex items-center"
                      >
                        <Icon className="inline-block w-3.5 h-3.5 mr-1.5 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-black/10 pt-6 pb-8 flex items-center justify-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nestaid, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
