"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Reveal,
  staggerContainer,
  staggerItem,
} from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set(((x - midX) / midX) * 6);
    rotateX.set(-((y - midY) / midY) * 6);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 md:p-7"
      style={{ transformStyle: "preserve-3d", transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="font-display text-xl font-bold bg-gradient-to-r from-cyan-200 to-purple-300 bg-clip-text text-transparent md:text-2xl">
            {project.name}
          </h3>
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50" />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech, idx) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-300/35 bg-gradient-to-r from-cyan-500/10 to-purple-500/8 px-3 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-500/15"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="cyber-btn-primary py-2 text-xs md:text-sm"
            >
              🚀 Demo
            </a>
          ) : (
            <span className="cyber-btn-primary py-2 text-xs md:text-sm opacity-50">
              🔒 Demo
            </span>
          )}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="cyber-btn-secondary py-2 text-xs md:text-sm"
            >
              💻 Code
            </a>
          ) : (
            <span className="cyber-btn-secondary py-2 text-xs md:text-sm opacity-50">
              🔒 Code
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <Reveal>
      <section id="projects" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Personal Builds"
          description="Selected projects from my GitHub that reflect system design thinking and frontend craftsmanship."
        />

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.projects.map((project) => (
            <motion.div key={project.name} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Reveal>
  );
}
