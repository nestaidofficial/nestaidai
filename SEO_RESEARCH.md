# Nestaid SEO Research — May 2026

> Source-of-truth research file for Nestaid's SEO content engine.
> Companion docs: `SEO_KEYWORD_MAP.md`, `SEO_COMPETITOR_ANALYSIS.md`, `SEO_REDDIT_GAPS.md`, `SEO_CONTENT_PLAN.md`, `SEO_IMPLEMENTATION_LOG.md`.

## 1. Positioning premise

Nestaid is an **AI-native operations platform for home care agencies**. It is *not* a chatbot, an answering service, or a "feature" of a legacy scheduling tool. It runs the same workflows a coordinator or scheduler runs — intake calls, call-out coverage, caregiver outreach, onboarding, EVV exceptions, follow-ups — using AI agents:

- **AI Receptionist (Nessa)** — 24/7 inbound call handling, intake, routing, triage.
- **Coverage Coordinator Agent** — opens replacement outreach the moment a caregiver calls out, fills the shift over voice + SMS in parallel.
- **Care Plan Agent** — pulls care plan data, summarizes risk, surfaces changes for coordinators.
- **Caregiver Onboarding Agent** — collects documents, runs interview scheduling, verifies credentials, follows up.
- **EVV / operations support** — exception alerts, missed clock-in nudges, reconciliation.
- **Scheduling, missed-call handling, follow-ups, admin workflows** — the connective tissue around the agents.

This positioning is the wedge. Every page, post, and meta string should reflect that Nestaid does the work, not just track it.

## 2. Why SEO matters for Nestaid right now

- The buyer (agency owner, director of ops, scheduling coordinator) actively searches Google when payroll, EVV, or call-outs blow up. They are not on TikTok. They are on Google at 6 AM and 11 PM.
- AI search (Google AI Overviews, ChatGPT web search, Perplexity, Bing Copilot) is already pulling answers for "what is an AI receptionist for home care" type queries. Whoever owns the passage-level citations wins early.
- Incumbents (AxisCare, AlayaCare, WellSky, HHAeXchange, CareSmartz360) have brand mass and dated content. Most of their content is generic, brochure-flavored, and silent on AI. There is a real gap.
- Nestaid's product story (AI agents that do the work) is exactly what the modern buyer is searching for — but only if the content surface area exists to be discovered.

## 3. Audience: who we are writing for

Three concrete personas. Each post should pick one.

| Persona | Title | Agency size | Primary pain | Primary search intent |
|---|---|---|---|---|
| Rita | Owner / Founder | 1–3 locations, 50–200 caregivers | Can't scale ops without hiring more coordinators | "best home care software", "AI for home care agency", "how to grow my home care agency" |
| Marcus | Scheduling Coordinator | Any | 6 AM call-out scramble, 3 PM shift change, missed calls | "fill open caregiver shifts fast", "caregiver call-out", "home care scheduling software" |
| Priya | Director of Operations | 3+ locations | Fill rate, EVV compliance, caregiver retention, payroll accuracy | "EVV missed clock-in", "home care agency operations", "home care KPI" |

If we can't say which persona a post is for, the post is too generic.

## 4. Search-intent categories we want to own

1. **Definitional / explainer ("what is X")** — entry-level traffic, also AI Overview bait.
   - "What is an AI receptionist for home care"
   - "What is AI-native home care software"
   - "What is EVV in home care"
2. **Problem-aware ("X is broken, slow, expensive")** — middle of funnel, captures pain searchers.
   - "Caregiver call-outs are killing my schedule"
   - "Missed calls home care agency"
   - "EVV missed clock-in"
3. **Solution-aware ("how to do X")** — operator playbooks.
   - "How to handle caregiver call-outs faster"
   - "How to reduce missed calls in a home care agency"
   - "How to onboard a caregiver in one day"
4. **Vendor-evaluation ("best", "vs", "alternatives")** — bottom of funnel, highest commercial intent.
   - "Best home care software"
   - "Best home care scheduling software"
   - "Home care agency software vs AI-native platform"
   - "Alternatives to AxisCare / AlayaCare / WellSky / HHAeXchange"
5. **Pricing / ROI** — bottom of funnel.
   - "AI receptionist cost home care"
   - "ROI of AI scheduling for home care"

## 5. Variations and language we must cover

- **"home care" vs "homecare"** — both are common. The space is ~3× the volume but homecare is gaining. Always cover both in headings or first 200 words of any pillar.
- **"caregiver" vs "home health aide" vs "HHA" vs "CNA"** — pick the right one for the audience. Most agency-side content uses "caregiver."
- **"home care agency" vs "home health agency"** — different licensure: home care = non-medical / private duty; home health = skilled, Medicare-certified. We are primarily home care (private duty) but the buyer often uses both interchangeably. Be precise in copy.
- **"EVV"** — always also expand once: "Electronic Visit Verification (EVV)."
- **"AI receptionist"** vs **"AI phone agent"** vs **"virtual receptionist"** vs **"answering service"** — cover all in different posts.

## 6. Technical SEO state (as of May 2026)

Already in place:

- Next.js App Router on `next@^16` with React 19.
- `metadataBase`, default title template `%s | Nestaid`, default description, default OG, Twitter card configured in `src/app/layout.tsx`.
- Per-page `Metadata` exports on `/`, `/management`, `/scheduling`, `/ai-onboarding`, `/pricing`, `/about`, `/blog`, `/blog/[slug]`, `/privacy`, `/terms`.
- JSON-LD on every page: `Organization`, `WebSite`, `SoftwareApplication` (site-wide); `Article` + `BreadcrumbList` on each blog post.
- `src/app/sitemap.ts` builds from static paths + every blog slug.
- `src/app/robots.ts` allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended; blocks CCBot and cohere-ai.
- RSS feed at `/feed.xml`, OG image at `/opengraph-image`, Apple icon, favicon, manifest.
- Security headers, HSTS, no `X-Powered-By`, AVIF/WebP image formats.

Open improvements (tracked in `SEO_IMPLEMENTATION_LOG.md`):

- Emit `FAQPage` JSON-LD when a blog post includes an `## FAQ` or `## Frequently asked questions` section.
- Add `BreadcrumbList` schema to product pages (currently only on blog posts).
- Ensure every cluster post links back to its pillar post (covered by content checklist).
- Track passage-level structure: every H2 should be answerable as a standalone snippet.

## 7. What "done" looks like for this iteration

1. All 6 SEO docs exist at repo root and are useful for future iterations.
2. The first 10-post blog batch is in place under `content/blog/` — 3 already existed, 7 added in this iteration.
3. Each new post: SEO title, meta description, slug, H1, intro hook, H2/H3 sections, FAQ block, internal links to product pages and other posts, byline "Rahul Chettri, Founder, Nestaid", and clean keywords frontmatter.
4. Blog template emits `FAQPage` JSON-LD when the markdown has an FAQ section.
5. `next build` succeeds. `next lint` passes (or only warns on pre-existing issues).
6. `SEO_IMPLEMENTATION_LOG.md` records what changed, blogs added, keywords covered, next loop.

## 8. Workflow loop (repeat after this iteration)

```
research gap (Reddit, SERP, competitor blog)
  → pick keyword in SEO_KEYWORD_MAP.md
    → write blog under content/blog/<slug>.md
      → add internal links to product pages + adjacent posts
        → confirm FAQ section if relevant
          → sitemap regenerates automatically from blog dir
            → log in SEO_IMPLEMENTATION_LOG.md
              → next keyword
```

One post per week sustains compounding growth. Volume without distribution is wasted; see `SEO_CONTENT_PLAN.md` for the publish + distribution checklist.
