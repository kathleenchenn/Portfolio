"use client";

import { useRef, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MouseGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
}

export function MouseGlow({
  children,
  className = "",
  glowColor = "rgba(191, 204, 154, 0.08)",
  glowSize = 400,
}: MouseGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY, prefersReducedMotion]
  );

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Glow element */}
      <motion.div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          left: springX,
          top: springY,
          width: glowSize,
          height: glowSize,
          x: -glowSize / 2,
          y: -glowSize / 2,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
