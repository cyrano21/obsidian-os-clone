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

const schedule = [
  { time: "09:00", label: "Mitchell household annual review" },
  { time: "10:30", label: "Emily Carter - first meeting" },
  { time: "12:00", label: "Team lunch" },
  { time: "13:30", label: "Patel household Q3 review" },
  { time: "14:30", label: "Okonkwo suitability catch-up" },
];

const summaryTasks = [
  "Draft an agenda for the Mitchell review",
  "Compare their portfolio with the cautious model",
  "Reply to Emily Carter about her pension transfer",
  "Send the Robinsons their review summary",
];

const summaryUpdates = [
  "LOA from Aviva received for the Patel household",
  "Quilter platform charges change from next month",
];

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-t-2xl border border-b-0 border-stone-100/10 bg-[#0d0b09] shadow-[0_-30px_120px_-40px_rgba(120,84,56,0.25)]">
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
          <div className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-stone-100/15">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#e7e5e4" strokeWidth="1.6"/><path d="M16 4 C20 10, 20 22, 16 28 C12 22, 12 10, 16 4 Z" fill="#e7e5e4" opacity="0.9"/></svg>
          </div>
          <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100/10 text-stone-200">
            <Sparkle />
          </div>
          {["M3 7 L8 3 L13 7 V13 H3 Z", "M8 8 C8 5.5, 12 5.5, 12 8 M4 13 C4 10, 12 10, 12 13", "M4 3 H10 V13 H4 Z M12 5 H14 V13 H12", "M3 3 H7 V7 H3 Z M9 3 H13 V7 H9 Z M3 9 H7 V13 H3 Z M9 9 H13 V13 H9 Z"].map((d, i) => (
            <div key={i} className="flex h-9 w-9 items-center justify-center text-stone-500">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d={d} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </div>
          ))}
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
            {schedule.map((s) => (
              <div key={s.time} className="flex items-center gap-4 py-[9px]">
                <span className="w-9 text-right text-[11.5px] tabular-nums text-stone-500">{s.time}</span>
                <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-stone-400 ring-4 ring-[#0d0b09]" />
                <span className="truncate text-[13.5px] text-stone-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Résumé quotidien (IA) */}
        <div className="hidden w-[320px] shrink-0 border-l border-stone-100/[0.06] px-5 py-5 lg:block">
          <p className="text-[12px] font-medium tracking-wide text-stone-500">Daily summary</p>
          <p className="mt-3 text-[13.5px] font-medium leading-snug text-stone-200">
            Prepare for the Mitchell household&apos;s annual review
          </p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-stone-400">
            Their ISA allowance is unused this year and Mark retires in March. Last review
            flagged moving to a lower-risk model.
          </p>
          <ul className="mt-4 space-y-2.5">
            {summaryTasks.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-stone-300">
                <span className="mt-[3px] h-3 w-3 shrink-0 rounded-[4px] ring-1 ring-stone-500" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-stone-100/[0.07] pt-3.5">
            {summaryUpdates.map((u) => (
              <p key={u} className="mb-2 flex items-start gap-2 text-[12.5px] leading-snug text-stone-400">
                <Sparkle className="mt-[2px] h-3 w-3 shrink-0 text-stone-500" />
                {u}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-[172px]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h1
            className="mx-auto max-w-4xl text-[44px] leading-[1.05] tracking-[-0.01em] text-stone-200 sm:text-[64px] lg:text-[80px]"
            style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
          >
            The all-in-one platform for financial advisers
          </h1>
          <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-stone-400">
            AI-powered practice management available now - with integrated custody and
            execution launching soon.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-stone-50 px-6 py-3 text-[15px] font-medium text-stone-900 transition-colors hover:bg-white"
            >
              Get started
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-20 max-w-6xl">
          <DashboardMockup />
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-14 flex items-center justify-center gap-4 text-stone-500">
            <span className="text-[13px]">Made by the people behind</span>
            <span className="h-4 w-px bg-stone-100/15" />
            <span
              className="text-[15px] text-stone-400"
              style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 400 }}
            >
              RockCore
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
