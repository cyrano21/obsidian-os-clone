import Reveal from "./reveal";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 1 L9.4 5.4 C9.6 6 10 6.4 10.6 6.6 L15 8 L10.6 9.4 C10 9.6 9.6 10 9.4 10.6 L8 15 L6.6 10.6 C6.4 10 6 9.6 5.4 9.4 L1 8 L5.4 6.6 C6 6.4 6.4 6 6.6 5.4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

const TITLE_WORDS = ["The", "all-in-one", "platform", "for", "financial", "advisers"];

const schedule = [
  { time: "09:00", label: "Mitchell household annual review" },
  { time: "10:30", label: "Emily Carter - first meeting" },
  { time: "12:00", label: "Team lunch" },
  { time: "13:30", label: "Patel household Q3 review" },
  { time: "14:30", label: "Okonkwo suitability catch-up" },
];

const summaryTasks = [
  { icon: "edit", label: "Draft an agenda for the Mitchell review" },
  { icon: "clock", label: "Reply to Emily Carter about her pension transfer" },
  { icon: "cal", label: "Send the Robinsons their review summary" },
];

const summaryUpdates = [
  { icon: "doc", label: "LOA from Aviva received for the Patel household" },
  { icon: "building", label: "Quilter platform charges change from next month" },
];

function TaskIcon({ d }: { d: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="mt-[2px] shrink-0 text-stone-500">
      <path d={d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const taskIcons: Record<string, string> = {
  edit: "M3 13 L3.8 10.2 L10.5 3.5 A1.2 1.2 0 0 1 12.2 5.2 L5.5 11.9 Z",
  clock: "M8 4.5 V8 L10.2 9.4 M14 8 A6 6 0 1 1 2 8 A6 6 0 0 1 14 8 Z",
  cal: "M3 5 H13 V13.5 H3 Z M3 8 H13 M5.5 3 V6 M10.5 3 V6",
  doc: "M4.5 2.5 H9.5 L11.5 4.5 V13.5 H4.5 Z M9.5 2.5 V4.5 H11.5",
  building: "M3 13.5 V4 L8 2.5 L13 4 V13.5 M5.5 6.5 H6.5 M9.5 6.5 H10.5 M5.5 9 H6.5 M9.5 9 H10.5",
};

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Pierres de flanc + halo chaud derrière la fenêtre */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/orig/stone-left.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[16%] top-[8%] hidden w-[30%] opacity-90 lg:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/orig/stone-right.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] top-[2%] hidden w-[42%] opacity-90 lg:block"
      />
      <div className="pointer-events-none absolute inset-x-[6%] -inset-y-10 rounded-[40px] bg-[radial-gradient(50%_60%_at_50%_45%,rgba(146,98,58,0.22),transparent_70%)]" />

      <div className="relative overflow-hidden rounded-2xl border border-stone-100/10 bg-[#0d0b09] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        {/* Barre fenêtre macOS */}
        <div className="flex items-center justify-between border-b border-stone-100/[0.06] px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 flex items-center gap-4 text-stone-500">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="4.5" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8.5" y="2" width="5.5" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/></svg>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.2"/><path d="M10.5 10.5 L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <span className="h-4 w-px bg-stone-100/10" />
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" opacity="0.4"><path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 5 H11 M11 5 L8.5 2.5 M14 11 H5 M5 11 L7.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[13px]">Customise</span>
          </div>
        </div>

        <div className="flex">
          {/* Rail latéral */}
          <div className="flex w-14 flex-col items-center gap-2 border-r border-stone-100/[0.06] py-4">
            <div className="flex h-9 w-9 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/orig/obsidian-app-icon.png" alt="" className="h-7 w-7 rounded-lg" />
            </div>
            <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100/10 text-stone-200">
              <Sparkle />
            </div>
            {[
              "M3 7 L8 3 L13 7 V13 H3 Z",
              "M8 8 C8 5.5, 12 5.5, 12 8 M4 13 C4 10, 12 10, 12 13",
              "M4 3 H10 V13 H4 Z M12 5 H14 V13 H12",
              "M3 3 H7 V7 H3 Z M9 3 H13 V7 H9 Z M3 9 H7 V13 H3 Z M9 9 H13 V13 H9 Z",
            ].map((d, i) => (
              <div key={i} className="flex h-9 w-9 items-center justify-center text-stone-500">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d={d} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              </div>
            ))}
            <div className="mt-auto flex flex-col items-center gap-2.5 text-stone-500">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2.5 C10 2.5, 11 4, 11 6 V9 L12.2 11 H3.8 L5 9 V6 C5 4, 6 2.5, 8 2.5 Z M6.8 12.5 A1.3 1.3 0 0 0 9.2 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/orig/adviser-avatar.png" alt="Sophie" className="h-7 w-7 rounded-full ring-1 ring-stone-100/15" />
            </div>
          </div>

          {/* Vue calendrier du jour */}
          <div className="min-w-0 flex-1 px-6 py-5">
            <div className="flex items-center justify-between">
              <p className="text-[15px] text-stone-200">Welcome back, Sophie</p>
              <button className="flex items-center gap-2 rounded-full bg-stone-100/[0.08] px-3.5 py-1.5 text-[12.5px] text-stone-300 ring-1 ring-stone-100/10">
                <span className="rec-dot h-1.5 w-1.5 rounded-full bg-orange-500" />
                Record meeting
              </button>
            </div>

            <p className="mt-5 text-[12px] font-medium tracking-wide text-stone-500">Today</p>
            <div className="relative mt-3">
              <div className="absolute bottom-0 left-[46px] top-0 w-px bg-stone-100/[0.07]" />
              {schedule.map((s, i) => (
                <div key={s.time} className="relative py-[5px]">
                  <div className="flex items-start gap-4">
                    <span className="w-9 pt-[9px] text-right text-[11.5px] tabular-nums text-stone-500">{s.time}</span>
                    <div className={`relative flex-1 rounded-lg border px-3 py-2 ${
                      i === 1
                        ? "border-red-500/30 bg-red-500/[0.05]"
                        : "border-stone-100/[0.07] bg-stone-100/[0.02]"
                    }`}>
                      <span className={`absolute -left-[25px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${i === 1 ? "bg-red-500" : "bg-stone-500"} ring-4 ring-[#0d0b09]`} />
                      <span className="text-[13px] text-stone-200">{s.label}</span>
                      <span className="ml-2 text-[12px] text-stone-500">· {s.time}</span>
                    </div>
                  </div>
                  {i === 0 && (
                    <div className="absolute left-[62px] right-3 top-full flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span className="h-px flex-1 bg-red-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Résumé quotidien (IA) */}
          <div className="hidden w-[340px] shrink-0 border-l border-stone-100/[0.06] px-5 py-5 lg:block">
            <p className="text-[12px] font-medium tracking-wide text-stone-500">Daily summary</p>
            <p className="mt-3 text-[13.5px] font-medium leading-snug text-stone-200">
              Prepare for the Mitchell household&apos;s annual review
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-stone-400">
              Their ISA allowance is unused this year and Mark retires in March. Last review
              flagged moving to a lower-risk model.
            </p>
            <div className="mt-4 space-y-2">
              {summaryTasks.map((t) => (
                <div key={t.label} className="flex items-start gap-2.5 rounded-lg bg-stone-100/[0.04] px-3 py-2 text-[12.5px] leading-snug text-stone-300 ring-1 ring-stone-100/[0.05]">
                  <TaskIcon d={taskIcons[t.icon]} />
                  {t.label}
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-stone-100/[0.07] pt-3.5">
              {summaryUpdates.map((u) => (
                <p key={u.label} className="mb-2.5 flex items-start gap-2 text-[12.5px] leading-snug text-stone-400">
                  <TaskIcon d={taskIcons[u.icon]} />
                  {u.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const logos = ["blackrock", "revolut", "jpmorgan", "parmenion", "wise"];

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-[160px]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h1
          className="mx-auto max-w-[960px] text-center text-[44px] leading-[1.05] tracking-[-0.01em] text-stone-200 sm:text-[64px] lg:text-[86px] lg:leading-none"
          style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
        >
          {TITLE_WORDS.map((w, i) => (
            <span
              key={i}
              className="hero-word inline-block"
              style={{ ["--hero-delay" as string]: `${(i * 0.08).toFixed(2)}s` }}
            >
              {w}
              {i < TITLE_WORDS.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>
        <p
          className="hero-fade mx-auto mt-7 max-w-md text-center text-[15px] leading-relaxed text-stone-400"
          style={{ ["--hero-delay" as string]: "0.75s" }}
        >
          AI-powered practice management available now - with integrated custody and
          execution launching soon.
        </p>
        <div className="hero-fade mt-8 text-center" style={{ ["--hero-delay" as string]: "1.05s" }}>
          <a
            href="#"
            className="inline-block rounded-full bg-stone-50 px-6 py-3 text-[15px] font-medium text-stone-900 transition-colors hover:bg-white"
          >
            Get started
          </a>
        </div>

        <div className="hero-fade mx-auto mt-12 max-w-6xl" style={{ ["--hero-delay" as string]: "1.05s" }}>
          <DashboardMockup />
        </div>

        <Reveal>
          <div className="mt-16 border-b border-stone-100/[0.08] pb-14 text-center">
            <p className="text-[13.5px] text-stone-500">Made by the people behind</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((l) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={l} src={`/orig/${l}.svg`} alt={l} className="h-5 max-w-[140px] object-contain opacity-95" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
