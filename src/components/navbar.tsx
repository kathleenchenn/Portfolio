"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function NavLink({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      role="listitem"
      aria-current={isActive ? "page" : undefined}
      className="relative font-[family-name:var(--font-nav)] text-[14px] min-h-[44px] min-w-[44px] px-3 flex items-center group"
    >
      <span
        className={`transition-colors duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isActive
            ? "text-[var(--color-accent)] font-extrabold"
            : "text-[var(--color-text-secondary)] font-semibold group-hover:text-white"
        }`}
      >
        {label}
      </span>
      {/* Active underline */}
      {isActive && (
        <motion.div
          className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-[var(--color-accent)] rounded-full"
          layoutId="nav-underline"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      {/* Hover underline (non-active) */}
      {!isActive && (
        <motion.div
          className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-white/40 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        />
      )}
    </button>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);

    // Hide on scroll down, show on scroll up
    if (latest > lastScrollY.current && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;

    // Active section detection
    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        scrolled
          ? "bg-[rgba(19,19,19,0.6)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
      initial={prefersReducedMotion ? false : { y: -100 }}
      animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      role="banner"
    >
      <nav
        className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-8 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="font-[family-name:var(--font-logo)] text-[26px] md:text-[28px] text-white hover:text-[var(--color-accent)] transition-colors min-h-[44px] flex items-center"
          aria-label="Kathleen Chen - Go to home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Kathleen Chen
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]" role="list">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              isActive={activeSection === link.href.slice(1)}
              onClick={() => handleClick(link.href)}
            />
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1Vnfj0DdtJ9QYLdwv1HyPDFwBqpd9l9yt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center px-7 py-2.5 min-h-[44px] bg-[var(--color-accent)] text-[var(--color-text-dark)] font-[family-name:var(--font-heading)] font-bold text-[14px] rounded-full shadow-[0_0_20px_rgba(180,194,159,0.15)]"
          aria-label="Download resume (opens in new tab)"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(180,194,159,0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Resume
        </motion.a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-3 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            className="block w-6 h-[2px] bg-[var(--color-accent)] rounded-full origin-center"
            animate={
              mobileOpen
                ? { rotate: 45, y: 7, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-4 h-[2px] bg-[var(--color-accent)] rounded-full"
            animate={
              mobileOpen
                ? { opacity: 0, x: -10 }
                : { opacity: 1, x: 0 }
            }
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-[var(--color-accent)] rounded-full origin-center"
            animate={
              mobileOpen
                ? { rotate: -45, y: -7, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[60px] bg-[rgba(13,13,13,0.97)] backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
          >
            <motion.div
              className="flex flex-col items-center justify-center gap-2 h-full pb-20"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  role="menuitem"
                  className={`font-[family-name:var(--font-nav)] text-[24px] min-h-[56px] px-8 flex items-center rounded-2xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-[var(--color-accent)] font-extrabold bg-white/[0.04]"
                      : "text-[var(--color-text-secondary)] font-bold hover:text-white"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1Vnfj0DdtJ9QYLdwv1HyPDFwBqpd9l9yt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-10 py-4 min-h-[56px] bg-[var(--color-accent)] text-[var(--color-text-dark)] font-[family-name:var(--font-heading)] font-bold text-[18px] rounded-full shadow-[0_0_30px_rgba(180,194,159,0.2)]"
                aria-label="Download resume (opens in new tab)"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
