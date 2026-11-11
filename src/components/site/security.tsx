import Reveal from "./reveal";

const cards = [
  {
    icon: "/orig/icon-industry-standards.svg",
    title: "Built to industry standards",
    body: "SOC 2 Type 2 and ISO 27001 certified. FCA authorisation in progress.",
  },
  {
    icon: "/orig/icon-security.svg",
    title: "Security by default",
    body: "Two-factor authentication for every user.",
  },
  {
    icon: "/orig/icon-zero-leakage.svg",
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icon} alt="" className="h-7 w-7" />
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
