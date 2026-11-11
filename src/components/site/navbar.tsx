"use client";

import { useState } from "react";
import { LogoWordmark } from "./logo";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`ml-1.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniBlob() {
  return (
    <div className="organic-scene relative h-full w-full overflow-hidden">
      <div className="blob blob-halo left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2" />
      <div className="blob blob-core left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

function MiniCandles() {
  const candles = [
    { x: 22, o: 34, c: 22, up: false },
    { x: 40, o: 26, c: 16, up: true },
    { x: 58, o: 30, c: 18, up: true },
    { x: 76, o: 14, c: 26, up: false },
    { x: 94, o: 30, c: 20, up: true },
    { x: 112, o: 12, c: 24, up: true },
    { x: 130, o: 22, c: 32, up: false },
    { x: 148, o: 34, c: 20, up: true },
    { x: 166, o: 16, c: 28, up: true },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#141110]">
      <svg width="190" height="72" viewBox="0 0 190 56" aria-hidden="true">
        {candles.map((c, i) => (
          <g key={i}>
            <line
              x1={c.x}
              x2={c.x}
              y1={c.up ? c.c - 8 : c.o - 8}
              y2={c.up ? c.o + 8 : c.c + 8}
              stroke={c.up ? "#4ade80" : "#f97316"}
              strokeWidth="1.2"
            />
            <rect
              x={c.x - 3.2}
              y={Math.min(c.o, c.c)}
              width="6.4"
              height={Math.abs(c.c - c.o) || 1}
              rx="1"
              fill={c.up ? "#4ade80" : "#f97316"}
            />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 h-[3px] w-10 rounded-full bg-stone-600/60" />
      <div className="absolute bottom-3 left-3.5 h-[1px] w-7 rounded-full bg-stone-600/40" />
      <div className="absolute bottom-4 right-3 flex gap-1.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-800/70 text-[10px] text-orange-300">
          ↓
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-800/70 text-[10px] text-green-300">
          ↑
        </span>
      </div>
    </div>
  );
}

const offerCards = [
  {
    title: "AI Practice Management",
    desc: "Your clients, meetings, and tasks - captured by AI, searchable in seconds, ready to act on.",
    visual: <MiniBlob />,
  },
  {
    title: "Custody & Execution",
    desc: "Trade, rebalance, and custody - all in one place. With instant account opening.",
    visual: <MiniCandles />,
  },
];

const whoCards = [
  {
    title: "Independent firms",
    desc: "Spend less time on admin and more time delivering advice that matters.",
  },
  {
    title: "Consolidators",
    desc: "Unify firms, data, and controls to scale faster – without operational drag.",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (m: string) => setOpenMenu(openMenu === m ? null : m);

  const linkCls =
    "text-[15px] text-stone-300 transition-colors hover:text-stone-100";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-black/85 backdrop-blur-md"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav className="relative mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#" aria-label="Obsidian — home">
          <LogoWordmark />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          <button
            className={`flex items-center ${openMenu === "offer" ? "text-stone-100" : linkCls}`}
            onMouseEnter={() => setOpenMenu("offer")}
            onClick={() => toggle("offer")}
          >
            What we offer <Chevron open={openMenu === "offer"} />
          </button>
          <button
            className={`flex items-center ${openMenu === "who" ? "text-stone-100" : linkCls}`}
            onMouseEnter={() => setOpenMenu("who")}
            onClick={() => toggle("who")}
          >
            Who&apos;s it for <Chevron open={openMenu === "who"} />
          </button>
          <a href="#integrations" className={linkCls} onMouseEnter={() => setOpenMenu(null)}>
            Integrations
          </a>
          <a href="#security" className={linkCls} onMouseEnter={() => setOpenMenu(null)}>
            Security
          </a>
          <a href="#about" className={linkCls} onMouseEnter={() => setOpenMenu(null)}>
            About
          </a>
        </div>

        <a
          href="#"
          className="rounded-full bg-stone-50 px-5 py-2.5 text-[15px] font-medium text-stone-900 transition-colors hover:bg-white"
        >
          Get started
        </a>

        {/* Dropdown : What we offer */}
        <div
          className={`absolute left-1/2 top-[76px] -translate-x-1/2 transition-all duration-300 ${
            openMenu === "offer"
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          onMouseEnter={() => setOpenMenu("offer")}
        >
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#0c0a09]/95 p-4 shadow-2xl ring-1 ring-stone-100/10 backdrop-blur-xl">
            {offerCards.map((c) => (
              <a key={c.title} href="#offer" className="group w-[272px]">
                <div className="h-[180px] w-full overflow-hidden rounded-xl ring-1 ring-stone-100/5 transition-transform duration-300 group-hover:scale-[1.015]">
                  {c.visual}
                </div>
                <h3
                  className="mt-4 text-[19px] text-stone-100"
                  style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 400 }}
                >
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-stone-400">
                  {c.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Dropdown : Who's it for */}
        <div
          className={`absolute left-1/2 top-[76px] -translate-x-1/2 transition-all duration-300 ${
            openMenu === "who"
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          onMouseEnter={() => setOpenMenu("who")}
        >
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#0c0a09]/95 p-4 shadow-2xl ring-1 ring-stone-100/10 backdrop-blur-xl">
            {whoCards.map((c) => (
              <a key={c.title} href="#who" className="group w-[272px]">
                <div className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#141110] ring-1 ring-stone-100/5">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="opacity-70 transition-transform duration-300 group-hover:scale-105">
                    <circle cx="22" cy="15" r="7" stroke="#a8a29e" strokeWidth="1.5" />
                    <path d="M8 36 C 8 27, 36 27, 36 36" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3
                  className="mt-4 text-[19px] text-stone-100"
                  style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 400 }}
                >
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-stone-400">
                  {c.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
