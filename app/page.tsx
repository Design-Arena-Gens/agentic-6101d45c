"use client";

import {
  ArrowRight,
  Check,
  FileStack,
  Lock,
  Rocket,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";

const logos = [
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Linear", src: "/logos/linear.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Checkr", src: "/logos/checkr.svg" },
  { name: "Rippling", src: "/logos/rippling.svg" },
  { name: "Coda", src: "/logos/coda.svg" },
];

const features = [
  {
    title: "Drag-and-drop merging",
    description:
      "Combine hundreds of PDFs instantly with support for split, reorder, and custom merge templates.",
    icon: FileStack,
  },
  {
    title: "AI cleanup",
    description:
      "Remove duplicate pages, fix orientation issues, and normalize typography with one click.",
    icon: Sparkles,
  },
  {
    title: "Secure delivery",
    description:
      "Send completed bundles automatically with expiring share links, e-signature requests, and audit trails.",
    icon: Lock,
  },
];

const steps = [
  {
    title: "Drop your files",
    description:
      "Drag PDFs into MergeFlow or import directly from Google Drive, SharePoint, or S3.",
    icon: Rocket,
  },
  {
    title: "Automate the flow",
    description:
      "Build approval rules, auto-merge folders, and trigger post-merge workflows with our Zapier integration.",
    icon: Settings,
  },
  {
    title: "Share instantly",
    description:
      "Generate branded download portals and send automations for sales, legal, or operations teams in seconds.",
    icon: Zap,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    cadence: "per month",
    highlight: "Perfect for solo operators",
    features: [
      "Unlimited merges up to 50MB each",
      "AI cleanup for 100 pages/month",
      "Share links with password protection",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    cadence: "per month",
    highlight: "Most popular for scaling teams",
    features: [
      "Unlimited merges up to 250MB each",
      "AI cleanup for unlimited pages",
      "Automations & Zapier integration",
      "Team workspace with role-based access",
    ],
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    cadence: "",
    highlight: "Custom workflows & compliance",
    features: [
      "Single sign-on (SSO) and SCIM",
      "SOC 2 Type II compliant hosting",
      "Dedicated success manager",
      "On-premise & air-gapped deployments",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We process over 800 agreements daily. MergeFlow shaved three hours off every onboarding cycle and helped us hit record NPS in Q2.",
    name: "Erica Jones",
    role: "VP of Operations, AltitudeHR",
  },
  {
    quote:
      "The AI cleanup alone justified the switch. It catches orientation and duplicate page issues better than our manual reviewers ever could.",
    name: "Leo Martinez",
    role: "Director of Revenue Ops, QTrack",
  },
  {
    quote:
      "Security and compliance were non-negotiable for our legal team. MergeFlow gave us audit trails, SSO, and enterprise support in weeks.",
    name: "Priya Desai",
    role: "Chief Legal Officer, Northbound",
  },
];

const faqs = [
  {
    question: "Can we automate merges from our CRM or ticketing system?",
    answer:
      "Yes. Use our native HubSpot, Salesforce, and Zendesk integrations or connect via Zapier and webhooks. Build flow rules that auto-merge documents whenever a deal reaches a stage, or a ticket is resolved.",
  },
  {
    question: "How secure is MergeFlow?",
    answer:
      "MergeFlow is SOC 2 Type II compliant, offers encryption in transit and at rest, supports SSO via Okta and Azure AD, and provides detailed audit logs. Enterprise plans can enable on-premise or region-specific hosting.",
  },
  {
    question: "Do you support mixed file types?",
    answer:
      "Absolutely. Import Word, Excel, and image files—MergeFlow converts them on the fly and keeps formatting intact. You can also enforce prefix rules and page numbering for consistent document bundles.",
  },
  {
    question: "Is there an API?",
    answer:
      "Our REST API lets you orchestrate merges, monitor queue status, download outputs, and manage templates programmatically. SDKs for Node.js and Python ship with example workflows.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <GradientHalo />
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="glass flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10">
            <FileStack className="h-6 w-6 text-primary-300" />
          </div>
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              MergeFlow
            </p>
            <p className="text-xs uppercase tracking-[0.36em] text-white/50">
              PDF Automation
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-white/70 md:flex">
          <a className="text-sm font-medium transition hover:text-white" href="#features">
            Features
          </a>
          <a className="text-sm font-medium transition hover:text-white" href="#workflow">
            Workflow
          </a>
          <a className="text-sm font-medium transition hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium transition hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white md:inline-flex"
            href="#pricing"
          >
            Book a demo
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-brand transition hover:bg-primary-500 hover:text-white"
            href="#get-started"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-10 text-center sm:pt-16 md:pt-24">
          <span className="badge mb-6">Merge PDFs in seconds</span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            The fastest way to bundle PDFs your customers actually want to read
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            MergeFlow automates the entire document packaging pipeline—merge, clean, brand, and
            deliver your PDFs without the manual versioning overhead. Built for revenue, legal, and
            operations teams who live in their inbox.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:bg-primary-400"
              href="#get-started"
            >
              Launch the web app
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              href="#workflow"
            >
              See how it works
            </a>
          </div>
          <div className="relative mt-14 w-full max-w-4xl">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-3xl border-white/15 bg-slate-950/60 px-8 pb-10 pt-8 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                    Merge session
                  </p>
                </div>
                <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  Output: onboarding-pack.pdf
                </p>
              </div>
              <div className="grid gap-6 pt-8 md:grid-cols-[1.2fr,0.8fr]">
                <div className="space-y-4 text-left">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-white/80">Drag files here</p>
                    <p className="mt-2 text-xs text-white/40">
                      MergeFlow automatically optimizes, compresses, or replaces duplicates before
                      the merge completes.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                      {["proposal.pdf", "msa.pdf", "pricing-sheet.pdf", "case-study.pdf"].map(
                        (file) => (
                          <span
                            key={file}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                          >
                            <span className="inline-flex h-2 w-2 rounded-full bg-primary-400" />
                            {file}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4 text-sm">
                    <p className="font-semibold text-primary-100">AI cleanup suggestions</p>
                    <ul className="mt-3 space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary-300" />
                        Auto-rotated 3 pages with landscape orientation mismatches.
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary-300" />
                        Removed duplicate NDA (v3) and kept the latest revision.
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary-300" />
                        Normalized fonts and added dynamic table of contents.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.36em] text-white/40">Automation</p>
                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
                      <div className="rounded-full bg-primary-500/20 p-2">
                        <Zap className="h-4 w-4 text-primary-200" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Trigger
                        </p>
                        <p className="text-xs text-white/60">
                          Merge completes + deal stage = Closed Won.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="font-semibold text-white">Actions</p>
                      <ul className="mt-3 space-y-2 text-xs text-white/60">
                        <li>• Upload to client portal</li>
                        <li>• Send signature request via DocuSign</li>
                        <li>• Notify CSM in Slack channel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/10 bg-white/5 py-12">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 sm:gap-12">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center opacity-70">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="section-title">Why teams switch to MergeFlow</h2>
            <p className="section-subtitle">
              Automate the document chaos with workflows that scale across every department. No more
              copy-paste merges or compliance headaches.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group glass flex flex-col rounded-3xl border-white/10 bg-white/[0.04] p-8 transition hover:border-primary-500/30 hover:bg-primary-500/10"
              >
                <feature.icon className="mb-6 h-12 w-12 text-primary-300 transition group-hover:scale-110" />
                <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-10">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h2 className="section-title text-left">
                  Automate your PDF pipeline from import to delivery
                </h2>
                <p className="section-subtitle text-left">
                  Configure once, repeat forever. MergeFlow unlocks reliable, auditable document
                  experiences for sales, ops, and compliance teams.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="badge">Automation-first</span>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="glass rounded-3xl border-white/10 bg-white/[0.04] p-6 transition hover:border-primary-500/30 hover:bg-primary-500/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10">
                      <step.icon className="h-6 w-6 text-primary-200" />
                    </div>
                    <span className="text-sm font-medium text-white/50">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-primary-500/30 bg-primary-500/10 p-8 text-sm text-white/80">
              <p>
                MergeFlow also supports conditional logic, watermarking, AI summaries, and branded
                landing pages for recipients—making your document experience feel effortless end to
                end.
              </p>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-20">
          <div className="absolute inset-y-0 left-1/2 h-full w-[80vw] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h2 className="section-title">Loved by high-velocity teams</h2>
            <p className="section-subtitle">
              MergeFlow powers document workflows for revenue, legal, and operations teams worldwide.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="glass h-full rounded-3xl border-white/10 bg-white/[0.04] p-8 text-left"
                >
                  <p className="text-sm text-white/75">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.36em] text-white/40">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="section-title">Flexible plans to fit your flow</h2>
            <p className="section-subtitle">
              Every plan includes unlimited downloads, secure storage, and granular activity logs.
              Scale to your volume with predictable pricing.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass relative flex h-full flex-col rounded-3xl border-white/10 bg-white/[0.04] p-8 ${
                  plan.badge ? "border-primary-500/50 bg-primary-500/10 shadow-brand" : ""
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-brand">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/60">{plan.highlight}</p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.cadence ? (
                    <span className="text-xs uppercase tracking-[0.36em] text-white/40">
                      {plan.cadence}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-8 space-y-3 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.badge
                      ? "bg-white text-slate-950 hover:bg-primary-500 hover:text-white"
                      : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                  }`}
                  href="#get-started"
                >
                  {plan.name === "Enterprise" ? "Talk to sales" : "Start free trial"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="text-center">
            <h2 className="section-title">Answers before you ask</h2>
            <p className="section-subtitle">
              Everything you need to evaluate MergeFlow for your team today.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group glass overflow-hidden rounded-2xl border-white/10 bg-white/[0.04]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-white transition group-open:bg-primary-500/10">
                  <span>{faq.question}</span>
                  <span className="text-xl text-primary-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="get-started"
          className="mx-auto max-w-5xl rounded-[40px] border border-primary-500/30 bg-primary-500/10 px-8 py-16 text-center shadow-brand"
        >
          <span className="badge mb-4">Ship faster</span>
          <h2 className="section-title">Merge PDFs like it’s 2025</h2>
          <p className="section-subtitle mx-auto">
            Start your free 14-day trial and automate your first workflow in under 10 minutes.
            Onboarding and team training included.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-brand transition hover:bg-primary-400 hover:text-white"
              href="https://app.mergeflow.io/signup"
            >
              Create account
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              href="https://cal.mergeflow.io/demo"
            >
              Talk to sales
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-20 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="glass flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10">
                <FileStack className="h-5 w-5 text-primary-300" />
              </div>
              <span className="font-display text-lg font-semibold text-white">MergeFlow</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              MergeFlow is the document automation platform that ships polished PDF bundles with zero
              manual effort. Trusted by high-growth revenue, legal, and operations teams.
            </p>
            <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} MergeFlow</p>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.36em] text-white/40">Product</p>
            <a className="block transition hover:text-white" href="#features">
              Features
            </a>
            <a className="block transition hover:text-white" href="#workflow">
              Workflow
            </a>
            <a className="block transition hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="block transition hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.36em] text-white/40">Company</p>
            <a className="block transition hover:text-white" href="https://mergeflow.io/security">
              Security
            </a>
            <a className="block transition hover:text-white" href="https://mergeflow.io/customers">
              Customers
            </a>
            <a className="block transition hover:text-white" href="https://mergeflow.io/careers">
              Careers
            </a>
            <a
              className="block transition hover:text-white"
              href="mailto:hello@mergeflow.io?subject=MergeFlow%20demo"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GradientHalo() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-glow opacity-60"
    />
  );
}
