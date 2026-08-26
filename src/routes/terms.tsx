import { createFileRoute, Link } from "@tanstack/react-router";
import { TopNav } from "../components/pearl/TopNav";
import { Pearl27Logo } from "../components/pearl/Pearl27Logo";
import { ArrowLeft, FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pearl 27" },
      {
        name: "description",
        content:
          "Pearl 27 Terms of Service. Review terms governing our AI visibility audits, presence correction, and ongoing AI engine monitoring services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "August 26, 2026";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <TopNav />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-soft transition-colors hover:text-foreground mb-8"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="border-b border-border/40 pb-10">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-sky-100/70 border border-sky-200/60 px-3.5 py-1 text-xs font-medium text-[#00426B] mb-4">
              <FileText className="size-3.5 stroke-[#00426B]" />
              Legal Agreement
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-soft font-mono">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none space-y-10 text-soft leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website, platform, audit tools, or consulting services provided by Pearl 27 ("Company", "we", "us"), you ("Client", "User") agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                2. Scope of Services
              </h2>
              <p>
                Pearl 27 provides specialized AI visibility diagnostics, content presence correction, and ongoing monitoring for generative AI engines and answer engines (including ChatGPT, Perplexity, Claude, Gemini, and related models). Services are delivered subject to the terms of your specific statement of work or subscription plan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                3. Intellectual Property Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Client Materials:</strong> Clients retain all rights, title, and ownership in their pre-existing trademarks, logos, proprietary information, and brand assets provided to Pearl 27.
                </li>
                <li>
                  <strong className="text-foreground">Pearl 27 Technology:</strong> Pearl 27 retains sole ownership of its audit software, diagnostic algorithms, proprietary methodologies, report formats, and platform architecture.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                4. AI Engine Disclaimers & Model Variability
              </h2>
              <p>
                While Pearl 27 employs proven methodologies and expert networks to influence and correct AI model understanding, AI answer engines operate on probabilistic non-deterministic neural network models. Pearl 27 does not guarantee exact, permanent, or instantaneous response outputs across third-party AI platforms outside our direct operational control.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Pearl 27 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues resulting from your use of or inability to use the services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                6. Governing Law & Contact
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law principles.
              </p>
              <div className="mt-4 rounded-2xl bg-inset p-6 border border-border/40 font-mono text-xs space-y-1">
                <p className="font-semibold text-foreground text-sm font-sans">Pearl 27 Legal Department</p>
                <p>Email: legal@pearl27.com</p>
                <p>Location: Lehi, Utah, USA</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row text-xs text-soft font-medium">
          <div className="flex items-center gap-3">
            <Pearl27Logo className="size-6" />
            <span>© 2026 Pearl 27 · Lehi, Utah</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-foreground underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
