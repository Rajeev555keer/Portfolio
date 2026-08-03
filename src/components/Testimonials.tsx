import { Star, Quote } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials, testimonialFilters } from "@/data/testimonials";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Testimonials({ withFilters = false }: { withFilters?: boolean }) {
  const [filter, setFilter] = useState<string>("All");
  const items = useMemo(
    () =>
      filter === "All" ? testimonials : testimonials.filter((t) => t.category === filter),
    [filter],
  );

  return (
    <section id="testimonials" className="px-4 py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trusted by creators"
          title="Real"
          highlight="Results"
          description="What creators say after working together — and the numbers that followed."
        />

        {withFilters ? (
          <div role="tablist" aria-label="Filter testimonials" className="mt-10 flex flex-wrap gap-2">
            {testimonialFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "min-h-10 rounded-full px-4 text-sm transition-all duration-300",
                  filter === f
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "glass text-muted-foreground hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {items.map((t, i) => (
              <motion.figure
                key={t.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="glass group relative break-inside-avoid rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <Quote className="size-5 text-primary/60" />
                <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <span className="mt-4 inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] text-primary">
                  {t.result}
                </span>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="font-display grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {t.handle} · {t.category}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}