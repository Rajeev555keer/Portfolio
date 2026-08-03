import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

export function ShowcaseModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 p-4 backdrop-blur-xl"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="glass absolute top-4 right-4 z-10 grid size-11 place-items-center rounded-full text-foreground hover:text-primary"
            >
              <X className="size-4" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-secondary">
              {project.video ? (
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="size-full"
                />
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  {project.category === "Videos" || project.category === "Reels" ? (
                    <span className="glass absolute inset-0 m-auto grid size-16 place-items-center rounded-full text-primary">
                      <Play className="size-6 fill-current" />
                    </span>
                  ) : null}
                </>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
                {project.category}
              </span>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                Software used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
                <button
                  type="button"
                  onClick={onPrev}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ChevronLeft className="size-4" /> Previous
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Next <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}