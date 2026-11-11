---
name: "Jan Lloyd Cagoco — Unified Editorial Shell & Tactical Optical Desk"
description: "A calm, architectonic Bryl Lim–inspired unified single-screen editorial shell pairing a sticky left rail across a generous negative space gulf with an authored Baggao cartographic banner, tactile 3-card certification stack, and real municipal engineering records."
colors:
  soft-paper: "#FAF8F5"
  paper-elevated: "#F1EFEA"
  warm-ink: "#141413"
  paper-secondary: "#585753"
  paper-muted: "#706E69"
  cobalt-inquire: "#2563EB"
  soft-graphite: "#111214"
  graphite-elevated: "#181A1E"
  chalk-ink: "#EDEDEB"
  graphite-secondary: "#9A9CA2"
  graphite-muted: "#7C7F87"
  electric-cobalt: "#3B82F6"
typography:
  display:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  display-sm:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  pixel-header:
    fontFamily: "'Departure Mono', var(--font-pixel), ui-monospace, monospace"
    fontSize: "26px to 28px (text-[26px] sm:text-[28px])"
    lineHeight: "1.1"
    letterSpacing: "-0.01em"
    casing: "lowercase"
  headline-sm:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  subheadline:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  masthead:
    fontFamily: "'Departure Mono', var(--font-pixel), ui-monospace, monospace"
    fontSize: "19px"
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  nav-tab:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  body-sm:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.005em"
  ledger:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.45
    fontFeature: "'tnum' 1"
  caption:
    fontFamily: "'PP Neue Montreal', var(--font-grotesk), sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
  micro-badge:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.01em"
  mono-badge:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  xs: "3px"
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  sidebar: "210px"
  gulf: "80px to 96px (lg:gap-20 xl:gap-24)"
  content-max: "640px"
components:
  segmented-control:
    backgroundColor: "{colors.paper-elevated}"
    rounded: "{rounded.sm}"
  cartographic-banner:
    rounded: "{rounded.md}"
    height: "220px"
---

# Design System: Jan Lloyd Cagoco — Unified Editorial Shell & Tactical Optical Desk

## Overview

**Creative North Star: "The Tactical Optical Desk & Cartographic Ground"**

The portfolio of **Jan Lloyd Cagoco** (Product Designer & Associate Developer at LGU Baggao) is structured as a single unified editorial shell pairing a sticky left identity rail across a generous negative space gulf with an authored Baggao cartographic banner, tactile 3-card certification stack, and real municipal engineering records.

Every route (`/`, `/projects`, `/experiences`, `/stack`, `/certifications`, `/inquiry`) shares the exact same spatial frame: a fixed left identity and navigation rail (`210px` wide, with right dividing border `border-r border-[var(--border)] pr-5 lg:pr-6`, pinned via `h-[calc(100vh-8rem)]`) separated across a focused whitespace gulf (`lg:gap-20 xl:gap-24`) from a compressed reading column (`max-w-[640px]`). Horizontal top navigation bars and footer strips are completely discarded in favor of architectural quietness.

**Key Characteristics:**
- Fixed left sidebar with right dividing border and stable geometry.
- Fixed right-edge browser scrollbar (`scrollbar-gutter: stable; overflow-y: scroll;` on `html`).
- Screen-Background Micro Coordinate Crosshairs (Variation 2): Compact 16px dot matrix with sparse registration crosshairs (+) at every 4th coordinate intersection (64px pitch), framed diagonally at the top-right and lower-left viewport corners with a minimized radial range.
- CAD Micro Coordinate Horizontal Separator: Authored as an in-flow drafting section separator below the profile hero. Features a 16px pitch dual-rail coordinate matrix with registration crosshairs (+) and bilateral gradient edge fading, scrolling naturally with page content.
- Tactical Coordinate Streaks: Subtle circular streaks of the CAD coordinate crosshair pattern placed in the back layer first (`-z-10`, `pointer-events-none`) behind the cards (lower-left of the featured project, lower-right of the GitHub activity chart). The cards sit on top with solid `bg-[var(--bg-elevated)]` at `z-10`, ensuring foreground text, interactive elements, and grid squares are never covered while the circular streak blooms outward from underneath the card corners.
- Active navigation flanked by optical directional arrows (`->Projects<-`), with resting muted ink transitioning to darkened primary ink and underline accents on hover across all navigation tabs (no background pill).
- Direct hero profile identity row with 192px avatar and inline badge prose.
- Tactile 3-card certification peek stack with Framer Motion spring physics.
- Curated Executive Experiences: The Overview displays core employment records under the unified SectionHeader pattern (`All experiences ->`), while education and honors are fully detailed on the dedicated `/experiences` index without interactive subtabs.
- Responsive 52-week GitHub activity grid with 3,087 metric text placed cleanly outside the card container.
- Two first-class color themes (Soft Paper Light / Soft Graphite Dark) plus live OS System mode.
- Zero decorative lines above buttons, zero eyebrows, zero filler microcopy.

## Colors

A restrained dual-mode palette derived from physical print editorial sheets and dark optical workstations, accented by an authoritative cobalt ink.

### Primary
- **Soft Paper** (`#FAF8F5`): Canvas ground in light mode. Warm, tactile, non-glare off-white.
- **Soft Graphite** (`#111214`): Canvas ground in dark mode. Deep matte carbon slate, avoiding pitch black.
- **Cobalt Pigment** (`#2563EB` light / `#3B82F6` dark): Reserved for active accents, focus rings, and primary interactive signals.

### Neutral
- **Paper Elevated** (`#F1EFEA`): Subtle surface container for cards, banners, and segmented controls in light mode.
- **Graphite Elevated** (`#181A1E`): Surface container for elevated elements in dark mode.
- **Warm Ink** (`#141413`): High-contrast primary typographic ink in light mode.
- **Chalk Ink** (`#EDEDEB`): High-contrast primary typographic ink in dark mode.
- **Paper Secondary** (`#585753`) / **Graphite Secondary** (`#9A9CA2`): Body text, dates, secondary metadata.
- **Paper Muted** (`#706E69`) / **Graphite Muted** (`#7C7F87`): Inactive iconography, border halftones, synthetic badges.

### Named Rules
**The First-Class Theme Rule.** Light and Dark modes are co-equal citizens. Every component binds to CSS tokens (`var(--bg)`, `var(--bg-elevated)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--border)`) without color flashing or unstyled states.

**The Rarity of Cobalt Rule.** Cobalt accent is used on ≤5% of any screen. Its rarity makes it authoritative for active tabs, focus indicators, and verified links.

## Typography

**Display Font:** `'PP Neue Montreal', var(--font-grotesk), sans-serif`
**Body Font:** `'PP Neue Montreal', var(--font-grotesk), sans-serif`
**Label/Mono Font:** `ui-monospace, SFMono-Regular, Menlo, monospace`

**Character:** Architectural Grotesk with tight tracking, generous x-height, and neutral editorial rhythm.

### Hierarchy
- **Display** (600, 34px / 28px mobile, line-height 1.15, tracking -0.03em): Project case study titles.
- **Pixel Page Header** (400, 26px to 28px `text-[26px] sm:text-[28px]`, line-height 1.0, Departure Mono lowercase): Full-page index titles (`/projects`, `/experiences`, `/stack`, `/certifications`, `/inquiry`), spaced with `space-y-8` (32px) above the page lead text.
- **Page Lead Subtitle** (400, 15px to 16px `text-[15px] sm:text-[16px]`, line-height 1.62, text-secondary): Authoritative descriptions beneath inner page headers.
- **Headline** (600, 30px / 26px mobile, line-height 1.15, tracking -0.025em): Major section headers across full-page indexes.
- **Title** (600, 18px to 20px, line-height 1.25, tracking -0.02em): Project catalog and overview item titles.
- **Subheadline** (600, 18px, line-height 1.3, tracking -0.02em): Plate headers and inspection callouts.
- **Masthead** (600, 19px / 20px desktop, line-height 1.3, tracking -0.025em): Identity rail masthead (`Jan Lloyd Cagoco`).
- **Nav Tab** (500, 17px / 16px desktop, line-height 1.3, tracking tight): Primary sidebar navigation items.
- **Subtitle** (600, 16px, line-height 1.35, tracking -0.015em): Overview project cards and certification titles.
- **Body** (400, 15px, line-height 1.6, tracking -0.005em): Narrative bios and case study prose. Max line length 65ch.
- **Body-sm** (400, 14px, line-height 1.55, tracking -0.005em): Section descriptions and table text.
- **Ledger** (500, 13px, line-height 1.45, tabular-nums): Chronological dates, metadata tables, email links.
- **Caption** (500, 12px, line-height 1.4, tabular-nums): Issuer names, geo coordinates, control labels.
- **Micro-badge** (500, 11px, tracking 0.01em): Project type badges and year chips.
- **Mono-badge** (500, 10px, tracking 0.02em): Map plaques and synthetic stand-in labels.

### Named Rules
**The Tabular Number Rule.** All years, coordinates, lot numerals, and dates strictly enforce tabular numerals (`fontFeature: "'tnum' 1"` or `tabular-nums`) to preserve optical column alignments.

**The No-Eyebrow Rule.** Section headings and page headers stand on their own weight. No kicker or eyebrow text may precede a heading.

## Layout

A unified two-column editorial canvas without enclosing outer borders:
- **Left Rail:** `210px` wide with right dividing border line (`border-r border-[var(--border)] pr-5 lg:pr-6`), sticky (`sticky top-10 lg:top-16`), height `h-[calc(100vh-8rem)]`.
- **Whitespace Gulf:** `lg:gap-20 xl:gap-24` (`80px` to `96px`) separating navigation from reading.
- **Content Column:** `max-w-[640px]`, `w-full`, compressed single-column reading flow.
- **Shell Envelope:** `max-w-[1040px] xl:max-w-[1100px] mx-auto w-full px-4 sm:px-6 flex justify-center`.
- **Mobile Responsive Layout (<1024px):** Compact horizontal masthead row (name + 3-way theme switch) stacked over an overflow-x scrolling navigation strip with active optical arrows.

## Elevation & Depth

Surfaces are tactile and flat at rest, relying on subtle material differences rather than simulated drop shadows.

- **Tactile Ground:** 2% fractal grain on the background (`.tactical-ground`).
- **Top Viewport Scroll Fade Horizon:** Fixed tactile ground mask (`h-16 sm:h-20 z-30 tactical-ground bg-[var(--bg)] [mask-image:linear-gradient(to_bottom,black_25%,transparent)]`) that activates smoothly on scroll (`scrollY > 6`), dissolving ascending content into the top horizon without harsh clipping.
- **Ambient Corner Dot Vignette:** 16px stippled dot matrix with radial fade mask fixed in the top-right corner (`.corner-dot-vignette`).
- **Ambient Halftone Fade:** 12px stippled dot matrix with downward gradient mask on the page top (`.halftone-well`).
- **Hairline Layering:** Containers use `1px solid var(--border)` with slightly elevated surface backgrounds (`bg-[var(--bg-elevated)]/50`).
- **Certification Card Stack:** 3-card interactive peek stack using Framer Motion spring physics (`stiffness: 280, damping: 26, mass: 0.75`), subtle lateral rotation (`±2.5°`), and soft elevation shadows (`shadow-[0_4px_16px_rgba(0,0,0,0.06)]`).

### Named Rules
**The Flat-By-Default Rule.** Surfaces never carry heavy drop shadows at rest. Shadow is reserved strictly for layered card stacks and active floating states.

## Shapes

- **Micro Badges & Pills:** `3px` radius (`rounded-[3px]`).
- **Interactive Controls & Buttons:** `4px` radius (`rounded-[4px]`).
- **Containers & Banners:** `6px` radius (`rounded-[6px]`).
- **Avatar Container:** `8px` radius (`rounded-[8px]`).
- **Dividers & Terminal Footers:** CAD micro-coordinate crosshairs separator (`<DottedSeparator />`) deployed below the Overview hero identity row and as the universal terminal footer anchor at the end of every page.

## Components

### AppSidebar
- **Masthead:** `Jan Lloyd Cagoco` in Departure Mono (`font-pixel`, 19px) linking to `/`. Tuned to 185.8px to perfectly align with the 186px allotted sidebar column width on a single line (`whitespace-nowrap`).
- **Navigation Items:** `Projects`, `Experiences`, `Stack`, `Certifications` in 16px–17px.
- **Active Navigation Style:** Optical Hugeicons brackets (`<ArrowRight01Icon size={14} /> Projects <ArrowLeft01Icon size={14} />`) with fixed-width anchor slots preventing text jumps.
- **Sidebar Frame:** Clean right dividing border line (`border-r border-[var(--border)] pr-5 lg:pr-6`).
- **Scrollbar Stability:** Fixed against viewport shifting via `scrollbar-gutter: stable; overflow-y: scroll;` on `html`.
- **Theme Segmented Control:** 3-way toggle (System, Light, Dark).
- **Collaboration Prompt:** "For collaboration and inquiry, Reach me here" in `text-[13px] sm:text-[14px]` (no trailing arrow).
- **Mailto Link:** `cagocojanlloyd@gmail.com` in `text-[15px] sm:text-[16px]`.

### ThemeSegmentedControl
- **Type:** Radio group with `role="radiogroup"` and `role="radio"`.
- **Options:** System (`ComputerIcon`), Light (`Sun01Icon`), Dark (`Moon01Icon`).
- **Active State:** Raised pill with `bg-[var(--bg)]`, border, and soft shadow.

### ProfileIdentityRow
- **Avatar:** 192px square container (`sm:w-48 sm:h-48`, 144px mobile) with 8px radius and subtle shadow.
- **Display Name:** `Jan Lloyd Cagoco` in Departure Mono (`font-pixel`, 24px mobile / 30px desktop) positioned in the right column directly above the bio text.
- **Bio with Inline BadgePills:** Editorial prose accented with tactile `<BadgePill>` tags (`full-stack`, `web`, `mobile apps`, `public digital tools`, `design systems`, `cool new stuff`, `rough ideas`) with Hugeicons.
- **Social Links:** Clean lowercase `github`, `linkedin`, `facebook` in monospace with Hugeicons `ArrowUpRight01Icon`.
- **Visual Separator:** 2-liner large circle-dot visual separator with edge fade mask (`<DottedSeparator />`).

### SummaryBlocks
- **Projects:** Borderless header `Projects — All projects`; compact rows with title & year on the left and stacked project type badge & description on the right.
- **Experiences:** Unified `SectionHeader` with curated employment rows matching the architectural hierarchy of Projects and Stack; full records available on `/experiences`.
- **Stack:** Curated horizontal pills with tech SVG icons and labels.
- **Certifications:** Interactive 3-card stack with issuer logos and verification links.
- **GitHub Activity Card:** Positioned directly below certifications with `@janlloyd ↗`, `3,087 contributions in the last year` directly below the chart, and 52-week activity dot grid.

### Inner Page Headers
All inner pages (`/projects`, `/experiences`, `/stack`, `/certifications`, `/inquiry`) follow a unified, borderless header standard:
- **Departure Mono Typography:** Distinct digital monospace display face (`font-pixel` / `'Departure Mono'` by Helena Zhang) rendered in lowercase at `text-[26px] sm:text-[28px] leading-none text-primary` (`projects`, `experiences`, `stack`, `certifications`, `inquire`), pairing early 90s flight display / workstation terminal proportions with clean vector craft.
- **Zero Parenthesized Item Counts:** Pure typography without trailing counts (e.g., no `(2)` or `(18)`).
- **Zero In-Content Back Breadcrumbs:** No redundant `← Overview` back links in the content column; navigation is anchored by the persistent left sidebar.
- **No Underline Separators:** No `hairline-b` or dividing rules directly below the title; space-based hierarchy with `space-y-8` (32px) and `space-y-10` page rhythm.
- **Substantive Editorial Subtitles:** Complete, authoritative descriptions in `text-[15px] sm:text-[16px]` rather than truncated sentence fragments.

### Projects Catalog (/projects)
- **Line-Divided Editorial List:** Projects are presented like the Overview summary without card containers or canvas mockup boxes: divided purely by clean horizontal rules (`divide-y divide-[var(--border)] border-y border-[var(--border)]`).
- **Direct External Redirection:** There are no inner `/projects/[slug]` routes. Each item links directly to its external production website URL (`websiteUrl`) via an external link (`target="_blank" rel="noopener noreferrer"`).
- **Typography & Layout:** Title on the left (`text-[18px] sm:text-[20px] font-bold text-primary group-hover:underline`) vertically centered with the row, Year and Project Type badge on the top right, description below, and a persistent northeast arrow (`ArrowUpRight01Icon`, 16px) on the far right vertically centered with the row that shifts on hover (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).

### Experience Dossier (/experiences)
- **Architectural Drafting Timeline:** Continuous vertical datum spine (`1px solid var(--border)`) on the left rail connecting 40px tactile monogram tiles (`LB`, `CA`, `CU`, `CC`, `D2`) in Departure Mono (`font-pixel`).
- **Hierarchy & Content:** Bold Grotesk company name with monospace tabular metadata (`Full-time · 1 yr · Baggao, PH`), semi-bold role title with uppercase date chips (`JAN 2025 — PRESENT · 1 YR`), substantive impact narrative, and functional task operation badges with dashed overflow pills (`+2 skills`, `+3 skills` with expand toggle).

### Certifications Catalog (/certifications)
- **Categorized Domain Hierarchy:** Structured into domain categories (`Artificial Intelligence & Machine Learning`, `Frontend & Web Engineering`, `Cloud & Infrastructure`) with `text-[13px] font-medium text-secondary uppercase tracking-wider` headings and `space-y-8` category separation, exactly matching the Stack index architecture.
- **Tactile Card Grid:** Uses the exact square tactile credentials card from the Overview stack (`aspect-square rounded-[8px] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]`), rendered as a clean responsive 3-column grid (`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5`).
- **Interactive Verification Plaque:** Centered high-contrast platform logos (Google, Meta, AWS, Microsoft), bold title in Grotesk, and direct "Verify ↗" link with diagonal northeast translation on hover opening credential verification in a new tab.

## Do's and Don'ts

### Do:
- **Do** maintain the fixed left identity rail with right dividing border (`border-r border-[var(--border)] pr-5 lg:pr-6`) and focused whitespace gulf (`lg:gap-20 xl:gap-24`) across every route.
- **Do** preserve the active navigation bracket syntax (`->Projects<-`) with Hugeicons `ArrowRight01Icon` and `ArrowLeft01Icon`.
- **Do** keep the browser scrollbar pinned on the right edge (`scrollbar-gutter: stable; overflow-y: scroll;` on `html`).
- **Do** use tabular numbers (`tabular-nums`) for all dates, coordinates, and metrics.
- **Do** label synthetic placeholder visuals discreetly with `SYNTHETIC`.
- **Do** support full keyboard navigation and `prefers-reduced-motion`.

### Don't:
- **Don't** add horizontal top navigation bars or bottom footer strips.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** add decorative lines or rules immediately above buttons.
- **Don't** use gradient text or colored border-left accents.
- **Don't** invent artificial employers, awards, or metrics.
