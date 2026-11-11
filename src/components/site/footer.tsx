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

const badges = [
  { src: "/orig/badge-gdpr.svg", alt: "GDPR" },
  { src: "/orig/badge-pentesting.svg", alt: "Pentesting" },
  { src: "/orig/badge-soc2.svg", alt: "AICPA SOC 2" },
  { src: "/orig/badge-iso-27001.svg", alt: "ISO 27001" },
  { src: "/orig/badge-iso-22301.svg", alt: "ISO 22301" },
];

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
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {badges.map((b) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={b.alt} src={b.src} alt={b.alt} className="h-14 w-auto" />
              ))}
            </div>
            <div className="mt-10 flex items-center gap-2.5">
              <span className="text-[12.5px] text-stone-500">Powered by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/orig/rockcore.svg" alt="RockCore" className="h-4 w-auto opacity-80" />
            </div>
            <p className="mt-6 max-w-md text-[12px] leading-relaxed text-stone-500">
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

      <div className="pointer-events-none mt-20 select-none" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/orig/obsidian-watermark.svg"
          alt=""
          className="mx-auto block w-full min-w-[900px] max-w-[1600px] translate-y-[10%] opacity-90"
        />
      </div>
    </footer>
  );
}
