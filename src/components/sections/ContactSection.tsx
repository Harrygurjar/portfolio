"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

type FormStatus = {
  state: "idle" | "submitting" | "success" | "error";
  message?: string;
};

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const payload: { message: string } = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Could not send your message.");
      }

      setStatus({ state: "success", message: "✓ Message sent successfully!" });
      form.reset();
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Try again.",
      });
    }
  };

  return (
    <Reveal>
      <section id="contact" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          </div>

          <div className="relative z-10">
            <SectionHeading
              eyebrow="Connect"
              title="Let's Build Something Meaningful"
              description="Share your idea, collaboration opportunity, or role details and I will reply soon."
            />

            <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label
                  className="block text-sm font-semibold text-cyan-300 mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-cyan-300/30 bg-zinc-950/50 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-300/70 focus:bg-zinc-950/80 focus:shadow-[0_0_16px_rgba(45,212,255,0.2)]"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <label
                  className="block text-sm font-semibold text-cyan-300 mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-cyan-300/30 bg-zinc-950/50 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-300/70 focus:bg-zinc-950/80 focus:shadow-[0_0_16px_rgba(45,212,255,0.2)]"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label
                  className="block text-sm font-semibold text-cyan-300 mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-cyan-300/30 bg-zinc-950/50 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-300/70 focus:bg-zinc-950/80 focus:shadow-[0_0_16px_rgba(45,212,255,0.2)] resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                />
              </motion.div>

              <motion.div
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={status.state === "submitting"}
                  className="cyber-btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.state === "submitting"
                    ? "⏳ Sending..."
                    : "✉️ Send Message"}
                </button>
                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm font-medium ${
                      status.state === "success"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </motion.div>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
