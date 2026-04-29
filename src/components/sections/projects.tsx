"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
} from "@/components/ui/scroll-reveal";
import {
  ExternalLink,
  X,
  ArrowRight,
  Sparkles,
  GitBranch,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Info,
  CheckCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MagneticButton } from "@/components/cinematic/magnetic-button";
import {
  projects,
  type ProjectData,
  type SkillCategory,
  type SkillEntry,
  type ContentBlock,
} from "@/lib/projects";

// ─── Shared animation presets ───────────────────────
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: EASE_OUT_QUART },
});

// ─── Section label ──────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-body)] text-[11px] text-[var(--color-accent-muted)] tracking-[3px] uppercase mb-5">
      {children}
    </p>
  );
}

// ─── PopItem (card entrance) ────────────────────────
function PopItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.92, y: 16 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Project Card ───────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick: () => void;
}) {
  const heightClass =
    project.size === "large"
      ? "h-[280px]"
      : project.size === "medium"
        ? "h-[240px]"
        : "h-[200px]";

  return (
    <motion.article
      layoutId={`project-card-${project.id}`}
      className="group cursor-pointer card-hover"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Image container */}
      <motion.div
        layoutId={`project-image-${project.id}`}
        className={`relative ${heightClass} bg-[var(--color-bg-elevated)] rounded-[24px] overflow-hidden mb-4 border border-[var(--color-border-subtle)] group-hover:border-[rgba(180,194,159,0.1)] transition-[border-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]`}
      >
        {/* Project image */}
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,19,19,0.9)] via-[rgba(19,19,19,0.2)] to-transparent" />

        {/* Category tag */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[1px] rounded-full border border-[var(--color-border-subtle)]">
          {project.category}
        </span>
      </motion.div>

      {/* Content */}
      <motion.h3
        layoutId={`project-title-${project.id}`}
        className={`font-[family-name:var(--font-heading)] font-bold text-white mb-2 ${
          project.size === "small" ? "text-[18px]" : "text-[22px]"
        }`}
      >
        {project.title}
      </motion.h3>
      <p
        className={`font-[family-name:var(--font-body)] text-[var(--color-text-secondary)] leading-relaxed mb-4 ${
          project.size === "small" ? "text-[13px]" : "text-[14px]"
        } line-clamp-3`}
      >
        {project.description}
      </p>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[var(--color-bg-chip)] text-[var(--color-text-chip)] font-[family-name:var(--font-body)] text-[12px] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 px-5 py-2 border border-[var(--color-border-subtle)] rounded-full font-[family-name:var(--font-body)] text-[14px] text-white group-hover:border-[var(--color-accent-muted)] group-hover:text-[var(--color-accent)] transition-colors min-h-[44px]">
          View Details
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-full font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent-muted)] transition-colors min-h-[44px]"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            <GitBranch size={14} />
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ─── Screenshot Gallery ─────────────────────────────
function ScreenshotGallery({ project }: { project: ProjectData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = project.screenshots;
  const prefersReducedMotion = useReducedMotion();
  const isApp = project.displayType === "app";

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(
        ((index % screenshots.length) + screenshots.length) % screenshots.length
      );
    },
    [screenshots.length]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [project.id]);

  if (screenshots.length === 0) return null;

  if (isApp) {
    return (
      <div>
        <SectionLabel>Screenshots</SectionLabel>
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[24px] text-white mb-8">
          App Screens
        </h3>

        {/* Phone mockup carousel */}
        <div className="flex flex-col items-center">
          {/* Phone frame */}
          <div className="relative w-[280px] sm:w-[300px]">
            <div className="rounded-[40px] border-[3px] border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.6)] p-[6px] shadow-[0_0_60px_rgba(0,0,0,0.4)]">
              {/* Notch */}
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-[14px] z-10" />

              {/* Screen */}
              <div className="relative rounded-[34px] overflow-hidden bg-black aspect-[9/19.5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${project.id}-${activeIndex}`}
                    src={screenshots[activeIndex].src}
                    alt={screenshots[activeIndex].alt}
                    className="w-full h-full object-cover"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE_OUT_QUART }}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Nav arrows — outside the phone */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[var(--color-border-subtle)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[var(--color-border-subtle)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          {screenshots[activeIndex].caption && (
            <p className="mt-5 font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)] text-center max-w-[400px]">
              {screenshots[activeIndex].caption}
            </p>
          )}

          {/* Dot indicators */}
          {screenshots.length > 1 && (
            <div className="flex gap-2 mt-5">
              {screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-[8px] h-[8px] rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-[var(--color-accent)] w-[24px]"
                      : "bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]"
                  }`}
                  aria-label={`View screenshot ${i + 1}: ${shot.alt}`}
                />
              ))}
            </div>
          )}

          {/* Thumbnail strip — phone-shaped thumbnails */}
          {screenshots.length > 1 && (
            <div className="flex gap-3 mt-6">
              {screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-[48px] aspect-[9/19.5] rounded-[10px] overflow-hidden border-2 transition-[border-color,opacity] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    i === activeIndex
                      ? "border-[var(--color-accent-muted)] opacity-100"
                      : "border-transparent opacity-40 hover:opacity-70"
                  }`}
                  aria-label={`View screenshot ${i + 1}: ${shot.alt}`}
                >
                  <img
                    src={shot.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionLabel>Screenshots</SectionLabel>
      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[24px] text-white mb-8">
        Interface Gallery
      </h3>

      {/* Main preview — browser-frame style */}
      <div className="rounded-[16px] overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border-subtle)]">
          <div className="flex gap-[6px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[rgba(255,255,255,0.08)]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[rgba(255,255,255,0.08)]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[rgba(255,255,255,0.08)]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-[320px] mx-auto h-[26px] rounded-[8px] bg-[rgba(255,255,255,0.04)] border border-[var(--color-border-subtle)] flex items-center justify-center">
              <span className="font-[family-name:var(--font-body)] text-[11px] text-[var(--color-text-muted)]">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.app
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot viewport */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-primary)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.id}-${activeIndex}`}
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              className="absolute inset-0 w-full h-full object-contain"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT_QUART }}
              loading="lazy"
            />
          </AnimatePresence>

          {/* Nav arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[var(--color-border-subtle)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[var(--color-border-subtle)] flex items-center justify-center text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        {screenshots[activeIndex].caption && (
          <div className="px-5 py-3 border-t border-[var(--color-border-subtle)]">
            <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
              {screenshots[activeIndex].caption}
            </p>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {screenshots.length > 1 && (
        <div className="flex gap-3 mt-4">
          {screenshots.map((shot, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-1 aspect-[16/10] rounded-[10px] overflow-hidden border-2 transition-[border-color,opacity] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                i === activeIndex
                  ? "border-[var(--color-accent-muted)] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-75"
              }`}
              aria-label={`View screenshot ${i + 1}: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt=""
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Skills By Category ─────────────────────────────
function SkillsByCategory({ skills }: { skills: SkillEntry[] }) {
  const grouped = useMemo(() => {
    const map = new Map<SkillCategory, SkillEntry[]>();
    for (const skill of skills) {
      const list = map.get(skill.category) || [];
      list.push(skill);
      map.set(skill.category, list);
    }
    return map;
  }, [skills]);

  const categoryLabels: Record<SkillCategory, { label: string; icon: React.ReactNode }> = {
    Frontend: { label: "Frontend", icon: <Monitor size={14} /> },
    Backend: { label: "Backend", icon: <Layers size={14} /> },
    Mobile: { label: "Mobile", icon: <Monitor size={14} /> },
    Tools: { label: "Tools & Workflow", icon: <Layers size={14} /> },
    Data: { label: "Data & ML", icon: <Layers size={14} /> },
  };

  return (
    <div>
      <SectionLabel>Skills Used</SectionLabel>
      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[24px] text-white mb-8">
        Technology Stack
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from(grouped.entries()).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--color-accent)]">
                {categoryLabels[category]?.icon}
              </span>
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[15px] text-white tracking-[1px] uppercase">
                {categoryLabels[category]?.label ?? category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-full pl-2 pr-4 py-2 hover:border-[var(--color-accent-dim-2)] transition-colors duration-200"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt=""
                      className="w-[22px] h-[22px] object-contain"
                      loading="lazy"
                    />
                  )}
                  <span className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-primary)]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Content Block Renderer ─────────────────────────
// Renders a single ContentBlock. Compose freely in any
// order — the overlay maps over the project's content array.

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[22px] text-white mt-2">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.75] max-w-[72ch]">
          {block.text}
        </p>
      );

    case "bullets": {
      return (
        <div>
          {block.label && (
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-[16px] text-white mb-4">
              {block.label}
            </h4>
          )}
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-[family-name:var(--font-heading)] font-bold text-[13px] text-[var(--color-accent-muted)] mt-[2px] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case "callout": {
      const variants = {
        warning: {
          icon: <AlertTriangle size={16} className="text-[rgba(230,180,120,0.8)]" />,
          titleColor: "text-[rgba(230,180,120,0.9)]",
          borderColor: "border-[rgba(230,180,120,0.15)]",
          bgColor: "bg-[rgba(230,180,120,0.04)]",
        },
        success: {
          icon: <CheckCircle size={16} className="text-[var(--color-accent)]" />,
          titleColor: "text-[var(--color-accent)]",
          borderColor: "border-[rgba(180,194,159,0.15)]",
          bgColor: "bg-[rgba(180,194,159,0.04)]",
        },
        info: {
          icon: <Info size={16} className="text-[rgba(150,180,220,0.8)]" />,
          titleColor: "text-[rgba(150,180,220,0.9)]",
          borderColor: "border-[rgba(150,180,220,0.15)]",
          bgColor: "bg-[rgba(150,180,220,0.04)]",
        },
        accent: {
          icon: <Sparkles size={16} className="text-[var(--color-accent)]" />,
          titleColor: "text-[var(--color-accent)]",
          borderColor: "border-[var(--color-accent-dim)]",
          bgColor: "bg-[rgba(180,194,159,0.04)]",
        },
      };
      const v = variants[block.variant ?? "info"];

      return (
        <div
          className={`${v.bgColor} ${v.borderColor} border rounded-[20px] p-7`}
        >
          <div className="flex items-center gap-2 mb-3">
            {v.icon}
            <h4 className={`font-[family-name:var(--font-heading)] font-bold text-[15px] ${v.titleColor} uppercase tracking-[1px]`}>
              {block.title}
            </h4>
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)] leading-[1.75]">
            {block.text}
          </p>
        </div>
      );
    }

    case "stats":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {block.items.map((stat, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-card)] rounded-[16px] p-6 border border-[var(--color-border-subtle)] text-center"
            >
              <span className="font-[family-name:var(--font-heading)] font-bold text-[32px] text-[var(--color-accent)] leading-none block">
                {stat.value}
              </span>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      );

    case "feature-grid":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {block.items.map((feature, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-card)] rounded-[20px] p-6 border border-[var(--color-border-subtle)]"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-accent-dim)] flex items-center justify-center mb-4">
                <span className="font-[family-name:var(--font-heading)] font-bold text-[14px] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[16px] text-white mb-2">
                {feature.title}
              </h4>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ─── Case Study Overlay ─────────────────────────────
function CaseStudyOverlay({
  project,
  onClose,
}: {
  project: ProjectData;
  onClose: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const anim = (delay: number) =>
    prefersReducedMotion ? {} : fadeUp(delay);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-[rgba(0,0,0,0.85)] backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Content */}
      <div className="relative min-h-screen py-8 px-4 md:px-8">
        <motion.div
          layoutId={`project-card-${project.id}`}
          className="relative max-w-[1100px] mx-auto bg-[var(--color-bg-primary)] rounded-[32px] border border-[var(--color-border-subtle)] overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>

          {/* ── Hero ── */}
          <motion.div
            layoutId={`project-image-${project.id}`}
            className="relative h-[300px] md:h-[420px] overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[rgba(19,19,19,0.4)] to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-8 left-8 right-20">
              <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-accent-muted)] tracking-[2px] uppercase mb-2">
                Case Study &bull; {project.category}
              </p>
              <motion.h2
                layoutId={`project-title-${project.id}`}
                className="font-[family-name:var(--font-heading)] font-bold text-[36px] md:text-[48px] text-white leading-tight"
              >
                {project.title}
              </motion.h2>
              <p className="mt-2 font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] max-w-[600px]">
                {project.subtitle}
              </p>
            </div>
          </motion.div>

          {/* ── Case Study Body ── */}
          <div className="px-8 md:px-16 py-12 space-y-8">

            {/* ── 1. Content Blocks (flexible narrative) ── */}
            <motion.div className="space-y-6" {...anim(0.15)}>
              <SectionLabel>Project Overview</SectionLabel>
              {project.content.map((block, i) => (
                <ContentBlockRenderer key={i} block={block} />
              ))}
            </motion.div>

            {/* ── 2. Screenshots Gallery ── */}
            {project.screenshots.length > 0 && (
              <>
                <div className="editorial-divider" />
                <motion.div {...anim(0.2)}>
                  <ScreenshotGallery project={project} />
                </motion.div>
              </>
            )}

            {/* ── 3. Skills Used (categorized) ── */}
            {project.skills.length > 0 && (
              <>
                <div className="editorial-divider" />
                <motion.div {...anim(0.25)}>
                  <SkillsByCategory skills={project.skills} />
                </motion.div>
              </>
            )}

            {/* ── 4. Tech Stack ── */}
            {project.techStack.length > 0 && (
              <motion.div {...anim(0.3)}>
                <SectionLabel>Under the Hood</SectionLabel>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[24px] text-white mb-8">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-full px-5 py-3"
                    >
                      <span className="font-[family-name:var(--font-body)] font-bold text-[14px] text-white">
                        {tech.name}
                      </span>
                      <span className="text-[var(--color-border-divider)]">
                        &bull;
                      </span>
                      <span className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Action buttons ── */}
            <div className="flex justify-center gap-4 pt-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-full hover:bg-[var(--color-accent)] transition-colors min-h-[44px]"
                  aria-label="View on GitHub (opens in new tab)"
                >
                  <GitBranch size={16} />
                  View on GitHub
                </a>
              )}
              <MagneticButton
                onClick={onClose}
                className="flex items-center gap-2 px-8 py-3 bg-[var(--color-bg-elevated)] text-white font-[family-name:var(--font-heading)] font-bold text-[15px] rounded-full border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-muted)] transition-colors min-h-[44px]"
              >
                &larr; Back to Projects
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Projects Section ───────────────────────────────
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const featured = projects.filter((p) => p.size === "large");
  const medium = projects.filter((p) => p.size === "medium");
  const small = projects.filter((p) => p.size === "small");

  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] tracking-[3px] uppercase mb-4">
            Curated Works
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] tracking-[-0.05em] leading-[1]">
            <span className="text-[var(--color-accent-muted)]">CSIE &</span>
            <br />
            <span className="text-white">Full Stack Developer</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-[672px] font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
            I focused on building robust software at every level. My
            experience ranges from troubleshooting legacy system architectures
            and parallel programming to developing full-stack mobile and web
            applications. I enjoy the challenge of turning complex data into
            high-performance user tools.
          </p>
        </ScrollReveal>

        {/* Bento Grid: Featured (2 large) */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          staggerDelay={0.15}
        >
          {featured.map((project) => (
            <PopItem key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </PopItem>
          ))}
        </StaggerContainer>

        {/* Medium projects (2) */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          staggerDelay={0.15}
        >
          {medium.map((project) => (
            <PopItem key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </PopItem>
          ))}
        </StaggerContainer>

        {/* Small projects (3 columns) */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          staggerDelay={0.1}
        >
          {small.map((project) => (
            <PopItem key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </PopItem>
          ))}
        </StaggerContainer>

        {/* Case study modal */}
        <AnimatePresence>
          {selectedProject && (
            <CaseStudyOverlay
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
