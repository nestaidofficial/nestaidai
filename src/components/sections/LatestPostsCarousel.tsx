"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NessaCallAnimation } from "./NessaCallAnimation";
import { NessaScheduleAnimation } from "./NessaScheduleAnimation";
import { NessaCalloutAnimation } from "./NessaCalloutAnimation";

type CarouselPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
};

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function LatestPostsCarousel({ posts }: { posts: CarouselPost[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (posts.length === 0) return null;
  const active = posts[activeIndex];

  const nextPost = () => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 pb-20">
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center group">
        {/* Left: text content */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <span className="w-8 h-px bg-muted-foreground/50" />
            <time dateTime={active.date}>{formatDate(active.date)}</time>
          </div>

          <div className="relative overflow-hidden">
            <Link
              href={`/blog/${active.slug}`}
              className="block text-3xl md:text-4xl font-light leading-[1.3] tracking-tight text-foreground hover:underline underline-offset-4 decoration-foreground/30"
            >
              {active.title}
            </Link>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              {active.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-foreground/20" />
            <div>
              <p className="text-sm font-medium text-foreground">{active.author}</p>
              <p className="text-xs text-muted-foreground">{active.readingMinutes} min read</p>
            </div>
          </div>
        </div>

        {/* Right: image card */}
        <div className="relative w-full max-w-sm h-64 md:w-60 md:h-80 order-1 md:order-2 mx-auto md:mx-0">
          <Link
            href={`/blog/${active.slug}`}
            className="block w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-muted relative"
            aria-label={`Read: ${active.title}`}
          >
            {active.slug === "home-care-scheduling-software-guide" ? (
              <NessaScheduleAnimation />
            ) : active.slug === "handling-caregiver-callouts-with-ai" ? (
              <NessaCalloutAnimation />
            ) : (
              <NessaCallAnimation />
            )}
          </Link>

          <button
            type="button"
            onClick={nextPost}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next post"
          >
            <span>Next</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="md:absolute md:-bottom-16 md:left-0 flex items-center gap-3 order-3 mt-6 md:mt-0">
          {posts.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative p-1 group/dot"
              aria-label={`Go to post ${index + 1}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-foreground scale-100"
                    : "bg-muted-foreground/30 scale-75 hover:bg-muted-foreground/50 hover:scale-100"
                }`}
              />
              {index === activeIndex && (
                <span className="absolute inset-0 border border-foreground/30 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
