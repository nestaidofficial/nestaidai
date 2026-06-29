"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

interface BlogCardsProps {
  posts: BlogPostMeta[];
}

export function BlogCards({ posts }: BlogCardsProps) {
  return (
    <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
          whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * index + 0.1, duration: 0.8 }}
          className="relative overflow-hidden border border-black/15 p-4 font-sans"
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

          <Link href={`/blog/${post.slug}`} className="relative grid grid-cols-[auto_1fr] gap-x-3 group">
            <Image
              alt={post.author}
              src="/rahul.jpg"
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            <div className="min-w-0">
              <div className="-mt-0.5 -space-y-0.5">
                <p className="font-sans text-sm font-light md:text-base">{post.author}</p>
                <span className="block font-sans text-[11px] font-light tracking-tight text-muted-foreground">
                  Founder, Nestaid
                </span>
              </div>
              <h3 className="mt-3 font-sans text-base font-light leading-snug tracking-tight text-foreground group-hover:underline underline-offset-4 decoration-black/30">
                {post.title}
              </h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 font-sans text-[11px] font-light text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
