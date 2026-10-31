import { motion, useReducedMotion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  const poster = project.posterTime ?? 1;

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 6, ry: px * 8 });
  };

  const onEnter = () => {
    setHover(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const onLeave = () => {
    setHover(false);
    setTilt({ rx: 0, ry: 0 });
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = project.image ? 0 : poster;
    }
  };

  // Video-only projects show a frame of the clip until hovered.
  const showImage = Boolean(project.image) && !(hover && project.video);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View project: ${project.title}`}
        className="group glass relative flex h-full w-full flex-col overflow-hidden rounded-2xl text-left transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--glow-cyan)]"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-secondary",
            project.vertical ? "aspect-[9/16]" : "aspect-video",
          )}
        >
          {project.video ? (
            <video
              ref={videoRef}
              src={project.image ? project.video : `${project.video}#t=${poster}`}
              muted
              loop
              playsInline
              // With a poster image the clip only needs to load once someone hovers.
              preload={project.image ? "none" : "metadata"}
              className="absolute inset-0 size-full object-cover"
            />
          ) : null}

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={cn(
                "absolute inset-0 size-full object-cover transition-all duration-700",
                showImage ? "scale-100 opacity-100 group-hover:scale-105" : "scale-110 opacity-0",
              )}
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <span className="glass absolute top-3 left-3 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
            {project.category}
          </span>
          <span className="absolute right-3 bottom-3 rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest text-foreground/90">
            {project.format}
          </span>

          {project.video ? (
            <span
              className={cn(
                "glass absolute inset-0 m-auto grid size-14 place-items-center rounded-full text-primary transition-opacity duration-500",
                hover ? "opacity-0" : "opacity-100",
              )}
            >
              <Play className="size-5 fill-current" />
            </span>
          ) : null}
        </div>

        <div className={cn("flex flex-1 flex-col", project.vertical ? "p-3.5 sm:p-5" : "p-5")}>
          <div className="flex items-start justify-between gap-3">
            <h3
              className={cn(
                "leading-snug font-semibold",
                project.vertical ? "text-sm sm:text-base" : "text-lg",
              )}
            >
              {project.title}
            </h3>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </div>
          <p
            className={cn(
              "mt-2 line-clamp-2 text-sm text-muted-foreground",
              project.vertical && "hidden sm:block",
            )}
          >
            {project.description}
          </p>
          {project.tools.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </button>
    </motion.div>
  );
}
