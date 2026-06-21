import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getAllPostSlugs, getAllPosts, getPostBySlug } from "@/lib/blog";

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
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"],
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

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const siteUrl = "https://www.nestaid.us";
  const ogImageUrl = `${siteUrl}/opengraph-image`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.length > 110 ? post.title.slice(0, 107) + "…" : post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00Z`,
    dateModified: `${post.date}T00:00:00Z`,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/about`,
      ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Nestaid",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logomain.jpg`,
        width: 512,
        height: 195,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
    inLanguage: "en-US",
    keywords: post.keywords.join(", "),
    articleSection: post.tags?.[0] ?? "Home Care AI",
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

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-white" />
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
                <h1 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
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

              {post.image &&
                fs.existsSync(path.join(process.cwd(), "public", post.image)) && (
                  <figure className="mb-12">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      width={1100}
                      height={1100}
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="w-full h-auto rounded-lg border border-black/10"
                      priority
                    />
                  </figure>
                )}

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

              {relatedPosts.length > 0 && (
                <aside className="mt-20 pt-10 border-t border-black/10">
                  <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
                    Keep reading
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group rounded-2xl border border-black/10 bg-white/60 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                      >
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <time dateTime={related.date}>{formatDate(related.date)}</time>
                          <span>·</span>
                          <span>{related.readingMinutes} min read</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-heading tracking-tight mb-2 leading-snug group-hover:underline underline-offset-4 decoration-black/30">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {related.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
