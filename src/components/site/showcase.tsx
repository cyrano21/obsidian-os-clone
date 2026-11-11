import Reveal from "./reveal";

export default function Showcase() {
  return (
    <section id="offer" className="relative pt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2
            className="text-[36px] leading-tight tracking-[-0.01em] text-stone-200 sm:text-[48px]"
            style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 300 }}
          >
            Save Time &amp; Grow AUM
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Panneau AI Practice Management : blob + barre d'enregistrement */}
          <div className="relative h-[420px] overflow-hidden rounded-2xl bg-black sm:h-[660px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/orig/ai-practice-management-bg.webp"
              alt="AI Practice Management"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/orig/ai-practice-management.webp"
              alt="Enregistrement de réunion en cours"
              className="absolute left-1/2 top-1/2 w-[88%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 sm:w-[78%]"
            />
          </div>

          {/* Panneau Custody & Execution : roche + carte de portefeuille */}
          <div className="relative h-[420px] overflow-hidden rounded-2xl bg-black sm:h-[660px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/orig/custody-execution.webp"
              alt="Custody & Execution"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
