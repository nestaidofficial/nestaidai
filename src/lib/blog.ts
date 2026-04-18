import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole?: string;
  tags: string[];
  keywords: string[];
  readingMinutes?: number;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
  raw: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(slug: string): { raw: string; data: BlogFrontmatter; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  return {
    raw,
    data: parsed.data as BlogFrontmatter,
    content: parsed.content,
  };
}

function estimateReadingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];
  for (const slug of getAllPostSlugs()) {
    const file = readPostFile(slug);
    if (!file) continue;
    posts.push({
      slug,
      ...file.data,
      readingMinutes: file.data.readingMinutes ?? estimateReadingMinutes(file.content),
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = readPostFile(slug);
  if (!file) return null;
  const contentHtml = marked.parse(file.content, { async: false }) as string;
  return {
    slug,
    ...file.data,
    readingMinutes: file.data.readingMinutes ?? estimateReadingMinutes(file.content),
    contentHtml,
    raw: file.raw,
  };
}
