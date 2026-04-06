# DinoTrace Landing Page — Pre-Release Rebuild

## Context

DinoTrace just launched. We don't have customer logos, testimonials, or validated metrics yet. The current page has fake testimonials, placeholder operator logos, and unverifiable claims — these hurt credibility more than help.

This spec restructures the entire page for a pre-release posture: **sell the vision, show the product, build urgency, capture demand.** Every section must earn its place. Nothing fake.

**Remove entirely:**
- Trust/Logos bar ("Built for the world's leading iGaming operators" with Operator 1, 2, 3…)
- Testimonials section (all 3 fake quotes)
- Any specific metric claims we can't verify (e.g. "60% faster")

**Keep and enhance:**
- Hero (reframe CTA)
- Product Concept (Crews → Agents → Skills → Tools)
- Crews Showcase
- How It Works

**Add new:**
- Announcement banner
- Problem statement section (why iGaming needs this)
- Interactive product demo
- Early access CTA with email capture
- Backed-by / built-with credibility section

---

## New Page Structure (top to bottom)

1. Announcement Banner
2. Navbar
3. Hero Section
4. Problem Statement ("The iGaming Problem")
5. Product Concept (Crews → Agents → Skills → Tools)
6. Interactive Product Demo
7. Crews Showcase
8. Early Access CTA
9. Footer

---

## 1. ANNOUNCEMENT BANNER

A slim, dismissible top banner that signals momentum.

```tsx
<div className="bg-brand-blue text-white text-center py-2.5 px-4 text-sm relative z-[60]">
  <span className="inline-flex items-center gap-2">
    <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
    <span className="font-medium">Now in Early Access</span>
    <span className="text-white/60 mx-1">—</span>
    <span className="text-white/80">Fraud Detection & Anti-Phishing Crews are live.</span>
    <a href="#early-access" className="ml-2 underline underline-offset-2 font-semibold hover:text-white/80 transition-opacity">
      Request Access →
    </a>
  </span>
</div>
```

- Dismissible with an × button on the right
- Save dismissal to localStorage so it doesn't reappear
- Navbar offset must account for this banner height

---

## 2. NAVBAR

Keep existing navbar but change the primary CTA:

- **Change** "Book a Demo" → **"Request Early Access"**
- Keep: Logo, Features, How It Works, Crews nav links
- Remove: "Testimonials" nav link (section is being removed)
- Style: Keep the frosted glass `backdrop-blur-xl bg-white/80` on scroll

---

## 3. HERO SECTION

Keep the full-viewport video hero but reframe the messaging for pre-release.

**Content changes:**

- **Eyebrow badge:**
  ```
  Change from: "AI-Powered Agent Orchestration"
  Change to:   "Early Access — Now Live" (with green pulse dot)
  ```

- **Headline:** Keep "The Agent Factory for iGaming" — this is strong.

- **Subheadline:**
  ```
  Change from: "Deploy intelligent agent crews that detect fraud, ensure compliance, and automate operations — through conversation, not code."
  Change to:   "Deploy autonomous AI agent crews that protect your platform — through conversation, not code. Now in early access."
  ```
  Shorter, punchier, includes the early access signal.

- **CTA buttons:**
  ```
  Primary:   "Request Early Access" → scrolls to #early-access
  Secondary: "See How It Works" → scrolls to #how-it-works (keep this)
  ```

- **Below CTAs, add a small social proof line (real, not fake):**
  ```tsx
  <p className="mt-6 text-sm text-white/50">
    Built for iGaming operators · Fraud detection · Anti-phishing · More crews coming soon
  </p>
  ```
  This isn't claiming customers — it's describing what the product does.

Everything else in the hero (video, overlay, scroll indicator) stays the same.

---

## 4. PROBLEM STATEMENT SECTION (NEW — replaces Trust Bar)

**This replaces both the Trust Bar and Testimonials.** Instead of fake social proof, sell the problem. This is the most effective pre-launch tactic — make the reader nod along with their pain before you show the solution.

```tsx
<section className="py-24 md:py-32">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">
      iGaming fraud is evolving faster than your team can keep up
    </h2>
    <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
      Bonus abuse. Multi-accounting. Phishing domains. Compliance deadlines. Your fraud team is drowning in alerts while threats slip through the cracks.
    </p>
  </div>

  {/* Pain point cards */}
  <div className="mx-auto mt-16 max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <svg className="w-6 h-6 text-red-500" ...><!-- AlertTriangle icon --></svg>
      </div>
      <h3 className="font-semibold text-text-dark">Manual Fraud Review</h3>
      <p className="mt-2 text-sm text-text-muted">
        Your team manually reviews flagged transactions, missing patterns that span across multiple accounts and sessions.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
        <svg className="w-6 h-6 text-orange-500" ...><!-- Clock icon --></svg>
      </div>
      <h3 className="font-semibold text-text-dark">Slow Response Times</h3>
      <p className="mt-2 text-sm text-text-muted">
        By the time a phishing domain is detected and reported, hundreds of players have already been exposed.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl border border-yellow-100 bg-yellow-50/50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
        <svg className="w-6 h-6 text-yellow-600" ...><!-- Code icon --></svg>
      </div>
      <h3 className="font-semibold text-text-dark">Engineering Bottleneck</h3>
      <p className="mt-2 text-sm text-text-muted">
        Every new detection rule requires engineering time. Your fraud team has ideas but no way to ship them.
      </p>
    </div>
  </div>

  {/* Transition line */}
  <div className="mt-16 text-center">
    <p className="text-lg font-medium text-brand-blue">
      What if your fraud team could deploy AI agents without writing a single line of code?
    </p>
  </div>
</section>
```

Use Lucide icons: `AlertTriangle`, `Clock`, `Code2` for the three cards.

**Design notes:**
- The warm-colored cards (red/orange/yellow) create visual contrast with the rest of the blue-themed page — they represent "problems" while the blue sections represent "solutions"
- The transition line at the bottom bridges directly into the Product Concept section
- Scroll animations: heading fades in first, then cards stagger in (150ms each), then transition line

---

## 5. PRODUCT CONCEPT (Crews → Agents → Skills → Tools)

Keep this section exactly as it is — it explains the solution architecture. It works well for both launched and pre-launch.

**Minor changes:**
- Increase h2 to `text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- Add connecting arrows between the 4 cards on desktop (dashed line + chevron between each)
- The bottom note "Describe your problem in plain English. DinoTrace builds the crew." is good — keep it

---

## 6. INTERACTIVE PRODUCT DEMO (NEW — replaces How It Works standalone)

Merge the "How It Works" content into an interactive tabbed demo section. This is more engaging than 3 static cards and better demonstrates the product.

```tsx
<section id="how-it-works" className="py-28 bg-bg-section">
  <div className="mx-auto max-w-6xl px-6">
    
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">
        From Problem to Production in Minutes
      </h2>
      <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
        No code. No configurations. Just conversation.
      </p>
    </div>

    {/* Tabbed interface */}
    <div className="mx-auto max-w-4xl">
      
      {/* Tab buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <button className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all
          {/* Active state */} bg-brand-blue text-white shadow-lg shadow-brand-blue/20
          {/* Inactive state */} bg-white text-text-body border border-border-light hover:border-brand-blue/30">
          <span className="text-lg">01</span>
          Describe
        </button>
        <button className="...">
          <span className="text-lg">02</span>
          Configure
        </button>
        <button className="...">
          <span className="text-lg">03</span>
          Deploy
        </button>
      </div>

      {/* Description text — changes with active tab */}
      <p className="text-center text-text-muted text-sm mb-6 max-w-lg mx-auto">
        {/* Tab 1: */} Tell DinoTrace what you need in plain language. "I want to detect bonus abuse across multiple accounts."
        {/* Tab 2: */} Our AI Agent Builder asks smart follow-up questions, extracts your business rules, and generates a complete crew configuration.
        {/* Tab 3: */} Your crew goes live. Agents work autonomously, report findings, and learn from feedback.
      </p>

      {/* Mock browser window */}
      <div className="rounded-2xl border border-border-light bg-white shadow-2xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-border-light">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="mx-auto text-xs text-text-muted font-mono">app.dinotrace.com</div>
        </div>
        
        {/* Content — swap images with crossfade based on active tab */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src="/images/step-describe.jpeg"  {/* or step-configure.jpeg or step-deploy.jpeg */}
            alt="DinoTrace Agent Builder"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  </div>
</section>
```

**Implementation notes:**
- Use React state to track active tab
- Crossfade between images using opacity transitions
- Auto-advance tabs every 5 seconds (with a subtle progress bar under each tab button)
- Pause auto-advance when user manually clicks a tab
- The tab buttons should have a small animated progress indicator (a thin line that fills over 5s under the active tab)

---

## 7. CREWS SHOWCASE

Keep this section but reframe the language slightly for pre-launch.

**Section header changes:**
```
Headline:    "What You Can Deploy"  (instead of "Meet the Crews")
Subheadline: "Agent crews built for iGaming — with more on the way."  (instead of "Purpose-built agent teams ready to deploy")
```

**Layout restructure — create clear hierarchy:**

**Row 1: Live Crews (featured, large cards)**
- 2 cards side by side
- Taller images (`h-56` instead of `h-44`)
- Green "Live" badge with pulse animation
- Add a subtle green left border: `border-l-4 border-l-brand-green`
- Full card hover effect: `hover:-translate-y-2 hover:shadow-xl`

**Divider:**
```tsx
<div className="my-12 flex items-center justify-center gap-4">
  <div className="h-px w-16 bg-border-light" />
  <span className="text-sm text-text-muted font-medium">Coming Soon</span>
  <div className="h-px w-16 bg-border-light" />
</div>
```

**Row 2: Coming Soon Crews (smaller, muted, 3-column)**
- 3 cards in a row
- Shorter images (`h-28`)
- Muted treatment: `opacity-50 grayscale` on images, `bg-white/60`, dashed border
- No hover effects, `pointer-events-none cursor-default`
- Remove agent tag pills from coming-soon cards — just title + one-line description

---

## 8. EARLY ACCESS CTA SECTION (replaces old CTA + adds email capture)

This is the most important change. Instead of just a "Book a Demo" button pointing to a mailto link, add a real email capture form. This is how you build a waitlist.

```tsx
<section id="early-access" className="relative overflow-hidden py-32">
  {/* Background image */}
  <img
    src="/images/cta-background.jpeg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-blue-900/50" />

  <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
    
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
      Ready to Deploy Your First Crew?
    </h2>
    <p className="mt-4 text-lg text-white/70 max-w-lg mx-auto">
      DinoTrace is now in early access. Request a spot and we'll get you set up with your first agent crew.
    </p>

    {/* Email capture form */}
    <div className="mt-10 mx-auto max-w-md">
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Enter your work email"
          className="flex-1 rounded-full px-6 py-4 text-sm text-text-dark bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50 placeholder:text-text-muted"
        />
        <button className="rounded-full bg-white text-brand-blue font-bold px-8 py-4 text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap">
          Request Access
        </button>
      </div>
      <p className="mt-4 text-xs text-white/40">
        No credit card required · We'll reach out within 24 hours
      </p>
    </div>

    {/* Alternative */}
    <p className="mt-8 text-white/50 text-sm">
      Prefer to chat? Email us at{' '}
      <a href="mailto:hello@dinotrace.com" className="underline underline-offset-4 decoration-white/30 hover:decoration-white/60 hover:text-white/80 transition-colors">
        hello@dinotrace.com
      </a>
    </p>
  </div>
</section>
```

**Implementation notes:**
- The email input + button should be on one line on desktop, stacked on mobile
- On submit, either:
  - Send to a real endpoint if you have one (Formspree, ConvertKit, your own API)
  - Or for now, just show a success state: replace the form with "Thanks! We'll be in touch soon. 🎉"
- Add a subtle glow behind the button:
  ```tsx
  <div className="relative inline-flex">
    <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg animate-pulse" />
    <button className="relative ...">Request Access</button>
  </div>
  ```

**Important: All "Book a Demo" references throughout the page should change to "Request Early Access" or "Get Early Access" and link to `#early-access` instead of `#demo`.**

Update these locations:
- Navbar CTA button
- Hero primary CTA
- The section id should be `early-access` instead of `demo`

---

## 9. FOOTER

Keep the existing footer structure but update:

- **Remove** any links that don't work yet (if Pricing, Blog, Careers, About pages don't exist, either remove them or mark as "Coming Soon" in muted text)
- **Add** social icons (LinkedIn, Twitter/X) with real links if available
- **Add** "Early Access" or "Request Access" as a prominent link in the Product column
- **Copyright:** Update to `© 2025 DinoTrace. All rights reserved.`

---

## SECTIONS TO COMPLETELY REMOVE

### ❌ Trust/Logos Bar
Remove the entire "Built for the world's leading iGaming operators" section with placeholder logos. This section actively hurts credibility because the logos are obviously fake.

### ❌ Testimonials Section
Remove the entire "What Operators Are Saying" section with the 3 fake testimonial cards. When you have real testimonials, add them back.

### ❌ Standalone How It Works
This is being merged into the Interactive Product Demo section (section 6). Remove the standalone 3-step grid section.

---

## TYPOGRAPHY (applies globally)

All section h2 headings:
```
text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark
```

All section subheadlines:
```
text-lg md:text-xl text-text-muted max-w-2xl mx-auto
```

---

## ANIMATIONS (applies globally)

Ensure framer-motion scroll animations are applied to:
- Every section heading (fade in + slide up)
- Cards within sections (staggered fade in, 100-150ms between each)
- The problem statement cards (staggered, 150ms)
- The product demo (fade in the mock browser)
- The early access form (fade in + slide up)
- The hero content (load animation, not scroll-triggered)

---

## FULL PAGE FLOW (final order)

```
┌─────────────────────────────────┐
│  Announcement Banner            │  "Now in Early Access — Fraud Detection & Anti-Phishing Crews are live."
├─────────────────────────────────┤
│  Navbar                         │  Logo · Features · How It Works · Crews · [Request Early Access]
├─────────────────────────────────┤
│  Hero (full viewport)           │  Video bg · "The Agent Factory for iGaming" · [Request Early Access] [See How It Works]
├─────────────────────────────────┤
│  Problem Statement              │  "iGaming fraud is evolving faster than your team can keep up" · 3 pain cards
├─────────────────────────────────┤
│  Product Concept                │  Crews → Agents → Skills → Tools (4 cards with arrows)
├─────────────────────────────────┤
│  Product Demo                   │  "From Problem to Production in Minutes" · Tabbed browser mockup
├─────────────────────────────────┤
│  Crews Showcase                 │  "What You Can Deploy" · 2 live cards (featured) + 3 coming soon (muted)
├─────────────────────────────────┤
│  Early Access CTA               │  Email capture form · "Request Access" · bg image
├─────────────────────────────────┤
│  Footer                        │  Logo · Product · Company · Legal · Socials
└─────────────────────────────────┘
```

---

## WHAT TO DO WITH EXISTING IMAGES

| Image | Keep / Remove | Notes |
|-------|--------------|-------|
| `hero-video.mp4` | ✅ Keep | Works perfectly |
| `hero-main.jpeg` | ✅ Keep | Video poster fallback |
| `bg-gradient-blobs.jpeg` | ✅ Keep | Hero decorative bg (optional) |
| `concept-crews.jpeg` | ✅ Keep | Product Concept section |
| `concept-agents.jpeg` | ✅ Keep | Product Concept section |
| `concept-skills.jpeg` | ✅ Keep | Product Concept section |
| `concept-tools.jpeg` | ✅ Keep | Product Concept section |
| `crew-fraud-detection.jpeg` | ✅ Keep | Crews Showcase |
| `crew-anti-phishing.jpeg` | ✅ Keep | Crews Showcase |
| `crew-marketing.jpeg` | ✅ Keep | Crews Showcase (coming soon) |
| `crew-customer-service.jpeg` | ✅ Keep | Crews Showcase (coming soon) |
| `crew-custom.jpeg` | ✅ Keep | Crews Showcase (coming soon) |
| `step-describe.jpeg` | ✅ Keep | Product Demo tabbed section |
| `step-configure.jpeg` | ✅ Keep | Product Demo tabbed section |
| `step-deploy.jpeg` | ✅ Keep | Product Demo tabbed section |
| `cta-background.jpeg` | ✅ Keep | Early Access CTA background |

All images are kept. No new images needed.

---

## IMAGE SUGGESTION: Consider Replacing

While all images work, if you want to take it to the next level, consider regenerating **one new image** for the Problem Statement section — a dark, moody illustration showing:

> `A stressed operator at a desk surrounded by floating red alert notifications, suspicious transaction cards, and phishing domain warnings piling up. Dark moody atmosphere with red and orange warning colors. The operator looks overwhelmed. Isometric 3D style matching the DinoTrace robot aesthetic but with a more dramatic, problem-focused mood. Dark background.`

This would make the problem section feel viscerally real. But it's optional — the section works fine with just icons.

---

## PRIORITY ORDER

1. **Remove fake sections** (trust bar, testimonials) — instant credibility improvement
2. **Add Problem Statement section** — sells the pain before the solution
3. **Reframe all CTAs** to "Request Early Access" with email capture
4. **Add Announcement Banner** — signals momentum
5. **Merge How It Works into Product Demo** — interactive tabbed showcase
6. **Restructure Crews** — live vs coming-soon hierarchy
7. **Typography upgrade** — bigger h2s across all sections
8. **Polish** — animations, spacing, footer cleanup

---

## CRITICAL TEXT CHANGES SUMMARY

| Location | Current Text | New Text |
|----------|-------------|----------|
| Navbar CTA | Book a Demo | Request Early Access |
| Hero badge | AI-Powered Agent Orchestration | Early Access — Now Live |
| Hero subheadline | Deploy intelligent agent crews that detect fraud, ensure compliance, and automate operations — through conversation, not code. | Deploy autonomous AI agent crews that protect your platform — through conversation, not code. Now in early access. |
| Hero primary CTA | Book a Demo | Request Early Access |
| Hero CTA link | #demo | #early-access |
| Crews heading | Meet the Crews | What You Can Deploy |
| Crews subheading | Purpose-built agent teams ready to deploy | Agent crews built for iGaming — with more on the way |
| CTA section heading | Ready to Build Your First Crew? | Ready to Deploy Your First Crew? |
| CTA section subheadline | See DinoTrace in action. Book a personalized demo with our team. | DinoTrace is now in early access. Request a spot and we'll get you set up with your first agent crew. |
| CTA button | Book a Demo | Request Access |
| CTA section id | demo | early-access |
| All href="#demo" | #demo | #early-access |