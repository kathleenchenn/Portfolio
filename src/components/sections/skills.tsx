"use client";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { Terminal, Wrench, Globe, Award, ExternalLink } from "lucide-react";

const devTools = [
  { name: "HTML", img: "/images/skills/html.png" },
  { name: "CSS", img: "/images/skills/css.png" },
  { name: "JS", img: "/images/skills/js.png" },
  { name: "ReactJS", img: "/images/skills/react.png" },
  { name: "Django", img: "/images/skills/django.png" },
  { name: "NodeJS", img: "/images/skills/nodejs.png" },
  { name: "Python", img: "/images/skills/python.png" },
  { name: "MySQL", img: "/images/skills/mysql.png" },
  { name: "Kotlin", img: "/images/skills/kotlin.png" },
  { name: "Firebase", img: "/images/skills/firebase.png" },
  { name: "C++", img: "/images/skills/cpp.png" },
  { name: "C", img: "/images/skills/c.png" },
];

const ecosystem = [
  { name: "Figma", img: "/images/skills/figma.png" },
  { name: "Canva", img: "/images/skills/canva.png" },
  { name: "Framer", img: "/images/skills/framer.png" },
  { name: "VS Code", img: "/images/skills/vscode.png" },
  { name: "GitHub", img: "/images/skills/github.png" },
  { name: "Android Studio", img: "/images/skills/android-studio.png" },
  { name: "Docker", img: "/images/skills/docker.png" },
  { name: "Google Dev tools", img: "/images/skills/google-dev.png" },
  { name: "Lovable", img: "/images/skills/lovable.png" },
  { name: "Claude", img: "/images/skills/claude.png" },
  { name: "Vercel", img: "/images/skills/vercel.png" },
  { name: "Netlify", img: "/images/skills/netlify.png" },
];

const languages = [
  {
    code: "CN",
    name: "Chinese",
    level: "TOCFL Band B",
    description:
      "Fluent in traditional Chinese, with the ability to handle technical documentation.",
    progress: 85,
  },
  {
    code: "EN",
    name: "English",
    level: "CEFR C1",
    description:
      "Near-native fluency with expertise in academic writing and international presentation delivery.",
    progress: 92,
  },
  {
    code: "ID",
    name: "Indonesian",
    level: "Professional",
    description: "Native command of the language.",
    progress: 100,
  },
];

function SkillCard({ name, img }: { name: string; img: string }) {
  return (
    <StaggerItem>
      <div className="group bg-[var(--color-bg-card)] rounded-[32px] p-6 flex flex-col gap-4 hover:bg-[var(--color-bg-elevated)] transition-[background-color,transform] duration-250 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 cursor-default">
        <div className="w-[50px] h-[50px] relative">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <p className="font-[family-name:var(--font-body)] font-bold text-[16px] text-[var(--color-text-primary)] tracking-[1.6px]">
          {name}
        </p>
      </div>
    </StaggerItem>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] tracking-[-0.05em] text-white leading-[1]">
            Technical{" "}
            <span className="text-[var(--color-accent-muted)]">Arsenal</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-[672px] font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
            A selection of tools and technologies I use to build scalable,
            high-performance web applications—from core development to modern
            deployment.
          </p>
        </ScrollReveal>

        {/* Developer Tools */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <Terminal
                size={22}
                className="text-[var(--color-accent)]"
              />
              <h3 className="font-[family-name:var(--font-heading)] text-[30px] text-white">
                Developer Tools
              </h3>
              <div className="flex-1 ml-4">
                <div className="h-px bg-[var(--color-border-divider)]" />
              </div>
            </div>
          </ScrollReveal>
          <StaggerContainer
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
            staggerDelay={0.05}
          >
            {devTools.map((tool) => (
              <SkillCard key={tool.name} {...tool} />
            ))}
          </StaggerContainer>
        </div>

        {/* Engineering Ecosystem */}
        <div className="mt-16">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <Wrench size={22} className="text-[var(--color-accent)]" />
              <h3 className="font-[family-name:var(--font-heading)] text-[30px] text-white">
                Engineering Ecosystem
              </h3>
              <div className="flex-1 ml-4">
                <div className="h-px bg-[var(--color-border-divider)]" />
              </div>
            </div>
          </ScrollReveal>
          <StaggerContainer
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
            staggerDelay={0.05}
          >
            {ecosystem.map((tool) => (
              <SkillCard key={tool.name} {...tool} />
            ))}
          </StaggerContainer>
        </div>

        {/* Language Proficiency */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-1 h-9 bg-[var(--color-accent-tag)] mr-7 rounded-full" />
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-[29px] text-[var(--color-text-primary)]">
                  Language Proficiency
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-text-secondary)] tracking-[3px]">
                GLOBAL SCALES
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {languages.map((lang) => (
              <StaggerItem key={lang.code}>
                <div className="relative backdrop-blur-[10px] bg-[rgba(53,53,53,0.4)] rounded-[31px] p-8 overflow-hidden group hover:bg-[rgba(53,53,53,0.6)] transition-colors duration-300">
                  {/* Background code */}
                  <span className="absolute -top-4 -right-4 font-[family-name:var(--font-heading)] font-bold text-[123px] text-[rgba(255,255,255,0.05)] leading-none select-none pointer-events-none">
                    {lang.code}
                  </span>

                  <div className="relative">
                    <Globe
                      size={29}
                      className="text-[var(--color-accent)] mb-8"
                    />
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[23px] text-[var(--color-text-primary)] mb-3">
                      {lang.name}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent-dim-2)] text-[var(--color-accent-tag)] font-[family-name:var(--font-body)] font-bold text-[12px] tracking-[0.5px] uppercase rounded-full mb-4">
                      {lang.level}
                    </span>
                    <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)] leading-[1.625] mb-8 min-h-[66px]">
                      {lang.description}
                    </p>

                    {/* Progress bar */}
                    <div className="h-1 bg-[#353535] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-accent-tag)] rounded-full transition-all duration-1000"
                        style={{ width: `${lang.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Professional Certifications */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-1 h-9 bg-[var(--color-accent-tag)] mr-7 rounded-full" />
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-[29px] text-[var(--color-text-primary)]">
                  Professional Certifications
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-text-secondary)] tracking-[3px]">
                VALIDATED SKILLS
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-12 gap-6">
            {/* TOCFL Card */}
            <ScrollReveal className="col-span-12 md:col-span-7">
              <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[31px] overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative h-[350px]">
                    <img
                      src="/images/certs/tocfl.png"
                      alt="TOCFL Certificate"
                      className="w-full h-full object-contain opacity-80"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-accent-tag)] mb-3">
                      Issued by the Taiwan government
                    </p>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[23px] text-[var(--color-text-primary)] mb-3">
                      TOCFL Band B
                    </h4>
                    <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-8">
                      Proficient in Mandarin at TOCFL Band B level for everyday
                      communication and professional contexts.
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1AC3uEk20AyDXg7Z9OHKJuZCDfWdCG069/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] font-bold text-[15px] text-white hover:text-[var(--color-accent)] transition-colors"
                    >
                      View Credential
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* English Score Card */}
            <ScrollReveal className="col-span-12 md:col-span-5" delay={0.15}>
              <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[31px] p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[19px] text-[var(--color-text-primary)]">
                    English Score
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-accent-tag)] uppercase">
                    Issued by British Council
                  </p>
                </div>
                <div className="relative flex-1 rounded-[31px] overflow-hidden mb-6">
                  <img
                    src="/images/certs/english.png"
                    alt="English certificate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                </div>
                <a
                  href="https://drive.google.com/file/d/17xEOjX9U-Vtb2F0KBYXarq_wrb3F8j56/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] font-bold text-[15px] text-white hover:text-[var(--color-accent)] transition-colors"
                >
                  View Credential
                  <ExternalLink size={12} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
