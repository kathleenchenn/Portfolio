"use client";

import { useEffect, useRef } from "react";

export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Only show on fine pointer devices (not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      dot.style.left = `${x - 4}px`;
      dot.style.top = `${y - 4}px`;
      requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => dot.classList.add("hovering");
    const onLeaveInteractive = () => dot.classList.remove("hovering");

    window.addEventListener("mousemove", move, { passive: true });
    requestAnimationFrame(animate);

    // Watch for hover on interactive elements
    const interactives = document.querySelectorAll(
      "a, button, [role='button'], .card-hover"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    // Re-observe when DOM changes
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll(
        "a, button, [role='button'], .card-hover"
      );
      newInteractives.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
