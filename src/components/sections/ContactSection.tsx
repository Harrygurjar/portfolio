"use client";

import { FormEvent, useState } from "react";
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

      setStatus({ state: "success", message: "Message sent successfully." });
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
        <div className="glass-card rounded-3xl p-6 md:p-10">
          <SectionHeading
            eyebrow="Connect"
            title="Let's Build Something Meaningful"
            description="Share your idea, collaboration opportunity, or role details and I will reply soon."
          />

          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="grid gap-2 text-sm text-zinc-300" htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.17)]"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm text-zinc-300" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.17)]"
                placeholder="your@email.com"
              />
            </label>

            <label
              className="grid gap-2 text-sm text-zinc-300"
              htmlFor="message"
            >
              Message
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.17)]"
                placeholder="Tell me about your project or role"
              />
            </label>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={status.state === "submitting"}
                className="cyber-btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.state === "submitting" ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.state === "success"
                      ? "text-emerald-300"
                      : "text-rose-300"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </Reveal>
  );
}
