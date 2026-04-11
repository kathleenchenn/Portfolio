"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagneticButton } from "@/components/cinematic/magnetic-button";

export function CTABanner() {
  return (
    <ScrollReveal className="w-full max-w-[1214px] mx-auto px-8 my-8">
      <div className="bg-[var(--color-bg-card)] rounded-[46px] px-8 md:px-14 py-9 flex flex-col md:flex-row items-center justify-between gap-6 glow-accent">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-[family-name:var(--font-heading)] text-[15px] text-white">
            Want to build something together?
          </p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-text-secondary)] max-w-[450px]">
            I&apos;m currently available for freelance opportunities and
            full-time engineering roles.
          </p>
        </div>
        <MagneticButton
          as="a"
          href="#contact"
          className="flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-text-dark)] font-[family-name:var(--font-heading)] font-bold text-[15px] px-10 py-4 rounded-full min-h-[44px] hover:shadow-[0_0_30px_rgba(180,194,159,0.3)] transition-shadow"
          aria-label="Go to contact section"
        >
          Let&apos;s Connect
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </ScrollReveal>
  );
}
