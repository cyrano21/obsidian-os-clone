"use client";

import { useState } from "react";

export type Feature = { title: string; body: string };

export default function Accordion({ items }: { items: Feature[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.title} className="border-t border-stone-100/[0.09] last:border-b">
            <button
              className="flex w-full items-center justify-between py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span
                className={`text-[15.5px] transition-colors ${
                  isOpen ? "text-stone-100" : "text-stone-400 hover:text-stone-200"
                }`}
              >
                {f.title}
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`shrink-0 text-stone-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
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
            </button>
            <div className={`acc-body ${isOpen ? "open" : ""}`}>
              <div className="acc-inner">
                <p className="pb-5 pr-8 text-[13.5px] leading-relaxed text-stone-400">
                  {f.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
