import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Support — Nestaid Caregiver App",
  description:
    "Get help with the Nestaid Caregiver app: signing in, password resets, location and microphone troubleshooting, and account deletion.",
  alternates: { canonical: "/support" },
};

const sections = [
  {
    id: "getting-help",
    title: "1. How to Get Help",
    content: (
      <>
        <p>
          The fastest way to get help depends on what you need:
        </p>
        <ul>
          <li>
            <strong>Schedule, shifts, or client questions</strong> — call your
            agency office. Your coordinator manages your schedule and can fix
            most issues on the spot.
          </li>
          <li>
            <strong>App problems</strong> (sign-in, crashes, something looks
            wrong) — email us at{" "}
            <a
              href="mailto:support@nestaid.us"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              support@nestaid.us
            </a>
            . Include your name, your agency&rsquo;s name, your iPhone model,
            and a screenshot if you can — it helps us fix things faster.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "login-help",
    title: "2. Signing In & Password Help",
    content: (
      <>
        <p>
          Nestaid Caregiver accounts are created by your agency — there is no
          in-app sign-up. Your agency sends you an email invitation where you
          set your password, and then you sign in to the app with that email
          and password.
        </p>
        <p className="font-medium text-black/80 mt-4">Forgot your password?</p>
        <ul>
          <li>Call your agency and ask for a password reset.</li>
          <li>
            They&rsquo;ll email you a secure link — tap it, choose a new
            password, and sign back into the app. The link expires after 24
            hours, so use it soon.
          </li>
        </ul>
        <p className="font-medium text-black/80 mt-4">Never got an invite?</p>
        <p>
          Ask your coordinator to send (or resend) your mobile app invitation
          from their Nestaid dashboard. Check your spam folder too.
        </p>
      </>
    ),
  },
  {
    id: "location-troubleshooting",
    title: "3. Location Troubleshooting",
    content: (
      <>
        <p>
          The app needs your location only when you clock in and out — it&rsquo;s
          how visits are verified for Electronic Visit Verification (EVV). If
          clock-in says it can&rsquo;t get your location or you appear too far
          from the client:
        </p>
        <ul>
          <li>
            Open iPhone <strong>Settings → Privacy &amp; Security → Location
            Services</strong> and make sure Location Services is on.
          </li>
          <li>
            Find <strong>Nestaid</strong> in the list and set it to{" "}
            <strong>While Using the App</strong>, with{" "}
            <strong>Precise Location</strong> turned on.
          </li>
          <li>
            If your position looks stale, tap <strong>Refresh location</strong>{" "}
            on the clock-in screen, or step near a window — GPS is weakest deep
            indoors.
          </li>
          <li>
            You must be within the geofence of the client&rsquo;s address to
            clock in. If you are at the right address and still blocked, the
            address on file may be wrong — call your agency.
          </li>
        </ul>
        <p>
          The app never tracks your location in the background or between
          visits.
        </p>
      </>
    ),
  },
  {
    id: "microphone-troubleshooting",
    title: "4. Microphone Troubleshooting",
    content: (
      <>
        <p>
          The microphone is used only when you tap the mic button to dictate
          your visit notes. If dictation won&rsquo;t start or says microphone
          access is off:
        </p>
        <ul>
          <li>
            Open iPhone <strong>Settings → Apps → Nestaid</strong> (or scroll
            to Nestaid in Settings) and turn <strong>Microphone</strong> on.
          </li>
          <li>
            Speak normally, holding the phone as you would on a call. Tap the
            stop button when you finish — your note is written up
            automatically and you can edit it before submitting.
          </li>
          <li>
            If the note comes back empty, try again a little closer to the
            phone and away from loud background noise.
          </li>
        </ul>
        <p>
          Recordings are used only to produce your written note and are not
          stored after transcription — see our{" "}
          <a
            href="/privacy#caregiver-mobile-app"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "account-deletion",
    title: "5. Deleting Your Account",
    content: (
      <>
        <p>
          You can request deletion of your Nestaid Caregiver account and
          personal information at any time:
        </p>
        <ul>
          <li>
            <strong>Through your agency</strong> — ask your coordinator to
            deactivate and delete your caregiver account, or
          </li>
          <li>
            <strong>Directly with Nestaid</strong> — email{" "}
            <a
              href="mailto:support@nestaid.us"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              support@nestaid.us
            </a>{" "}
            with the subject &ldquo;Delete my account&rdquo; from the email
            address on your account.
          </li>
        </ul>
        <p>
          We confirm and complete deletion requests within 30 days. One
          important note: EVV visit-verification records and care documentation
          are healthcare records that your agency may be legally required to
          keep under state and federal Medicaid rules — those records are
          retained as required by law, but your account is closed and your
          sign-in and personal profile are removed.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "6. Support Availability",
    content: (
      <>
        <p>
          Email support is monitored <strong>Monday through Friday, 9 AM to 6
          PM Eastern Time</strong>. We aim to respond within{" "}
          <strong>1–2 business days</strong>.
        </p>
        <p>
          For anything urgent about today&rsquo;s shifts — running late, a
          client emergency, a visit you can&rsquo;t make — always call your
          agency office directly rather than emailing; they can act
          immediately.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "7. Contact",
    content: (
      <div className="mt-2 bg-white/60 border border-black/10 rounded-xl p-5 inline-block">
        <p className="font-medium text-black">Nestaid Support</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@nestaid.us"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            rahul@Nestaid.us
          </a>
        </p>
        <p>
          Privacy requests:{" "}
          <a
            href="/privacy#caregiver-mobile-app"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Privacy Policy — Caregiver Mobile App
          </a>
        </p>
      </div>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="subtle" className="mb-5">Support</Badge>
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Caregiver App <span className="gradient-text">Support</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Help with the Nestaid Caregiver app for iPhone — signing in,
                clocking in and out, dictating visit notes, and managing your
                account.
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

              {/* Support body */}
              <div className="lg:col-span-9">
                <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10 prose-policy">
                  {sections.map((s, idx) => (
                    <div
                      key={s.id}
                      id={s.id}
                      className={idx !== 0 ? "mt-10 pt-10 border-t border-black/8" : ""}
                    >
                      <h2 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[28px] font-sans font-medium tracking-tight leading-tight mb-6 text-[#F58D42]">
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
