"use client";

interface MarqueeProps {
  items: string[];
  separator?: string;
}

export function Marquee({ items, separator = " / " }: MarqueeProps) {
  // Duplicate items to create seamless loop
  const content = items.join(separator) + separator;

  return (
    <div
      className="w-full overflow-hidden py-6 border-y border-[var(--color-border-divider)]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span className="font-[family-name:var(--font-heading)] text-[14px] tracking-[4px] uppercase text-[var(--color-text-muted)] whitespace-nowrap">
          {content}
        </span>
        <span className="font-[family-name:var(--font-heading)] text-[14px] tracking-[4px] uppercase text-[var(--color-text-muted)] whitespace-nowrap">
          {content}
        </span>
      </div>
    </div>
  );
}
