export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13.5" stroke="#e7e5e4" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="8" stroke="#e7e5e4" strokeWidth="1.2" opacity="0.55" />
      <path
        d="M16 2.5 C 21 9, 21 23, 16 29.5"
        stroke="#e7e5e4"
        strokeWidth="1.4"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M16 2.5 C 11 9, 11 23, 16 29.5"
        stroke="#e7e5e4"
        strokeWidth="1.4"
        fill="none"
        opacity="0.85"
      />
      <circle cx="16" cy="16" r="2.2" fill="#e7e5e4" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <span
        className="text-[26px] leading-none tracking-tight text-stone-200"
        style={{ fontFamily: "var(--font-serif-display), serif", fontWeight: 400 }}
      >
        obsidian
      </span>
    </span>
  );
}
