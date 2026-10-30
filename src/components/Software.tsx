import { software } from "@/data/pricing";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Software() {
  return (
    <section id="software" className="px-4 py-24" aria-labelledby="software-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="software-title"
          eyebrow="Toolkit"
          title="Software"
          highlight="I Use"
          description="The tools behind every cut, grade and thumbnail — used daily, not just listed."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <article className="group glass relative flex h-full items-center gap-4 overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-display grid size-12 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-sm font-bold text-primary transition-transform duration-500 group-hover:scale-110">
                  {s.short}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">{s.name}</h3>
                  <p className="truncate text-sm text-muted-foreground">{s.use}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
