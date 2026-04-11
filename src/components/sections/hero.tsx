"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { SocialIcons } from "@/components/ui/social-icons";
import { ArrowDown, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/cinematic/text-reveal";
import { MagneticButton } from "@/components/cinematic/magnetic-button";

function InteractiveGrid({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const bgX = useTransform(smoothX, (v) => `${v * 0.02}px`);
  const bgY = useTransform(smoothY, (v) => `${v * 0.02}px`);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`absolute inset-0 pointer-events-auto ${className ?? ""}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        backgroundPositionX: bgX,
        backgroundPositionY: bgY,
      }}
      aria-hidden="true"
    />
  );
}

function GlowOrb({
  delay,
  className,
}: {
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.06, 0.12, 0.06],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen-safe flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Spotlight — follows mouse */}
      <Spotlight
        className="from-neutral-50/20 via-neutral-200/10 to-transparent -top-40 left-0 md:left-60 md:-top-20"
        size={400}
      />

      {/* Animated glow orbs */}
      <GlowOrb
        delay={0}
        className="-top-[10%] right-[60%] w-[500px] h-[500px] bg-[rgba(180,194,159,0.08)] blur-[80px]"
      />
      <GlowOrb
        delay={3}
        className="bottom-[5%] left-[65%] w-[400px] h-[400px] bg-[rgba(180,194,159,0.06)] blur-[70px]"
      />
      <GlowOrb
        delay={1.5}
        className="top-[40%] left-[20%] w-[300px] h-[300px] bg-[rgba(180,194,159,0.04)] blur-[90px]"
      />

      {/* Interactive grid background */}
      <InteractiveGrid />

      <motion.div
        className="max-w-[1280px] mx-auto w-full px-6 md:px-8 pt-[100px] md:pt-[110px] pb-16 flex flex-col lg:flex-row items-center gap-8 relative z-10"
        variants={prefersReducedMotion ? undefined : stagger}
        initial="hidden"
        animate="show"
      >
        {/* Left — Bio & CTAs */}
        <div className="flex-1">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-bg-elevated)] border border-[rgba(70,72,61,0.15)] rounded-full mb-8"
            variants={fadeUp}
          >
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            <span className="font-[family-name:var(--font-body)] font-bold text-[11px] text-[var(--color-accent-muted)] tracking-[1.5px] uppercase">
              CSIE Student &middot; AI Intern
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <p className="font-[family-name:var(--font-logo)] text-[32px] md:text-[38px] text-white mb-2">
              Kathleen Chen
            </p>
          </motion.div>

          {/* Headline — gradient text */}
          <div className="mb-4">
            <TextReveal
              text="Welcome"
              as="h1"
              className="block font-[family-name:var(--font-display)] font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9] tracking-[-0.06em] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent"
              delay={0.4}
            />
            <TextReveal
              text="To My"
              as="span"
              className="block font-[family-name:var(--font-display)] font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9] tracking-[-0.06em] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent"
              delay={0.5}
            />
            <TextReveal
              text="Portfolio"
              as="span"
              className="block font-[family-name:var(--font-display)] font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9] tracking-[-0.06em] bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-muted)] bg-clip-text text-transparent"
              delay={0.6}
            />
          </div>

          {/* Tagline */}
          <motion.p
            className="max-w-[480px] font-[family-name:var(--font-body)] text-[16px] md:text-[18px] text-neutral-400 leading-relaxed mb-10"
            variants={fadeUp}
          >
            3rd-year CSIE student at Chang Gung University, integrating advanced
            AI into functional web &amp; mobile systems as an AI Intern.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-10"
            variants={fadeUp}
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-[family-name:var(--font-heading)] font-bold text-[15px] tracking-wide cursor-pointer overflow-hidden group min-h-[48px] bg-gradient-to-r from-neutral-50 to-neutral-400 text-black shadow-[0_0_24px_rgba(180,194,159,0.15)] hover:shadow-[0_0_40px_rgba(180,194,159,0.25)] transition-shadow"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#about"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-[family-name:var(--font-heading)] font-bold text-[15px] tracking-wide cursor-pointer min-h-[48px] border border-white/20 text-neutral-300 hover:text-white hover:border-white/40 transition-all"
            >
              <ArrowDown size={16} />
              Learn More
            </MagneticButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeUp}>
            <SocialIcons />
          </motion.div>
        </div>

        {/* Right — 3D Spline Robot */}
        <motion.div
          className="hidden lg:block flex-1 relative"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {/* Radial glow behind 3D scene */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at center, rgba(180,194,159,0.08) 0%, transparent 70%)",
                "radial-gradient(circle at center, rgba(180,194,159,0.14) 0%, transparent 70%)",
                "radial-gradient(circle at center, rgba(180,194,159,0.08) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-full h-[560px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              transparent
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom cinematic fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
