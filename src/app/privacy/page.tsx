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
        <p>
          Agency Customers may use Nestaid to communicate with caregivers,
          applicants, employees, clients, staff, or other users. These
          communications may include shift updates, call-out alerts, coverage
          requests, reminders, onboarding messages, and other operational
          communications.
        </p>
        <p>
          Message frequency may vary. Message and data rates may apply. SMS
          recipients may opt out at any time by replying <strong>STOP</strong>.
          For help, reply <strong>HELP</strong>.
        </p>
        <p className="font-medium text-black/80">
          We do not sell, rent, or share phone numbers, SMS consent data, or
          SMS opt-in records with third parties for their own marketing purposes.
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
          Nestaid offers optional integrations with Google services that Agency
          Customers may enable. Connecting these services is voluntary and can
          be disconnected at any time from Nestaid&rsquo;s integration settings.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Google Sign-In (OpenID Connect)
        </p>
        <p>
          When an agency user chooses &ldquo;Sign in with Google,&rdquo; Nestaid
          uses the <strong>openid</strong>,{" "}
          <strong>https://www.googleapis.com/auth/userinfo.email</strong>, and{" "}
          <strong>https://www.googleapis.com/auth/userinfo.profile</strong>{" "}
          scopes only to identify the user, link their Google account to their
          Nestaid agency user record, and complete authentication. We collect
          and store the user&rsquo;s Google account email, basic profile name,
          and Google account identifier solely for the purpose of authentication
          and account linkage. This data is not used for advertising, marketing,
          or any unrelated purpose.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Google Calendar Integration (AI Receptionist Appointment Booking)
        </p>
        <p>
          Nestaid uses the{" "}
          <strong>https://www.googleapis.com/auth/calendar.events</strong> scope
          only for its AI Receptionist appointment booking feature for home-care
          agencies. The scope is used to:
        </p>
        <ul>
          <li>
            Read existing events on the agency&rsquo;s selected Google Calendar
            during business hours to calculate available appointment slots
          </li>
          <li>
            Create a Google Calendar event when a caller confirms an appointment
            (with the appointment title, start/end time, time zone, attendee
            email, and an internal appointment ID)
          </li>
          <li>
            Update the corresponding Google Calendar event when an appointment
            is rescheduled in Nestaid
          </li>
          <li>
            Delete the corresponding Google Calendar event when an appointment
            is cancelled in Nestaid
          </li>
        </ul>
        <p>
          Nestaid does not request access to broader Google Calendar settings,
          calendar metadata, sharing permissions, ACLs, or user settings. We do
          not request the broader{" "}
          <strong>https://www.googleapis.com/auth/calendar</strong> scope
          because we only need access to event objects required for appointment
          booking.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Data We Store From Google
        </p>
        <p>
          For Google Sign-In, we store the user&rsquo;s Google email address,
          basic profile name, and Google account identifier, plus an OAuth
          refresh token used to maintain the integration. For Google Calendar,
          we store only the data needed to manage bookings: appointment title,
          start/end time, time zone, attendee email, internal appointment ID,
          and the Google event ID returned by Google. Existing calendar events
          read for availability checks are processed transiently and are not
          persisted by Nestaid.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Sharing of Google User Data
        </p>
        <p>
          Nestaid does not sell, rent, or transfer Google user data to third
          parties for their own purposes. We share Google user data only with
          the Agency Customer that connected the account and with vetted
          subprocessors strictly required to operate the booking and
          authentication features (for example, secure cloud hosting and
          database providers), under contractual confidentiality and security
          obligations.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Retention, Deletion, and User Control
        </p>
        <p>
          Users can disconnect Google Sign-In or Google Calendar at any time
          from Nestaid&rsquo;s integration settings. On disconnect, Nestaid
          revokes and deletes the stored OAuth refresh token and removes stored
          Google event IDs from our database. Users can additionally revoke
          access at{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            myaccount.google.com/permissions
          </a>
          . Nestaid does not delete the underlying Google Calendar events on
          disconnect, since those events belong to the user&rsquo;s calendar.
        </p>

        <p className="font-medium text-black/80 mt-4">
          Limited Use Disclosure
        </p>
        <p>
          Nestaid&rsquo;s use and transfer of information received from Google
          APIs to any other app will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Specifically: (1) we use
          Google user data only to provide and improve the user-facing features
          described above; (2) we do not transfer Google user data to third
          parties except as needed to provide or improve those features, to
          comply with applicable law, or as part of a merger, acquisition, or
          sale of assets with appropriate notice to users; (3) we do not use
          Google user data for serving advertisements; and (4) we do not allow
          humans to read Google user data unless we have obtained the
          user&rsquo;s affirmative agreement for specific data, it is necessary
          for security purposes (such as investigating abuse), to comply with
          applicable law, or the data is aggregated and used for internal
          operations under standard privacy protections.
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
    title: "12. Children&apos;s Privacy",
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
                <span className="font-medium text-black/70">May 8, 2026</span>
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
