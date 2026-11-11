"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type Feature = { title: string; body: string; img: string };

const DURATION = 5000;

export default function AudienceSection({
  heading,
  title,
  subtitle,
  items,
  panelSide = "right",
  note,
  id,
}: {
  heading: ReactNode;
  title: string;
  subtitle: string;
  items: Feature[];
  panelSide?: "left" | "right";
  note?: { title: string; body: string };
  id?: string;
}) {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const cycle = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, DURATION);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [items.length]);

  const select = (i: number) => {
    if (i === active) return;
    cycle.current += 1;
    setActive(i);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, DURATION);
  };

  const panel = (
    <div className="relative aspect-[4/3.4] overflow-hidden rounded-2xl bg-[#0b0908] lg:aspect-auto lg:h-[560px]">
      {items.map((f, i) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={f.title}
          src={f.img}
          alt={f.title}
          className={`panel-img absolute inset-0 h-full w-full object-cover ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );

  const list = (
    <div>
      <h3
        className="text-[28px] leading-tight text-stone-200 sm:text-[34px]"
        style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
      >
        {title}
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-400">{subtitle}</p>
      <div className="mt-8">
        {items.map((f, i) => {
          const isOpen = active === i;
          return (
            <div key={f.title} className="relative border-t border-stone-100/[0.09] last:border-b">
              {isOpen && (
                <span
                  key={`p-${active}-${cycle.current}`}
                  className="acc-progress absolute inset-x-0 top-[-1px] h-[2px] bg-stone-100"
                  style={{ ["--acc-duration" as string]: `${DURATION}ms` }}
                />
              )}
              <button
                className={`w-full py-4 text-left text-[15.5px] transition-colors ${
                  isOpen ? "text-stone-100" : "text-stone-400 hover:text-stone-200"
                }`}
                onClick={() => select(i)}
                aria-expanded={isOpen}
              >
                {f.title}
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
      {note && (
        <div className="mt-8">
          <p className="text-[15px] text-stone-300">{note.title}</p>
          <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-stone-400">{note.body}</p>
        </div>
      )}
    </div>
  );

  return (
    <section id={id} className="relative pt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2
          className="max-w-2xl text-[36px] leading-[1.12] tracking-[-0.01em] text-stone-200 sm:text-[48px]"
          style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
        >
          {heading}
        </h2>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={panelSide === "left" ? "lg:order-1" : "lg:order-2"}>{panel}</div>
          <div className={`lg:sticky lg:top-28 ${panelSide === "left" ? "lg:order-2" : "lg:order-1"}`}>
            {list}
          </div>
        </div>
      </div>
    </section>
  );
}
