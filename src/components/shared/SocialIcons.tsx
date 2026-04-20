import type { SocialLink } from "@/data/portfolio";

type SocialIconsProps = {
  links: SocialLink[];
};

const iconWrap =
  "group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-zinc-950/70 transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(34,211,238,0.35)]";

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const content = (
          <>
            <span className="absolute inset-0 rounded-xl bg-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {link.name === "GitHub" && (
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 text-cyan-200 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.77.6-3.36-1.17-3.36-1.17-.45-1.16-1.1-1.46-1.1-1.46-.9-.61.07-.59.07-.59 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.88.82.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .85-.27 2.77 1.02A9.67 9.67 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.92-1.29 2.77-1.02 2.77-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.67.92.67 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            )}
            {link.name === "LinkedIn" && (
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 text-cyan-200 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.07H5.67V18h2.67v-7.93Zm.2-2.45a1.54 1.54 0 1 0-3.08 0 1.54 1.54 0 0 0 3.08 0ZM18.33 13.5c0-2.39-1.27-3.5-2.96-3.5a2.56 2.56 0 0 0-2.3 1.27v-1.2h-2.56V18h2.67v-4.41c0-1.16.22-2.29 1.66-2.29 1.42 0 1.44 1.33 1.44 2.36V18h2.67v-4.5Z" />
              </svg>
            )}
            {link.name === "Email" && (
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 text-cyan-200 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                aria-hidden="true"
              >
                <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
                <path d="m4 8 8 6 8-6" />
              </svg>
            )}
          </>
        );

        if (!link.href) {
          return (
            <span
              key={link.name}
              className={`${iconWrap} cursor-not-allowed opacity-70`}
              aria-label={link.label ?? link.name}
              title={link.label ?? link.name}
            >
              {content}
            </span>
          );
        }

        return (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className={iconWrap}
            aria-label={link.name}
            title={link.label}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
