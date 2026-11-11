import Reveal from "./reveal";

const offerings = [
  {
    badge: "Available now",
    title: "AI Practice Management",
    desc: "AI meeting notes, CRM, and portfolio aggregation in a single module.",
    muted: false,
  },
  {
    badge: "Coming soon",
    title: "Custody & Execution",
    desc: "Trade, rebalance, and custody - all in one place. With instant account opening.",
    muted: true,
  },
];

export default function Offerings() {
  return (
    <section className="relative pt-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 120}>
              <div className={o.muted ? "lg:pl-10" : ""}>
                <p className={`text-[13px] ${o.muted ? "text-stone-500" : "text-green-500"}`}>{o.badge}</p>
                <h3
                  className="mt-4 text-[32px] leading-tight tracking-[-0.01em] text-stone-200 sm:text-[40px]"
                  style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
                >
                  {o.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone-400">
                  {o.desc}
                </p>
                <a
                  href="#"
                  className={`mt-7 inline-block rounded-full px-5 py-2.5 text-[14px] transition-colors ${
                    o.muted
                      ? "text-stone-500 ring-1 ring-stone-100/10 hover:text-stone-300"
                      : "text-stone-200 ring-1 ring-stone-100/15 hover:bg-stone-100/[0.06]"
                  }`}
                >
                  Learn more
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
