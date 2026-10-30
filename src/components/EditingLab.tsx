import { motion, useReducedMotion } from "motion/react";
import { Volume2, Scissors } from "lucide-react";
import { useState } from "react";
import theAlarm from "@/assets/video-the-alarm.mp4";

const badges = ["DaVinci Resolve", "Premiere Pro", "After Effects", "CapCut"];

/** HH:MM:SS:FF at 24fps, like an editor's timeline readout. */
function timecode(seconds: number) {
  const frames = Math.floor((seconds % 1) * 24);
  const s = Math.floor(seconds);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `00:${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(frames)}`;
}

/** Stylised editing workstation used in the hero, playing a real edit. */
export function EditingLab() {
  const reduced = useReducedMotion();
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="animate-pulse-glow absolute inset-6 rounded-[40px] bg-primary/25 blur-[80px]"
        aria-hidden="true"
      />

      <div className="animate-rise relative" style={{ perspective: 1200, animationDelay: "200ms" }}>
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
              THE_ALARM_final.drp
            </span>
          </div>

          {/* preview */}
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-[radial-gradient(circle_at_30%_20%,oklch(0.35_0.09_200/60%),oklch(0.14_0.02_240))]">
            <video
              src={theAlarm}
              autoPlay={!reduced}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Clip from The Alarm, a cinematic teaser edited by Rajeev Keer"
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setTime(v.currentTime);
                setProgress(v.duration ? v.currentTime / v.duration : 0);
              }}
              className="absolute inset-0 size-full object-cover"
            />
            <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest text-primary">
              <span className="size-1.5 rounded-full bg-destructive" aria-hidden="true" />
              PREVIEW
            </span>
            <span className="absolute right-3 bottom-3 rounded-md bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest text-foreground tabular-nums">
              {timecode(time)}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 w-px bg-primary/70"
              style={{ left: `${progress * 100}%` }}
            />
          </div>

          {/* timeline */}
          <div className="mt-3 space-y-2 rounded-xl border border-border bg-background/40 p-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Scissors className="size-3.5 text-primary" />
              <div className="h-1.5 flex-1 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary/80"
                  style={{ width: `${Math.max(progress * 100, 4)}%` }}
                />
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
                      reduced
                        ? undefined
                        : {
                            height: [4 + ((i * 7) % 16), 4 + ((i * 13) % 22), 4 + ((i * 7) % 16)],
                          }
                    }
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.04,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px]">A1</span>
            </div>
          </div>
        </motion.div>

        {/* floating software badges */}
        <div className="pointer-events-none absolute inset-x-0 -inset-y-6 hidden sm:block">
          {badges.map((b, i) => (
            <motion.span
              key={b}
              className="glass absolute rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest whitespace-nowrap text-foreground/90 uppercase"
              style={
                [
                  { top: "-1%", left: "-3%" },
                  { top: "30%", right: "-2%" },
                  { bottom: "20%", left: "-4%" },
                  { bottom: "0%", right: "4%" },
                ][i]
              }
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
