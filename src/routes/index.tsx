import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Eye,
  Search,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import { AvatarCta } from "@/components/pearl/AvatarCta";
import { Blobs } from "@/components/pearl/Blobs";
import { TopNav } from "@/components/pearl/TopNav";
import { LogoMarquee } from "@/components/pearl/Marquee";
import { StepCard } from "@/components/pearl/StepCard";
import {
  Bezel,
  BracketChip,
  DotGrid,
  Eyebrow,
  PlaceholderSlot,
  Reveal,
} from "@/components/pearl/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl 27 — Control what AI says about your brand" },
      {
        name: "description",
        content:
          "Pearl 27 diagnoses how your brand is represented across ChatGPT, Perplexity and Gemini, fixes it with certified experts, and proves the change with real measurement.",
      },
      { property: "og:title", content: "Pearl 27 — Control what AI says about your brand" },
      {
        property: "og:description",
        content:
          "AI-era discoverability: diagnose, fix and measure how AI engines represent your brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tagChips = [
  {
    label: "Diagnose",
    icon: Search,
    bg: "bg-chip-1/15",
    fg: "text-chip-1",
    pos: "left-0 top-2 sm:left-6",
  },
  {
    label: "Fix",
    icon: Wrench,
    bg: "bg-chip-2/15",
    fg: "text-chip-2",
    pos: "right-2 top-10 sm:right-16",
  },
  {
    label: "Measure",
    icon: BarChart3,
    bg: "bg-chip-3/15",
    fg: "text-chip-3",
    pos: "left-4 bottom-6 sm:left-20",
  },
  {
    label: "Certified Experts",
    icon: BadgeCheck,
    bg: "bg-chip-4/15",
    fg: "text-chip-4",
    pos: "right-0 bottom-2 sm:right-10",
  },
  {
    label: "Real Measurement",
    icon: Activity,
    bg: "bg-chip-2/15",
    fg: "text-chip-2",
    pos: "left-1/2 -top-2 -translate-x-1/2",
  },
  {
    label: "AI Visibility",
    icon: Eye,
    bg: "bg-chip-1/15",
    fg: "text-chip-1",
    pos: "left-1/2 -bottom-4 -translate-x-1/2",
  },
];


function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-x-hidden pt-16">
      {/* HERO */}
      <section className="relative px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28">
        <Blobs />
        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow>AI-era discoverability</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Control what <span className="font-medium text-soft">AI</span> says about your{" "}
              <span className="text-foreground">brand.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
              People used to Google you. Now they ask an AI. Pearl 27 diagnoses how you're
              represented across ChatGPT, Perplexity, and Gemini — then puts certified experts to
              work fixing it, and proves the change with real measurement.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <AvatarCta />
              <a
                href="#how-it-works"
                className="text-sm font-medium text-soft underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-foreground"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={320} className="mt-16">
            <Bezel innerClassName="flex flex-wrap items-center justify-between gap-8 p-6 sm:p-10">
              <div className="min-w-0 max-w-md">
                <Eyebrow>Asked and answered</Eyebrow>
                <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
                  "Is <span className="text-soft">[your brand]</span> any good?"
                </p>
                <p className="mt-3 text-sm text-soft">
                  One answer. No ten blue links. Whatever the model believes is what your buyer
                  hears.
                </p>
              </div>
              <DotGrid rows={5} cols={9} className="shrink-0" />
            </Bezel>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT */}
      <Section>
        <Reveal>
          <Eyebrow>The shift</Eyebrow>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal delay={80}>
            <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-5xl">
              Search became a conversation.{" "}
              <span className="font-medium text-soft">
                Most brands are still optimizing for the old one.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <Bezel>
              <p className="text-soft">
                AI models synthesize one answer instead of returning ten links. If a brand's picture
                is thin, outdated, or wrong, that's what gets confidently told to everyone who asks.
              </p>
              <p className="mt-4 text-soft">
                Most companies have no system for shaping that answer — no diagnosis, no correction
                work, no measurement.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <BracketChip muted>Thin</BracketChip>
                <BracketChip muted>Outdated</BracketChip>
                <BracketChip>Misrepresented</BracketChip>
              </div>
            </Bezel>
          </Reveal>
        </div>
      </Section>

      {/* TAG CLOUD */}
      <Section>
        <div className="relative mx-auto max-w-3xl px-2 py-16 sm:py-24">
          <Blobs className="opacity-70" />
          <Reveal className="relative">
            <p className="mx-auto max-w-2xl text-center font-display text-2xl font-bold leading-snug sm:text-4xl">
              We help brands control the story{" "}
              <span className="font-medium text-soft">AI tells about them.</span>
            </p>
          </Reveal>
          {tagChips.map((chip, i) => (
            <Reveal
              key={chip.label}
              delay={100 + i * 70}
              className={`absolute ${chip.pos} hidden sm:block`}
            >
              <span className="flex items-center gap-2 rounded-full border border-border bg-card py-2 pl-2 pr-4 text-sm shadow-bezel">
                <span className={`grid size-7 place-items-center rounded-full ${chip.bg}`}>
                  <chip.icon className={`size-3.5 ${chip.fg}`} />
                </span>
                {chip.label}
              </span>
            </Reveal>
          ))}
          <div className="relative mt-8 flex flex-wrap justify-center gap-2 sm:hidden">
            {tagChips.map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3 text-xs"
              >
                <span className={`grid size-6 place-items-center rounded-full ${chip.bg}`}>
                  <chip.icon className={`size-3 ${chip.fg}`} />
                </span>
                {chip.label}
              </span>

            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <Reveal>
          <Eyebrow>The system</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Diagnose. <span className="font-medium text-soft">Fix.</span> Measure.
          </h2>
        </Reveal>
        <div className="mt-12 space-y-6">
          {[
            {
              number: "01",
              title: "Diagnose",
              description:
                "We audit how your brand actually shows up across the major AI engines — where you're missing, outdated, or getting misrepresented.",
              details: [
                "Full AI visibility audit",
                "Competitor benchmark",
                "Misrepresentation report",
              ],
            },
            {
              number: "02",
              title: "Fix",
              description:
                "Certified experts and our Drummer network build accurate, authentic presence in the real conversations AI models learn from.",
              details: [
                "Certified expert execution",
                "Drummer network activation",
                "Content & source correction",
              ],
            },
            {
              number: "03",
              title: "Measure",
              description:
                "We track what AI says about you over time, so you can see the change happen.",
              details: [
                "Ongoing AI visibility tracking",
                "Monthly reporting",
                "Trend dashboards",
              ],
            },
          ].map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <StepCard {...step} reversed={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <Reveal>
          <Eyebrow>What's included</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-3xl font-extrabold sm:text-5xl">
            Built as a system, <span className="font-medium text-soft">not a one-off audit.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "AI Visibility Audit",
              body: "Full diagnostic across the major AI engines — what they say, what they miss, what they get wrong.",
              icon: Search,
            },
            {
              n: "02",
              title: "Execution & Correction",
              body: "Certified experts plus our Drummer network build accurate presence where models actually learn.",
              icon: Wrench,
            },
            {
              n: "03",
              title: "Ongoing Monitoring",
              body: "Continuous tracking and regular reports, so the change is visible instead of assumed.",
              icon: BarChart3,
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <Bezel className="h-full">
                <div className="flex h-full flex-col">
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-soft">
                    {s.n}
                  </span>
                  <span className="mt-5 grid size-11 place-items-center rounded-xl bg-inset">
                    <s.icon className="size-4" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-soft">{s.body}</p>
                  <DotGrid rows={2} cols={6} className="mt-7 opacity-70" />
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section id="why">
        <Reveal>
          <Eyebrow>Why Pearl 27</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-extrabold sm:text-5xl">
            Not SEO. Not influencer marketing.{" "}
            <span className="font-medium text-soft">A new kind of signal.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <Bezel innerClassName="p-6 sm:p-10">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-inset px-4 py-2 text-sm text-soft line-through">
                <X className="size-3.5 shrink-0 no-underline" />
                Backlink schemes
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-inset px-4 py-2 text-sm text-soft line-through">
                <X className="size-3.5 shrink-0" />
                Paid influencer posts
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <BadgeCheck className="size-3.5 shrink-0" />
                Certified human network
              </span>
            </div>
            <p className="mt-8 max-w-2xl text-soft">
              Drummers are certified people who build real, authentic presence for a brand in the
              conversations AI models are actually trained on — not sponsored posts, not keyword
              stuffing.
            </p>
          </Bezel>
        </Reveal>
      </Section>

      {/* BENTO STATS */}
      <Section>
        <Reveal>
          <Eyebrow>How we're built</Eyebrow>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Bezel className="h-full">
              <span className="grid size-11 place-items-center rounded-xl bg-inset">
                <BadgeCheck className="size-4" />
              </span>
              <p className="mt-6 font-display text-2xl font-extrabold leading-tight">
                Certified Expert Network
              </p>
              <p className="mt-3 text-sm text-soft">
                Vetted, trained people doing the correction work — not automated spam.
              </p>
            </Bezel>
          </Reveal>
          <Reveal delay={90}>
            <Bezel className="h-full">
              <span className="grid size-11 place-items-center rounded-xl bg-inset">
                <Sparkles className="size-4" />
              </span>
              <p className="mt-6 font-display text-2xl font-extrabold leading-tight">
                Built for the AI-search shift
              </p>
              <p className="mt-3 text-sm text-soft">
                Designed around how models synthesize answers, not how crawlers rank pages.
              </p>
            </Bezel>
          </Reveal>
          <Reveal delay={180}>
            <Bezel className="h-full">
              <span className="grid size-11 place-items-center rounded-xl bg-inset">
                <Activity className="size-4" />
              </span>
              <p className="mt-6 font-display text-2xl font-extrabold leading-tight">
                Ongoing Measurement
              </p>
              <p className="mt-3 text-sm text-soft">
                Visibility tracked over time so progress is observed, not claimed.
              </p>
            </Bezel>
          </Reveal>
          <Reveal delay={240} className="lg:col-span-3">
            <Bezel innerClassName="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.5fr_auto] md:items-center">
              <div className="min-w-0">
                <Eyebrow>The engagement</Eyebrow>
                <p className="mt-4 max-w-2xl font-display text-xl font-bold leading-snug sm:text-2xl">
                  A diagnosis, a fix, and a measurement loop —{" "}
                  <span className="font-medium text-soft">
                    running continuously as the models keep learning.
                  </span>
                </p>
              </div>
              <div className="rounded-2xl bg-inset p-6">
                <DotGrid rows={4} cols={6} triangular />
              </div>
            </Bezel>
          </Reveal>
        </div>
      </Section>

      {/* PROOF */}
      <Section id="proof">
        <Reveal>
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Case studies, <span className="font-medium text-soft">on request.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <Bezel innerClassName="p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <PlaceholderSlot label="Add photo" className="size-28 shrink-0 rounded-2xl" />
              <div className="min-w-0">
                <PlaceholderSlot
                  label="Client result — add case study here"
                  className="items-start p-8 text-left"
                >
                  <p className="font-display text-lg font-bold text-soft sm:text-2xl">
                    Add client testimonial
                  </p>
                </PlaceholderSlot>
                <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-soft">
                  Name — Role, Company
                </p>
              </div>
            </div>
          </Bezel>
        </Reveal>
        <Reveal delay={200} className="mt-8">
          <Bezel innerClassName="p-4 sm:p-6">
            <p className="mb-4 px-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-soft">
              Client logos — placeholder
            </p>
            <LogoMarquee />
          </Bezel>
        </Reveal>
      </Section>

      {/* FREE VALUE */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "AI Visibility Snapshot",
              body: "A free 15-min look at how your brand currently shows up across major AI engines.",
            },
            {
              title: "Positioning Review",
              body: "A quick review of how clearly your brand's story comes across, no commitment.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Bezel className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <span className="mt-1 size-2.5 rounded-full bg-chip-1" />
                  <span className="rounded-full bg-primary px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-primary-foreground">
                    Free
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm text-soft">{c.body}</p>
                <a
                  href="#book"
                  className="mt-6 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-soft underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Request it
                </a>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section id="book" className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 sm:py-32">
        <Blobs className="opacity-40" />
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-muted">
              Book an audit
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] text-ink-foreground sm:text-5xl">
              Your brand already has a signal.{" "}
              <span className="font-medium text-ink-muted">
                Let's find out what it's saying.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <AvatarCta onDark />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden px-5 pt-20 pb-16 sm:px-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[22vw] font-extrabold leading-none text-foreground/[0.05]"
        >
          Pearl 27
        </span>
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <p className="font-display text-xl font-extrabold">Pearl 27</p>
              <p className="mt-2 max-w-xs text-sm text-soft">
                AI-era discoverability for brands that want a say in the answer.
              </p>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
              {[
                { href: "#how-it-works", label: "How it works" },
                { href: "#services", label: "Services" },
                { href: "#why", label: "Why Pearl 27" },
                { href: "#proof", label: "Proof" },
                { href: "#book", label: "Contact" },
                { href: "#drummers", label: "Careers · Drummers" },
                { href: "#privacy", label: "Privacy" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-soft transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-16 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-soft">
            © 2026 Pearl 27 · Lehi, Utah
          </p>
        </div>
      </footer>

    </main>
    </>
  );
}
