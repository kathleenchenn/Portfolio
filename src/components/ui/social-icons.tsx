"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Link2, FileText, Briefcase } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  ring: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/kathleenchenn",
    icon: <GitBranch className="size-5" />,
    gradient: "from-gray-700 via-gray-800 to-black",
    ring: "rgba(156,163,175,0.4)",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kathleen-chen",
    icon: <Link2 className="size-5" />,
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    ring: "rgba(59,130,246,0.4)",
  },
  {
    name: "104 Job Bank",
    href: "https://pda.104.com.tw/profile/share/6SoIGWqG73MWGRSCzSOB4bA1robBJE9c",
    icon: <Briefcase className="size-5" />,
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    ring: "rgba(249,115,22,0.4)",
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1Vnfj0DdtJ9QYLdwv1HyPDFwBqpd9l9yt/view?usp=drive_link",
    icon: <FileText className="size-5" />,
    gradient: "from-purple-600 via-purple-700 to-purple-800",
    ring: "rgba(147,51,234,0.4)",
  },
];

export function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative inline-flex">
      <div className="relative flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-gradient-to-b from-[rgba(42,42,42,0.5)] to-[rgba(27,28,28,0.5)] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Glass sheen */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center size-12 rounded-xl cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`${social.name} (opens in new tab)`}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Gradient background on hover */}
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.gradient}`}
              initial={false}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 0.8,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Glow ring on hover */}
            <motion.div
              className="absolute -inset-1 rounded-xl pointer-events-none"
              initial={false}
              animate={{
                boxShadow:
                  hoveredIndex === index
                    ? `0 0 20px ${social.ring}, 0 0 40px ${social.ring}`
                    : "0 0 0px transparent",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Default subtle bg */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/[0.06]"
              animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />

            {/* Icon */}
            <motion.span
              className="relative z-10 text-slate-400 group-hover:text-white transition-colors duration-200"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                rotate: hoveredIndex === index ? [0, -8, 8, 0] : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {social.icon}
            </motion.span>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-gradient-to-br ${social.gradient} text-white text-[11px] font-bold whitespace-nowrap shadow-xl pointer-events-none`}
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {social.name}
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-gradient-to-br ${social.gradient}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom line indicator */}
            <motion.div
              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-white"
              initial={false}
              animate={{
                width: hoveredIndex === index ? 20 : 0,
                opacity: hoveredIndex === index ? 0.8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
