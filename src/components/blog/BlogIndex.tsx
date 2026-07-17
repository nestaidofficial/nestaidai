"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

const fade = {
  initial: { filter: "blur(4px)", translateY: -8, opacity: 0 },
  whileInView: { filter: "blur(0px)", translateY: 0, opacity: 1 },
  viewport: { once: true },
} as const;

function CategoryChip({ label, onImage = false }: { label?: string; onImage?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-[10px] !font-semibold uppercase tracking-wider ${
        onImage
          ? "bg-white/90 text-black/75 backdrop-blur-sm"
          : "text-[#F58D42]"
      }`}
    >
      {label ?? "Home Care"}
    </span>
  );
}

/* ── Featured (latest) story ── */

function FeaturedCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.article {...fade} transition={{ duration: 0.7 }}>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid overflow-hidden rounded-[28px] border border-black/10 bg-white lg:grid-cols-[1.15fr_1fr]"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[460px]">
          {post.images && post.images.length >= 2 ? (
            <>
              <Image
                src={post.images[1].src}
                alt={post.images[1].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <Image
                src={post.images[0].src}
                alt={post.images[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="featured-crossfade object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </>
          ) : post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
          )}
          <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-[#F58D42] px-3.5 py-1.5 font-body text-[11px] !font-semibold uppercase tracking-wider text-white">
            Latest
          </span>
        </div>

        <div className="flex flex-col p-7 sm:p-9 lg:p-11">
          <div className="flex flex-wrap items-center gap-2 font-body text-xs text-black/50">
            <CategoryChip label={post.tags?.[0]} />
            <span className="text-black/25">|</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <h2 className="mt-4 font-body text-2xl font-bold leading-[1.12] tracking-tight text-black sm:text-3xl lg:text-[2.35rem]">
            {post.title}
          </h2>

          <p className="mt-4 font-body text-sm font-light leading-relaxed tracking-wide text-black/65 sm:text-base lg:line-clamp-4">
            {post.description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-4 pt-8">
            <div className="flex items-center gap-3">
              <Image
                src="/rahul.jpg"
                alt={post.author}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="font-body text-sm font-medium text-black">{post.author}</p>
                <p className="font-body text-xs font-light text-black/55">
                  {post.authorRole ?? "Nestaid"}
                </p>
              </div>
            </div>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-black/15 text-black transition group-hover:bg-black group-hover:text-white">
              <ArrowUpRight className="size-5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* ── Standard article card ── */

function ArticleCard({ post, index }: { post: BlogPostMeta; index: number }) {
  return (
    <motion.article
      {...fade}
      transition={{ duration: 0.55, delay: 0.04 * (index % 6) }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
          )}
          <span className="absolute left-4 top-4">
            <CategoryChip label={post.tags?.[0]} onImage />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-body text-xs font-light text-black/50">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
          <h3 className="mt-2 line-clamp-2 font-body text-lg font-bold leading-snug tracking-tight text-black">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-sm font-light leading-relaxed tracking-wide text-black/60">
            {post.description}
          </p>
          <p className="mt-auto flex items-center gap-1.5 pt-4 font-body text-[13px] font-medium text-black transition group-hover:text-[#F58D42]">
            Read article
            <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

/* ── Video card (product demo) ── */

const DEMO_VIDEO_ID = "SkFbi6c_S7s";

function VideoCard() {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div {...fade} transition={{ duration: 0.55, delay: 0.08 }} className="h-full">
      <div className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-[24px] bg-neutral-900">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0`}
            title="The Nestaid Coordinator, in action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            {/* YouTube thumbnail — plain img to avoid configuring a remote image host */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${DEMO_VIDEO_ID}/maxresdefault.jpg`}
              alt="The Nestaid Coordinator product demo video"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${DEMO_VIDEO_ID}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />

            <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 font-body text-[10px] !font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Video · Product demo
            </span>

            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play the Nestaid Coordinator demo video"
              className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition group-hover:bg-white/40"
            >
              <Play className="ml-0.5 size-6 text-white" fill="currentColor" strokeWidth={0} />
            </button>

            <div className="relative p-5 sm:p-6">
              <h3 className="font-body text-lg font-bold leading-snug tracking-tight text-white">
                The Nestaid Coordinator, in action
              </h3>
              <p className="mt-1 font-body text-xs font-light text-white/70">
                Watch how agencies run coverage calling with AI.
              </p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ── Blog index ── */

interface BlogIndexProps {
  posts: BlogPostMeta[];
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts)
      for (const tag of post.tags ?? [])
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([tag]) => tag);
  }, [posts]);

  if (posts.length === 0) return null;

  const showAll = activeTag === "All";
  const featured = posts[0];
  const gridPosts = showAll
    ? posts.slice(1)
    : posts.filter((p) => (p.tags ?? []).includes(activeTag));

  return (
    <>
      {/* ── Page header ── */}
      <motion.header {...fade} transition={{ duration: 0.7 }} className="max-w-3xl">
        <p className="font-body text-xs !font-semibold uppercase tracking-[0.2em] text-[#F58D42]">
          Nestaid Blog
        </p>
        <h1 className="mt-3 font-body text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Home care AI, operations &amp; scheduling
        </h1>
        <p className="mt-4 font-body text-base font-light leading-relaxed tracking-wide text-black/60 sm:text-lg">
          Playbooks, product notes, and dispatches from building AI agents for
          home care agencies.
        </p>
      </motion.header>

      {/* ── Featured story ── */}
      {showAll && featured && (
        <div className="mt-10 lg:mt-12">
          <FeaturedCard post={featured} />
        </div>
      )}

      {/* ── Filter pills ── */}
      <div className="mt-12 flex flex-wrap items-center gap-2 lg:mt-14">
        {["All", ...categories].map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-2 font-body text-[11px] !font-semibold uppercase tracking-wider transition ${
                active
                  ? "bg-black text-white"
                  : "border border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* ── Article grid ── */}
      <div
        key={activeTag}
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {gridPosts.map((post, i) => (
          <ArticleCard key={post.slug} post={post} index={i} />
        ))}
        {showAll && <VideoCard />}
      </div>
    </>
  );
}
