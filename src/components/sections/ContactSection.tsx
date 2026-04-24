"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio } from "@/data/portfolio";

const EMAIL = "harshbhati2603@gmail.com";

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: "Send Email",
    color: "from-cyan-500 to-cyan-400",
    border: "border-cyan-400/30 hover:border-cyan-400/60",
    glow: "hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/harsh-bhati-493716241",
    href: "https://linkedin.com/in/harsh-bhati-493716241",
    cta: "Connect",
    color: "from-purple-500 to-purple-400",
    border: "border-purple-400/30 hover:border-purple-400/60",
    glow: "hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/harshbhati1",
    href: "https://github.com/harshbhati1",
    cta: "View Code",
    color: "from-pink-500 to-pink-400",
    border: "border-pink-400/30 hover:border-pink-400/60",
    glow: "hover:shadow-[0_0_24px_rgba(236,72,153,0.18)]",
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Reveal>
      <section id="contact" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          </div>

          <div className="relative z-10">
            <SectionHeading
              eyebrow="Connect"
              title="Let's Build Something Together"
              description="Have an idea, opportunity, or just want to say hi? Reach out through any of the channels below."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.label !== "Email" ? "_blank" : undefined}
                  rel={ch.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className={`group flex flex-col gap-4 rounded-2xl border bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 ${ch.border} ${ch.glow}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ch.color} text-zinc-950 shadow-lg`}
                  >
                    {ch.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                      {ch.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-zinc-200">
                      {ch.value}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${ch.color} bg-clip-text text-transparent transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    {ch.cta} →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Quick copy row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <span className="text-sm text-zinc-400">
                Or copy my email directly:
              </span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-zinc-950/50 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-300/60 hover:bg-zinc-900/70"
              >
                {copied ? (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-emerald-400"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                    {EMAIL}
                  </>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
