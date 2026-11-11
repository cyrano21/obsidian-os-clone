import Reveal from "./reveal";
import Accordion, { type Feature } from "./accordion";

const firmFeatures: Feature[] = [
  {
    title: "Day plan",
    body: "Kanban view of meetings, tasks, and client communications.",
  },
  {
    title: "AI search",
    body: "Find relevant client information in seconds, with intelligent, unified search across your systems and documents.",
  },
  {
    title: "AI meeting assistant",
    body: "Every client meeting sharpens the system. You start with the right context, what matters is captured as the conversation unfolds, and insight turns into action automatically.",
  },
  {
    title: "Document digitization",
    body: "Transform paper records and scanned documents into searchable, structured data automatically.",
  },
  {
    title: "Suitability report",
    body: "Generate compliant suitability reports with AI assistance, ensuring every recommendation is properly documented.",
  },
  {
    title: "Portfolio aggregation",
    body: "Every client's full portfolio, across custodians and platforms, unified in a single, reliable view.",
  },
  {
    title: "Client-ready emails in your voice",
    body: "Personalized drafts that match your tone. Client recap emails are drafted and ready to send automatically.",
  },
];

const consolidatorFeatures: Feature[] = [
  {
    title: "Multi-firm oversight",
    body: "Manage multiple firms under one organisation with consolidated reporting, controls, and visibility.",
  },
  {
    title: "Rapid onboarding",
    body: "Onboard new firms in minutes through automated data migration and structured setup.",
  },
  {
    title: "Document digitisation",
    body: "Convert paper records into searchable, structured data across the organisation.",
  },
  {
    title: "Data segregation",
    body: "Maintain strict separation between firms, teams, and users, with tenant-level data isolation.",
  },
  {
    title: "Role-based access",
    body: "Fine-grained permissions ensure the right people see the right data.",
  },
  {
    title: "Audit trails",
    body: "Complete visibility into every action across your organisation for compliance and oversight.",
  },
];

function SuitabilityPanel() {
  return (
    <div className="rock-scene relative flex h-[420px] items-end overflow-hidden rounded-2xl sm:h-[520px]">
      <div className="glass relative mx-6 mb-8 w-full max-w-md rounded-2xl p-5 sm:mx-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100/10 text-[11px] font-medium text-stone-300">
              CL
            </span>
            <p className="text-[14px] text-stone-200">Chloe Lee</p>
          </div>
          <p className="text-[12px] text-stone-500">Suitability report</p>
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="h-2 w-full rounded-full bg-stone-100/[0.07]" />
          <div className="h-2 w-11/12 rounded-full bg-stone-100/[0.07]" />
          <div className="h-2 w-4/5 rounded-full bg-stone-100/[0.07]" />
        </div>
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-stone-100/[0.04] p-3 ring-1 ring-stone-100/[0.06]">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-stone-400">
            <path d="M8 1 L9.4 5.4 C9.6 6 10 6.4 10.6 6.6 L15 8 L10.6 9.4 C10 9.6 9.6 10 9.4 10.6 L8 15 L6.6 10.6 C6.4 10 6 9.6 5.4 9.4 L1 8 L5.4 6.6 C6 6.4 6.4 6 6.6 5.4 Z" fill="currentColor" />
          </svg>
          <p className="text-[12px] leading-relaxed text-stone-400">
            Attitude to risk remains unchanged. Recommend maintaining the cautious model,
            with a gradual shift of the ISA to the balanced fund.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-stone-500">
          <span className="rec-dot h-1.5 w-1.5 rounded-full bg-green-500" />
          Draft generated from today&apos;s meeting notes
        </div>
      </div>
    </div>
  );
}

function MultiFirmPanel() {
  const firms = [
    { name: "Alpha Capital", active: true },
    { name: "Silvergate", active: false },
    { name: "Crescent Point Advisors", active: false },
  ];
  const line =
    "M0 40 L20 34 L40 38 L60 28 L80 33 L100 24 L120 30 L140 20 L160 26 L180 16 L200 22 L220 12";
  return (
    <div className="rock-scene relative flex h-[420px] items-center overflow-hidden rounded-2xl sm:h-[520px]">
      <div className="glass relative mx-6 w-full max-w-md rounded-2xl p-5 sm:mx-10">
        <p className="text-[12px] text-stone-500">Dashboard</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {firms.map((f) => (
            <span
              key={f.name}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12.5px] ring-1 ${
                f.active
                  ? "bg-stone-100/[0.09] text-stone-200 ring-stone-100/15"
                  : "text-stone-500 ring-stone-100/[0.07]"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${f.active ? "bg-green-400" : "bg-stone-600"}`} />
              {f.name}
            </span>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-stone-500">Monthly spend</p>
        <p className="mt-1 text-[24px] font-light tabular-nums text-stone-100">$5,923.04</p>
        <svg viewBox="0 0 220 48" className="mt-4 h-20 w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d={`${line} L220 48 L0 48 Z`} fill="#4ade80" fillOpacity="0.08" />
          <path d={line} fill="none" stroke="#4ade80" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="max-w-2xl text-[36px] leading-[1.12] tracking-[-0.01em] text-stone-200 sm:text-[48px]"
      style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
    >
      {children}
    </h2>
  );
}

export function FirmsSection() {
  return (
    <section id="who" className="relative pt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading>The platform that scales your firm</SectionHeading>
        </Reveal>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <h3
              className="text-[28px] leading-tight text-stone-200 sm:text-[34px]"
              style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
            >
              Independent firms
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-400">
              Spend less time on admin and more time delivering advice that matters.
            </p>
            <div className="mt-8">
              <Accordion items={firmFeatures} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SuitabilityPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ConsolidatorsSection() {
  return (
    <section className="relative pt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading>Unlock rapid growth</SectionHeading>
        </Reveal>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={120} className="order-2 lg:order-1">
            <MultiFirmPanel />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <h3
              className="text-[28px] leading-tight text-stone-200 sm:text-[34px]"
              style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
            >
              Consolidators
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-400">
              Unify firms, data, and controls to scale faster – without operational drag.
            </p>
            <div className="mt-8">
              <Accordion items={consolidatorFeatures} />
            </div>
            <div className="mt-8 border-t border-stone-100/[0.09] pt-6">
              <p className="text-[15px] text-stone-300">
                Everything for Independent Firms and more
              </p>
              <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-stone-400">
                Built on the full Independent Firm feature set, with additional layers for
                oversight, scale, and control.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
