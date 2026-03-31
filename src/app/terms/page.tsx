import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service — Nestaid",
  description:
    "Nestaid's Terms of Service govern your access to and use of the Nestaid platform, AI-powered tools, and related services.",
};

const sections = [
  {
    id: "intro",
    title: null,
    content: (
      <p>
        Welcome to Nestaid. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Nestaid website, platform, software, AI-powered tools, communications features, and related services (collectively, the &ldquo;Services&rdquo;). By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.
      </p>
    ),
  },
  {
    id: "who-applies",
    title: "1. Who These Terms Apply To",
    content: (
      <>
        <p>
          These Terms apply to all users of the Services, including visitors to our website, agency customers, administrators, staff members, contractors, and other users who access or interact with the Services.
        </p>
        <p>
          If you are using the Services on behalf of a company, agency, or other organization, you represent that you have authority to bind that organization to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "what-nestaid-does",
    title: "2. What Nestaid Does",
    content: (
      <>
        <p>
          Nestaid provides software and related tools designed to support agency operations. Depending on the Services you use, features may include AI receptionist workflows, call handling, scheduling coordination, shift recovery support, automated communications, routing, summaries, alerts, reporting, and related operational tools.
        </p>
        <p>Nestaid may add, remove, update, or modify features from time to time.</p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content: (
      <p>
        You must be at least 18 years old to use the Services. By using the Services, you represent that you meet this requirement and are legally able to enter into these Terms.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "4. Accounts and Access",
    content: (
      <>
        <p>
          Some parts of the Services may require an account. You agree to provide accurate and current information and to keep it updated.
        </p>
        <p>You are responsible for:</p>
        <ul>
          <li>maintaining the confidentiality of your login credentials;</li>
          <li>all activity that occurs under your account; and</li>
          <li>notifying us promptly if you believe your account has been accessed without authorization.</li>
        </ul>
        <p>We may suspend or restrict access if we believe an account is being used improperly or in violation of these Terms.</p>
      </>
    ),
  },
  {
    id: "customer-responsibility",
    title: "5. Customer Responsibility for Use of the Platform",
    content: (
      <>
        <p>
          If you are an agency, organization, or business using Nestaid, you are responsible for how you use the Services, including how your team configures workflows, contacts people, reviews outputs, and acts on information provided through the platform.
        </p>
        <p>
          You are also responsible for ensuring that your use of the Services complies with applicable laws, regulations, and notice or consent requirements, including those related to communications, texting, calling, recording, privacy, and employment practices.
        </p>
      </>
    ),
  },
  {
    id: "ai-features",
    title: "6. AI Features and Communications",
    content: (
      <>
        <p>
          The Services may include AI-assisted features such as call handling, message drafting, summaries, transcripts, classifications, suggestions, workflow triggers, scheduling support, and similar tools.
        </p>
        <p>By using the Services, you understand and agree that:</p>
        <ul>
          <li>AI-generated outputs are assistive tools only;</li>
          <li>outputs may be incomplete, inaccurate, delayed, or incorrect;</li>
          <li>human review and judgment remain your responsibility;</li>
          <li>calls, messages, notes, transcripts, and related records may be processed through the platform in order to provide the Services.</li>
        </ul>
        <p>
          If you use Nestaid to call, text, route, or communicate with other people, you are responsible for the content, recipients, timing, and legality of those communications.
        </p>
      </>
    ),
  },
  {
    id: "no-emergency",
    title: "7. No Emergency or Crisis Use",
    content: (
      <>
        <p>
          Nestaid is not an emergency response service and should not be used for emergencies, urgent medical needs, or situations requiring immediate intervention. Do not rely on the Services to contact emergency responders or to handle time-critical emergencies.
        </p>
        <p className="font-medium text-black/80">
          If there is an emergency, call 911 or contact the appropriate emergency service directly.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "8. Fees and Paid Services",
    content: (
      <>
        <p>
          Some parts of the Services may require payment. If you purchase paid Services, you agree to pay all fees described at the time of purchase or in your applicable order, invoice, or subscription terms.
        </p>
        <p>Unless otherwise stated:</p>
        <ul>
          <li>fees are non-refundable except where required by law or expressly stated otherwise;</li>
          <li>recurring subscriptions may renew until canceled;</li>
          <li>you are responsible for applicable taxes, excluding taxes based on our income.</li>
        </ul>
        <p>We may suspend or limit access to paid Services for nonpayment.</p>
      </>
    ),
  },
  {
    id: "customer-data",
    title: "9. Customer Data and Content",
    content: (
      <>
        <p>
          You may submit, upload, store, send, or otherwise make available data, text, files, schedules, contact information, communications, and other materials through the Services (&ldquo;Customer Data&rdquo;).
        </p>
        <p>
          As between you and Nestaid, you retain ownership of your Customer Data. You grant Nestaid a limited right to host, store, process, transmit, reproduce, and use Customer Data as necessary to provide, maintain, secure, support, and improve the Services.
        </p>
        <p>You are responsible for ensuring that:</p>
        <ul>
          <li>you have the rights to provide Customer Data to us;</li>
          <li>your Customer Data does not violate any law or third-party right; and</li>
          <li>your Customer Data is accurate and appropriate for your intended use.</li>
        </ul>
        <p>
          We may use aggregated, anonymized, or de-identified information derived from use of the Services for analytics, security, benchmarking, product improvement, and other lawful business purposes.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "10. Acceptable Use",
    content: (
      <>
        <p>You agree not to use the Services to:</p>
        <ul>
          <li>violate any law or regulation;</li>
          <li>infringe or misappropriate the rights of others;</li>
          <li>send unlawful, deceptive, abusive, or unauthorized communications;</li>
          <li>upload malware, harmful code, or malicious content;</li>
          <li>interfere with, disrupt, or damage the Services or related systems;</li>
          <li>attempt to gain unauthorized access to accounts, systems, or data;</li>
          <li>reverse engineer, decompile, or attempt to extract source code or underlying models, except where prohibited by law;</li>
          <li>use the Services to build or support a competing product;</li>
          <li>impersonate another person or misrepresent your affiliation.</li>
        </ul>
        <p>We may investigate suspected misuse and may suspend or terminate access where appropriate.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "11. Third-Party Services",
    content: (
      <>
        <p>
          The Services may integrate with or depend on third-party services such as telephony providers, messaging platforms, calendars, CRMs, cloud providers, analytics providers, or other external systems.
        </p>
        <p>
          We do not control and are not responsible for third-party services, including their availability, security, accuracy, or performance. Your use of those services may also be subject to separate terms from those providers.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "12. Intellectual Property",
    content: (
      <>
        <p>
          The Services, including the software, design, branding, interfaces, workflows, documentation, and all related intellectual property rights, are owned by Nestaid or its licensors.
        </p>
        <p>
          Except for the limited rights expressly granted to you under these Terms, no rights are granted to you. You may not copy, modify, distribute, sell, sublicense, lease, or create derivative works from the Services except as permitted by law or with our written permission.
        </p>
        <p>If you provide feedback or suggestions, we may use them without restriction or obligation.</p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "13. Privacy",
    content: (
      <p>
        Your use of the Services is also subject to our{" "}
        <a href="/privacy" className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity">
          Privacy Policy
        </a>
        , which explains how we collect, use, and protect information.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "14. Disclaimer of Warranties",
    content: (
      <>
        <p className="font-medium text-black/80 uppercase text-xs tracking-wide">
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by law, Nestaid disclaims all warranties, express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.
        </p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>the Services will be uninterrupted, secure, or error-free;</li>
          <li>any call, text, alert, transcript, summary, or notification will be delivered or generated successfully or on time;</li>
          <li>AI-generated outputs will be accurate, complete, or suitable for your needs;</li>
          <li>use of the Services will produce any specific business, staffing, scheduling, or operational outcome.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "15. Limitation of Liability",
    content: (
      <>
        <p className="font-medium text-black/80 uppercase text-xs tracking-wide leading-relaxed">
          To the maximum extent permitted by law, Nestaid and its affiliates, officers, directors, employees, contractors, and licensors will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or related to your use of or inability to use the Services.
        </p>
        <p className="font-medium text-black/80 uppercase text-xs tracking-wide leading-relaxed mt-4">
          To the maximum extent permitted by law, Nestaid&rsquo;s total liability for any claims arising out of or relating to the Services or these Terms will not exceed the greater of: (a) the amount you paid us for the Services in the twelve (12) months before the claim arose, or (b) US $100.
        </p>
        <p>Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.</p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "16. Indemnification",
    content: (
      <>
        <p>
          You agree to defend, indemnify, and hold harmless Nestaid and its affiliates, officers, directors, employees, contractors, and licensors from and against claims, damages, losses, liabilities, costs, and expenses, including reasonable attorneys&rsquo; fees, arising out of or related to:
        </p>
        <ul>
          <li>your use of the Services;</li>
          <li>your Customer Data;</li>
          <li>your violation of these Terms;</li>
          <li>your violation of applicable law;</li>
          <li>your communications or workflows using the Services; or</li>
          <li>your failure to obtain required notices, permissions, or consents.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "17. Suspension and Termination",
    content: (
      <>
        <p>We may suspend or terminate your access to the Services at any time if:</p>
        <ul>
          <li>you violate these Terms;</li>
          <li>we reasonably believe your use creates risk, harm, or legal exposure;</li>
          <li>payment is overdue for paid Services; or</li>
          <li>we decide to discontinue all or part of the Services.</li>
        </ul>
        <p>You may stop using the Services at any time.</p>
        <p>
          Upon termination, your right to use the affected Services will end immediately. Sections that by their nature should survive termination will survive, including sections related to intellectual property, disclaimers, liability limits, indemnification, and dispute terms.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "18. Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of the State of Massachusetts, without regard to conflict of laws rules.
      </p>
    ),
  },
  {
    id: "disputes",
    title: "19. Disputes",
    content: (
      <>
        <p>
          Any dispute, claim, or controversy arising out of or relating to these Terms or the Services will first be addressed through a good-faith effort to resolve the matter informally.
        </p>
        <p>
          If the dispute cannot be resolved informally, it will be resolved by binding arbitration, unless applicable law requires otherwise. The arbitration will take place in Boston, Massachusetts, unless the parties agree otherwise.
        </p>
        <p>
          Nothing in this section prevents either party from seeking injunctive or equitable relief in a court of competent jurisdiction for misuse of intellectual property or confidential information.
        </p>
        <p>
          You and Nestaid agree to bring claims only in an individual capacity and not as part of any class or representative action, to the extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "20. Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. If we do, we will update the &ldquo;Last updated&rdquo; date above. Your continued use of the Services after updated Terms become effective means you accept the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "21. Contact Information",
    content: (
      <>
        <p>If you have questions about these Terms, contact us at:</p>
        <div className="mt-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl p-5 inline-block">
          <p className="font-medium text-black">Nestaid</p>
          <p>
            Email:{" "}
            <a
              href="mailto:rabina@nestaid.us"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              rabina@nestaid.us
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.nestaid.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              www.nestaid.ai
            </a>
          </p>
        </div>
      </>
    ),
  },
];

const tocSections = sections.filter((s) => s.title !== null);

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="subtle" className="mb-5">Legal</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Please read these Terms carefully before using the Nestaid platform. They outline your rights, responsibilities, and the rules governing your use of our Services.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                Last updated: <span className="font-medium text-black/70">March 28, 2026</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Content ────────────────────────────────────────── */}
        <section className="section-padding pt-0">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Sticky table of contents */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-black uppercase tracking-widest mb-4">Contents</p>
                  <nav className="space-y-1">
                    {tocSections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-base text-muted-foreground hover:text-black transition-colors py-1 leading-snug"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Terms body */}
              <div className="lg:col-span-9">
                <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 sm:p-10">
                  {/* Preamble */}
                  <div className="text-base text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-black/8">
                    <p>
                      Welcome to Nestaid. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Nestaid website, platform, software, AI-powered tools, communications features, and related services (collectively, the &ldquo;Services&rdquo;). By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.
                    </p>
                    <p className="mt-3">
                      In these Terms, &ldquo;Nestaid,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to Nestaid, and &ldquo;you&rdquo; refers to the individual or entity using the Services.
                    </p>
                  </div>

                  {/* Numbered sections */}
                  {sections.filter((s) => s.title !== null).map((s, idx) => (
                    <div
                      key={s.id}
                      id={s.id}
                      className={idx !== 0 ? "mt-10 pt-10 border-t border-black/8" : ""}
                    >
                      <h2 className="text-2xl sm:text-3xl font-heading tracking-tight text-black mb-4">
                        {s.title}
                      </h2>
                      <div className="text-base text-muted-foreground leading-relaxed space-y-3 [&_ul]:mt-2 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_li]:leading-relaxed [&_strong]:text-black/80 [&_strong]:font-medium">
                        {s.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
