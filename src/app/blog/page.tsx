import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Home care AI, operations & scheduling",
  description:
    "Guides and operational playbooks for home care agencies — AI receptionists, scheduling software, call-out management, and caregiver coordination.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Nestaid Blog — Home care AI, operations & scheduling",
    description:
      "Guides for home care agencies on AI receptionists, scheduling, call-out management, and caregiver coordination.",
    url: "/blog",
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const SITE_URL = "https://www.nestaid.us";

const blogBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE_URL}/blog`,
    name: "Nestaid Blog — Home care AI, operations & scheduling",
    description:
      "Operational playbooks and AI-native perspectives for home care agencies, by the Nestaid team.",
    publisher: { "@type": "Organization", name: "Nestaid", url: SITE_URL },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                Home care AI, <span className="gradient-text">done right</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Operational playbooks, product deep-dives, and trends from the team building the AI
                operations platform for home care agencies.
              </p>
              <div className="text-left max-w-3xl mx-auto space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  The Nestaid blog is written for the people who actually run home care agencies — owners, administrators, scheduling coordinators, and intake leads. Every post tries to answer one specific operational question well, with concrete numbers, real workflows, and an honest assessment of where AI helps and where it doesn't yet.
                </p>
                <p>
                  We cover four overlapping topics. <strong>AI receptionists</strong> — how 24/7 AI call handling captures the leads your team misses after hours and the operational cost of letting calls go to voicemail. <strong>Caregiver scheduling and call-out coordination</strong> — why the 6 AM scramble eats your week and how AI shift coverage compresses the fill cycle from 45 minutes to under 5. <strong>EVV and compliance</strong> — missed clock-ins, exception clean-up, and what state-by-state EVV rules actually require. <strong>Caregiver onboarding</strong> — how AI intake collects forms, verifies compliance, and books interviews without phone tag.
                </p>
                <p>
                  Posts are written by Nestaid's founders and team. No AI fluff, no "transformative" hype — just the kind of operational detail you'd want from a peer who has lived the problem.
                </p>
              </div>
            </div>

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="block group mb-10 rounded-3xl border border-peach bg-white/60 p-8 sm:p-12 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readingMinutes} min read</span>
                </div>
                <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6 group-hover:underline underline-offset-4 decoration-black/30">
                  {featured.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {featured.description}
                </p>
                <div className="mt-6 text-sm text-muted-foreground">
                  By {featured.author}
                  {featured.authorRole ? ` · ${featured.authorRole}` : ""}
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading tracking-tight mb-3 leading-snug group-hover:underline underline-offset-4 decoration-black/30">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="mt-5 text-xs text-muted-foreground">By {post.author}</div>
                  </Link>
                ))}
              </div>
            )}

            {posts.length === 0 && (
              <p className="text-center text-muted-foreground">
                No posts yet. Check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
