import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";
import { LatestPostsCarousel } from "@/components/sections/LatestPostsCarousel";

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const slides = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    readingMinutes: post.readingMinutes ?? 0,
    image: post.image ?? "",
    imageAlt: post.imageAlt ?? post.title,
  }));

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
      </div>
    </section>
  );
}
