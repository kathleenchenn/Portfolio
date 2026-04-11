import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-4">
          {/* Signature logo */}
          <p className="font-[family-name:var(--font-signature)] text-[22px] text-white">
            Kathleen Chen
          </p>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-muted)] tracking-wider order-3 md:order-none">
            &copy; 2024 &bull; Digital Curator
          </p>

          {/* Links */}
          <div className="flex gap-8">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/kathleen-chen" },
              { label: "GitHub", href: "https://github.com/kathleenchenn" },
              { label: "Dribbble", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-muted)] tracking-wider hover:text-[var(--color-accent)] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
