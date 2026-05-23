# Nestaid Content Plan — May 2026

> Companion to `SEO_KEYWORD_MAP.md` and `SEO_RESEARCH.md`.
> Defines *how* we write, *when* we publish, and *how* we distribute.

## Editorial principles

Every Nestaid post must do these four things — in this order:

1. **Open with operator pain.** Not a stat. Not a definition. The literal moment the owner / coordinator feels the problem.
2. **Show why the old way is slow / manual / expensive.** Concrete steps, concrete time costs.
3. **Show how AI agents change the workflow.** Real workflow, not vague "AI insights."
4. **End with the Nestaid bridge + CTA.** Internal link to the relevant product page + Calendly demo link.

If a post doesn't do all four, it's not a Nestaid post — it's a competitor's post.

## Voice and tone

- **Founder-led.** Posts read like a founder writing to peers, not a marketing team writing to a category.
- **Plain English.** Short sentences. Industry jargon only when necessary, always expanded once ("Electronic Visit Verification (EVV)").
- **Specific.** Numbers, time costs, dollar costs, fill rates. No "increase efficiency."
- **Confident, never fake.** We don't claim things we haven't built (no "HIPAA compliant" claim without proof — use "HIPAA-conscious" or "built with privacy and security in mind").
- **No hype.** No "revolutionary AI." No "game-changing." No "transformative."

## Required structure for every blog

Every post must have:

- **Frontmatter** with `title`, `description`, `date`, `author`, `authorRole`, `tags`, `keywords` (already supported by `src/lib/blog.ts`).
- **Single H1** matching the title.
- **Meta description** under 160 chars with the primary keyword in the first half.
- **One persona target** (Rita / Marcus / Priya — pick one).
- **Intro hook** that opens with pain or a sharp claim. No "In today's fast-paced…"
- **At least one table or structured comparison** (AI Overview / featured-snippet bait).
- **Passage-level H2s** — every H2 should be answerable as a standalone snippet.
- **2+ internal links** — one to a product page (`/management`, `/scheduling`, `/ai-onboarding`, `/pricing`) and one to an adjacent blog post.
- **1 outbound link** to an authoritative source (HCAOA, CMS EVV page, NAHC, etc.) when the post cites a regulation or stat.
- **Concrete numbers** in 3+ places (ROI math, stats, time benchmarks).
- **FAQ section** at the bottom with 3–5 question/answer pairs (we emit `FAQPage` JSON-LD when this exists — see `SEO_IMPLEMENTATION_LOG.md`).
- **CTA block** at the end linking to `/pricing` and the Calendly demo URL.
- **Byline** — for new posts in this iteration: `author: "Rahul Chettri"`, `authorRole: "Founder, Nestaid"`.

## Length targets

| Post type | Word count | Notes |
|---|---|---|
| Pillar | 2,000–2,800 | Definitive guide, table of contents implicit via H2s |
| Cluster | 1,200–1,800 | Single tight angle |
| FAQ-style | 900–1,400 | High-velocity, AI Overview targeted |

## First blog batch (this iteration)

Order matches the goal directive. Existing posts marked accordingly.

| # | Title | Slug | Status |
|---|---|---|---|
| 1 | AI Receptionist for Home Care Agencies: Never Miss a Client Call Again | `ai-receptionist-for-home-care-agencies-never-miss-a-call` | NEW |
| 2 | Home Care Scheduling Software Is Broken — AI Agents Can Fix the Chaos | `home-care-scheduling-software-is-broken-ai-agents-can-fix-the-chaos` | NEW |
| 3 | How Home Care Agencies Can Handle Caregiver Call-Outs Faster | `how-home-care-agencies-can-handle-caregiver-callouts-faster` | NEW |
| 4 | EVV Problems in Home Care: Missed Clock-Ins, Exceptions, and What Agencies Can Do | `evv-problems-in-home-care-missed-clock-ins-exceptions` | NEW |
| 5 | AI-Native Home Care Software: What It Means and Why Agencies Need It | `ai-native-home-care-software-what-it-means` | NEW |
| 6 | Home Care Agency Software vs AI-Native Care Operations Platform | `home-care-agency-software-vs-ai-native-care-operations-platform` | NEW |
| 7 | How AI Can Help Home Care Agencies Grow Without Hiring More Office Staff | `how-ai-can-help-home-care-agencies-grow-without-hiring-more-office-staff` | NEW |
| 8 | Caregiver Onboarding Software: How to Reduce Manual Admin Work | `caregiver-onboarding-software-reduce-manual-admin-work` | NEW |
| 9 | Why Missed Calls Cost Home Care Agencies New Clients | `why-missed-calls-cost-home-care-agencies-new-clients` | NEW |
| 10 | Best Home Care Software Features Agencies Should Look For | `best-home-care-software-features-agencies-should-look-for` | NEW |

Existing posts on the site (kept, will be improved later):

- `/blog/what-is-an-ai-receptionist-for-home-care` (April 2026)
- `/blog/home-care-scheduling-software-guide` (April 2026)
- `/blog/handling-caregiver-callouts-with-ai` (April 2026)

We don't overwrite these. We link to them from the new posts so they keep accumulating internal authority.

## Internal-link map for this batch

(Linking the 7 new posts and 3 existing posts into a single cluster graph.)

```
/ (home)
  ↔ /blog/ai-receptionist-for-home-care-agencies-never-miss-a-call (Post 1)
  ↔ /blog/best-home-care-software-features-agencies-should-look-for (Post 10)
  ↔ /blog/ai-native-home-care-software-what-it-means (Post 5)

/scheduling
  ↔ Post 2 (Scheduling Is Broken)
  ↔ Post 3 (Handle Call-Outs Faster)
  ↔ Post 4 (EVV Problems)
  ↔ /blog/handling-caregiver-callouts-with-ai (existing)
  ↔ /blog/home-care-scheduling-software-guide (existing)

/management
  ↔ Post 4 (EVV Problems)
  ↔ Post 6 (Agency Software vs AI-Native)
  ↔ Post 7 (Grow Without Hiring)
  ↔ Post 10 (Best Features)

/ai-onboarding
  ↔ Post 8 (Caregiver Onboarding Software)
  ↔ Post 7 (Grow Without Hiring)

/pricing
  ↔ Post 1, Post 5, Post 6, Post 10 (CTA blocks)

Cross-blog:
  Post 1 ↔ Post 9 (missed calls topic)
  Post 1 ↔ /blog/what-is-an-ai-receptionist-for-home-care
  Post 2 ↔ Post 3 (scheduling ↔ call-outs)
  Post 2 ↔ /blog/home-care-scheduling-software-guide
  Post 3 ↔ /blog/handling-caregiver-callouts-with-ai
  Post 5 ↔ Post 6 (definition ↔ comparison)
  Post 5 ↔ Post 10 (definition ↔ buyer guide)
  Post 6 ↔ Post 10
  Post 7 ↔ Post 8 (growth ↔ onboarding)
  Post 4 ↔ Post 10 (EVV ↔ feature checklist)
```

**Rule:** no orphan post. Every post is reachable from at least 2 other places (product page + adjacent blog).

## Publish cadence after this iteration

- **Weekly post** on Tuesday or Wednesday (avoid Monday noise / Friday drop-off).
- **Distribution loop** (every post):
  1. LinkedIn post from founder accounts with 3 key takeaways.
  2. Share in 1–2 home care operator forums / Facebook groups (genuine, not spammy).
  3. Reply to one relevant Reddit thread *only if* we have something genuinely useful to add, disclosing founder identity. Never drop a raw link.
  4. Quora answer on the closest matching question.
  5. Submit URL to Google Search Console for indexing.

## Quality gate (pre-publish)

- [ ] Word count meets target for the type
- [ ] Single H1 matches `title` frontmatter
- [ ] Meta description under 160 chars
- [ ] At least one table / comparison block
- [ ] FAQ section present (3+ Q/As) for FAQ schema emission
- [ ] 2+ internal links (one product, one blog)
- [ ] 1 outbound authority link when stats / regulation are cited
- [ ] CTA block at the end
- [ ] Byline = Rahul Chettri, Founder, Nestaid (for this iteration)
- [ ] `keywords` frontmatter populated
- [ ] No "HIPAA compliant" claim without proof; use "HIPAA-conscious"
- [ ] No fake competitor claims
- [ ] No "revolutionary" / "transformative" filler

## Next iteration loop (post-launch)

1. Pull GSC `query` report 14 days after publish.
2. Identify queries we surface for but rank 11–30 — those are the next post candidates.
3. Check Reddit for new pain phrases that surfaced.
4. Add new keywords to `SEO_KEYWORD_MAP.md`.
5. Write the post following this plan.
6. Log in `SEO_IMPLEMENTATION_LOG.md`.
