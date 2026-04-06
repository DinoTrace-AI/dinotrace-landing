# DinoTrace Landing Page — Final Fixes

The page is in strong shape. These are the remaining issues — mostly quick text and state fixes.

---

## FIX 1: "Trusted by iGaming operators worldwide" — MISLEADING (Critical)

The hero bottom line says:
```
"Trusted by iGaming operators worldwide · No code required · Deploy in under 60 minutes"
```

**This is a lie.** DinoTrace just launched. No operators are using it worldwide yet. If a potential customer Googles DinoTrace and finds zero references, this line destroys all credibility.

**Change to:**
```
"Built for iGaming operators · No code required · Deploy in under 60 minutes"
```

"Built for" is a positioning statement (true). "Trusted by" is a social proof claim (false). One word makes the difference between honest marketing and getting caught.

---

## FIX 2: Demo Section — Wrong Tab Active by Default

The Product Demo section ("From Problem to Production in Minutes") currently shows **Tab 3 "Deploy" as active** on page load. The description text showing is: "Your crew goes live. Agents work autonomously..."

**This should default to Tab 1 "Describe."** The user journey starts with describing a problem — that's the hook. Showing the deployment screen first skips the story.

**Fix:** In the component state initialization, set the default active tab index to `0` (Describe), not `2` (Deploy):
```tsx
const [activeTab, setActiveTab] = useState(0);
```

---

## FIX 3: Feature Images May Not Match New Benefit Labels

The "What Makes DinoTrace Different" section now has benefit-driven labels:
- Tell, Don't Build
- Agents That Learn
- One Platform, Every Use Case
- Live in Minutes

But the images are the old concept images (concept-crews.jpeg, concept-agents.jpeg, etc.) which were designed for the architecture labels (Crews, Agents, Skills, Tools).

**Check if the images still visually match the new labels.** If the images feel disconnected:
- "Tell, Don't Build" → should show a chat/conversation visual (step-describe.jpeg might work better)
- "Agents That Learn" → concept-agents.jpeg works (robot examining data)
- "One Platform, Every Use Case" → concept-crews.jpeg works (robots in formation = unified platform)
- "Live in Minutes" → concept-tools.jpeg works (tools connecting = fast deployment)

Or simply keep the current images if they look cohesive — the benefit of abstract 3D illustrations is they're flexible enough to match different labels. Only swap if something feels obviously wrong.

---

## FIX 4: Credibility Section — Strengthen the Copy

The current credibility section reads:
```
"Built by a team with deep iGaming expertise"
"10+ years consolidated experience in iGaming · Multi-jurisdiction experience"
"Security-first architecture · GDPR Ready · Data encrypted at rest and in transit"
```

**"10+ years consolidated experience"** sounds awkward — "consolidated" is unnecessary and weakens the claim. Also, if the founding team collectively has more years, use a bigger number.

**Change to:**
```
"Built by a team with deep iGaming expertise"
"10+ years in iGaming operations · Multi-jurisdiction experience"
"Security-first architecture · GDPR ready · End-to-end encryption"
```

Shorter, stronger. "End-to-end encryption" reads better than "Data encrypted at rest and in transit" for a non-technical audience.

---

## FIX 5: Page Length — Still 6240px (Trim the Fat)

The page is 6240px (~5.5 screens). For a pre-launch page with limited content, aim for ~4500-5000px (4-4.5 screens). A tighter page communicates confidence — you don't need to over-explain when the product is strong.

**Where to trim:**

| Section | Current Height | Target | How |
|---------|---------------|--------|-----|
| Problem Statement | 854px | ~650px | Reduce section padding from `py-24` to `py-16`. Reduce gap between heading and cards from `mt-16` to `mt-10`. |
| How It Works (Demo) | 1084px | ~800px | Reduce browser mockup content height. Constrain image to `max-h-[320px]`. Reduce section padding to `py-20`. |
| Crews | 1185px | ~900px | Reduce coming-soon card image height to `h-20`. Reduce section padding to `py-20`. Tighten gap between live and coming-soon rows. |

These padding reductions alone should save ~500-700px.

---

## FIX 6: Footer — Remove Dead Links

The footer has:
- "Blog (Coming Soon)"
- "Careers (Coming Soon)"

**Remove these entirely.** Having "(Coming Soon)" links in a footer looks unfinished. Only list pages that actually exist. When the blog and careers pages launch, add them back.

Keep: Request Early Access, Fraud Detection Crew, Anti-Phishing Crew, Agent Builder, About Us, Contact, Privacy Policy, Terms of Service, Security.

---

## FIX 7: Transition Text Could Be Stronger

The transition line between the problem section and features currently reads:
```
"What if you could deploy intelligent AI agents for any operational challenge — without writing a single line of code?"
```

This is good but reads like a rhetorical question that's been done a thousand times. Make it a confident statement instead:

**Change to:**
```
"DinoTrace lets you deploy AI agents for any operational challenge — without writing a single line of code."
```

Confident. Direct. Not a question. This is what strong brands do.

---

## FIX 8: Demo Section Caption Consistency

The demo section currently shows a caption on Tab 3: "Your agents are live and monitoring in real-time". Ensure all three tabs have matching captions overlaid on or below their images:

- Tab 1 (Describe): "Chat with DinoTrace to describe your detection needs"
- Tab 2 (Configure): "AI auto-generates your agent configuration"
- Tab 3 (Deploy): "Your agents are live and monitoring in real-time" (already exists)

---

## PRIORITY ORDER

1. **Fix "Trusted by" → "Built for"** — credibility issue, takes 5 seconds
2. **Fix demo default tab** → set to Tab 1 — takes 5 seconds
3. **Remove dead footer links** — takes 30 seconds
4. **Trim page height** — padding reductions, ~15 minutes
5. **Strengthen credibility copy** — 2 minutes
6. **Fix transition text** — 1 minute
7. **Add demo captions** — 10 minutes
8. **Review feature images** — 5 minutes
