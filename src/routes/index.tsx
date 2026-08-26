import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getCalApi } from "@calcom/embed-react";
import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Eye,
  Fingerprint,
  Gauge,
  Network,
  Radar,
  ScanSearch,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import { AvatarCta } from "@/components/pearl/AvatarCta";
import { Blobs } from "@/components/pearl/Blobs";
import { TopNav } from "@/components/pearl/TopNav";
import { Pearl27Logo } from "@/components/pearl/Pearl27Logo";
import { FaqSection } from "@/components/pearl/FaqSection";
import { AiEngineBadges } from "@/components/pearl/AiEngineBadges";
import { InlineAiBadge } from "@/components/pearl/InlineAiBadge";
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
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        styles: { branding: { brandColor: "#0f172a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <TopNav />
      <main className="relative overflow-x-hidden pt-16">
        {/* HERO */}
        <section id="top" className="relative px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28">
          <div className="relative mx-auto w-full max-w-6xl flex flex-col items-center text-center">
            <Reveal>
              <Eyebrow>AI-era discoverability</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.15] sm:text-6xl lg:text-7xl">
                Control what <InlineAiBadge /> <span className="font-medium text-soft">AI</span>{" "}
                says about your <span className="text-foreground">brand.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
                Every day, buyers ask AI about your brand. We make sure the answer they get is the
                right one.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
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
                  <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
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
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-5xl">
                Search became a conversation.{" "}
                <span className="font-medium text-soft">
                  Most brands are still optimizing for the old one.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <Bezel>
                <p className="text-soft">
                  AI models synthesize one answer instead of returning ten links. If a brand's
                  picture is thin, outdated, or wrong, that's what gets confidently told to everyone
                  who asks.
                </p>
                <p className="mt-4 text-soft">
                  Most companies have no system for shaping that answer — no diagnosis, no
                  correction work, no measurement.
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

        {/* BRAND STORY / TAG CLOUD */}
        <Section className="overflow-visible py-20 sm:py-32">
          <div className="relative mx-auto max-w-5xl px-4 py-12 sm:py-20">
            {/* Main Headline */}
            <Reveal delay={80} className="relative z-10 my-8 sm:my-12">
              <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-semibold leading-[1.2] text-foreground sm:text-4xl lg:text-5xl tracking-tight">
                We help brands control the story{" "}
                <span className="block sm:inline text-foreground">AI tells about them.</span>
              </h2>
            </Reveal>

            {/* Desktop Floating Badges (Matching Reference Double-Capsule Halo Borders) */}
            <div className="hidden lg:block">
              {/* Top Left - Diagnose */}
              <Reveal delay={120} className="absolute left-[1%] top-[28%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 -rotate-6">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <ScanSearch className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      Diagnose
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Middle Left - AI Visibility */}
              <Reveal delay={180} className="absolute left-[3%] top-[54%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 rotate-6">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <Radar className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      AI Visibility
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Bottom Left - Real Measurement */}
              <Reveal delay={240} className="absolute left-[5%] top-[78%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 -rotate-5">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <Gauge className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      Real Measurement
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Top Right - Fix */}
              <Reveal delay={150} className="absolute right-[2%] top-[24%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 -rotate-6">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <ShieldCheck className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      Fix
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Middle Right - Certified Experts */}
              <Reveal delay={210} className="absolute right-[0%] top-[50%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 -rotate-2">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <Fingerprint className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      Certified Experts
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Bottom Right - Drummer Network */}
              <Reveal delay={270} className="absolute right-[3%] top-[74%] z-20">
                <div className="rounded-full bg-white/50 p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md border border-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 -rotate-6">
                  <div className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                    <span className="grid size-7.5 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <Network className="size-3.5" />
                    </span>
                    <span className="font-sans text-xs font-medium text-slate-900 tracking-tight">
                      Drummer Network
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Mobile / Tablet Badges */}
            <div className="relative mt-8 flex flex-wrap justify-center gap-2.5 lg:hidden">
              {[
                { label: "Diagnose", icon: ScanSearch, rotate: "-rotate-3" },
                { label: "AI Visibility", icon: Radar, rotate: "rotate-2" },
                { label: "Real Measurement", icon: Gauge, rotate: "-rotate-2" },
                { label: "Fix", icon: ShieldCheck, rotate: "-rotate-3" },
                { label: "Certified Experts", icon: Fingerprint, rotate: "-rotate-1" },
                { label: "Drummer Network", icon: Network, rotate: "-rotate-3" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-full bg-white/50 p-[3.5px] border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ${chip.rotate}`}
                >
                  <span className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3 text-[0.6875rem] font-medium text-slate-900">
                    <span className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0066A2] to-[#00426B] text-white shadow-[0_4px_12px_rgba(0,66,107,0.35)]">
                      <chip.icon className="size-3" />
                    </span>
                    {chip.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section id="how-it-works">
          <Reveal>
            <Eyebrow>The system</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
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
            <h2 className="mt-6 max-w-2xl text-3xl font-semibold sm:text-5xl">
              Built as a system, <span className="font-medium text-soft">not a one-off audit.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-3 max-w-5xl">
            {[
              {
                n: "01",
                title: "AI Visibility Audit",
                body: "Full diagnostic across the major AI engines — what they say, what they miss, what they get wrong.",
                renderIcon: () => (
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12 transition-transform duration-300 group-hover:scale-105">
                    <defs>
                      <linearGradient id="audit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="60%" stopColor="#0066A2" />
                        <stop offset="100%" stopColor="#00426B" />
                      </linearGradient>
                      <linearGradient id="audit-grad-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>
                    <rect width="48" height="48" rx="12" fill="#E0F2FE" />
                    <circle cx="21" cy="21" r="11" fill="url(#audit-grad-1)" />
                    <circle cx="21" cy="21" r="5.5" fill="#E0F2FE" />
                    <circle cx="21" cy="21" r="2.5" fill="url(#audit-grad-glow)" />
                    <rect x="28.5" y="27" width="13" height="5" rx="2.5" transform="rotate(45 28.5 27)" fill="url(#audit-grad-1)" />
                  </svg>
                ),
              },
              {
                n: "02",
                title: "Execution & Correction",
                body: "Certified experts plus our Drummer network build accurate presence where models actually learn.",
                renderIcon: () => (
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12 transition-transform duration-300 group-hover:scale-105">
                    <defs>
                      <linearGradient id="fix-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#0066A2" />
                        <stop offset="100%" stopColor="#00426B" />
                      </linearGradient>
                    </defs>
                    <rect width="48" height="48" rx="12" fill="#E0F2FE" />
                    <path d="M24 10L36 15V24C36 31.5 30.5 37.5 24 39.5C17.5 37.5 12 31.5 12 24V15L24 10Z" fill="url(#fix-grad-1)" />
                    <path d="M19 24.5L22.5 28L29.5 20.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                n: "03",
                title: "Ongoing Monitoring",
                body: "Continuous tracking and regular reports, so the change is visible instead of assumed.",
                renderIcon: () => (
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12 transition-transform duration-300 group-hover:scale-105">
                    <defs>
                      <linearGradient id="measure-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="60%" stopColor="#005B94" />
                        <stop offset="100%" stopColor="#00426B" />
                      </linearGradient>
                      <linearGradient id="measure-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>
                    <rect width="48" height="48" rx="12" fill="#E0F2FE" />
                    <rect x="11" y="26" width="6" height="12" rx="3" fill="url(#measure-grad-1)" />
                    <rect x="21" y="18" width="6" height="20" rx="3" fill="url(#measure-grad-light)" />
                    <rect x="31" y="10" width="6" height="28" rx="3" fill="url(#measure-grad-1)" />
                    <circle cx="34" cy="13" r="3.5" fill="#E0F2FE" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="group flex flex-col items-start text-left">
                  <div className="mb-1">
                    <s.renderIcon />
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground sm:text-2xl font-display">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[0.95rem] text-soft leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* WHY */}
        <Section id="why">
          <Reveal>
            <Eyebrow>Why Pearl 27</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-5xl">
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
                <p className="mt-6 font-display text-2xl font-semibold leading-tight">
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
                <p className="mt-6 font-display text-2xl font-semibold leading-tight">
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
                <p className="mt-6 font-display text-2xl font-semibold leading-tight">
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
                  <p className="mt-4 max-w-2xl font-display text-xl font-semibold leading-snug sm:text-2xl">
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
            <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
              Case studies, <span className="font-medium text-soft">on request.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <Bezel innerClassName="p-6 sm:p-10">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl border border-white/80 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
                    alt="Sarah Chen — VP of Growth"
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    +340% AI Recommendation Share
                  </div>
                  <blockquote className="font-display text-lg font-medium leading-relaxed text-foreground sm:text-xl lg:text-2xl">
                    "When buyers asked ChatGPT or Perplexity for top solutions in our category, we
                    were completely invisible. Within 60 days with Pearl 27, we became the #1
                    recommended brand across all major AI engines."
                  </blockquote>
                  <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-soft">
                    Sarah Chen — VP of Growth, Enterprise Brand
                  </p>
                </div>
              </div>
            </Bezel>
          </Reveal>
          <Reveal delay={200} className="mt-8">
            <Bezel innerClassName="p-4 sm:p-6">
              <p className="mb-3 px-1 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-soft/80">
                Some of the brands we work with
              </p>
              <LogoMarquee />
            </Bezel>
          </Reveal>
        </Section>

        {/* FAQ SECTION */}
        <FaqSection />

        {/* FINAL CTA */}
        <section id="book" className="relative px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-24 shadow-dock sm:rounded-[3rem] sm:px-10 sm:py-32 lg:rounded-[3.5rem] lg:py-36">
            <img
              src="https://res.cloudinary.com/ura8eqf3/image/upload/f_auto,q_auto/gradience-Image_4"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/50" />
            <Blobs className="opacity-40" />
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <Reveal>
                <p className="flex items-center justify-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ink-foreground">
                  Book an audit
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] text-ink-foreground sm:text-5xl">
                  Your brand already has a signal.{" "}
                  <span className="font-medium text-ink-foreground/70">
                    Let's find out what it's saying.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={160} className="mt-10">
                <AvatarCta onDark />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative overflow-hidden bg-background px-6 pt-12 pb-6 sm:px-10 sm:pt-16 sm:pb-8">
          <div className="mx-auto w-full max-w-7xl">
            {/* Top Navigation Bar */}
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              {/* Left: Logo & Meta Info */}
              <div className="flex flex-wrap items-center gap-3">
                <a href="#top" className="flex items-center gap-3 group" aria-label="Pearl 27 Home">
                  <Pearl27Logo className="size-8 transition-transform duration-300 group-hover:scale-105" />
                  <span className="font-display font-semibold text-foreground text-base tracking-tight">pearl 27</span>
                </a>
                <span className="text-xs text-soft">· © 2026 Lehi, Utah</span>
              </div>

              {/* Right: Social & Legal Links */}
              <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-soft font-medium">
                <a
                  href="https://www.linkedin.com/company/pearl27/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <Link to="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </nav>
            </div>

            {/* Giant Display Wordmark with Top-to-Bottom Gradient Effect */}
            <div className="relative mt-12 text-center select-none sm:mt-16">
              <span className="block font-serif text-[22vw] sm:text-[20vw] font-normal leading-none tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-stone-600/75 via-stone-400/35 to-transparent">
                PEARL <span className="inline-block text-[1.12em]">27</span>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
