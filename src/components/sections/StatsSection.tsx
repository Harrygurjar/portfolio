"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
};

const stats: Stat[] = [
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Building production apps",
    color: "from-cyan-400 to-cyan-300",
  },
  {
    value: 4,
    suffix: "+",
    label: "Projects Shipped",
    description: "Web & mobile products",
    color: "from-purple-400 to-purple-300",
  },
  {
    value: 8,
    suffix: "+",
    label: "Technologies",
    description: "In daily use",
    color: "from-pink-400 to-pink-300",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-2 py-10 md:py-14">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group glass-card relative overflow-hidden rounded-2xl border border-zinc-700/40 p-6 text-center transition-all duration-300 hover:border-zinc-600/60"
            >
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${stat.color} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <p
                className={`font-display text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent md:text-5xl`}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-200">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Reveal>
  );
}
