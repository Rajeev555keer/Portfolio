import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projects, projectFilters, type Project } from "@/data/projects";
import { MagneticButton } from "./MagneticButton";
import { ProjectCard } from "./ProjectCard";
import { ShowcaseModal } from "./ShowcaseModal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Projects({
  items = projects,
  withFilters = false,
  withPortfolioLink = false,
  eyebrow = "Selected work",
  title = "Featured",
  highlight = "Work",
  description = "Real edits and thumbnails — hover to preview, click to open the full piece.",
}: {
  items?: Project[];
  withFilters?: boolean;
  withPortfolioLink?: boolean;
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
}) {
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((p) => p.category === filter)),
    [filter, items],
  );

  const active = activeIndex === null ? null : (filtered[activeIndex] ?? null);

  return (
    <section id="projects" className="px-4 py-24" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="projects-title"
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
          />
          {withPortfolioLink ? (
            <MagneticButton to="/portfolio" variant="outline">
              Full portfolio <ArrowRight className="size-4" />
            </MagneticButton>
          ) : null}
        </div>

        {withFilters ? (
          <div role="tablist" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => {
                  setFilter(f);
                  setActiveIndex(null);
                }}
                className={cn(
                  "min-h-10 rounded-full px-4 text-sm transition-all duration-300",
                  filter === f
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "glass text-muted-foreground hover:text-primary",
                )}
              >
                {f}
                <span className="ml-1.5 opacity-60">
                  {f === "All" ? items.length : items.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </div>
        ) : null}

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={p} onOpen={() => setActiveIndex(i)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ShowcaseModal
        project={active}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
        }
        onNext={() => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length))}
      />
    </section>
  );
}
