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
  image?: string;
  imageAlt?: string;
  tags: string[];
  keywords: string[];
  readingMinutes?: number;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type FAQItem = { question: string; answer: string };

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
  raw: string;
  faqs: FAQItem[];
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

const FAQ_HEADING_REGEX = /^##\s+(FAQ|FAQs|Frequently\s+asked\s+questions)\s*$/i;
const NEXT_H2_REGEX = /^##\s/;
const FAQ_QUESTION_REGEX = /^\*\*(.+?)\*\*\s*$/;

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFAQs(content: string): FAQItem[] {
  const lines = content.split("\n");
  let inFaq = false;
  const faqLines: string[] = [];
  for (const line of lines) {
    if (FAQ_HEADING_REGEX.test(line)) {
      inFaq = true;
      continue;
    }
    if (inFaq && NEXT_H2_REGEX.test(line)) {
      inFaq = false;
      break;
    }
    if (inFaq) faqLines.push(line);
  }
  if (faqLines.length === 0) return [];

  const items: FAQItem[] = [];
  let currentQ: string | null = null;
  let currentA: string[] = [];

  const flush = () => {
    if (currentQ && currentA.length > 0) {
      const answer = stripInlineMarkdown(currentA.join(" "));
      if (answer) items.push({ question: currentQ, answer });
    }
  };

  for (const line of faqLines) {
    const qMatch = line.match(FAQ_QUESTION_REGEX);
    if (qMatch) {
      flush();
      currentQ = stripInlineMarkdown(qMatch[1]);
      currentA = [];
    } else if (currentQ && line.trim().length > 0) {
      currentA.push(line.trim());
    }
  }
  flush();

  return items;
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
    faqs: extractFAQs(file.content),
  };
}
