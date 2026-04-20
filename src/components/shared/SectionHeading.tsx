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
    <div className="mb-8 md:mb-10">
      <p className="text-[0.72rem] uppercase tracking-[0.35em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-zinc-300/90">{description}</p>
    </div>
  );
}
