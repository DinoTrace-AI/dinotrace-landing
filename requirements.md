# DinoTrace Landing Page — Build Spec

## Project Overview

**Product:** DinoTrace — The Agent Factory for iGaming
**What it does:** An AI agent orchestration platform that lets iGaming operators deploy autonomous agent crews for fraud detection, compliance monitoring, marketing automation, and customer service — through conversational interfaces, not code.
**Target audience:** iGaming operators — from sophisticated fraud managers at licensed operations to non-technical small casino owners.
**Primary goals:** (1) Drive demo/waitlist signups, (2) Explain the product and build credibility.

---

## Tech Stack

- **Framework:** Next.js (React) with TypeScript
- **Styling:** Tailwind CSS
- **Font:** Google Fonts — use a distinctive modern sans-serif (e.g. `DM Sans`, `Outfit`, `Manrope`, or `Plus Jakarta Sans` — avoid Inter, Roboto, Arial)
- **Icons:** Lucide React
- **Animations:** Framer Motion for scroll-triggered reveals, hover states, and micro-interactions
- **Deployment:** Static export compatible (Vercel-ready)

---

## Brand Identity

### Colors

| Token              | Hex       | Usage                                                |
|---------------------|-----------|------------------------------------------------------|
| `brand-blue`       | `#3A87F9` | Primary CTA buttons, links, key highlights           |
| `brand-green`      | `#A8CD49` | Live/active badges, success states, accent            |
| `text-dark`        | `#2D2D2D` | Headlines                                             |
| `text-body`        | `#5A5A5A` | Body copy                                             |
| `text-muted`       | `#94A3B8` | Subtle labels, coming soon text                       |
| `bg-white`         | `#FAFBFC` | Page background                                       |
| `bg-section`       | `#EEF4FC` | Alternating section backgrounds (light blue wash)     |
| `bg-dark`          | `#0F172A` | Footer background                                     |
| `border-light`     | `#E2E8F0` | Card borders, dividers                                |

### Logo

- Use the PNG file: `/public/dinotrace-logo-color.png`
- Logo renders at approximately `160px` wide in the navbar
- For the favicon, crop the "D" icon mark from the logo

### Tone & Voice

- Confident but approachable — not overly corporate
- Short, punchy headlines — one line max
- Minimal body copy per section — let whitespace and visuals do the work
- Subtle iGaming personality through playful micro-interactions and accent color usage, not gaming imagery

---

## Design Direction

### References

The design should feel in line with modern AI company landing pages — clean, spacious, premium — but with a slightly more fun/energetic personality since we serve the iGaming space. Reference sites for inspiration:

- **Google Stitch** (stitch.withgoogle.com) — ultra-minimal, lots of whitespace, single-focus hero
- **ElevenLabs** (elevenlabs.io) — clean product-led design, interactive product showcases, trust bar
- **Convai** (convai.com) — immersive visuals, step-by-step "how it works", character-driven
- **BytePlus** (byteplus.com) — enterprise polish, tabbed product showcases, card-based browsing

### Key Design Principles

1. **Generous whitespace** — every section breathes, nothing feels cramped
2. **Bold short headlines** — one punchy line with a tight subline underneath
3. **Subtle scroll animations** — fade-in-up on scroll, staggered reveals for card groups
4. **Card-based content** — features and crews displayed as clean, hoverable cards
5. **Light base with depth** — not sterile flat white; use soft shadows, subtle gradients, and layered elements to create dimension
6. **No clutter** — if a section has more than 3 short sentences of body copy, it has too much

### Visual Atmosphere

- Soft gradient accents (blue-to-purple or blue-to-cyan) used sparingly as decorative background blobs or section dividers
- Subtle dot grids or geometric patterns as background texture (very low opacity)
- Cards with soft shadows and slight hover-lift animations
- Rounded corners everywhere (12px–16px on cards, 8px on buttons)

---

## Page Structure — Section by Section

### 1. Navbar

- **Layout:** Sticky top, transparent on hero → white with shadow on scroll
- **Left:** DinoTrace logo (PNG)
- **Center:** Nav links — `Features` | `How It Works` | `Crews` | `Testimonials`
- **Right:** `Book a Demo` primary CTA button (brand-blue, rounded, solid fill)
- **Mobile:** Hamburger menu
- **Behavior:** Smooth scroll to section anchors on click

---

### 2. Hero Section

- **Background:** Clean white/off-white with subtle decorative gradient orbs in the background (low opacity brand-blue and brand-green blurs)
- **Layout:** Centered text, stacked vertically
- **Content:**
  - **Eyebrow tag:** Small pill badge above headline → `AI-Powered Agent Orchestration`
  - **Headline:** `The Agent Factory for iGaming`
  - **Subheadline:** `Deploy intelligent agent crews that detect fraud, ensure compliance, and automate operations — through conversation, not code.`
  - **CTA group:** Two buttons side by side
    - Primary: `Book a Demo` (brand-blue, solid)
    - Secondary: `See How It Works` (outlined, ghost style) → scrolls to How It Works section
- **Below CTAs:** Optional subtle hero visual — an abstract illustration or a stylized mockup of the platform dashboard showing agent crews in action. This can be a placeholder image/container for now with a soft gradient card.
- **Animation:** Headline fades in first, subheadline follows, CTAs slide up last (staggered 150ms delays)

---

### 3. Trust / Logos Bar

- **Layout:** Narrow horizontal strip below hero
- **Headline:** `Built for the world's leading iGaming operators` (small, muted text, centered)
- **Content:** A row of 5–6 greyscale placeholder logos (use generic rectangular placeholders with text like "Operator 1", "Operator 2", etc.)
- **Style:** Logos at ~40% opacity, subtle infinite horizontal scroll animation (marquee effect)
- **Note:** These are placeholders — real operator logos will be added later

---

### 4. Product Concept Section (Crews → Agents → Skills → Tools)

- **Purpose:** Explain the core product hierarchy before diving into specific crews
- **Headline:** `How DinoTrace Works`
- **Subheadline:** `A layered intelligence system — from strategy to execution`
- **Layout:** 4-step horizontal flow (responsive: stacks vertically on mobile) with connecting lines/arrows between them
- **Steps:**

  1. **Crews**
     - Icon: `Users` (Lucide)
     - Title: `Crews`
     - Description: `Orchestrated teams of agents aligned around a mission — fraud detection, compliance, marketing, and more.`

  2. **Agents**
     - Icon: `Bot` (Lucide)
     - Title: `Agents`
     - Description: `Autonomous AI agents within each crew, each with a defined role and responsibility.`

  3. **Skills**
     - Icon: `Brain` (Lucide)
     - Title: `Skills`
     - Description: `The capabilities each agent possesses — pattern recognition, regulatory checks, anomaly detection.`

  4. **Tools**
     - Icon: `Wrench` (Lucide)
     - Title: `Tools`
     - Description: `Concrete integrations and actions — query databases, send alerts, flag accounts, generate reports.`

- **Visual style:** Clean cards with icon at top, connected by a subtle dashed line or arrow. Each card fades in sequentially on scroll.
- **Bottom note:** Small muted text → `Describe your problem in plain English. DinoTrace builds the crew.`

---

### 5. Crews Showcase (Features Section)

- **Headline:** `Meet the Crews`
- **Subheadline:** `Purpose-built agent teams ready to deploy`
- **Layout:** Grid of crew cards (2 columns on desktop, 1 on mobile)

#### Live Crews (full color, interactive):

**Card 1 — Fraud Detection Crew**
- Status badge: `Live` (brand-green pill badge, subtle pulse animation)
- Icon: `Shield` (Lucide)
- Title: `Fraud Detection Crew`
- Description: `Autonomous agents monitoring transactions, detecting bonus abuse, and flagging suspicious behavior in real-time.`
- Agent tags (small pills below description): `Bonus Abuse Analyst` · `Transaction Monitor` · `VIP Risk Assessor` · `AML Watchdog`
- Card style: White card, soft shadow, subtle blue left-border accent, hover lifts card slightly

**Card 2 — Anti-Phishing Crew**
- Status badge: `Live` (brand-green pill badge, subtle pulse animation)
- Icon: `Radar` (Lucide)
- Title: `Anti-Phishing Crew`
- Description: `Proactive brand protection agents scanning for phishing domains, fake sites, and SSL anomalies targeting your players.`
- Agent tags: `Domain Scanner` · `SSL Monitor` · `Threat Reporter` · `Brand Guardian`
- Card style: Same as above

#### Coming Soon Crews (muted/greyed style):

**Card 3 — Marketing Crew**
- Status badge: `Coming Soon` (grey pill badge)
- Icon: `Megaphone` (Lucide)
- Title: `Marketing Crew`
- Description: `Campaign automation, player segmentation, and retention workflows powered by intelligent agents.`
- Card style: Slightly reduced opacity (0.6), no hover effect, subtle dashed border instead of solid

**Card 4 — Customer Service Crew**
- Status badge: `Coming Soon` (grey pill badge)
- Icon: `Headphones` (Lucide)
- Title: `Customer Service Crew`
- Description: `Automated support, smart escalation, and proactive player engagement — 24/7.`
- Card style: Same muted treatment as Marketing Crew

**Card 5 — Custom Crews**
- Status badge: `Coming Soon` (grey pill badge)
- Icon: `Puzzle` (Lucide)
- Title: `Build Your Own Crew`
- Description: `Define your problem. DinoTrace builds the agents, equips the skills, and connects the tools. Your crew, your rules.`
- Card style: Same muted treatment, but with a dashed border to emphasize "build your own"

---

### 6. How It Works Section

- **Background:** Light blue wash (`bg-section`)
- **Headline:** `From Problem to Production in Minutes`
- **Subheadline:** `No code. No configurations. Just conversation.`
- **Layout:** 3-step horizontal flow with numbered circles and connecting lines

**Step 1:**
- Number: `01`
- Title: `Describe Your Problem`
- Description: `Tell DinoTrace what you need in plain language — "I want to detect bonus abuse across multiple accounts."`
- Visual: A chat bubble mockup showing a user message

**Step 2:**
- Number: `02`
- Title: `Agent Builder Configures`
- Description: `Our AI Agent Builder asks smart follow-up questions, extracts your business rules, and generates a complete crew configuration.`
- Visual: A configuration/flow diagram mockup

**Step 3:**
- Number: `03`
- Title: `Deploy & Monitor`
- Description: `Your crew goes live. Agents work autonomously, report findings, and learn from feedback. You stay in control.`
- Visual: A dashboard mockup showing active agents with status indicators

- **Animation:** Steps reveal one by one as user scrolls through them

---

### 7. Social Proof / Testimonials

- **Background:** White
- **Headline:** `What Operators Are Saying`
- **Layout:** 3 testimonial cards in a row (carousel on mobile)
- **Content:** Placeholder testimonials (to be replaced with real ones later):

**Testimonial 1:**
- Quote: `"DinoTrace cut our fraud investigation time by 60%. The agents catch patterns our team would have missed."`
- Name: `Fraud Manager`
- Company: `Leading European Sportsbook`
- Avatar: Placeholder circle with initials

**Testimonial 2:**
- Quote: `"We deployed a full anti-phishing crew in under an hour. No engineering required."`
- Name: `Head of Security`
- Company: `Asian Casino Operator`
- Avatar: Placeholder circle with initials

**Testimonial 3:**
- Quote: `"The Agent Factory concept is game-changing. We're building custom crews for use cases we hadn't even considered."`
- Name: `CTO`
- Company: `Multi-brand iGaming Group`
- Avatar: Placeholder circle with initials

- **Card style:** Light background, large quotation mark accent (brand-blue, decorative), soft shadow

---

### 8. Final CTA Section

- **Background:** Gradient from brand-blue to a slightly darker blue (#2563EB), with subtle dot pattern overlay
- **Layout:** Centered text on dark/gradient background
- **Content:**
  - **Headline:** `Ready to Build Your First Crew?` (white text)
  - **Subheadline:** `See DinoTrace in action. Book a personalized demo with our team.` (white/semi-transparent text)
  - **CTA Button:** `Book a Demo` — large, white background with brand-blue text (inverted from rest of site), rounded, with subtle hover glow
  - **Secondary link:** `Or email us at hello@dinotrace.com` (underlined, white text)
- **Animation:** Gentle background gradient shift animation (slow, continuous)

---

### 9. Footer

- **Background:** Dark (`bg-dark` / `#0F172A`)
- **Layout:** 4-column grid (stacks on mobile)

**Column 1 — Brand**
- DinoTrace logo (white version or light-treated PNG)
- One-liner: `The Agent Factory for iGaming`
- Social icons: LinkedIn, Twitter/X (placeholder links)

**Column 2 — Product**
- Fraud Detection Crew
- Anti-Phishing Crew
- Agent Builder
- Pricing (Coming Soon)

**Column 3 — Company**
- About Us
- Blog (Coming Soon)
- Careers (Coming Soon)
- Contact

**Column 4 — Legal**
- Privacy Policy
- Terms of Service
- Security

**Bottom bar:** `© 2025 DinoTrace. All rights reserved.` — small text, centered, with a thin top border

---

## Responsive Behavior

- **Desktop (1280px+):** Full multi-column layouts, horizontal flows
- **Tablet (768px–1279px):** 2-column grids collapse to single, horizontal flows stack
- **Mobile (< 768px):** Single column everything, hamburger nav, testimonial carousel, reduced padding
- All text sizes scale down proportionally on mobile
- CTA buttons go full-width on mobile
- Hero section reduces headline size significantly on mobile

---

## Interactions & Animations

| Element                    | Animation                                           |
|----------------------------|-----------------------------------------------------|
| Navbar                     | Transparent → solid white + shadow on scroll (after 50px) |
| Hero headline              | Fade in + slide up (delay: 0ms)                     |
| Hero subheadline           | Fade in + slide up (delay: 150ms)                   |
| Hero CTAs                  | Fade in + slide up (delay: 300ms)                   |
| Trust logos                | Infinite horizontal marquee scroll                   |
| Product concept cards      | Staggered fade-in on scroll (100ms between each)    |
| Crew cards                 | Fade in + slight scale up on scroll                  |
| Live crew badges           | Subtle green pulse animation (CSS keyframes)        |
| Crew cards hover           | Lift (translateY -4px) + shadow increase             |
| How It Works steps         | Sequential reveal on scroll                          |
| Testimonial cards          | Fade in on scroll                                    |
| Final CTA background       | Slow continuous gradient shift animation             |
| All scroll animations      | Trigger when element is 20% in viewport              |

---

## File Structure

```
dinotrace-landing/
├── public/
│   ├── dinotrace-logo-color.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── ProductConcept.tsx
│       ├── CrewsShowcase.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Important Notes

- All CTA "Book a Demo" buttons should link to `#demo` for now (or open a mailto: to hello@dinotrace.com)
- All nav links should smooth-scroll to their respective section anchors
- The page is a single-page scroll — no routing needed
- Ensure the page scores 90+ on Lighthouse for Performance, Accessibility, and SEO
- Use semantic HTML throughout (header, main, section, footer)
- Include proper Open Graph meta tags with title: "DinoTrace — The Agent Factory for iGaming" and description matching the hero subheadline