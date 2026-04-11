"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Home,
  User,
  Wrench,
  FolderOpen,
  Briefcase,
  Mail,
} from "lucide-react";

const dockItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Wrench, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

function DockIcon({
  icon: Icon,
  label,
  href,
  mouseX,
}: {
  icon: typeof Home;
  label: string;
  href: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 64, 44]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={handleClick}
      style={{ width: prefersReducedMotion ? 44 : width, height: prefersReducedMotion ? 44 : width }}
      className="relative flex items-center justify-center rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] transition-colors group"
      aria-label={label}
    >
      <Icon size={20} />
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-md text-[11px] font-[family-name:var(--font-body)] text-[var(--color-text-primary)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
}

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-end gap-2 px-3 py-2 rounded-2xl bg-[rgba(19,19,19,0.7)] backdrop-blur-xl border border-[var(--color-border-subtle)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      aria-label="Quick navigation dock"
    >
      {dockItems.map((item) => (
        <DockIcon key={item.href} {...item} mouseX={mouseX} />
      ))}
    </motion.nav>
  );
}
