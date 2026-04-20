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
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set(((x - midX) / midX) * 5);
    rotateX.set(-((y - midY) / midY) * 5);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className="glass-card h-full rounded-2xl p-6"
      style={{ transformStyle: "preserve-3d", transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.18 }}
    >
      <h3 className="font-display text-2xl text-zinc-100">{project.name}</h3>
      <p className="mt-3 text-zinc-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-300/25 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-3">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="cyber-btn-primary py-2 text-sm"
          >
            Demo
          </a>
        ) : (
          <span className="cyber-btn-primary py-2 text-sm opacity-70">
            Private Demo
          </span>
        )}
        {project.codeUrl ? (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="cyber-btn-secondary py-2 text-sm"
          >
            Code
          </a>
        ) : (
          <span className="cyber-btn-secondary py-2 text-sm opacity-70">
            Private Code
          </span>
        )}
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
