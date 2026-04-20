import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="mx-auto max-w-6xl px-2 py-16 md:py-20">
        <div className="glass-card rounded-3xl p-6 md:p-10">
          <SectionHeading
            eyebrow="About"
            title="Full-Stack Engineer With Product Discipline"
            description="I build dependable user experiences for data-heavy workflows, mobile field operations, and modern enterprise products."
          />

          <p className="max-w-4xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {portfolio.about}
          </p>
        </div>
      </section>
    </Reveal>
  );
}
