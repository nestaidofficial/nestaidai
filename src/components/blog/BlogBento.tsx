"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Flame, Play } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function shortDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function CategoryTag({
  label,
  tone = "dark",
}: {
  label?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center font-body text-[11px] !font-semibold uppercase tracking-wider ${
        tone === "light" ? "text-white/80" : "text-[#F58D42]"
      }`}
    >
      {label ?? "Home Care"}
    </span>
  );
}

const TUTORIAL_VIDEO_ID = "SkFbi6c_S7s";

function VideoTutorialCard({ tutorial }: { tutorial: BlogPostMeta }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-900 p-5">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${TUTORIAL_VIDEO_ID}?autoplay=1&rel=0`}
          title={tutorial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          {/* YouTube thumbnail — plain img to avoid configuring a remote image host */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${TUTORIAL_VIDEO_ID}/maxresdefault.jpg`}
            alt={tutorial.imageAlt ?? tutorial.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.src = `https://i.ytimg.com/vi/${TUTORIAL_VIDEO_ID}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />

          <div className="relative flex items-start justify-between">
            <CategoryTag label={tutorial.tags?.[0]} tone="light" />
          </div>

          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${tutorial.title}`}
            className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition group-hover:bg-white/40"
          >
            <Play className="ml-0.5 size-6 text-white" fill="currentColor" strokeWidth={0} />
          </button>

          <div className="relative">
            <p className="font-body text-[11px] font-medium uppercase tracking-wider text-white/75">
              {tutorial.readingMinutes ?? 5} Min · {shortDate(tutorial.date)}
            </p>
            <Link
              href={`/blog/${tutorial.slug}`}
              className="mt-1.5 block font-body text-lg font-bold leading-snug tracking-tight text-white hover:underline"
            >
              {tutorial.title}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

interface BlogBentoProps {
  posts: BlogPostMeta[];
}

export function BlogBento({ posts }: BlogBentoProps) {
  if (posts.length === 0) return null;

  const hero = posts[0];
  const featured = posts[1];
  const sub = [posts[2], posts[3]].filter(Boolean) as BlogPostMeta[];
  const blue = posts[4];
  const tutorial = posts[5];
  const archive = posts.slice(6);

  const categories = Array.from(
    new Set(posts.flatMap((p) => p.tags ?? [])),
  ).slice(0, 8);

  const fade = {
    initial: { filter: "blur(4px)", translateY: -8, opacity: 0 },
    whileInView: { filter: "blur(0px)", translateY: 0, opacity: 1 },
    viewport: { once: true },
  } as const;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:[grid-template-rows:auto_auto]">
        {/* ── Hero (left, spans both rows) ── */}
        {hero && (
          <motion.div
            {...fade}
            transition={{ duration: 0.7 }}
            className="h-full sm:col-span-2 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <Link
              href={`/blog/${hero.slug}`}
              className="group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[28px] bg-neutral-900 p-4 lg:min-h-[540px]"
            >
              {hero.image ? (
                <>
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt ?? hero.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
              )}

              <span className="absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm">
                <Flame className="size-5 text-[#F58D42]" strokeWidth={2.2} />
              </span>

              <div className="relative max-w-[88%] rounded-2xl bg-white p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2 font-body text-[11px] font-medium uppercase tracking-wider text-black/60">
                  <CategoryTag label={hero.tags?.[0]} />
                  <span className="text-black/25">|</span>
                  <span className="font-normal normal-case tracking-normal">
                    {shortDate(hero.date)}
                  </span>
                </div>
                <h2 className="font-body text-xl font-bold leading-[1.15] tracking-tight text-black sm:text-2xl lg:text-3xl">
                  {hero.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Featured (cream, top-center) ── */}
        {featured && (
          <motion.div
            {...fade}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="h-full sm:col-span-2 lg:col-span-5 lg:col-start-6 lg:row-start-1"
          >
            <div className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <CategoryTag label={featured.tags?.[0]} />
                <Link
                  href={`/blog/${featured.slug}`}
                  aria-label={`Read ${featured.title}`}
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white"
                >
                  <ArrowUpRight className="size-5" strokeWidth={2} />
                </Link>
              </div>

              <Link href={`/blog/${featured.slug}`} className="group mt-5 block">
                <h3 className="font-body text-2xl font-bold leading-[1.08] tracking-tight text-black sm:text-[1.75rem] lg:text-[2rem]">
                  {featured.title}
                </h3>
              </Link>

              <p className="mt-3 font-body text-sm font-light leading-relaxed tracking-wide text-black/70">
                {featured.description}{" "}
                <Link
                  href={`/blog/${featured.slug}`}
                  className="font-medium text-black underline underline-offset-2 hover:text-[#F58D42]"
                >
                  More
                </Link>
              </p>

              {sub.length > 0 && (
                <div className="mt-auto pt-5">
                  {sub.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex items-center justify-between gap-4 border-t border-black/10 py-3.5"
                    >
                      <span className="font-body text-[13px] font-medium leading-snug tracking-tight text-black">
                        {p.title}
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-black transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Slate card (top-right) ── */}
        {blue && (
          <motion.div
            {...fade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-full sm:col-span-1 lg:col-span-2 lg:col-start-11 lg:row-start-1"
          >
            <Link
              href={`/blog/${blue.slug}`}
              className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-5"
            >
              <CategoryTag label={blue.tags?.[0]} />
              <h3 className="mt-3 font-body text-lg font-bold leading-snug tracking-tight text-black">
                {blue.title}
              </h3>

              {blue.image && (
                <div className="relative mt-auto h-32 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={blue.image}
                    alt={blue.imageAlt ?? blue.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 16vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}
            </Link>
          </motion.div>
        )}

        {/* ── Tutorial / video card (bottom-center) ── */}
        {tutorial && (
          <motion.div
            {...fade}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="h-full sm:col-span-1 lg:col-span-4 lg:col-start-6 lg:row-start-2"
          >
            <VideoTutorialCard tutorial={tutorial} />
          </motion.div>
        )}

        {/* ── Categories card (bottom-right) ── */}
        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-full sm:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-2"
        >
          <div className="flex h-full min-h-[240px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-6">
            <div className="flex flex-wrap content-start gap-2">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`rounded-full px-3.5 py-1.5 font-body text-xs font-medium uppercase tracking-wide ${
                    i === 0
                      ? "bg-[#F58D42] text-white"
                      : "bg-black/[0.04] text-black/70"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <Link
              href="#all-articles"
              className="group mt-auto flex items-center justify-between gap-4 pt-6"
            >
              <span className="font-body text-lg font-bold tracking-tight text-black">
                View all articles
              </span>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white">
                <ArrowRight className="size-5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Archive grid ── */}
      {archive.length > 0 && (
        <section id="all-articles" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 font-body text-sm font-medium uppercase tracking-wider text-black/50">
            All articles
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((post, index) => (
              <motion.div
                key={post.slug}
                {...fade}
                transition={{ duration: 0.6, delay: 0.04 * index }}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-[22px] border border-black/10 bg-white p-5 transition hover:border-black/25 hover:shadow-sm lg:p-6"
                >
                  <CategoryTag label={post.tags?.[0]} />
                  <h3 className="mt-3 font-body text-lg font-bold leading-snug tracking-tight text-black line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-sm font-light leading-relaxed tracking-wide text-black/65">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-4 font-body text-[11px] font-medium text-black/50">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
