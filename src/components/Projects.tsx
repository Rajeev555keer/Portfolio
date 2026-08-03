import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { projects, projectFilters, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ShowcaseModal } from "./ShowcaseModal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Projects({
  items = projects,
  eyebrow = "Selected work",
  title = "My",
  highlight = "Projects",
  description = "Edits, reels, thumbnails and graphics — click any project to see the full story.",
}: {
  items?: Project[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
}) {
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All" ? items : items.filter((p) => p.category === filter),
    [filter, items],
  );

  const active = activeIndex === null ? null : (filtered[activeIndex] ?? null);

  return (
    <section
      id="projects"
      className="px-4 py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
        />

        <div
          role="tablist"
          aria-label="Filter projects"
          className="mt-10 flex flex-wrap gap-2"
        >
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
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
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

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}
      </div>

      <ShowcaseModal
        project={active}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((i) =>
            i === null ? null : (i - 1 + filtered.length) % filtered.length,
          )
        }
        onNext={() =>
          setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length))
        }
      />
    </section>
  );
}
