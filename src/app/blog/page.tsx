import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
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

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <Badge variant="subtle" className="mb-5">Blog</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-5">
                Home care AI, <span className="gradient-text">done right</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Operational playbooks, product deep-dives, and trends from the team building the AI
                operations platform for home care agencies.
              </p>
            </div>

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="block group mb-10 rounded-3xl border border-peach bg-white/60 backdrop-blur-sm p-8 sm:p-12 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span className="bg-black text-white px-2 py-1 rounded-md font-medium uppercase tracking-wide">
                    Featured
                  </span>
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readingMinutes} min read</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading tracking-tight mb-4 group-hover:underline underline-offset-4 decoration-black/30">
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
                    className="group rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 sm:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
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
