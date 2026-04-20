import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cyber px-4 pb-14 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="mx-auto mt-8 max-w-6xl border-t border-white/10 py-6 text-center text-sm text-zinc-400">
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </div>
  );
}
