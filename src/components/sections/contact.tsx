"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SplineScene } from "@/components/ui/splite";
import { Mail, MapPin, GitBranch, Link2, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: GitBranch,
    label: "GitHub",
    handle: "@KATHLEENCHENN",
    href: "https://github.com/kathleenchenn",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    handle: "@KATHLEEN-CHEN",
    href: "https://linkedin.com/in/kathleen-chen",
    gradient: "from-blue-700 to-blue-900",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <p className="font-[family-name:var(--font-signature)] text-[48px] text-[var(--color-accent)] opacity-60 mb-2">
                Get in touch
              </p>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] tracking-[-0.025em] text-white leading-[1.1]">
                Let&apos;s Build{" "}
                <span className="text-[var(--color-accent-muted)]">
                  Together.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 max-w-[560px] font-[family-name:var(--font-body)] text-[18px] text-[var(--color-text-secondary)] leading-relaxed">
                Whether you have a specific project in mind or just want to say
                hello, I&apos;m always open to discussing new opportunities and
                creative collaborations.
              </p>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="mt-16 space-y-10">
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-bold text-[18px] text-white mb-4">
                    Inquiries
                  </h3>
                  <a
                    href="mailto:kathleenchen865@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:border-[var(--color-accent-muted)] transition-colors"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Mail
                        size={20}
                        className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors"
                      />
                    </motion.div>
                    <span className="font-[family-name:var(--font-body)] text-[20px] text-white group-hover:text-[var(--color-accent)] transition-colors">
                      kathleenchen865@gmail.com
                    </span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-bold text-[18px] text-white mb-4">
                    Location
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                      <MapPin
                        size={20}
                        className="text-[var(--color-text-secondary)]"
                      />
                    </div>
                    <span className="font-[family-name:var(--font-body)] text-[20px] text-white">
                      Taoyuan, Taiwan
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[24px] p-6 hover:border-[var(--color-accent-muted)] transition-[border-color,transform] duration-250 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      <link.icon
                        size={28}
                        className="relative z-10 text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform"
                      />
                      <p className="relative z-10 font-[family-name:var(--font-body)] font-bold text-[16px] text-white mb-1">
                        {link.label}
                      </p>
                      <p className="relative z-10 font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                        {link.handle}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </ScrollReveal>

              {/* 104 link */}
              <ScrollReveal delay={0.5}>
                <motion.a
                  href="https://pda.104.com.tw/profile/share/6SoIGWqG73MWGRSCzSOB4bA1robBJE9c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[24px] p-6 hover:border-[var(--color-accent-muted)] transition-[border-color,transform] duration-250 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <ExternalLink
                      size={24}
                      className="text-[var(--color-accent)]"
                    />
                    <span className="font-[family-name:var(--font-body)] font-bold text-[16px] text-white">
                      104
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-text-secondary)] uppercase tracking-[3px]">
                    Portfolio Showcase
                  </span>
                </motion.a>
              </ScrollReveal>
            </div>
          </div>

          {/* Right - Interactive 3D Robot */}
          <ScrollReveal direction="right" className="hidden lg:block">
            <div className="relative h-[720px]">
              {/* Floating social links around the robot */}
              <motion.a
                href="https://github.com/kathleenchenn"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-8 right-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(31,32,32,0.6)] backdrop-blur-sm border border-white/10 text-white text-sm font-[family-name:var(--font-body)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                aria-label="GitHub (opens in new tab)"
              >
                <GitBranch size={16} />
                GitHub
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/kathleen-chen"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-24 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(31,32,32,0.6)] backdrop-blur-sm border border-white/10 text-white text-sm font-[family-name:var(--font-body)] hover:border-blue-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                aria-label="LinkedIn (opens in new tab)"
              >
                <Link2 size={16} />
                LinkedIn
              </motion.a>

              <motion.a
                href="mailto:kathleenchen865@gmail.com"
                className="absolute bottom-16 right-12 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(31,32,32,0.6)] backdrop-blur-sm border border-white/10 text-white text-sm font-[family-name:var(--font-body)] hover:border-purple-400 hover:text-purple-400 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                aria-label="Send email"
              >
                <Mail size={16} />
                Email Me
              </motion.a>

              {/* Radial glow behind robot */}
              <motion.div
                className="absolute inset-0 rounded-[20px]"
                animate={{
                  background: [
                    "radial-gradient(circle at center, rgba(88,28,135,0.12) 0%, transparent 60%)",
                    "radial-gradient(circle at center, rgba(49,46,129,0.15) 0%, transparent 60%)",
                    "radial-gradient(circle at center, rgba(88,28,135,0.12) 0%, transparent 60%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 3D Robot */}
              <div className="w-full h-full rounded-[20px] overflow-hidden">
                <SplineScene
                  scene="/r_4_x_bot.spline"
                  className="w-full h-full"
                />
              </div>

              {/* "Feel free to connect" label */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-6 py-2 rounded-full bg-[rgba(19,19,19,0.7)] backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-accent-muted)] tracking-widest uppercase">
                  Feel free to connect
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
