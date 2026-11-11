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

const offerCards = [
  {
    title: "AI Practice Management",
    desc: "Your clients, meetings, and tasks - captured by AI, searchable in seconds, ready to act on.",
    img: "/orig/nav-ai-practice-management.webp",
  },
  {
    title: "Custody & Execution",
    desc: "Trade, rebalance, and custody - all in one place. With instant account opening.",
    img: "/orig/nav-custody-execution.webp",
  },
];

const whoCards = [
  {
    title: "Independent firms",
    desc: "Spend less time on admin and more time delivering advice that matters.",
    img: "/orig/nav-independent-firms.webp",
  },
  {
    title: "Consolidators",
    desc: "Unify firms, data, and controls to scale faster – without operational drag.",
    img: "/orig/nav-consolidators.webp",
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
                <div className="h-[280px] w-full overflow-hidden rounded-xl ring-1 ring-stone-100/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
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
                <div className="h-[280px] w-full overflow-hidden rounded-xl ring-1 ring-stone-100/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
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
