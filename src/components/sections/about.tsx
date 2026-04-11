"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Code, Cpu, Palette, Sparkles } from "lucide-react";

const interests = [
  {
    icon: Code,
    title: "Software Dev",
    description:
      "Building scalable foundations with clean architecture and performance-first logic.",
  },
  {
    icon: Cpu,
    title: "AI & Intelligence",
    description:
      "Leveraging machine learning to create smarter, more predictive user interactions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting pixel-perfect layouts that prioritize accessibility and visual hierarchy.",
  },
  {
    icon: Sparkles,
    title: "Interactive Exp",
    description:
      "Designing digital moments that respond to the user with fluidity and grace.",
  },
];

const techChips = [
  "TypeScript",
  "Python",
  "React",
  "Figma",
  "Open AI",
  "TailwindCSS",
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--color-accent-dim)] blur-[60px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-12">
        {/* Header */}
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] tracking-[-0.05em] text-[var(--color-text-primary)] leading-[1]">
            Aspiring{" "}
            <span className="text-[var(--color-accent)]">UI Designer</span> &
            <br />
            <span className="text-[var(--color-accent)]">Web Developer</span>{" "}
            <span className="font-light">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 max-w-[672px] font-[family-name:var(--font-body)] font-extralight text-[22px] text-[#c2d8c4] tracking-widest leading-relaxed">
            I am a third-year Bachelor&apos;s student in Computer Science at
            Chang Gung University and an Overseas Chinese student with a strong
            passion for learning and self-improvement
          </p>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-12 mt-24">
          {/* Left column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-16">
            {/* About Me Card - Glassmorphism */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-muted)] to-[#b2cada] blur-[12px] opacity-10 rounded-[32px]" />
                <div className="relative glass rounded-[32px] p-14">
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles
                      size={20}
                      className="text-[var(--color-accent)]"
                    />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[30px] text-[var(--color-text-primary)]">
                      About Me
                    </h3>
                  </div>

                  <div className="space-y-6 font-[family-name:var(--font-body)] text-[18px] text-[#c7c7ba] leading-[1.625]">
                    <p>
                      I first became interested in building websites when I
                      enrolled in a web development class. What started as a
                      course quickly turned into something more—I found myself
                      wanting to learn beyond the classroom.
                    </p>
                    <p>
                      As I continued exploring, I began teaching myself UI/UX
                      design, focusing on how users interact with websites and
                      how to create clean, intuitive experiences. I enjoy turning
                      ideas into designs that are both functional and visually
                      appealing.
                    </p>
                    <p>
                      I also enjoy building full-stack web applications, where I
                      can work on both the front end and back end to create
                      complete, working systems.
                    </p>
                    <p>
                      I&apos;m always open to learning new things and
                      continuously improving my skills, aiming to build websites
                      and applications that are practical, engaging, and
                      well-designed.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento Interest Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
              {interests.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group bg-[var(--color-bg-card)] rounded-[32px] p-8 h-[212px] hover:bg-[var(--color-bg-elevated)] transition-[background-color,transform,box-shadow,border-color] duration-250 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default card-hover border border-transparent hover:border-[var(--color-border-subtle)]">
                    <item.icon
                      size={25}
                      className="text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[20px] text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)] leading-[1.43]">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-12 lg:pl-12">
            {/* Profile Image */}
            <ScrollReveal direction="right">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[533px]">
                <img
                  src="/images/portrait.jpg"
                  alt="Kathleen Chen professional portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-60" />
                <p className="absolute bottom-8 left-8 font-[family-name:var(--font-signature)] text-[48px] text-white">
                  Kathleen Chen
                </p>
              </div>
            </ScrollReveal>

            {/* Experience Snippet */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="glass-light rounded-[32px] p-8">
                <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-accent-muted)] tracking-[1.2px] uppercase mb-6">
                  Current Focus
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="font-[family-name:var(--font-body)] font-medium text-[16px] text-white">
                      B.S. in Computer Science
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)]">
                      Changgung University &bull; 2023-Present
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] font-medium text-[16px] text-white">
                      AI Intern
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)]">
                      Focusing on Full-Stack Web Development
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech Chips */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] tracking-[1.2px] uppercase mb-6">
                  Environment
                </p>
                <div className="flex flex-wrap gap-3">
                  {techChips.map((chip) => (
                    <span
                      key={chip}
                      className="px-5 py-2 bg-[var(--color-bg-chip)] text-[var(--color-text-chip)] font-[family-name:var(--font-body)] font-medium text-[14px] rounded-full hover:bg-[#3d5a69] transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
