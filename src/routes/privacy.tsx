import { createFileRoute, Link } from "@tanstack/react-router";
import { TopNav } from "../components/pearl/TopNav";
import { Pearl27Logo } from "../components/pearl/Pearl27Logo";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pearl 27" },
      {
        name: "description",
        content:
          "Pearl 27 Privacy Policy. Learn how we collect, use, and safeguard data for our AI visibility audit and correction platform.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
              <Shield className="size-3.5 stroke-[#00426B]" />
              Data Protection
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-soft font-mono">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none space-y-10 text-soft leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                1. Overview & Scope
              </h2>
              <p>
                Pearl 27 ("Pearl 27", "we", "us", or "our") respects your privacy and is committed to protecting the personal data of our clients, website visitors, and platform users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our website or engage our AI visibility, audit, and correction services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                2. Information We Collect
              </h2>
              <p>
                We collect information necessary to provide AI visibility diagnostics and presence optimization for brands. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Contact & Account Information:</strong> Name, professional email address, company name, title, and communication preferences when you request an audit or contact us.
                </li>
                <li>
                  <strong className="text-foreground">Brand & Technical Data:</strong> Public domain data, brand positioning materials, and query metrics relevant to evaluating how Large Language Models (LLMs) and AI answer engines represent your business.
                </li>
                <li>
                  <strong className="text-foreground">Usage & Analytics:</strong> IP addresses, browser types, device information, and interaction data gathered via secure privacy-first analytics.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                3. How We Use Your Information
              </h2>
              <p>We process collected data for legitimate business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conducting comprehensive AI visibility audits across major generative AI engines.</li>
                <li>Executing presence correction strategies and managing verified content updates.</li>
                <li>Providing ongoing tracking, trend analytics, and accuracy reporting.</li>
                <li>Communicating account updates, security notifications, and service enhancements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal data. We share information only under strict confidentiality controls with trusted enterprise service providers, cloud infrastructure partners, or when required by applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                5. Security & Data Retention
              </h2>
              <p>
                Pearl 27 implements industry-standard administrative, physical, and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your information. We retain personal and diagnostic data only as long as necessary to fulfill the operational goals outlined in this policy or as required by regulatory obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                6. Your Rights & Contact Us
              </h2>
              <p>
                Depending on your location, you may have rights to access, correct, port, or request deletion of your personal information. To exercise any of these rights or ask questions regarding this policy, please reach out to our privacy team:
              </p>
              <div className="mt-4 rounded-2xl bg-inset p-6 border border-border/40 font-mono text-xs space-y-1">
                <p className="font-semibold text-foreground text-sm font-sans">Pearl 27 Privacy Office</p>
                <p>Email: privacy@pearl27.com</p>
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
            <Link to="/privacy" className="text-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
