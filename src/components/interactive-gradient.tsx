"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

export function InteractiveGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Smooth lerp toward target mouse position
      const lerp = prefersReducedMotion ? 1 : 0.03;
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * lerp;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * lerp;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      time += 0.003;

      // Clear with black base
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Primary green blob - follows mouse
      const g1 = ctx.createRadialGradient(
        w * (0.3 + mx * 0.4),
        h * (0.2 + my * 0.6),
        0,
        w * (0.3 + mx * 0.4),
        h * (0.2 + my * 0.6),
        w * 0.5
      );
      g1.addColorStop(0, "rgba(180, 194, 159, 0.12)");
      g1.addColorStop(0.4, "rgba(180, 194, 159, 0.04)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Secondary green blob - opposite movement
      const ox = Math.sin(time) * 0.15 + 0.5;
      const oy = Math.cos(time * 0.7) * 0.15 + 0.5;
      const g2 = ctx.createRadialGradient(
        w * (ox + (1 - mx) * 0.2),
        h * (oy + (1 - my) * 0.2),
        0,
        w * (ox + (1 - mx) * 0.2),
        h * (oy + (1 - my) * 0.2),
        w * 0.45
      );
      g2.addColorStop(0, "rgba(180, 194, 159, 0.08)");
      g2.addColorStop(0.5, "rgba(150, 168, 130, 0.03)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Subtle dark green accent
      const g3 = ctx.createRadialGradient(
        w * (0.7 + Math.sin(time * 1.3) * 0.1),
        h * (0.8 + Math.cos(time * 0.9) * 0.1),
        0,
        w * (0.7 + Math.sin(time * 1.3) * 0.1),
        h * (0.8 + Math.cos(time * 0.9) * 0.1),
        w * 0.35
      );
      g3.addColorStop(0, "rgba(120, 140, 100, 0.06)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
