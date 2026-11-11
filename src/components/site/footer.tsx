import { LogoWordmark } from "./logo";
import Reveal from "./reveal";

const columns = [
  {
    title: "Product",
    links: ["AI Practice Management", "Custody & Execution", "Integrations"],
  },
  {
    title: "Obsidian",
    links: ["Media centre", "About us", "Contact us", "LinkedIn"],
  },
  {
    title: "Others",
    links: ["Legal", "Security", "Subprocessors", "Cookie settings"],
  },
];

const badges = ["GDPR", "AICPA SOC 2", "ISO 27001", "ISO 22301"];

function Badge({ label }: { label: string }) {
  const [top, bottom] = label === "AICPA SOC 2" ? ["AICPA", "SOC 2"] : label.split(" ");
  return (
    <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full text-center ring-1 ring-stone-100/15">
      {bottom ? (
        <>
          <span className="text-[8.5px] uppercase tracking-wide text-stone-500">{top}</span>
          <span className="text-[11px] font-medium leading-tight text-stone-300">{bottom}</span>
        </>
      ) : (
        <span className="text-[10.5px] font-medium tracking-wide text-stone-300">{top}</span>
      )}
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="about" className="relative overflow-hidden pt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <LogoWordmark />
            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-stone-500">
              Obsidian Technologies Limited is a company registered in England &amp; Wales
              with company number 16326982. Our office is located at Level 39, One Canada
              Square, Canary Wharf, London E14 5AB.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
            <p className="mt-10 max-w-md text-[12px] leading-relaxed text-stone-500">
              © 2026 Obsidian Technologies Limited. Obsidian &amp; RockCore are registered
              trademarks of Obsidian Technologies Limited.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-3 gap-8 lg:justify-items-end">
              {columns.map((col) => (
                <div key={col.title}>
                  <p className="text-[13px] text-stone-500">{col.title}</p>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-[14px] text-stone-400 transition-colors hover:text-stone-200"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none mt-20 select-none text-center" aria-hidden="true">
        <span className="giant-wordmark inline-block translate-y-[12%]">obsidian</span>
      </div>
    </footer>
  );
}
