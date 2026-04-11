"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { FilmGrain } from "@/components/cinematic/film-grain";
import { CursorDot } from "@/components/cinematic/cursor-dot";

import { FloatingDock } from "@/components/cinematic/floating-dock";
import { InteractiveGradientBackground } from "@/components/interactive-gradient";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Interactive gradient background */}
      <InteractiveGradientBackground />

      {/* Cinematic layers */}
      <FilmGrain />
      <CursorDot />

      <Navbar />
      <FloatingDock />
      <ScrollToTop />
      <main id="main-content">
        <HeroSection />

        <AboutSection />

        <div className="editorial-divider max-w-[1280px] mx-auto" />

        <SkillsSection />

        <div className="editorial-divider max-w-[1280px] mx-auto" />

        <ServicesSection />

        <ProjectsSection />

        <div className="editorial-divider max-w-[1280px] mx-auto" />

        <ExperienceSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
