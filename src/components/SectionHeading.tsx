import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 id={id} className="mt-4 text-3xl leading-[1.05] font-semibold sm:text-4xl md:text-5xl">
          {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
