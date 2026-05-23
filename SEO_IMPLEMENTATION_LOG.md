# Nestaid SEO Implementation Log

Append-only. Newest entries on top. Each entry says **what changed**, **why**, and **what's next**.

---

## 2026-05-23 — Existing-Post FAQ Enrichment + Pricing Post

### What changed

- Appended an FAQ section + cross-links to all three original posts so the FAQ parser emits `FAQPage` JSON-LD for them too:
  - `content/blog/what-is-an-ai-receptionist-for-home-care.md`
  - `content/blog/home-care-scheduling-software-guide.md`
  - `content/blog/handling-caregiver-callouts-with-ai.md`
- New blog post: `content/blog/ai-receptionist-cost-for-home-care-agencies.md` — pricing-intent / ROI math post targeting "AI receptionist cost home care", "how much does an AI receptionist cost", "AI receptionist pricing", "AI receptionist ROI". Authored "Rahul Chettri, Founder, Nestaid." Includes a concrete ROI worked example, comparison against in-house coverage and answering services, and links to `/pricing`.

### Why

- The FAQ parser I shipped earlier turns any post with an `## FAQ` heading into a `FAQPage` schema block. Adding FAQ sections to the existing 3 posts means the *entire* blog (15 posts) now has FAQ rich-result eligibility.
- The pricing-intent post fills the gap in the keyword map (Pillar 1, P2 row "AI receptionist cost home care"). It's bottom-of-funnel, high commercial intent — a post that a buyer reads right before booking a demo.

### Tests

- `next build` → ✅ 35 static pages, TypeScript clean. Blog post count now 15.

### Keywords claimed

- "AI receptionist cost home care"
- "how much does an AI receptionist cost"
- "AI receptionist pricing"
- "home care answering service cost"
- "AI receptionist ROI"

---

## 2026-05-23 — Founder Person Schema + Comparison Post

### What changed

- `src/app/about/page.tsx` — added `Person` JSON-LD for Rahul Chettri (Co-founder) and Rabina Adhikari (Co-founder & CEO), each with `worksFor`, `jobTitle`, `knowsAbout` covering home care AI / scheduling / EVV / operations. Strengthens E-E-A-T signal whenever Rahul's byline appears on blog posts and helps search engines connect the author entity to the Organization entity.
- `content/blog/best-home-care-scheduling-software-2026-compared.md` — new high-commercial-intent comparison post evaluating AxisCare, AlayaCare, WellSky Personal Care, HHAeXchange, CareSmartz360, Smartcare, and Nestaid. Honest assessment of each (architecture, best fit, strengths, limitations, pricing model). Authored "Rahul Chettri, Founder, Nestaid."

### Why

- Comparison ("best", "vs", "alternatives") queries sit at the bottom of the funnel — highest commercial intent in the cluster. Incumbents won't write these about each other, which leaves an opening for an honest assessment from a new-category entrant.
- `Person` schema for founders ties bylines into a structured author entity. Helps with author-rank signals and reinforces the founder voice we use across the blog.

### Tests

- `next build` → ✅ 34 static pages now, TypeScript clean.

### Keywords claimed

- "best home care scheduling software 2026"
- "best home care scheduling software"
- "home care scheduling software comparison"
- "AxisCare alternatives"
- "AlayaCare alternatives"
- "AI home care scheduling"

---

## 2026-05-23 — Homepage FAQ Schema + Sitemap Hardening

### What changed

- `src/app/page.tsx` — emits `FAQPage` JSON-LD on `/` built from the existing `src/lib/faq-data.ts`. No UI changes, no FAQ component rewrite — the schema and the rendered FAQ now share a single source of truth.
- `src/app/sitemap.ts` — added `changeFrequency` and `priority` hints per URL. Home + blog index get higher priority (1.0, 0.9, `weekly`/`daily`); product pages get 0.9 / `monthly`; legal pages get 0.3 / `yearly`; blog posts get 0.7 / `monthly`.

### Why

- A homepage FAQ block is one of the highest-leverage AI Overview / featured-snippet surfaces because the homepage already accrues the most authority. Emitting `FAQPage` schema makes those Q&As eligible for rich results without any visible-design change.
- Sitemap `priority` / `changeFrequency` are advisory but useful — they help search engines prioritize re-crawling the high-velocity surfaces (homepage, blog index) over rarely-changing ones (privacy, terms).

### Tests

- `next build` → ✅ 33 static pages, TypeScript clean.

---

## 2026-05-23 — Product-Page Schema Enrichment

### What changed

Added structured data to every primary page so rich-result and AI-search eligibility extends beyond the blog:

- `src/app/scheduling/page.tsx` — `BreadcrumbList` + `Service` JSON-LD.
- `src/app/management/page.tsx` — `BreadcrumbList` + `Service` JSON-LD.
- `src/app/ai-onboarding/page.tsx` — `BreadcrumbList` + `Service` JSON-LD.
- `src/app/pricing/page.tsx` — `BreadcrumbList` JSON-LD.
- `src/app/about/page.tsx` — `BreadcrumbList` + `AboutPage` JSON-LD.
- `src/app/blog/page.tsx` — `BreadcrumbList` + `Blog` (with `blogPost` array) JSON-LD.

No UI changes. No metadata changes. No routing changes. All JSON-LD emits via `<script type="application/ld+json">` server-rendered next to the existing `Organization` / `WebSite` / `SoftwareApplication` blocks from the root layout.

### Why

- The site previously had rich `BreadcrumbList` schema only on blog post pages. Product / pricing / about / blog-index pages had no breadcrumb signal, which limits Google's confidence that they belong inside a structured hierarchy.
- `Service` schema on the three product pages clarifies for AI search and Google what specifically each service does, who it's for, and who provides it. This matters for Knowledge Graph entity association.
- `Blog` schema with embedded `blogPost` list on `/blog` strengthens the relationship between the blog listing and the individual posts (helps surface fresh content faster in AI Overviews).

### Tests

- `next build` → ✅ 33 static pages generated, TypeScript clean, no warnings introduced.

### What's next

- (As previously logged) pillar upgrades on existing 3 posts; new comparison + pricing posts; consider `Person` schema on `/about` for each named founder once we have stable bios; consider `FAQPage` schema for `/pricing` if the page adds a FAQ block.

---

## 2026-05-23 — SEO Foundation Pass + First Blog Batch (10 posts target)

### What changed

**New research and planning docs (root):**

- `SEO_RESEARCH.md` — positioning premise, audience, search-intent map, current technical state, loop definition.
- `SEO_KEYWORD_MAP.md` — keyword × intent × priority × target URL × competitor weakness × Reddit gap, organized by pillar.
- `SEO_COMPETITOR_ANALYSIS.md` — Tier 1/2/3 competitors, gaps Nestaid attacks, what we will *not* do.
- `SEO_REDDIT_GAPS.md` — operator pain themes, exact language patterns, comparison-blog ideas, anti-spam rules.
- `SEO_CONTENT_PLAN.md` — editorial principles, required post structure, batch list, internal link map, publish cadence, quality gate.
- `SEO_IMPLEMENTATION_LOG.md` — this file.

**New blog posts under `content/blog/`** (all authored "Rahul Chettri, Founder, Nestaid"):

1. `ai-receptionist-for-home-care-agencies-never-miss-a-call.md`
2. `home-care-scheduling-software-is-broken-ai-agents-can-fix-the-chaos.md`
3. `how-home-care-agencies-can-handle-caregiver-callouts-faster.md`
4. `evv-problems-in-home-care-missed-clock-ins-exceptions.md`
5. `ai-native-home-care-software-what-it-means.md`
6. `home-care-agency-software-vs-ai-native-care-operations-platform.md`
7. `how-ai-can-help-home-care-agencies-grow-without-hiring-more-office-staff.md`
8. `caregiver-onboarding-software-reduce-manual-admin-work.md`
9. `why-missed-calls-cost-home-care-agencies-new-clients.md`
10. `best-home-care-software-features-agencies-should-look-for.md`

Existing posts kept untouched (still indexed, still in sitemap):

- `what-is-an-ai-receptionist-for-home-care.md`
- `home-care-scheduling-software-guide.md`
- `handling-caregiver-callouts-with-ai.md`

**Blog template enhancement (`src/app/blog/[slug]/page.tsx`):**

- Parses an `## FAQ` (or `## Frequently asked questions`) section from each post.
- Emits a `FAQPage` JSON-LD block alongside the existing `Article` and `BreadcrumbList` schema when an FAQ section is present.
- No design changes. The FAQ continues to render as part of the markdown body.

**No design changes elsewhere.** Navbar, Footer, hero, product pages, and all UI components untouched.

### Why

- The site had an excellent technical SEO foundation (sitemap, robots, schema, OG, RSS, security headers) and only 3 blog posts. The bottleneck was *content surface area*, not infrastructure.
- The first 10 posts cover the highest-priority intent buckets: AI receptionist (3 angles — definition, missed-call cost, agency-specific framing), scheduling (existing + new "broken" frame), call-outs (existing + how-to), EVV pain, AI-native definition + comparison, growth without hiring, onboarding, and the buyer-guide feature checklist.
- Internal links form a connected cluster — no orphan post.
- `FAQPage` schema unlocks AI Overview citation and rich-result eligibility on every post that has an FAQ section.

### Keywords covered (primary, this iteration)

`AI receptionist for home care`, `AI receptionist for home care agencies`, `24/7 receptionist for home care`, `missed calls home care agency`, `home care scheduling software`, `homecare scheduling software`, `caregiver scheduling software`, `home care scheduling software is broken`, `AI home care scheduling`, `caregiver call-out management`, `how to handle caregiver call-outs`, `caregiver no-show solution`, `6 am call-out home care`, `EVV problems home care`, `EVV missed clock-in`, `EVV exception clean-up`, `AI-native home care software`, `AI agents for home care agencies`, `home care agency software vs AI-native platform`, `how AI helps home care agencies grow`, `caregiver onboarding software`, `caregiver onboarding process`, `best home care software`, `best home care software features`.

### Tests / validations

- `next build` ran clean (see commit notes).
- All new posts validated against the quality gate in `SEO_CONTENT_PLAN.md`.
- Sitemap regenerates automatically from `content/blog/` — no manual update needed.

### What's next (next SEO loop)

P0 follow-ups:

- Pillar upgrades: turn the 3 existing posts (`what-is-an-ai-receptionist-for-home-care`, `home-care-scheduling-software-guide`, `handling-caregiver-callouts-with-ai`) into 2,500-word pillar pages with TOC and updated dates.
- Submit `/sitemap.xml` to Google Search Console (manual step — outside this repo).
- Set up `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GTM_ID` in production env so traffic data flows.

P1 next-batch posts (from `SEO_KEYWORD_MAP.md` "Future" rows):

- "AI receptionist cost for home care agencies" (pricing intent)
- "Best home care scheduling software 2026 (compared)" (comparison intent)
- "Home care CRM: what actually matters" (CRM definitional)
- "Home care agency operations: a playbook" (Pillar 5 root)
- "Alternatives to AxisCare" + "Alternatives to HHAeXchange" (comparison, written carefully)
- "EVV state-by-state quick guide" (long-tail location capture)

P2 technical SEO follow-ups:

- Add `BreadcrumbList` schema to product pages (currently only on blog posts).
- Add `Service` schema variants for `/scheduling`, `/management`, `/ai-onboarding`.
- Add `Review` / `AggregateRating` once we have ≥3 named customer references (do *not* fake).
- Consider `/glossary` route with definition pages for EVV, HHA, PDGM, MCO (long-tail capture).
- Consider `/use-cases/[vertical]` for "private duty", "Medicaid home care", "non-medical home care" pages.

P3 distribution:

- LinkedIn post per new blog (founder accounts).
- Manual GSC submission per URL.
- Quora answers seeded with internal links (one per week).
- Reddit: only when genuinely useful, founder-disclosed.

### Anti-regressions confirmed

- No existing page changed visually.
- No routing changes.
- Navbar / Footer / Hero / sections all untouched.
- Existing blog posts unchanged.
- `robots.ts`, `sitemap.ts`, `layout.tsx` metadata unchanged (still the right defaults).
