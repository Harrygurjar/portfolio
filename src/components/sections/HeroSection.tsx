"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { SocialIcons } from "@/components/shared/SocialIcons";

type TypingState = {
  wordIndex: number;
  cursor: number;
  isDeleting: boolean;
};

function useTyping(words: string[]) {
  const [state, setState] = useState<TypingState>({
    wordIndex: 0,
    cursor: 0,
    isDeleting: false,
  });

  useEffect(() => {
    const activeWord = words[state.wordIndex] ?? "";
    const shouldPause = !state.isDeleting && state.cursor === activeWord.length;
    const hasDeletedAll = state.isDeleting && state.cursor === 0;

    const timeout = window.setTimeout(
      () => {
        if (shouldPause) {
          setState((prev) => ({ ...prev, isDeleting: true }));
          return;
        }

        if (hasDeletedAll) {
          setState((prev) => ({
            wordIndex: (prev.wordIndex + 1) % words.length,
            cursor: 0,
            isDeleting: false,
          }));
          return;
        }

        setState((prev) => ({
          ...prev,
          cursor: prev.isDeleting ? prev.cursor - 1 : prev.cursor + 1,
        }));
      },
      shouldPause ? 1100 : state.isDeleting ? 45 : 90,
    );

    return () => window.clearTimeout(timeout);
  }, [state, words]);

  return words[state.wordIndex]?.slice(0, state.cursor) ?? "";
}

export function HeroSection() {
  const words = useMemo(() => portfolio.titles, []);
  const typedText = useTyping(words);

  return (
    <section id="home" className="relative overflow-hidden pt-14 md:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-8%] top-[-80px] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-7%] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        className="glass-card relative mx-auto max-w-6xl rounded-[2rem] px-6 py-16 md:px-12 md:py-20"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-[0.75rem] uppercase tracking-[0.3em] text-cyan-300/75">
          Digital Resume
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-zinc-100 md:text-6xl">
          {portfolio.name}
        </h1>

        <div className="mt-4 flex min-h-8 items-center text-lg text-cyan-200 md:text-2xl">
          <span className="mr-2 text-zinc-300">I am a</span>
          <span className="typing-line">{typedText}</span>
          <span className="typing-caret" aria-hidden>
            |
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
          {portfolio.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="cyber-btn-primary">
            View Projects
          </a>
          <a href="#contact" className="cyber-btn-secondary">
            Let&apos;s Connect
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-sm tracking-wide text-zinc-400">
            {portfolio.location}
          </p>
          <SocialIcons links={portfolio.socials} />
        </div>
      </motion.div>
    </section>
  );
}
