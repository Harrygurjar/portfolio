"use client";

import { motion } from "framer-motion";
import {
  Reveal,
  staggerContainer,
  staggerItem,
} from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type SkillGroup = {
  category: string;
  color: string;
  dot: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "from-cyan-500/15 to-cyan-500/5",
    dot: "bg-cyan-400",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React Native", level: 88 },
    ],
  },
  {
    category: "Backend & Data",
    color: "from-purple-500/15 to-purple-500/5",
    dot: "bg-purple-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "State & Auth",
    color: "from-pink-500/15 to-pink-500/5",
    dot: "bg-pink-400",
    skills: [
      { name: "Zustand", level: 88 },
      { name: "MSAL / OAuth", level: 80 },
      { name: "Recharts", level: 85 },
    ],
  },
  {
    category: "Design & UI",
    color: "from-amber-500/15 to-amber-500/5",
    dot: "bg-amber-400",
    skills: [
      { name: "UI UX Pro Max", level: 92 },
      { name: "Responsive Design", level: 90 },
      { name: "Accessibility (A11y)", level: 85 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-medium text-zinc-200">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const barColors: Record<string, string> = {
  Frontend: "from-cyan-500 to-cyan-300",
  "Backend & Data": "from-purple-500 to-purple-300",
  "State & Auth": "from-pink-500 to-pink-300",
  "Design & UI": "from-amber-500 to-amber-300",
};

export function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack & Tools"
          description="A focused toolkit for shipping performant, scalable web and mobile products."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={staggerItem}
              className={`glass-card relative overflow-hidden rounded-2xl border border-zinc-700/40 bg-gradient-to-b ${group.color} p-6 transition-all duration-300 hover:border-zinc-600/60`}
            >
              <div className="mb-5 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${group.dot} shadow-lg`}
                />
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={
                      barColors[group.category] ?? "from-cyan-500 to-cyan-300"
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Reveal>
  );
}
