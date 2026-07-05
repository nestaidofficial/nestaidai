import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://www.nestaid.us";

type StaticEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticEntries: StaticEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/management", changeFrequency: "monthly", priority: 0.9 },
  { path: "/scheduling", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-onboarding", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/sms-consent", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date + "T00:00:00Z") : new Date();
  const buildTime = new Date();

  const staticItems: MetadataRoute.Sitemap = staticEntries.map((entry) => {
    let lastModified: Date = buildTime;
    if (entry.path === "/blog" || entry.path === "/") {
      lastModified = latestPostDate > buildTime ? buildTime : latestPostDate;
    }
    return {
      // Homepage canonical is the bare origin (no trailing slash); keep the sitemap consistent with it.
      url: entry.path === "/" ? siteUrl : `${siteUrl}${entry.path}`,
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    };
  });

  const blogItems: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date + "T00:00:00Z"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticItems, ...blogItems];
}
