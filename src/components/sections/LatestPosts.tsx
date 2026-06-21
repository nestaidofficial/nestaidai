import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";
import { LatestPostsCarousel } from "@/components/sections/LatestPostsCarousel";

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const slides = posts.map((post) => {
    const image = post.image ?? "";
    // Only treat the image as displayable if the file actually exists in /public.
    // Posts without a real photo fall back to the animated cards in the carousel.
    const hasImage =
      image.length > 0 &&
      fs.existsSync(path.join(process.cwd(), "public", image));
    return {
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      readingMinutes: post.readingMinutes ?? 0,
      image,
      imageAlt: post.imageAlt ?? post.title,
      hasImage,
    };
  });

  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal className="flex justify-end mb-10" amount={0.3}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <LatestPostsCarousel posts={slides} />

        {/*
          The carousel is a client component that only renders the active slide's
          link in the initial HTML. Emit every latest-post link server-side so
          Googlebot can crawl all of them from the homepage (the page Google
          trusts most). Visually hidden, fully crawlable — not cloaking.
        */}
        <nav aria-label="Latest blog posts" className="sr-only">
          <ul>
            {slides.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
