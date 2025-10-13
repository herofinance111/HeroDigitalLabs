# Hero Digital Labs - Design Guidelines

## Design Approach
**SaaS Dashboard Aesthetic** - Modern, minimal, tech-driven landing page that feels like a sophisticated software platform homepage. Clean, professional, and built for conversion through visual clarity and strategic CTAs.

## Core Design Elements

### A. Color Palette
**Dark Mode Foundation:**
- Background: Charcoal `#0E1117`
- Primary Text: White `#FFFFFF`
- Accent: Electric Blue `#00B7FF`
- Use accent sparingly for CTAs, links, and key highlights

### B. Typography
**Font Family:** Inter, Space Grotesk, or Satoshi (Google Fonts)
- Headings: Bold weight
- Body: Medium weight
- Maintain strong typographic hierarchy

### C. Layout System
**Spacing:** Use generous whitespace, centered grid sections
- Cards: `border-radius: 12px` for all containers
- Mobile-first responsive approach
- Semantic HTML structure: `<header>`, `<main>`, `<section>`, `<footer>`

### D. Visual Elements
- Abstract gradient shapes or CSS-only vector illustrations
- Subtle blue line-flow animation or gradient blur for hero background
- No stock photography - keep it minimal and code-based
- SVG icons for solutions cards and branding

### E. Interactions & Animations
- Light fade-in or slide-up transitions using CSS `@keyframes`
- Duration: < 0.4s for all animations
- Hover states: Blue accent underline or subtle glow effect
- Smooth scrolling for navigation anchors
- Sticky navigation on scroll
- Card elevation on hover in Solutions section

## Component Specifications

### Header/Navigation
- Left: Small SVG logo (Hero "H" icon)
- Right: Navigation links (Home, Solutions, About, Contact)
- CTA Button: "Book a Call" (scrolls to contact)
- Sticky behavior on scroll

### Hero Section
**Headline:** "AI. Automation. Web Systems — Built for Growth."
**Subheadline:** "Hero Digital Labs helps small businesses grow through intelligent design and automation."
**CTAs:** Two buttons - "Get a Free Consultation" (primary) + "View Work" (secondary)
**Background:** Abstract blue line-flow animation or gradient blur effect

### Solutions Section
Three responsive cards with hover elevation:
1. **Web Design** - "High-performance sites that convert."
2. **Automation Systems** - "Save hours with smart workflows."
3. **Growth Strategy** - "Simplify, systemize, scale."

Each card includes small SVG icon + description

### About Section
Short paragraph introducing founder Ryan Heron
**Three Core Values:** Speed, Precision, Innovation (bullet format)

### Contact Section
**Two-column layout:**
- Left: Short compelling copy ("Let's build your next system.")
- Right: Contact form (Name, Email, Message fields)
- Form submits to webhook with success/error states
- Footer info: `📧 ryan@herodigital.vip | 🌍 Gold Coast & Brisbane | 🕓 Mon–Fri 9–5`

### Footer
- Mini site map
- Social icons (LinkedIn, Instagram)
- Copyright © 2025 Hero Digital Labs
- Light blue divider line above footer

## Brand Voice & Copy

**Tagline:** "Your business. Upgraded."

**Optional Callout Banner:** "We're currently accepting 3 new client projects this month — book your free audit call."

## Technical Performance
- Target load time: < 2 seconds
- Lighthouse score: ≥ 90
- Total transfer size: < 400 KB (excluding images)
- Accessible: proper alt text, contrast ratios, focus outlines

## SEO Elements
- Title: "Hero Digital Labs | AI, Automation & Web Systems for Growth"
- Meta Description: "We help businesses scale with modern websites and AI-powered systems. Based on the Gold Coast."
- OpenGraph and Twitter card tags
- Favicon: "H" arrow icon

## Optional Enhancements
- Dark/light mode toggle (localStorage persistence)
- Animated underline on link hover
- Pure CSS testimonials slider

**Overall Aesthetic:** Clean SaaS platform homepage that emphasizes intelligence, forward motion, and technological sophistication. Every element should reinforce the brand promise of clarity, precision, and growth.