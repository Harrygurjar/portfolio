"use client";

import { motion } from "framer-motion";
import {
  Reveal,
  staggerContainer,
  staggerItem,
} from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack & Tools"
          description="A focused toolkit for shipping performant, scalable web and mobile products."
        />

        <motion.ul
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {portfolio.skills.map((skill, index) => (
            <motion.li
              key={skill}
              variants={staggerItem}
              className="group glass-card relative min-h-32 overflow-hidden rounded-2xl border border-cyan-300/25 p-6 cursor-pointer transition-all duration-300 hover:border-purple-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-15" />

              <div className="relative z-10 flex h-full flex-col items-start justify-between">
                <h3 className="font-display text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text md:text-3xl">
                  {skill}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/40" />
                  <span className="text-xs text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Proficient
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </Reveal>
  );
}
