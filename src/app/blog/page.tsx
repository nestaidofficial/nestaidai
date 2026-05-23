import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogCards } from "@/components/blog/BlogCards";
import { GridPattern } from "@/components/ui/grid-pattern";
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
                Home care AI, <span style={{ color: "#F58D42" }}>done right</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Operational playbooks on AI receptionists, caregiver scheduling, call-outs, EVV, and onboarding — written by the team building the AI operations platform for home care agencies.
              </p>
            </div>

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative mb-4 block overflow-hidden border border-dashed border-black/15 p-6 font-sans sm:p-8"
              >
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] to-black/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                    <GridPattern
                      width={25}
                      height={25}
                      x={-12}
                      y={4}
                      strokeDasharray="3"
                      className="absolute inset-0 h-full w-full stroke-black/[0.08] mix-blend-overlay"
                    />
                  </div>
                </div>
                <div className="relative grid grid-cols-[auto_1fr] gap-x-3">
                  <Image
                    alt={featured.author}
                    src="/rahul.jpg"
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <div className="-mt-0.5 -space-y-0.5">
                      <p className="font-sans text-sm font-light md:text-base">{featured.author}</p>
                      <span className="block font-sans text-[11px] font-light tracking-tight text-muted-foreground">
                        Founder, Nestaid
                      </span>
                    </div>
                    <h2 className="mt-4 font-sans text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl group-hover:underline underline-offset-4 decoration-black/30">
                      {featured.title}
                    </h2>
                    <p className="mt-3 max-w-3xl font-sans text-base font-light leading-relaxed tracking-wide text-muted-foreground">
                      {featured.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-[11px] font-light text-muted-foreground">
                      <span>{formatDate(featured.date)}</span>
                      <span>·</span>
                      <span>{featured.readingMinutes} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {rest.length > 0 && <BlogCards posts={rest} />}

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
