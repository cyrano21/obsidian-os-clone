import Reveal from "./reveal";

function RecordingScene() {
  const bars = Array.from({ length: 42 }, (_, i) => ({
    h: 6 + ((i * 7919) % 26),
    d: (i % 7) * 0.12,
  }));
  return (
    <div className="organic-scene relative h-[420px] overflow-hidden rounded-2xl sm:h-[480px]">
      <div className="blob blob-halo left-[8%] top-[6%] h-64 w-64" />
      <div className="blob blob-ghost right-[4%] top-[18%] h-40 w-40" />
      <div className="blob blob-core left-[30%] top-[22%] h-44 w-44" />

      {/* Barre d'enregistrement */}
      <div className="glass absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-2xl px-6 py-5 sm:inset-x-10">
        <div className="flex items-center justify-between">
          <p className="text-[15px] text-stone-300">
            <span className="tabular-nums text-stone-400">02:04</span> Recording meeting
          </p>
          <button className="flex items-center gap-2.5 rounded-full bg-stone-100/[0.07] px-4 py-2 text-[14px] text-stone-200 ring-1 ring-stone-100/10 transition-colors hover:bg-stone-100/[0.12]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-200">
              <span className="h-[7px] w-[7px] rounded-[1.5px] bg-stone-900" />
            </span>
            Stop
          </button>
        </div>
        <div className="mt-5 flex h-10 items-center justify-between gap-[3px]">
          {bars.map((b, i) => (
            <span
              key={i}
              className="wave-bar w-[3px] rounded-full bg-stone-300/50"
              style={{ height: `${b.h}px`, animationDelay: `${b.d}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const positions = [
  { fund: "SPX", current: "45.0%", target: "50.0%", size: "+5%", up: true },
  { fund: "Global All-Cap", current: "30.2%", target: "28.0%", size: "-2.2%", up: false },
  { fund: "Corporate Bond", current: "24.8%", target: "22.0%", size: "-2.8%", up: false },
];

function PortfolioScene() {
  const line =
    "M0 58 L14 52 L26 55 L38 44 L50 47 L62 40 L74 46 L86 42 L98 49 L110 45 L122 52 L134 48 L146 56 L158 50 L170 44 L182 47 L194 38 L206 34 L218 30 L230 24";
  return (
    <div className="rock-scene relative h-[420px] overflow-hidden rounded-2xl sm:h-[480px]">
      <div className="glass absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-2xl px-6 py-5 sm:inset-x-10">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-[13px] text-stone-500">Return by fund</p>
            <p className="mt-1 text-[26px] font-light tabular-nums text-stone-100">18.5%</p>
          </div>
          <p className="text-[12px] tabular-nums text-stone-500">Closed: Jan 7, 08:11 EST</p>
        </div>

        <svg viewBox="0 0 230 66" className="mt-4 h-24 w-full" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L230 66 L0 66 Z`} fill="url(#areaFill)" />
          <path d={line} fill="none" stroke="#4ade80" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>

        <div className="mt-4 grid grid-cols-[1fr_auto_auto_auto] gap-x-6 text-[12px]">
          <span className="pb-2 text-stone-500">Positions</span>
          <span className="pb-2 text-stone-500">Current</span>
          <span className="pb-2 text-stone-500">Target</span>
          <span className="pb-2 text-stone-500">Trade size</span>
          {positions.map((p) => (
            <div key={p.fund} className="col-span-4 grid grid-cols-[1fr_auto_auto_auto] gap-x-6 border-t border-stone-100/[0.07] py-2">
              <span className="truncate text-stone-300">{p.fund}</span>
              <span className="tabular-nums text-stone-400">{p.current}</span>
              <span className="tabular-nums text-stone-400">{p.target}</span>
              <span className={`tabular-nums ${p.up ? "text-green-400" : "text-orange-400"}`}>{p.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="offer" className="relative pt-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2
            className="text-center text-[36px] leading-tight tracking-[-0.01em] text-stone-200 sm:text-[48px]"
            style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
          >
            Save Time &amp; Grow AUM
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10 grid gap-4 lg:grid-cols-2">
          <RecordingScene />
          <PortfolioScene />
        </Reveal>
      </div>
    </section>
  );
}
