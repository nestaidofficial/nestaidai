import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nestaid collects, uses, discloses, and protects personal information for our AI-powered home care operations platform.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "our-role",
    title: "1. Our Role",
    content: (
      <>
        <p>
          Nestaid works with home care agencies and related organizations
          (&ldquo;Agency Customers&rdquo;). In most cases, Nestaid acts as a
          service provider and processes information on behalf of Agency
          Customers.
        </p>
        <p>
          If you are a caregiver, employee, applicant, client, staff member, or
          other person interacting with an Agency Customer through Nestaid, the
          Agency Customer generally controls your information. Questions about
          your information should usually be directed to that Agency Customer
          first.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We may collect information from Agency Customers, including:</p>
        <ul>
          <li>Agency name</li>
          <li>Staff names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
          <li>Billing and account details</li>
          <li>Platform settings and workflow preferences</li>
        </ul>
        <p>
          Agency Customers may also use Nestaid to process information about
          caregivers, applicants, employees, clients, and other users,
          including:
        </p>
        <ul>
          <li>Name</li>
          <li>Contact information</li>
          <li>Scheduling and availability information</li>
          <li>Shift status, call-out, and coverage information</li>
          <li>Job application or onboarding details</li>
          <li>Licenses, certifications, and compliance-related information</li>
          <li>
            Messages, call transcripts, call recordings, voicemails, notes,
            forms, and uploaded documents
          </li>
        </ul>
        <p>
          We may also collect technical information such as IP address, browser
          type, device information, pages viewed, session activity, cookies, and
          similar data.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Information",
    content: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Provide and operate Nestaid</li>
          <li>
            Support AI receptionist, scheduling, call-out, and shift
            coordination workflows
          </li>
          <li>
            Send calls, messages, alerts, reminders, and service communications
          </li>
          <li>Configure agency workflows</li>
          <li>Provide customer support</li>
          <li>Improve platform reliability, safety, and performance</li>
          <li>
            Detect security issues, fraud, abuse, or technical problems
          </li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell personal information. We do not use End User data
          processed on behalf of Agency Customers for unrelated marketing
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "hipaa-regulated-data",
    title: "4. HIPAA-Regulated Data",
    content: (
      <>
        <p>
          Some Agency Customers may use Nestaid in connection with information
          that may be considered Protected Health Information (&ldquo;PHI&rdquo;)
          or electronic Protected Health Information (&ldquo;ePHI&rdquo;) under
          HIPAA.
        </p>
        <p>
          Where HIPAA applies, Nestaid processes PHI/ePHI only as permitted by
          applicable law, customer instructions, and a written Business
          Associate Agreement where required.
        </p>
        <p>
          Nestaid does not use PHI/ePHI processed on behalf of Agency Customers
          to train general AI models or for unrelated marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "calls-ai-sms",
    title: "5. Calls, AI Communications, and SMS",
    content: (
      <>
        <p>
          Nestaid may support voice calls, AI-assisted conversations, emails,
          alerts, and SMS/text messaging.
        </p>

        <p className="font-medium text-black/80 mt-4">SMS / Text Messaging</p>
        <p>
          Nestaid sends operational and transactional text messages only to
          users who have opted in. During onboarding, a user enters their mobile
          number and checks a separate SMS consent checkbox that is unchecked by
          default, optional, and not required to create or use a Nestaid account.
          Pilot participants confirm consent before being added to SMS testing.
          Nestaid does not purchase, rent, scrape, or import phone numbers from
          third parties.
        </p>
        <p>
          These messages may include open-shift coverage requests, schedule
          updates, shift confirmations, visit reminders, EVV clock-in reminders,
          weekly shift summaries, onboarding and testing updates, and replies to
          scheduling or coordination questions. They are operational messages —
          not marketing, promotional, or advertising messages.
        </p>
        <p>
          To protect privacy, text messages contain only the minimum necessary
          operational information. Client names, health details, care-plan
          details, addresses, and other sensitive information are not included in
          text messages; users are directed to the secure Nestaid app to view
          full details.
        </p>
        <p>
          Message frequency varies. Message and data rates may apply. You can opt
          out at any time by replying <strong>STOP</strong>, and you can get help
          at any time by replying <strong>HELP</strong>. Opt-out requests are
          honored before any further messages are sent.
        </p>
        <p className="font-medium text-black/80">
          No mobile information, phone numbers, SMS consent, or opt-in data is
          sold or shared with third parties or affiliates for their own marketing
          or promotional purposes. This information may be shared only with
          subcontractors and service providers that support the messaging program
          (such as our SMS and telephony provider), and only to deliver these
          messages.
        </p>
      </>
    ),
  },
  {
    id: "google-services",
    title: "6. Google Services, OAuth, and Calendar Integration",
    content: (
      <>
        <p>
          Nestaid offers optional Google integrations that Agency Customers may
          enable and disconnect at any time from integration settings.
        </p>

        <p className="font-medium text-black/80 mt-4">Google Sign-In</p>
        <p>
          We use the <strong>openid</strong>,{" "}
          <strong>userinfo.email</strong>, and{" "}
          <strong>userinfo.profile</strong> scopes only to authenticate the user
          and link their Google account to their Nestaid record. We store the
          user&rsquo;s email, profile name, and Google account ID. Not used for
          advertising or marketing.
        </p>

        <p className="font-medium text-black/80 mt-4">Google Calendar</p>
        <p>
          We use the <strong>calendar.events</strong> scope solely for AI
          Receptionist appointment booking to: read events during business hours
          to find availability, and create, update, or delete events as
          appointments are booked, rescheduled, or cancelled in Nestaid. We do
          not request the broader <strong>calendar</strong> scope or access
          calendar settings, metadata, ACLs, or sharing permissions.
        </p>

        <p className="font-medium text-black/80 mt-4">Data We Store</p>
        <p>
          Sign-In: email, profile name, Google account ID, and OAuth refresh
          token. Calendar: appointment title, start/end time, time zone,
          attendee email, internal appointment ID, and Google event ID. Events
          read for availability checks are processed transiently and not
          persisted.
        </p>

        <p className="font-medium text-black/80 mt-4">Sharing</p>
        <p>
          We do not sell or transfer Google user data. We share it only with
          the connecting Agency Customer and vetted subprocessors (e.g., hosting
          and database providers) under confidentiality and security
          obligations.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Retention &amp; Revocation
        </p>
        <p>
          On disconnect, Nestaid revokes and deletes the stored OAuth refresh
          token and Google event IDs. Users can also revoke access at{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            myaccount.google.com/permissions
          </a>
          . Existing calendar events remain in the user&rsquo;s Google Calendar.
        </p>

        <p className="font-medium text-black/80 mt-4">Limited Use</p>
        <p>
          Nestaid&rsquo;s use and transfer of information from Google APIs
          adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. We do not use Google data
          for advertising, do not transfer it except as needed to operate these
          features or comply with law, and do not allow humans to read it
          except with the user&rsquo;s consent, for security/abuse
          investigation, legal compliance, or in aggregated form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-share",
    title: "7. How We Share Information",
    content: (
      <>
        <p>We may share information:</p>
        <ul>
          <li>With Agency Customers</li>
          <li>
            With service providers that help us operate Nestaid, such as
            hosting, communications, storage, transcription, analytics, support,
            and security providers
          </li>
          <li>When required by law or legal process</li>
          <li>
            To protect the rights, safety, and security of Nestaid, our
            customers, users, or the public
          </li>
          <li>
            In connection with a merger, acquisition, financing, or sale of
            assets
          </li>
          <li>
            With consent or at the direction of the Agency Customer or
            individual
          </li>
        </ul>
        <p>
          Where required, we use appropriate contractual safeguards with service
          providers that handle regulated data.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "8. Data Security",
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          designed to protect personal information. These may include
          encryption, access controls, authentication, logging, audit controls,
          secure cloud infrastructure, and security monitoring.
        </p>
        <p>No system is completely secure, and we cannot guarantee absolute security.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "9. Data Retention",
    content: (
      <>
        <p>
          We retain information as long as necessary to provide the Service, meet
          contractual obligations, resolve disputes, enforce agreements, and
          comply with legal requirements.
        </p>
        <p>
          Information processed on behalf of Agency Customers is retained
          according to customer instructions, our agreements, and applicable law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "10. Your Rights",
    content: (
      <>
        <p>
          Agency Customers may access, update, or delete certain account
          information through the platform or by contacting us.
        </p>
        <p>
          If you are an End User, you should contact the relevant Agency
          Customer to access, correct, or delete your information. If needed,
          you may also contact Nestaid, and we will make reasonable efforts to
          assist or direct your request appropriately.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "11. Cookies",
    content: (
      <p>
        We use cookies and similar technologies to operate the website and
        Service, remember preferences, analyze usage, and improve performance.
        You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "12. Children’s Privacy",
    content: (
      <p>
        Nestaid is not intended for individuals under 18. We do not knowingly
        collect personal information directly from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. If we make
        material changes, we will update the &ldquo;Last updated&rdquo; date and
        may provide additional notice where required.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <div className="mt-2 bg-white/60 border border-black/10 rounded-xl p-5 inline-block">
        <p className="font-medium text-black">Nestaid Inc.</p>
        <p>
          Website:{" "}
          <a
            href="https://www.nestaid.us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            www.Nestaid.us
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:rahul@nestaid.us"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            rahul@Nestaid.us
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="subtle" className="mb-5">Legal</Badge>
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Nestaid Inc. (&ldquo;Nestaid,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides AI-powered
                software tools for home care agencies, including AI receptionist,
                scheduling coordination, call-out handling, shift recovery,
                communications, and related operational workflows. This Privacy
                Policy explains how we collect, use, share, and protect personal
                information through our website, platform, and related services.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Last updated:{" "}
                <span className="font-medium text-black/70">June 23, 2026</span>
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
                <div className="sticky top-24 bg-white/60 border border-black/10 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-black uppercase tracking-widest mb-4">Contents</p>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-sm text-muted-foreground hover:text-black transition-colors py-1 leading-snug"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Policy body */}
              <div className="lg:col-span-9">
                <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10 prose-policy">
                  {sections.map((s, idx) => (
                    <div
                      key={s.id}
                      id={s.id}
                      className={idx !== 0 ? "mt-10 pt-10 border-t border-black/8" : ""}
                    >
                      <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6 text-black">
                        {s.title}
                      </h2>
                      <div className="text-sm text-muted-foreground leading-relaxed space-y-3 [&_ul]:mt-2 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_li]:leading-relaxed [&_strong]:text-black/80 [&_strong]:font-medium">
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
