"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <motion.p
        className="inline-block text-[0.7rem] uppercase tracking-[0.4em] text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-bold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-4 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-200 via-purple-300 to-cyan-200 bg-clip-text md:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 max-w-3xl text-base text-zinc-300 md:text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {description}
      </motion.p>
    </div>
  );
}
