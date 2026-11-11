import Reveal from "./reveal";

const cards = [
  {
    icon: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 7 V5.5 A4 4 0 0 1 16 5.5 V7" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="13.5" r="1.6" fill="currentColor" />
      </>
    ),
    title: "Built to industry standards",
    body: "SOC 2 Type 2 and ISO 27001 certified. FCA authorisation in progress.",
  },
  {
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 10.2 V12 L13.2 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    title: "Security by default",
    body: "Two-factor authentication for every user.",
  },
  {
    icon: (
      <>
        <path d="M12 3.5 C15 6.5, 17.5 9.5, 17.5 13 A5.5 5.5 0 0 1 6.5 13 C6.5 9.5, 9 6.5, 12 3.5 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9.5 13 A2.5 2.5 0 0 0 12 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    title: "Zero data leakage",
    body: "Built in-house. Hosted entirely on Obsidian's infrastructure.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative pt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2
            className="text-[36px] leading-tight tracking-[-0.01em] text-stone-200 sm:text-[48px]"
            style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
          >
            Built for regulated environments
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <div className="h-full rounded-2xl bg-stone-700/[0.16] p-7 ring-1 ring-stone-100/[0.07]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-stone-300">
                  {c.icon}
                </svg>
                <h3 className="mt-6 text-[17px] text-stone-100">{c.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-stone-400">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-10 max-w-3xl text-[12px] leading-relaxed text-stone-500">
            Obsidian Securities Limited is not yet authorised by the Financial Conduct
            Authority. Prior to becoming authorised no information regarding the future
            provision of custody and execution services is intended as an invitation or
            inducement to apply for these services, nor does it constitute financial advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
