import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading tracking-tight mb-3">
              From the <span className="gradient-text">blog</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Operational playbooks and product deep-dives for home care agencies running on AI.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4 self-start sm:self-end"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 sm:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
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
      </div>
    </section>
  );
}
