import { useState } from "react";
import { ArrowRight, Plus, Minus, UserCheck } from "lucide-react";
import { Bezel, Reveal } from "./primitives";

const faqs = [
  {
    question: "What's the difference between traditional SEO and AI-era discoverability?",
    answer:
      "Traditional SEO optimizes your website to rank among ten blue search result links. Pearl 27 optimizes your brand's presence across generative AI engines (ChatGPT, Perplexity, Gemini), ensuring models synthesize accurate, authoritative answers when buyers ask about your brand.",
  },
  {
    question: "How fast is the turnaround to see changes in AI answers?",
    answer:
      "Most clients begin observing baseline AI visibility improvements within 30 to 60 days as model retrieval indices update and reflect corrected source data.",
  },
  {
    question: "How do you correct inaccurate information in AI models?",
    answer:
      "Our certified expert team and Drummers build verified, authentic presence across the exact authoritative sources and discussions AI training pipelines learn from, reshaping the synthesized response over time.",
  },
  {
    question: "How do you measure changes in AI responses?",
    answer:
      "We perform continuous automated and manual prompt auditing across ChatGPT, Perplexity, Claude, and Gemini, providing monthly trend dashboards and visibility scorecards.",
  },
  {
    question: "What is included in the initial AI Visibility diagnostic?",
    answer:
      "We run a comprehensive audit across major AI answer engines to reveal what models currently say about your product, where information is thin or outdated, and how you compare to competitors.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Eyebrow in '+ FAQ +' style */}
        <Reveal className="flex items-center justify-center">
          <div className="flex items-center gap-3.5 text-xs uppercase tracking-[0.28em] font-medium text-muted-foreground/90 sm:text-sm">
            <span className="text-muted-foreground/50 text-sm font-light select-none">+</span>
            <span>FAQ</span>
            <span className="text-muted-foreground/50 text-sm font-light select-none">+</span>
          </div>
        </Reveal>

        {/* Main Title */}
        <Reveal delay={80}>
          <h2 className="mt-4 mb-16 text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your Questions, Answered
          </h2>
        </Reveal>

        {/* Grid Layout (Left Callout Card, Right Accordion) */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14 lg:items-start">
          {/* LEFT: Callout Card (Matching Reference Tilt & Double-Halo Border) */}
          <Reveal delay={120}>
            <div className="rounded-[2.5rem] bg-white/60 p-2.5 sm:p-3 border border-white/90 backdrop-blur-md shadow-[0_24px_55px_rgba(0,0,0,0.12)] lg:-rotate-2">
              <div className="rounded-[2rem] bg-white p-7 sm:p-10 flex flex-col justify-between min-h-[420px] shadow-sm">
                <div>
                  {/* Avatar Photo */}
                  <img
                    src="/profile-avatar.jpg"
                    alt="Founder / Discovery Call Expert"
                    className="size-16 rounded-full object-cover shadow-md ring-4 ring-slate-100/80"
                  />

                  <h3 className="mt-8 font-display text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
                    Have more questions?
                  </h3>
                  <p className="mt-2 text-base text-slate-600">
                    Book a free discovery call
                  </p>
                </div>

                <div className="mt-10">
                  {/* Double Capsule Halo Button */}
                  <div className="rounded-full bg-white/60 p-1.5 border border-white/90 shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                    <a
                      href="#book"
                      className="relative z-10 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-slate-950 py-3.5 px-6 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.98]"
                    >
                      Book a Discovery Call
                      <ArrowRight className="size-4 text-white/80" />
                    </a>
                  </div>

                  <p className="mt-6 text-center text-xs text-slate-500">
                    Or, email us at{" "}
                    <a
                      href="mailto:contact@pearl27.com"
                      className="font-medium text-[#E14D2A] underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      contact@pearl27.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Accordion List */}
          <div className="divide-y divide-border/80 border-t border-b border-border/80">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={faq.question} delay={140 + i * 60}>
                  <div className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-slate-900 focus-visible:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-base sm:text-lg font-medium text-foreground leading-snug">
                        {faq.question}
                      </span>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full text-[#E14D2A] transition-transform duration-300">
                        {isOpen ? (
                          <Minus className="size-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="size-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
