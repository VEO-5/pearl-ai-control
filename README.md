# Pearl 27 Launchpad

Build a marketing website for "Pearl 27" — a B2B service that helps brands control how they're represented by AI systems (ChatGPT, Perplexity, Gemini) — "AI-era discoverability" / GEO. Primary audience: marketing/brand leaders at companies (buyers), NOT their "Drummers" talent network (that's a secondary footer/careers link only). Primary conversion goal: "Book an audit" (a call).

STACK: Default Lovable stack (React + Tailwind + shadcn/ui). Single-page marketing site, fully responsive, smooth scroll-reveal animations (respect prefers-reduced-motion), light/dark mode toggle in the nav.

=== DESIGN SYSTEM (blend two reference sites — follow this precisely) ===

COLOR PALETTE (light mode):
- Background: soft lavender-gray, almost periwinkle, NOT pure white (~#ECEDF5)
- Cards: nested "bezel" style — an outer shell slightly darker than bg (~#E3E4EF), containing an inner near-white card (~#FAFAFB) with generous padding, soft rounded corners (16-20px), subtle shadow
- Text: headline color is dark navy-black with blue undertone (~#14152B); body/secondary text is muted slate-lavender gray (~#6E7191) — never pure black or pure gray
- Accent: minimal color. Soft pastel gradient blobs (blue/mint/lilac glow, low opacity) as ambient background texture behind hero and CTA sections. One full-bleed near-black section for the closing CTA, for contrast.
- Buttons: solid black pills as primary CTA
- Dark mode: invert to near-black backgrounds (~#0B0B12) with the same nested-card bezel logic in dark grays, pastel blobs become deeper jewel tones

TYPOGRAPHY:
- Headlines: a rounded, soft-terminal geometric sans (Switzer/General Sans/Plus Jakarta Sans style), big and confident. Mix weight/color within the same headline line (part bold dark, part lighter gray) for emphasis instead of changing size.
- Body: clean humanist sans, comfortable line-height
- Eyebrow/label text: uppercase, letter-spaced, monospace font (JetBrains Mono style), flanked by small crosshair/dot dingbat icons, used as a section marker above every major heading

SIGNATURE COMPONENTS TO BUILD (reusable):
1. Floating bottom-center dock nav — NOT a top bar. A pill-shaped bar fixed near the bottom of the viewport containing: theme toggle (sun/moon icon), nav links (Our work / Why us / What we do style — adapt labels to Pearl 27's sections), and the primary CTA button, all inside one rounded capsule with a soft shadow.
2. Avatar CTA button — primary button is a black pill containing a small circular photo/avatar on the left + two-line text (bold primary label e.g. "Book an audit", smaller gray subtext e.g. "15-min call, no deck"). Use a placeholder avatar circle (initials or generic icon) since we don't have a real photo yet.
3. Dot-grid texture — clusters of small gray dots (grid or triangular arrangement) filling empty space inside cards as quiet decoration.
4. Numbered step cards — big square number badge (01/02/03) in a soft inset tile, headline, muted description, thin divider, then an expandable "SEE PROCESS + DETAILS" toggle that reveals a sub-list of tasks. Optional tilted image/mockup collage on the right (use placeholder blocks).
5. Bento stat grid — asymmetric grid mixing big-number stat tiles with a wider descriptive card that has its own dot-pattern side panel.
6. Single testimonial spotlight — one big pull-quote at a time (not italicized), small thumbnail beside it, name/role below. Since we don't have real client testimonials yet, build the component but populate it with clearly-labeled placeholder slots (dashed border, "Add client testimonial" placeholder text) rather than fake quotes.
7. Corner-bracket UI chips — small tag/label elements framed with thin corner brackets, viewfinder-style.
8. Floating scattered tag chips — small colorful pill chips with icons (like "Diagnose", "Fix", "Measure" or service names) loosely scattered around a center statement, each with a small colored icon circle.
9. Numbered/rotated stacked process cards (alternate step visual) — 3 cards slightly rotated/overlapping with hand-drawn-style curved connector lines between them, for a "how it works" moment if distinct from component #4.
10. Giant faded wordmark — "Pearl 27" rendered huge and very low-opacity as background texture behind the footer content.
11. Twin "free value" cards — small dot-icon + title + black "FREE"-style badge + short description, side by side, as low-commitment secondary CTAs.
12. Logo/trust marquee — auto-scrolling row placeholder for future client logos (build the component, populate with generic placeholder logo blocks marked as placeholders).

=== PAGE STRUCTURE / COPY ===

1. HERO
Eyebrow: "AI-ERA DISCOVERABILITY"
Headline (mixed weight): "Control what AI says about your brand." (make "AI" pop with lighter/accent treatment)
Subhead: "People used to Google you. Now they ask an AI. Pearl 27 diagnoses how you're represented across ChatGPT, Perplexity, and Gemini — then puts certified experts to work fixing it, and proves the change with real measurement."
Primary CTA (avatar button): "Book an audit" / "15-min call, no deck"
Secondary link: "See how it works"
Background: pastel gradient blobs, ambient

2. THE SHIFT (problem)
Eyebrow: "THE SHIFT"
Heading: "Search became a conversation. Most brands are still optimizing for the old one."
Body: AI models synthesize one answer instead of returning ten links — if a brand's picture is thin, outdated, or wrong, that's what gets confidently told to everyone who asks. Most companies have no system for shaping that answer.

3. FLOATING TAG CLOUD MOMENT (Hanzo-style)
Center statement: "We help brands control the story AI tells about them."
Scattered chips around it: "Diagnose", "Fix", "Measure", "Certified Experts", "Real Measurement", "AI Visibility" — each with a small icon

4. HOW IT WORKS — use the numbered step cards component (#4) with expandable details
Eyebrow: "THE SYSTEM"
Heading: "Diagnose. Fix. Measure."
Step 01 — Diagnose: "We audit how your brand actually shows up across the major AI engines — where you're missing, outdated, or getting misrepresented." Expandable details: Full AI visibility audit, Competitor benchmark, Misrepresentation report
Step 02 — Fix: "Certified experts and our Drummer network build accurate, authentic presence in the real conversations AI models learn from." Expandable details: Certified expert execution, Drummer network activation, Content & source correction
Step 03 — Measure: "We track what AI says about you over time, so you can see the change happen." Expandable details: Ongoing AI visibility tracking, Monthly reporting, Trend dashboards

5. SERVICES — bento-style or clean row layout
Eyebrow: "WHAT'S INCLUDED"
Heading: "Built as a system, not a one-off audit."
01 AI Visibility Audit — full diagnostic across major AI engines
02 Execution & Correction — certified experts + Drummers build accurate presence
03 Ongoing Monitoring & Reporting — continuous tracking, regular reports

6. WHY PEARL 27 (differentiator)
Eyebrow: "WHY PEARL 27"
Heading: "Not SEO. Not influencer marketing. A new kind of signal."
Comparison chips: "Backlink schemes" (crossed out) / "Paid influencer posts" (crossed out) / "Certified human network" (active/highlighted)
Body: Drummers are certified people who build real, authentic presence for a brand in the conversations AI models are actually trained on — not sponsored posts, not keyword stuffing.

7. BENTO STATS SECTION (Jords-style) — use placeholder-appropriate stats since we don't have real client data yet: frame these as capability statements rather than fabricated numbers, e.g. "Certified Expert Network", "Built for the AI-search shift", "Ongoing Measurement" as qualitative stat-style tiles rather than invented percentages. Do NOT invent fake client metrics.

8. PROOF / TESTIMONIALS
Eyebrow: "RESULTS"
Heading: "Case studies, on request."
Use the testimonial spotlight component with clearly labeled placeholder slots (not fake quotes) — "Client result — add case study here" — plus the logo marquee placeholder row.

9. TWIN FREE-VALUE CARDS
"AI Visibility Snapshot — FREE — A free 15-min look at how your brand currently shows up across major AI engines."
"Positioning Review — FREE — A quick review of how clearly your brand's story comes across, no commitment."

10. FINAL CTA — full-bleed near-black section
Heading: "Your brand already has a signal. Let's find out what it's saying."
Avatar CTA button: "Book an audit"

11. FOOTER
Giant faded "Pearl 27" wordmark background
Links: How it works, Services, Why Pearl 27, Proof, Careers · Drummers, Contact, Privacy
"© 2026 Pearl 27 · Lehi, Utah"

=== IMPORTANT CONSTRAINTS ===
- Do not fabricate fake client names, testimonials, logos, or statistics — use clearly-marked placeholder states for anything we don't have real data for yet (dashed borders, "Add ___ here" labels)
- Keep motion tasteful and scroll-triggered, not constant/looping distraction
- Fully responsive down to mobile (the bottom dock nav should collapse sensibly on small screens)
- Accessible: visible focus states, respects prefers-reduced-motion, sufficient contrast in both light and dark mode

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c67852e-a333-42ad-892f-4788c6ac1e36).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
