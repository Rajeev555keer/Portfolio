import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/** Soft cyan cursor glow — pointer devices only. */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[70] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-64 w-64 rounded-full bg-primary/8 blur-[70px]" />
    </motion.div>
  );
}