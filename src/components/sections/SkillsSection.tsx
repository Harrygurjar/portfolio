"use client";

import { motion } from "framer-motion";
import {
  Reveal,
  staggerContainer,
  staggerItem,
} from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio } from "@/data/portfolio";

const skillStyles = ["md:col-span-2", "", "", "md:row-span-2", "md:col-span-2"];

export function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack"
          description="A focused toolkit for shipping performant web and mobile products."
        />

        <motion.ul
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {portfolio.skills.map((skill, index) => (
            <motion.li
              key={skill}
              variants={staggerItem}
              className={`glass-card min-h-28 rounded-2xl border border-cyan-300/25 p-5 ${skillStyles[index] ?? ""}`}
            >
              <div className="flex h-full items-end justify-between">
                <h3 className="font-display text-2xl tracking-tight text-zinc-100 md:text-3xl">
                  {skill}
                </h3>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </Reveal>
  );
}
