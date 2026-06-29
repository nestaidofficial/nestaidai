import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogBento } from "@/components/blog/BlogBento";
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
    images: ["/opengraph-image"],
  },
};

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
  // Blog index: bento "magazine" hero + archive grid (see BlogBento).
  const posts = getAllPosts();

  // Resolve images on the server: keep the path only when the file actually
  // exists on disk, otherwise drop it so the bento renders a colored card.
  const postsWithImages = posts.map((p) => ({
    ...p,
    image:
      p.image &&
      fs.existsSync(path.join(process.cwd(), "public", p.image))
        ? p.image
        : undefined,
  }));

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
            <h1 className="sr-only">Home care AI, operations &amp; scheduling</h1>

            {posts.length > 0 ? (
              <BlogBento posts={postsWithImages} />
            ) : (
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
