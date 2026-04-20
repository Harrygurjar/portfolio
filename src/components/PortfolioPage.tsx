"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cyber px-4 pb-16 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="mx-auto mt-20 max-w-6xl border-t border-cyan-300/15 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
            Crafted with care
          </p>
          <p className="text-sm text-zinc-400">
            Built with <span className="text-cyan-400">Next.js</span>,{" "}
            <span className="text-purple-400">Tailwind CSS</span>, and{" "}
            <span className="text-pink-400">Framer Motion</span>
          </p>
          <p className="text-xs text-zinc-600 mt-3">
            © {new Date().getFullYear()} Harsh Bhati. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
