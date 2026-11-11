# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:
- Recruiters and hiring managers screening a product designer: they skim, open one or two pieces of work, then decide whether to make contact.
- Freelance clients judging whether to hire for a project: they read case studies more closely, then send an inquiry.

## Product Purpose

Personal portfolio of Jan Lloyd Cagoco, a product designer from Caloocan, PH (currently designing at Rectangle). It shows selected work, experience, and skills, and turns a convinced visitor into a message through the inquiry form (`/inquiry`, sent via Resend) or a resume download.

Success: a visitor reaches a project, believes the craft, and either sends an inquiry or downloads the resume.

## Positioning

A product designer's portfolio is itself a design sample. The site has to show the craft directly, not describe it.

## Capabilities and Constraints

- Next.js 15 (App Router), React 19, Tailwind CSS 4, framer-motion. Deployed as a web app.
- Routes to keep: `/` home, `/projects`, `/projects/[slug]`, `/tech`, `/inquiry` (contact form posting to `/api/contact`).
- Resume download (`/public/resume.pdf`), GitHub and Facebook links.
- Light/dark theme toggle must be kept (owner decision). Both themes are first-class.
- Owner's binding content rules: no over-explanatory copy, no eyebrow labels, no decorative rules or lines above buttons, no filler microcopy.

## Brand Commitments

- Name: Jan Lloyd Cagoco. Role: Product Designer.
- Owner-pinned direction: premium, with realistic 3D effects, and strong typography. It must not read as generic AI-generated UI.

## Evidence on Hand

- Avatar: `public/avatar.png`.
- All project, timeline, education, and achievement entries are **placeholders** (Project One/Two, XYZ University, the awards). There are no real project visuals yet. The gallery is empty.
- Design work may use synthetic stand-in visuals, labeled as such, and must give the owner a list of what to replace. Never present invented clients, awards, metrics, or employers as real.

## Product Principles

1. The work leads. Every screen should get a visitor to a project faster.
2. Show, don't caption. If a line explains what the visitor can already see, cut it.
3. One clear way to make contact, always within reach.
4. Craft is the proof: type, motion, and depth have to hold up on close inspection, on any device.
