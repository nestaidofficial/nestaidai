import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy — Nestaid",
  description:
    "Nestaid's Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with our AI-powered home care operations platform.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Nestaid (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Nestaid platform, including our website and software applications (collectively, the &ldquo;Service&rdquo;). Nestaid is a software-as-a-service (SaaS) platform that provides AI-powered operational tools for home care agencies, including AI receptionist support, scheduling coordination, call-out handling, shift recovery workflows, communications, and related agency operations tools (&ldquo;Agency Customers&rdquo;).
        </p>
        <p>
          Agency Customers may use our Service to support communications and workflows involving their employees, caregivers, applicants, staff, and other authorized users (&ldquo;End Users&rdquo;).
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with our Service. It applies to both Agency Customers who use our platform and End Users whose information is processed through our platform on behalf of Agency Customers.
        </p>
      </>
    ),
  },
  {
    id: "our-role",
    title: "2. Our Role",
    content: (
      <>
        <p>
          In most cases, Nestaid acts as a service provider on behalf of Agency Customers. When an Agency Customer uses our platform to manage staffing workflows, scheduling, caregiver records, applicant onboarding, operational communications, or other internal processes, the Agency Customer controls that data and is responsible for how it is used. Nestaid processes such data on the Agency Customer&rsquo;s behalf and according to their instructions.
        </p>
        <p>
          If you are an End User, such as a caregiver, applicant, employee, or other person communicating with a home care agency through our platform, questions about your personal information should generally be directed to the relevant home care agency first. If needed, you may also contact Nestaid using the contact information listed below.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "3. Information We Collect",
    content: (
      <>
        <h3 className="text-base font-semibold text-black mt-6 mb-3">From Agency Customers</h3>
        <p>When an agency signs up for Nestaid, we may collect account and business information such as:</p>
        <ul>
          <li>Agency name</li>
          <li>Administrator and staff names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
          <li>Billing and account details</li>
          <li>Platform configuration and preferences</li>
          <li>Communication settings and workflow settings</li>
        </ul>

        <h3 className="text-base font-semibold text-black mt-6 mb-3">From End Users (on behalf of Agency Customers)</h3>
        <p>When End Users interact with our platform or with AI tools deployed by an Agency Customer, we may process information on that Agency Customer&rsquo;s behalf, including:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Work availability and scheduling information</li>
          <li>Job application details</li>
          <li>Employment history</li>
          <li>Professional licenses, certifications, and related compliance information</li>
          <li>Shift status, attendance, and call-out related information</li>
          <li>Messages, call transcripts, call recordings, voicemail content, notes, and communication history</li>
          <li>Documents or forms submitted through the platform</li>
          <li>Other information the Agency Customer chooses to collect using the Service</li>
        </ul>
        <p>This information is collected and controlled by the Agency Customer. Nestaid processes it on their behalf in order to provide the Service.</p>

        <h3 className="text-base font-semibold text-black mt-6 mb-3">Information Collected Automatically</h3>
        <p>When users access our Service, we may automatically collect certain technical and usage information, such as:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages viewed and actions taken within the Service</li>
          <li>Access times and session activity</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "4. How We Use Information",
    content: (
      <>
        <p>We use personal information for the following purposes:</p>
        <ul>
          <li>To provide, operate, maintain, and improve the Service</li>
          <li>To enable AI receptionist, scheduling, call-out management, and shift coordination workflows</li>
          <li>To process information on behalf of Agency Customers</li>
          <li>To facilitate voice calls, text messages, alerts, reminders, and other communications initiated by Agency Customers</li>
          <li>To support onboarding, staffing, scheduling, compliance, and operational workflows</li>
          <li>To personalize and configure platform features for Agency Customers</li>
          <li>To provide customer support</li>
          <li>To monitor usage, troubleshoot issues, and improve platform performance</li>
          <li>To detect, investigate, and prevent fraud, abuse, security incidents, and technical problems</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>We may also use limited data internally to improve the reliability, safety, and functionality of our platform, subject to our agreements with Agency Customers.</p>
      </>
    ),
  },
  {
    id: "voice-calls",
    title: "5. Voice Calls, AI Communications, and SMS/Text Messaging",
    content: (
      <>
        <p>Nestaid may support voice calls, AI-assisted conversations, and SMS/text messaging in the following ways:</p>

        <h3 className="text-base font-semibold text-black mt-6 mb-3">Messages and calls to Agency Customers</h3>
        <p>We may send text messages, automated alerts, voice calls, emails, or other service-related communications directly to Agency Customer staff for purposes such as:</p>
        <ul>
          <li>Account notifications</li>
          <li>Platform alerts</li>
          <li>Urgent staffing updates</li>
          <li>Scheduling-related notifications</li>
          <li>System or service updates</li>
          <li>Operational communications related to use of the Service</li>
        </ul>

        <h3 className="text-base font-semibold text-black mt-6 mb-3">Messages and calls to End Users on behalf of Agency Customers</h3>
        <p>Agency Customers may use Nestaid&rsquo;s platform to communicate with caregivers, applicants, employees, or other End Users. In these cases, the Agency Customer is the sender of the communication and is responsible for obtaining any required consent.</p>
        <p>These communications may include:</p>
        <ul>
          <li>Shift notifications and schedule updates</li>
          <li>Call-out alerts and shift coverage requests</li>
          <li>Open shift outreach</li>
          <li>Interview scheduling confirmations and reminders</li>
          <li>Applicant status updates</li>
          <li>Onboarding reminders</li>
          <li>Compliance and document reminders</li>
          <li>Care coordination messages</li>
          <li>Other home care operations-related communications</li>
        </ul>
        <p>Message frequency varies depending on user activity and the Agency Customer&rsquo;s platform usage. Message and data rates may apply.</p>
        <p>Recipients may opt out of SMS messages at any time by replying <strong>STOP</strong> to a message. For help, reply <strong>HELP</strong>.</p>
        <p className="font-medium text-black/80">We do not sell, rent, or share phone numbers, SMS consent data, or SMS opt-in records with third parties for their own marketing purposes. SMS consent is not a condition of purchasing any goods or services.</p>
      </>
    ),
  },
  {
    id: "how-we-share",
    title: "6. How We Share Information",
    content: (
      <>
        <p>We may share personal information in the following circumstances:</p>
        <ul>
          <li>With Agency Customers, who control the End User data processed through the platform</li>
          <li>With vendors, service providers, and sub-processors that help us operate the Service, such as hosting, communications, analytics, storage, transcription, and support providers</li>
          <li>When required by law, regulation, subpoena, court order, or other legal process</li>
          <li>To protect the rights, property, safety, or security of Nestaid, our users, Agency Customers, or the public</li>
          <li>In connection with a merger, acquisition, financing, reorganization, sale of assets, or similar business transaction</li>
          <li>With consent or at the direction of the Agency Customer or the individual when applicable</li>
        </ul>
        <p className="font-medium text-black/80">We do not sell personal information to third parties. We do not use End User data processed on behalf of Agency Customers for unrelated marketing purposes.</p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    content: (
      <>
        <p>We implement reasonable administrative, technical, and physical safeguards designed to protect personal information. These measures may include:</p>
        <ul>
          <li>Encryption in transit and at rest</li>
          <li>Role-based access controls</li>
          <li>Authentication and account security measures</li>
          <li>Logging and audit controls</li>
          <li>Secure cloud infrastructure</li>
          <li>Ongoing monitoring and security reviews</li>
        </ul>
        <p>However, no method of transmission over the Internet or method of electronic storage is completely secure. As a result, we cannot guarantee absolute security.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    content: (
      <>
        <p>We retain Agency Customer account information for as long as necessary to provide the Service, fulfill our contractual obligations, resolve disputes, enforce agreements, and comply with legal obligations.</p>
        <p>End User data processed on behalf of Agency Customers is retained according to the Agency Customer&rsquo;s instructions, our agreements with that Agency Customer, and applicable law. When an Agency Customer terminates its account, we will delete, return, or retain data in accordance with our contractual commitments and legal requirements.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "9. Your Rights",
    content: (
      <>
        <h3 className="text-base font-semibold text-black mt-6 mb-3">Agency Customers</h3>
        <p>Agency Customers may access, update, correct, or delete certain account information through the platform or by contacting us.</p>

        <h3 className="text-base font-semibold text-black mt-6 mb-3">End Users</h3>
        <p>If you are an End User and want to access, correct, or delete your personal information, you should contact the relevant home care agency directly, since that agency controls your information. If you cannot reach the agency, you may contact Nestaid and we will make reasonable efforts to assist or direct your request appropriately.</p>
        <p>Depending on your location, you may have additional rights under applicable privacy laws, which may include the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction or deletion</li>
          <li>Request data portability</li>
          <li>Limit or object to certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "10. Cookies and Similar Technologies",
    content: (
      <p>
        We use cookies and similar technologies to operate the Service, remember preferences, analyze usage, and improve performance. You can control cookies through your browser settings, but disabling cookies may affect the functionality of certain parts of the Service.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "11. Children's Privacy",
    content: (
      <p>
        Our Service is not intended for individuals under the age of 18, and we do not knowingly collect personal information directly from children. If we learn that we have collected personal information from a child in violation of applicable law, we will take reasonable steps to delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we will update the &ldquo;Last updated&rdquo; date and may provide additional notice where required. Continued use of the Service after the updated policy becomes effective means the updated policy will apply.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: (
      <>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <div className="mt-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl p-5 inline-block">
          <p className="font-medium text-black">Nestaid</p>
          <p>
            Email:{" "}
            <a
              href="mailto:rahul@nestaid.us"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              rahul@nestaid.us
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-6">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We take your privacy seriously. This policy explains how Nestaid collects, uses, and protects your personal information.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Last updated: <span className="font-medium text-black/70">February 8, 2026</span>
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
                <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 sm:p-10 prose-policy">
                  {sections.map((s, idx) => (
                    <div
                      key={s.id}
                      id={s.id}
                      className={idx !== 0 ? "mt-10 pt-10 border-t border-black/8" : ""}
                    >
                      <h2 className="text-xl sm:text-2xl font-heading tracking-tight text-black mb-4">
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
