import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Nestaid's commitment to digital accessibility — our WCAG 2.1 AA conformance target, the measures we take, known limitations, and how to request accommodations or report a barrier.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Accessibility Statement | Nestaid",
    description:
      "How Nestaid works to make our website and AI-powered home care platform accessible to everyone, and how to request help.",
    url: "/accessibility",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const sections = [
  {
    id: "commitment",
    title: "1. Our Commitment",
    content: (
      <>
        <p>
          Nestaid is committed to making our website and AI-powered home care
          platform accessible to the widest possible audience, regardless of
          ability or technology. Accessibility matters especially in home care,
          where the people who rely on our tools — caregivers, coordinators,
          clients, and their families — bring a wide range of abilities and
          assistive technologies.
        </p>
        <p>
          We treat accessibility as an ongoing effort, not a one-time project.
          We regularly review our website and product and work to remove
          barriers as we find them.
        </p>
      </>
    ),
  },
  {
    id: "conformance",
    title: "2. Conformance Status",
    content: (
      <>
        <p>
          We aim to conform to the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
          </a>
          . These guidelines explain how to make web content more accessible to
          people with a wide range of disabilities, including visual, auditory,
          physical, speech, cognitive, and neurological disabilities.
        </p>
        <p>
          Nestaid is <strong>partially conformant</strong> with WCAG 2.1 AA.
          &ldquo;Partially conformant&rdquo; means some parts of the content may
          not yet fully meet the standard, and we are actively working toward
          full conformance.
        </p>
      </>
    ),
  },
  {
    id: "measures",
    title: "3. Measures We Take",
    content: (
      <>
        <p>To support accessibility, we work to:</p>
        <ul>
          <li>Use semantic HTML and clear heading structure for screen readers;</li>
          <li>Maintain sufficient color contrast and readable typography;</li>
          <li>Provide text alternatives for meaningful images;</li>
          <li>Support keyboard navigation and visible focus states;</li>
          <li>Respect reduced-motion preferences where animations are used;</li>
          <li>Design forms and interactive elements with accessible labels;</li>
          <li>Test against accessibility tooling as part of our build process.</li>
        </ul>
      </>
    ),
  },
  {
    id: "limitations",
    title: "4. Known Limitations",
    content: (
      <>
        <p>
          Despite our efforts, some limitations may remain. Areas we are
          actively improving include third-party embedded content (such as
          scheduling and calendar widgets), some complex interactive
          components, and content that depends on external services we do not
          fully control.
        </p>
        <p>
          If you encounter a barrier that is not listed here, please tell us —
          your feedback helps us prioritize fixes.
        </p>
      </>
    ),
  },
  {
    id: "assistive-tech",
    title: "5. Compatibility & Assistive Technology",
    content: (
      <>
        <p>
          Nestaid is designed to work with current versions of major browsers
          (Chrome, Safari, Firefox, and Edge) and common assistive
          technologies, including screen readers and speech-recognition tools.
        </p>
        <p>
          Because our platform also handles voice calls and text messages,
          people who prefer not to use the phone can interact through text, and
          callers can reach a human at any time. If a particular interaction
          method does not work for you, contact us and we will find an
          alternative.
        </p>
      </>
    ),
  },
  {
    id: "request-help",
    title: "6. Requesting Accommodations",
    content: (
      <>
        <p>
          If you need information from Nestaid in a different format, or need
          help completing any task on our website or platform, we will do our
          best to provide a reasonable accommodation. Let us know what you need
          and how to reach you, and we will respond as quickly as we can.
        </p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "7. Feedback & Contact",
    content: (
      <>
        <p>
          We welcome your feedback on the accessibility of Nestaid. If you run
          into a barrier, or have suggestions for how we can improve, please
          contact us:
        </p>
        <div className="mt-4 bg-white/60 border border-black/10 rounded-xl p-5 inline-block">
          <p className="font-medium text-black">Nestaid, Inc.</p>
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
            Contact page:{" "}
            <a
              href="/contact"
              className="text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              nestaid.us/contact
            </a>
          </p>
        </div>
        <p className="mt-4">
          We aim to respond to accessibility feedback within five business days.
        </p>
      </>
    ),
  },
];

export default function AccessibilityPage() {
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
                Accessibility <span className="gradient-text">Statement</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Nestaid is committed to ensuring our website and AI-powered home
                care platform are accessible to everyone. This statement
                explains where we stand, what we&rsquo;re doing, and how to
                reach us if something gets in your way.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                Last reviewed:{" "}
                <span className="font-medium text-black/70">June 14, 2026</span>
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
                  <p className="text-sm font-semibold text-black uppercase tracking-widest mb-4">Contents</p>
                  <nav className="space-y-1">
                    {sections.map((s) => (
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

              {/* Statement body */}
              <div className="lg:col-span-9">
                <div className="bg-white/60 border border-black/10 rounded-2xl p-8 sm:p-10">
                  {sections.map((s, idx) => (
                    <div
                      key={s.id}
                      id={s.id}
                      className={idx !== 0 ? "mt-10 pt-10 border-t border-black/8" : ""}
                    >
                      <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6 text-black">
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
