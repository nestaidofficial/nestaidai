---
title: "EVV Problems in Home Care: Missed Clock-Ins, Exceptions, and What Agencies Can Do"
description: "Missed clock-ins, EVV exceptions, and Medicaid clawbacks are quietly draining home care agencies. Here's how AI agents catch the issues before they cost you."
date: "2026-05-21"
author: "Rahul Chettri"
authorRole: "Founder, Nestaid"
image: "/blog/evv-problems.jpg"
imageAlt: "EVV missed clock-in alert on a home care agency dashboard"
tags: ["EVV", "Medicaid", "Compliance", "Operations"]
keywords:
  - "EVV problems home care"
  - "EVV missed clock-in"
  - "Electronic Visit Verification home care"
  - "EVV exception clean-up"
  - "Medicaid EVV compliance"
  - "home care EVV software"
---

If you run a home care agency that bills Medicaid, you already know: Electronic Visit Verification (EVV) is the silent tax on your week. Every Friday afternoon, someone on your team — sometimes you — spends hours cleaning up exceptions so the visits actually get paid.

EVV isn't going away. The 21st Century Cures Act made it federal law for Medicaid personal care services, and every state has rolled out an aggregator (Sandata, HHAeXchange, CareBridge, Tellus, and state-specific portals). The legal mandate isn't the problem. The operational reality is.

Here's what's actually breaking, and what agencies can do — with or without AI — to make it manageable.

## What EVV is supposed to do (vs. what it actually does)

The promise of EVV: verify, in real time, that the right caregiver was at the right client at the right time, providing the right service. GPS, biometric, or phone-based clock-in/out captures it.

In reality, EVV has become a downstream documentation tax. Here's what agencies see:

- Caregivers forget to clock in
- Caregivers clock in late ("the app froze")
- GPS pings outside the geofence
- Service type mismatches
- Authorization unit overages
- Aggregator sync failures
- State-specific edge cases ("this only happens in Pennsylvania")

Each of these becomes an **EVV exception** — a visit that won't get paid until someone manually justifies and resolves it. And the clock is ticking: most states require correction within 7–14 days.

## The four most expensive EVV problems

### 1. Missed clock-ins

The single biggest source of revenue leakage. A caregiver shows up, provides the service, but forgets (or fails) to clock in. The visit isn't verified. Medicaid won't pay it without manual correction — and even then, repeated missed clock-ins can flag the agency for audit.

Common reasons:
- Caregiver's phone died or app glitched
- Caregiver new on the job, didn't know the workflow
- Caregiver clocked into the wrong client's visit
- The client's home has weak cell signal

The traditional fix is reactive: someone notices the exception in the report, calls the caregiver to confirm what happened, manually edits the record (where allowed), and prays.

### 2. Clock-out drift

The caregiver leaves the home but forgets to clock out. The visit "ends" five hours late or never. Either the visit gets capped (revenue loss) or it gets flagged as a fraud signal.

### 3. GPS geofence misses

The clock-in pings 200 feet from the official client address — outside the geofence. Some states reject. Some require justification. Either way, you spend coordinator time chasing it.

### 4. Service code and unit mismatches

The visit was authorized for X service code and Y units. The caregiver clocked under Z code or ran over units. This is one of the highest-risk exceptions because it can look like fraud to a state auditor.

## The hidden cost: coordinator hours, not just lost revenue

Talk to any agency manager about EVV exception clean-up. They'll tell you it's 5–15 hours a week of office-staff time, every week. Multiply across a year and you're at a quarter to half an FTE's worth of payroll on exception cleanup alone — not building the agency, just keeping the lights on.

And that's before counting the actual revenue lost on visits that never get cleaned up in time and get written off.

## What "operational EVV" looks like (vs. compliance EVV)

Most EVV vendors and aggregators stop at "compliance." They give you the dashboard, the reports, and the exception queue. Then you do the rest.

The operational layer is what's missing — the layer that prevents exceptions from happening in the first place, and resolves the ones that do without manual chasing.

This is where AI agents change the math. Here's how:

### Pre-visit nudge

The AI texts the caregiver 10 minutes before the visit:
> "Hi Maria — your 9 AM with Mr. Lopez starts in 10 minutes. Don't forget to clock in when you arrive. Reply HELP if anything's off."

A 15-second nudge that converts most "forgot to clock in" exceptions into clean visits.

### Real-time clock-in monitor

The AI watches for clock-ins within 5 minutes of the scheduled start. If a clock-in is missing, the caregiver gets a text:
> "Hi Maria — we haven't seen your clock-in at Mr. Lopez yet. Tap here to clock in, or text us if you're running late."

This catches 60–80% of missed clock-ins before they become exceptions.

### Clock-out reminder

When the scheduled end time hits and the caregiver hasn't clocked out, the AI nudges them. If 15 minutes pass without a clock-out, the coordinator gets pinged.

### Exception triage at the source

When an exception does occur, the AI initiates the resolution conversation directly with the caregiver — captures the reason, attempts a correction within state rules, and only escalates to the coordinator if it can't be resolved.

## What the AI layer doesn't do (important)

To be honest about scope:

- An AI layer doesn't replace your EVV aggregator. You still need Sandata / HHAeXchange / CareBridge / Tellus / your state portal.
- It doesn't change Medicaid's rules. State rules still apply, and some exceptions can only be resolved by a human.
- It doesn't fix bad authorizations or service code mistakes that originate from intake.

What it does is shrink the exception queue from "Friday-long cleanup project" to "a handful of weird edge cases that need a human."

## How AI ties into your existing EVV stack

The pattern that works for agencies on the Nestaid platform:

1. **Aggregator stays.** Sandata, HHAeXchange, CareBridge, Tellus, state portal — whatever your state mandates.
2. **AI receptionist + coordinator + EVV monitor** sit on top of your scheduling layer.
3. **Pre-visit, in-visit, and post-visit nudges** run automatically.
4. **Exceptions get triaged at the source** — most resolved without coordinator time.
5. **The aggregator dashboard ends up with a much smaller exception queue.**

This is what we mean by AI-native home care operations. See [AI-native home care software: what it means](/blog/ai-native-home-care-software-what-it-means) for the broader framing.

## What to ask your EVV vendor (and your scheduling vendor)

If you're trying to evaluate this honestly:

- What's our current exception rate (% of visits)? What's the median time-to-resolution?
- How many coordinator hours per week do we spend on EVV cleanup?
- Can you show me which 5 caregivers create the most exceptions?
- Do we get a real-time alert when a clock-in is overdue, or only after the visit window closes?
- Does our scheduling tool talk to our EVV aggregator in real time, or is it a nightly batch?

If your team can't answer those, the first AI win isn't a new feature — it's just visibility.

## Quick checklist: things any agency can do this week

Even without AI:

1. **Standardize a pre-visit text** at the start of every shift.
2. **Build a daily exception report and assign one owner.**
3. **Track exceptions by caregiver and by client** to find the patterns.
4. **Set a same-day rule**: any exception older than 24 hours gets escalated.
5. **Move from weekly batch sync to real-time sync** with your aggregator if possible.

These five changes alone typically cut exception cleanup time 30–40%.

## FAQ

**Is EVV the same in every state?**
No. The federal law sets the floor; states implemented it differently. Some use a single state aggregator (Sandata, HHAeXchange). Some let agencies use any compliant tool that reports to the state. Always check your state's Medicaid agency for current rules.

**What's the difference between "alternate EVV" and a state-mandated aggregator?**
Some states require all agencies to use the state's chosen aggregator. Others allow alternates as long as they meet federal data standards and report into the state system. Your scheduling tool's role differs depending on which model your state uses.

**Can AI agents fix EVV exceptions automatically?**
Within state rules, yes — for the common cases (missed clock-in due to phone issue, late clock-out, etc.). Anything that requires a human judgment call (service code change, authorization override) still needs a coordinator.

**Is Nestaid HIPAA compliant for EVV data handling?**
Nestaid is built HIPAA-conscious — encryption, access controls, audit logs, retention defaults, BAA support. We don't oversell compliance posture: any vendor handling PHI should be evaluated on their actual controls, not their marketing.

**Does this work with Sandata? HHAeXchange? CareBridge?**
Yes — Nestaid is designed to sit on top of your aggregator, not replace it. We're integration-friendly with the common state aggregators and we read/write to your scheduling system in real time.

## Stop running EVV cleanup as a Friday project

EVV exceptions are not a documentation problem. They're a workflow problem. Until the workflow nudges the right person at the right moment, the exception queue keeps growing.

If you want to see how this would look on your specific agency's exception data, [book a 30-minute walkthrough](https://calendly.com/rahulchettri601/nestaid-demo-call). Or learn more about [Nestaid's management and scheduling platform](/management).

— Rahul Chettri, Founder, Nestaid
