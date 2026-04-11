"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Bot, Monitor, GraduationCap, Languages } from "lucide-react";

const timelineEntries = [
  {
    date: "JAN 2026 — PRESENT",
    title: "AI Intern",
    description:
      "Exploring the frontiers of generative models and machine learning applications in real-world environments.",
    icon: Bot,
    side: "left" as const,
    chips: ["PyTorch", "LLM", "Research"],
    image: null,
    bullets: null,
  },
  {
    date: "FEB 2025 — PRESENT",
    title: "Computer Service Centre",
    description:
      "Providing technical infrastructure support and managing high-performance computing resources for faculty and students.",
    icon: Monitor,
    side: "right" as const,
    chips: null,
    image: null,
    bullets: [
      "Resolve complex technical cases for teachers and school departments to minimize classroom downtime.",
      "Repair and maintain computer hardware and software systems across the entire school service network.",
    ],
  },
  {
    date: "SEPT 2023 — PRESENT",
    title: "CSIE Student",
    description:
      "Pursuing Computer Science and Information Engineering at Chang Gung University with a focus on algorithm design and software architecture.",
    icon: GraduationCap,
    side: "left" as const,
    chips: ["CSIE", "CGU"],
    image: "/images/cgu.jpg",
  },
  {
    date: "JAN 2026 — PRESENT",
    title: "Freelance Language Teacher",
    description:
      "Conducting specialized English and Indonesian language sessions for corporate clients and university students.",
    icon: Languages,
    side: "right" as const,
    chips: null,
    image: "/images/language-teacher.jpg",
    imageLabel: "Bilingual Education Specialist",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] sm:text-[56px] md:text-[72px] text-center tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1]">
            Professional{" "}
            <span className="text-[var(--color-accent-muted)]">Journey</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-center max-w-[672px] mx-auto font-[family-name:var(--font-body)] text-[18px] text-[var(--color-text-secondary)] leading-relaxed">
            A curated timeline of academic excellence, technical growth, and
            professional contributions across technology and language education.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border-divider)] opacity-20 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-24">
            {timelineEntries.map((entry, idx) => (
              <div
                key={entry.title}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-8 items-center"
              >
                {/* Left side */}
                <div
                  className={`${entry.side === "left" ? "" : "order-1 md:order-none"}`}
                >
                  {entry.side === "left" ? (
                    <ScrollReveal direction="left">
                      <div className="text-right">
                        <p className="font-[family-name:var(--font-body)] text-[16px] text-[var(--color-accent-muted)] tracking-[1.6px] mb-2">
                          {entry.date}
                        </p>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[30px] text-[var(--color-text-primary)] mb-3">
                          {entry.title}
                        </h3>
                        <p className="font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ) : (
                    <ScrollReveal direction="left">
                      {entry.bullets ? (
                        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[32px] p-8">
                          <div className="space-y-4">
                            {entry.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-muted)] mt-2 shrink-0" />
                                <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-primary)] leading-relaxed">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : entry.image ? (
                        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[32px] p-8">
                          <div className="rounded-[32px] overflow-hidden h-[192px] mb-6 grayscale opacity-80">
                            <img
                              src={entry.image}
                              alt={entry.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {entry.imageLabel && (
                            <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] tracking-[-0.6px] uppercase">
                              {entry.imageLabel}
                            </p>
                          )}
                        </div>
                      ) : null}
                    </ScrollReveal>
                  )}
                </div>

                {/* Center node */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-accent-muted)] flex items-center justify-center shadow-[0_0_15px_rgba(191,204,154,0.3)]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.1,
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  >
                    <entry.icon
                      size={20}
                      className="text-[var(--color-accent-muted)]"
                    />
                  </motion.div>
                </div>

                {/* Right side */}
                <div>
                  {entry.side === "right" ? (
                    <ScrollReveal direction="right">
                      <div>
                        <p className="font-[family-name:var(--font-body)] text-[16px] text-[var(--color-accent-muted)] tracking-[1.6px] mb-2">
                          {entry.date}
                        </p>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[30px] text-[var(--color-text-primary)] mb-3">
                          {entry.title}
                        </h3>
                        <p className="font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ) : (
                    <ScrollReveal direction="right">
                      {entry.chips ? (
                        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[32px] p-8">
                          {entry.image && (
                            <div className="rounded-[32px] overflow-hidden h-[192px] mb-6 opacity-80">
                              <img
                                src={entry.image}
                                alt={entry.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex gap-2 flex-wrap">
                            {entry.chips.map((chip) => (
                              <span
                                key={chip}
                                className="px-3 py-1 bg-[var(--color-bg-chip)] text-[var(--color-text-chip)] font-[family-name:var(--font-body)] text-[12px] rounded-full"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </ScrollReveal>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
