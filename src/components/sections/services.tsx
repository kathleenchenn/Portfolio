"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import {
  Code2,
  Palette,
  Brain,
  Database,
  Smartphone,
  Globe,
  Cpu,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface ServiceItem extends CardStackItem {
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    id: "swe",
    title: "Software Engineering & Development",
    description: "Crafting robust, scalable backends and logic.",
    icon: Code2,
    imageSrc: "/images/service/software-engineer.jpeg"
  },
  {
    id: "pm-uiux",
    title: "Product Manager / UI/UX Designer",
    description: "Bridging user needs with high-end aesthetics.",
    icon: Palette,
    imageSrc: "/images/service/ui-ux-imgae.jpeg",
  },
  {
    id: "ai-eng",
    title: "AI Engineering",
    description: "Implementing intelligent agents and LLM integrations.",
    icon: Brain,
    imageSrc: "/images/service/AI-data-enginnering.jpg",
  },
  {
    id: "info-mgmt",
    title: "Information Management",
    description: "Architecting complex data systems for efficiency.",
    icon: Database,
    imageSrc: "/images/service/information-management.jpg",
  },
  {
    id: "app-dev",
    title: "Applications Development",
    description: "Specialized in mobile and cross-platform functional apps.",
    icon: Smartphone,
    imageSrc: "/images/service/MobileApplicationDevelopment.jpeg",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance, responsive web systems.",
    icon: Globe,
    imageSrc: "/images/service/web-developer.jpeg",
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning Engineer",
    description: "Developing predictive models and neural networks.",
    icon: Cpu,
    imageSrc: "/images/service/machine-learning.jpeg"
  },
];

function ServiceCard({
  item,
  active,
}: {
  item: ServiceItem;
  active: boolean;
}) {
  const Icon = item.icon;
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-[#1a1f16] via-[var(--color-bg-card)] to-[#151a12] p-8 flex flex-col justify-between overflow-hidden">
      {/* Background image */}
      {item.imageSrc && (
        <img
          src={item.imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      )}

      {/* Dark overlay for text readability */}
      {item.imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      )}

      {/* Background glow (only when no image) */}
      {!item.imageSrc && (
        <div
          className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-500 ${
            active ? "opacity-30" : "opacity-0"
          }`}
          style={{ background: "radial-gradient(circle, #b4c29f 0%, transparent 70%)" }}
        />
      )}

      {/* Icon */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[rgba(180,194,159,0.1)] border border-[rgba(180,194,159,0.15)] flex items-center justify-center mb-6 backdrop-blur-sm">
          <Icon size={26} className="text-[#b4c29f]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[20px] text-white leading-tight mb-3">
          {item.title}
        </h3>
        {item.description && (
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white/80 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#b4c29f] to-transparent transition-all duration-500 ${
          active ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,194,159,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] tracking-[3px] uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] tracking-[-0.05em] text-white leading-[1]">
            My{" "}
            <span className="text-[#b4c29f]">Services</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-[672px] font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
            A versatile range of expertise spanning software engineering, design,
            and artificial intelligence — tailored to deliver impactful digital
            solutions.
          </p>
        </ScrollReveal>

        {/* Card Stack */}
        <div className="mt-16">
          <ScrollReveal>
            <CardStack
              items={services}
              autoAdvance
              intervalMs={3200}
              pauseOnHover
              loop
              showDots={false}
              cardWidth={480}
              cardHeight={300}
              overlap={0.52}
              spreadDeg={42}
              activeScale={1.05}
              inactiveScale={0.9}
              renderCard={(item, { active }) => (
                <ServiceCard item={item as ServiceItem} active={active} />
              )}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
