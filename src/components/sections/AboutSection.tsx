import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />
          </div>

          <div className="relative z-10">
            <SectionHeading
              eyebrow="About"
              title="Full-Stack Engineer With Product Discipline"
              description="I build dependable user experiences for data-heavy workflows, mobile field operations, and modern enterprise products."
            />

            <motion.p
              className="max-w-4xl text-base leading-relaxed text-zinc-300 md:text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {portfolio.about}
            </motion.p>

            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {[
                "2+ Years Experience",
                "Full-Stack",
                "TypeScript",
                "React & Mobile",
                "Node.js & MongoDB",
                "Real-Time Products",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-cyan-300/20 bg-cyan-500/5 px-4 py-3 text-center backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold text-cyan-300 md:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
