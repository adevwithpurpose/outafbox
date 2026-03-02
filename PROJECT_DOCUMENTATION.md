# OutAfBox Project Documentation

**Project:** OutAfBox Growth Ecosystem  
**Technology Stack:** Astro 5.x, Tailwind CSS v4, TinaCMS, TypeScript  
**Repository:** <git@github.com>:adevwithpurpose/outafbox.git

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Content Architecture](#content-architecture)
5. [Component System](#component-system)
6. [Design System](#design-system)
7. [Development Workflow](#development-workflow)
8. [Available Pages](#available-pages)

---

## Overview

OutAfBox is a performance-driven growth ecosystem for DTC brands scaling from $1M to $50M. The site uses a block-based architecture powered by TinaCMS for content editing, allowing non-technical users to build and modify pages visually.

### Core Value Proposition

- High-volume UGC creative production
- Scientific media buying
- Destination optimization (high-converting landing pages)
- Performance-based pricing model

---

## Project Structure

```
outafbox/
├── .astro/                 # Astro build cache
├── .git/                   # Git repository
├── business_knowledge/     # Business documentation
│   └── legacy_site_content.md  # Legacy content archive
├── content/                # Markdown content source files
│   ├── pages/              # Page content (home.md, about.md, etc.)
│   └── velocity_copy.md    # Additional copy resources
├── dist/                   # Production build output
├── node_modules/           # Dependencies
├── public/                 # Static assets
│   ├── admin/              # TinaCMS admin config
│   └── favicon.ico/svg     # Favicon files
├── src/                    # Source code
│   ├── assets/             # Images and static assets
│   ├── components/         # Reusable Astro components
│   │   ├── blocks/         # Page building blocks (20+ block types)
│   │   ├── brand/          # Brand elements (Logo.astro)
│   │   ├── landing/        # Landing-specific components
│   │   └── layout/         # Layout components (Header, Footer, Ticker)
│   ├── layouts/            # Page layouts (Layout.astro)
│   ├── pages/              # Route definitions
│   └── styles/             # Global styles (global.css)
├── tina/                   # TinaCMS configuration
│   ├── __generated__/      # Auto-generated Tina files
│   ├── config.ts           # Tina schema configuration
│   └── tina-lock.json      # Schema lock file
├── .cpanel.yml             # cPanel deployment config
├── .gitignore              # Git ignore rules
├── astro.config.mjs        # Astro/Vite configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.16.15 | Static Site Generator |
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| TinaCMS | 3.3.2 | Headless Git-based CMS |
| TypeScript | Latest | Type-safe development |
| Vite | Latest | Build tool (via Astro) |

### Key Dependencies

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "@tinacms/cli": "^2.1.2",
    "astro": "^5.16.15",
    "marked": "^17.0.1",
    "tailwindcss": "^4.1.18",
    "tinacms": "^3.3.2"
  }
}
```

### Available Scripts

```bash
npm run dev          # Start dev server with TinaCMS
npm run build        # Build production site
npm run preview      # Preview production build
npm run astro        # Astro CLI commands
```

---

## Content Architecture

### Block-Based Page Builder System

Pages are composed of reusable "blocks" defined in Markdown files:

**Content Source:** `content/pages/*.md`

Example home.md block structure:

```yaml
---
title: Home 
blocks:
  - headline: "Scale Your DTC Brand Past the Revenue Ceiling."
    subhead: "The all-in-one Growth Ecosystem..."
    ctaText: Get Your Free Growth Audit
    _template: hero
  - label: "Trusted by brands scaling from $1M to $5M/mo"
    _template: trustBar
  - headline: Why You Are Hitting the Ceiling
    id: problem
    items:
      - title: Creative Burnout
        icon: 📉
    _template: features
  # ... more blocks
---
```

### Block-to-Component Mapping (PageBuilder.astro)

| TinaCMS Typename | Component File |
|------------------|----------------|
| PageBlocksHero | HeroBlock.astro |
| PageBlocksFeatures | FeatureGridBlock.astro |
| PageBlocksTestimonials | TestimonialsBlock.astro |
| PageBlocksTrustBar | TrustBarBlock.astro |
| PageBlocksAuditForm | AuditFormBlock.astro |
| PageBlocksCreatorForm | CreatorFormBlock.astro |
| PageBlocksFaq | FAQBlock.astro |
| PageBlocksVsl | VSLBlock.astro |
| PageBlocksComparison | ComparisonBlock.astro |
| PageBlocksFounder | FounderBlock.astro |
| PageBlocksResultsTeaser | ResultsTeaserBlock.astro |
| PageBlocksGuarantee | GuaranteeBlock.astro |
| PageBlocksRoiSimulator | ROISimulatorBlock.astro |
| PageBlocksTeam | TeamGridBlock.astro |
| PageBlocksJobs | JobsListBlock.astro |

---

## Component System

### Layout Components (`src/components/layout/`)

**Header.astro**

- Fixed glass-panel navigation bar
- Mobile hamburger menu with dropdown
- Logo component integration
- CTA button for "Get Audit"

**Footer.astro**

- Multi-column link structure
- Pre-footer CTA section with animated effects
- Social media links (LinkedIn, Instagram)
- Ecosystem, Intelligence, and Frameworks navigation

**GrowthTicker.astro**

- Animated ticker showing social proof/metrics

### Block Components (`src/components/blocks/`)

Each block component receives `data` prop from the page's block definition:

- **HeroBlock** - Hero section with headline, subhead, CTAs
- **FeatureGridBlock** - 3-column feature grid with icons
- **TestimonialsBlock** - Client success stories
- **TrustBarBlock** - "Trusted by" brand logos
- **AuditFormBlock** - Lead capture form
- **CreatorFormBlock** - Creator application form
- **FAQBlock** - Accordion-style FAQ
- **VSLBlock** - Video Sales Letter embed
- **ComparisonBlock** - Before/after comparison
- **FounderBlock** - Founder's note/message
- **ResultsTeaserBlock** - Results highlight section
- **GuaranteeBlock** - Performance guarantee
- **ROISimulatorBlock** - Interactive ROI calculator

### Brand Components (`src/components/brand/`)

**Logo.astro** - OutAfBox logo component with scalable classes

---

## Design System

### Color Palette (`src/styles/global.css`)

```css
--color-brand-purple: #7c3aed    /* Primary accent */
--color-brand-blue: #2563eb      /* Secondary accent */
--color-brand-pink: #db2777      /* Tertiary accent */
--color-brand-gold: #fbbf24      /* Gold highlight */
--color-brand-green: #10b981     /* Success/operational status */

/* Backgrounds */
background-color: #0a0a0a        /* Dark theme base */
```

### Typography

- **Body Font:** Inter (Google Fonts)
- **Display Font:** Saira (Google Fonts) for headings

### UI Components

**Glass Panel**

```css
.glass-panel {
  backdrop-blur-xl;
  bg-white/5;
  border border-white/10;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

**Glow Effects**

- `.glow-purple` - Purple glow for CTAs
- `.glow-blue` - Blue glow for accents

**Gradient Text**

- `.text-gradient-main` - Blue→Purple→Pink gradient

### Animations

- `fadeIn` - Fade in with slide up
- Hover scale effects on buttons and links
- Animated background blurs in footer

---

## Development Workflow

### Starting Development

```bash
cd outafbox
npm install
npm run dev
```

This starts TinaCMS dev mode with Astro, enabling visual content editing.

### Building for Production

```bash
npm run build
```

Output: `./dist/`

### Preview Build Locally

```bash
npm run preview
```

### Adding New Pages

1. Create markdown file in `content/pages/` (e.g., `new-page.md`)
2. Define blocks with `_template` property matching block types
3. Create route file in `src/pages/` (or use `[...slug].astro` for dynamic routing)

### Adding New Blocks

1. Create component in `src/components/blocks/BlockName.astro`
2. Add to `PageBuilder.astro` switch statement with new typename
3. Define TinaCMS schema in `tina/config.ts`

---

## Available Pages

| Page | Route | Content File |
|------|-------|--------------|
| Home | `/` | home.md |
| About | `/about` | about.md |
| Audit | `/audit` | audit.md |
| Careers | `/careers` | careers.md |
| Creators | `/creators` | creators.md |
| Case Studies | `/case-studies` | (dynamic) |
| Ecosystem | `/ecosystem` | (dynamic) |
| Privacy | `/privacy` | privacy.md |
| Terms | `/terms` | terms.md |

### Video Course System

The site includes a comprehensive video course system accessible at `/courses/*` routes, using a high-performance SSG (Static Site Generation) architecture:

- **Routing Architecture**:
  - `/courses`: Main index with client-side search.
  - `/courses/[module]`: Module index page featuring sequential lesson numbering (01, 02...) and horizontal layout.
  - `/courses/[module]/[lesson]`: Advanced lesson player with persistent sidebar navigation and MDX content rendering.
- **Content Synchronization**:
  - **MDX Integration**: Lessons are rendered using MDX, combining frontmatter metadata with rich text and video components.
  - **Drive Sync**: Supplemental text content is synced from Google Drive via `rclone` and programmatically merged into MDX files.
  - **Frontmatter Sanitization**: Automated scripts ensure YAML compliance for special characters in titles.
- **Player Features**:
  - **Hybrid Layout**: Video player is positioned directly below the header for immediate access, followed by MDX content.
  - **Sidebar Navigation**: Real-time progress indicators and quick access to all lessons within the module.
  - **Action Buttons**: Integrated "View in Drive" and "Download Lesson" buttons for all videos.
- **Data Pipeline**:
  - **Source**: `mega_course_database.csv` serves as the master source of truth.
  - **Build Script**: `build_content.js` transforms the CSV into optimized JSON files (`output/courses.json` and `output/modules.json`).
- **UI & Performance**:
  - **SSG Core**: Pages are pre-rendered (`prerender = true`) for sub-second load times.
  - **Tailwind v4**: Modern utility-first styling with custom CSS for MDX content containment.
  - **Accessibility**: ARIA labels and semantic structure for sidebar and navigation.

---

## Git Repository

**Remote URL:** `git@github.com:adevwithpurpose/outafbox.git`

### Push to Repository

```bash
cd outafbox
git add .
git commit -m "Your commit message"
git push origin main
```

---

*Document generated: 2026-02-27*
