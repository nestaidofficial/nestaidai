import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = "https://www.nestaid.us";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Nestaid",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logomain.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    image: `${siteUrl}/opengraph-image`,
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <article className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
                <Link href="/blog" className="hover:text-black transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-black/70 truncate">{post.title}</span>
              </nav>

              <header className="mb-10">
                {post.tags?.[0] && (
                  <Badge variant="subtle" className="mb-5">
                    {post.tags[0]}
                  </Badge>
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight mb-6">
                  {post.title}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-black">{post.author}</span>
                  {post.authorRole && <span>· {post.authorRole}</span>}
                  <span>·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
              </header>

              <div
                className="prose-post"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="mt-16 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Written by</p>
                  <p className="text-base font-medium text-black">{post.author}</p>
                  {post.authorRole && (
                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  )}
                </div>
                <Link
                  href="/blog"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  ← More from the blog
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
