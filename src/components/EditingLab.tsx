import { motion, useReducedMotion } from "motion/react";
import { Play, Volume2, Scissors } from "lucide-react";

const badges = ["DaVinci Resolve", "Premiere Pro", "After Effects", "CapCut"];

/** Stylised 3D editing workstation used in the hero. */
export function EditingLab() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="animate-pulse-glow absolute inset-6 rounded-[40px] bg-primary/25 blur-[80px]" aria-hidden="true" />

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 30, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative"
        style={{ perspective: 1200 }}
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="glass grain relative overflow-hidden rounded-2xl p-3 shadow-[var(--shadow-elevated)]"
        >
          {/* monitor chrome */}
          <div className="flex items-center gap-1.5 px-1 pb-2">
            <span className="size-2 rounded-full bg-destructive/70" />
            <span className="size-2 rounded-full bg-chart-5/70" />
            <span className="size-2 rounded-full bg-accent/70" />
            <span className="ml-auto font-mono text-[10px] tracking-widest text-muted-foreground">
              RK_EDIT_v26.drp
            </span>
          </div>

          {/* preview */}
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-[radial-gradient(circle_at_30%_20%,oklch(0.35_0.09_200/60%),oklch(0.14_0.02_240))]">
            <div className="absolute inset-0 grid place-items-center">
              <span className="glass grid size-14 place-items-center rounded-full text-primary">
                <Play className="size-5 fill-current" />
              </span>
            </div>
            <span className="absolute top-3 left-3 rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest text-primary">
              REC 4K
            </span>
            <span className="absolute right-3 bottom-3 rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest text-foreground">
              00:02:47:12
            </span>
            <motion.span
              aria-hidden="true"
              className="absolute inset-y-0 w-px bg-primary/70"
              animate={reduced ? undefined : { left: ["8%", "88%", "8%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* timeline */}
          <div className="mt-3 space-y-2 rounded-xl border border-border bg-background/40 p-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Scissors className="size-3.5 text-primary" />
              <div className="h-1.5 flex-1 rounded-full bg-secondary">
                <div className="h-full w-2/3 rounded-full bg-primary/80" />
              </div>
              <span className="font-mono text-[10px]">V1</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Volume2 className="size-3.5 text-accent" />
              <div className="flex h-6 flex-1 items-center gap-[3px]" aria-hidden="true">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-full rounded-full bg-accent/60"
                    initial={{ height: 4 + ((i * 7) % 16) }}
                    animate={
                      reduced ? undefined : { height: [4 + ((i * 7) % 16), 4 + ((i * 13) % 22), 4 + ((i * 7) % 16)] }
                    }
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px]">A1</span>
            </div>
          </div>
        </motion.div>

        {/* floating software badges */}
        <div className="pointer-events-none absolute -inset-x-4 -inset-y-6 hidden sm:block">
          {badges.map((b, i) => (
            <motion.span
              key={b}
              className="glass absolute rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest text-foreground/90 uppercase"
              style={
                [
                  { top: "4%", left: "-4%" },
                  { top: "26%", right: "-6%" },
                  { bottom: "18%", left: "-6%" },
                  { bottom: "0%", right: "2%" },
                ][i]
              }
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}