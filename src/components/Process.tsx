import { process } from "@/data/pricing";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="px-4 py-24" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="process-title"
          eyebrow="How I work"
          title="From raw footage to"
          highlight="final upload"
          description="A simple, predictable process — you always know what's happening and when it lands."
        />

        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-[38px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block"
          />
          {process.map((p, i) => (
            <li key={p.step} className="relative">
              <Reveal delay={i * 0.08} className="h-full">
                <article className="glass group relative h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <span className="font-display relative grid size-11 place-items-center rounded-full border border-primary/40 bg-background text-sm font-semibold text-primary shadow-[0_0_24px_-6px_var(--color-primary)]">
                    {p.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
