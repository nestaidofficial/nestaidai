import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Nestaid SMS Consent Flow",
  description:
    "How Nestaid collects SMS opt-in consent during caregiver onboarding, including the exact consent language, opt-out instructions, and messaging compliance commitments.",
  alternates: { canonical: "/sms-consent" },
};

const linkClass =
  "text-black underline underline-offset-2 hover:opacity-70 transition-opacity";

export default function SmsConsentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="subtle" className="mb-5">Compliance</Badge>
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Nestaid SMS <span className="gradient-text">Consent Flow</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                This page documents how Nestaid collects SMS opt-in consent. It
                is published for carrier and A2P campaign verification. Nestaid
                uses SMS only for operational home care coordination —
                schedules, open-shift offers, shift confirmations, visit
                reminders, EVV clock-in reminders, onboarding updates, missed
                clock-in follow-ups, and coordination replies.
              </p>
            </div>
          </div>
        </section>

        {/* ── Content ────────────────────────────────────────── */}
        <section className="section-padding pt-0">
          <div className="container-max">
            <div className="max-w-3xl mx-auto space-y-10">

              {/* How consent is collected */}
              <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10">
                <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[28px] font-sans font-medium tracking-tight leading-tight mb-6 text-[#F58D42]">
                  How Consent Is Collected
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    The screenshot below shows the Nestaid{" "}
                    <strong className="text-black/80 font-medium">
                      Caregiver Onboarding Form
                    </strong>
                    , where users enter their mobile phone number and see a
                    separate SMS consent checkbox.
                  </p>
                  <ul className="mt-2 ml-5 list-disc space-y-1.5">
                    <li>
                      The SMS consent checkbox is{" "}
                      <strong className="text-black/80 font-medium">
                        unchecked by default
                      </strong>
                      .
                    </li>
                    <li>
                      Checking it is{" "}
                      <strong className="text-black/80 font-medium">
                        optional
                      </strong>{" "}
                      and is{" "}
                      <strong className="text-black/80 font-medium">
                        not required
                      </strong>{" "}
                      to use Nestaid or to work with the agency.
                    </li>
                    <li>
                      Users must{" "}
                      <strong className="text-black/80 font-medium">
                        actively check the box
                      </strong>{" "}
                      before Nestaid sends any SMS messages.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Screenshot */}
              <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10">
                <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[28px] font-sans font-medium tracking-tight leading-tight mb-6 text-[#F58D42]">
                  Caregiver Onboarding Form
                </h2>
                <Image
                  src="/sms-consent-onboarding-form.png"
                  alt="Nestaid Caregiver Onboarding Form showing the mobile phone number field and a separate, unchecked SMS consent checkbox with consent language, opt-out instructions, and links to the Terms of Service and Privacy Policy"
                  width={2880}
                  height={2290}
                  className="w-full h-auto rounded-xl border border-black/10"
                />
              </div>

              {/* Exact consent language */}
              <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10">
                <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[28px] font-sans font-medium tracking-tight leading-tight mb-6 text-[#F58D42]">
                  Exact Consent Language on the Form
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
                  <blockquote className="border-l-2 border-black/20 pl-4 italic">
                    <p className="not-italic font-medium text-black/80 mb-1">
                      SMS Consent
                    </p>
                    <p>
                      &ldquo;I agree to receive operational text messages from
                      Nestaid and my home care agency about schedules,
                      open-shift offers, shift confirmations, visit reminders,
                      EVV clock-in reminders, onboarding updates, missed
                      clock-in follow-ups, and care coordination updates.&rdquo;
                    </p>
                  </blockquote>
                  <blockquote className="border-l-2 border-black/20 pl-4 italic">
                    <p>
                      &ldquo;Message frequency varies. Message and data rates
                      may apply. Reply STOP to opt out and HELP for help.
                      Consent is not required to use Nestaid or work with the
                      agency.&rdquo;
                    </p>
                  </blockquote>
                  <p>
                    The form also displays visible links to our Terms of
                    Service and Privacy Policy:
                  </p>
                  <ul className="mt-2 ml-5 list-disc space-y-1.5">
                    <li>
                      <a href="https://www.nestaid.us/terms" className={linkClass}>
                        https://www.nestaid.us/terms
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nestaid.us/privacy" className={linkClass}>
                        https://www.nestaid.us/privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compliance commitments */}
              <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10">
                <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[28px] font-sans font-medium tracking-tight leading-tight mb-6 text-[#F58D42]">
                  Messaging Compliance Commitments
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                  <ul className="ml-5 list-disc space-y-1.5">
                    <li>
                      Nestaid does <strong className="text-black/80 font-medium">not</strong>{" "}
                      send marketing, promotional, lead-generation, recruiting,
                      or cold outreach SMS.
                    </li>
                    <li>
                      Nestaid does <strong className="text-black/80 font-medium">not</strong>{" "}
                      purchase, rent, scrape, or import phone numbers.
                    </li>
                    <li>
                      Nestaid does <strong className="text-black/80 font-medium">not</strong>{" "}
                      sell or share mobile opt-in data or SMS consent with third
                      parties or affiliates for marketing or promotional
                      purposes.
                    </li>
                  </ul>
                  <p>
                    SMS is used exclusively for the operational home care
                    coordination messages described above, and only after a
                    user has actively opted in. Users can opt out at any time
                    by replying <strong className="text-black/80 font-medium">STOP</strong>{" "}
                    and get help by replying{" "}
                    <strong className="text-black/80 font-medium">HELP</strong>.
                  </p>
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
