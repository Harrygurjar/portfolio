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
    <section id="home" className="relative overflow-hidden pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-10%] top-[-120px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[-60px] h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <motion.div
        className="glass-card relative mx-auto max-w-6xl rounded-[2.5rem] px-6 py-20 md:px-14 md:py-28"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.p
          className="inline-block text-[0.7rem] uppercase tracking-[0.4em] text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl font-display text-5xl leading-tight bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent md:text-7xl font-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {portfolio.name}
        </motion.h1>

        <motion.div
          className="mt-6 flex min-h-12 items-center text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="mr-3 text-zinc-300">Building</span>
          <span className="typing-line">{typedText}</span>
          <span className="typing-caret" aria-hidden>
            _
          </span>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {portfolio.intro}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects" className="cyber-btn-primary">
            ↓ View Projects
          </a>
          <a href="#contact" className="cyber-btn-secondary">
            💬 Let&apos;s Connect
          </a>
        </motion.div>

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
