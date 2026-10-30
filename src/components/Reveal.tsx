import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Above-the-fold content: animate with CSS on first paint instead of waiting for hydration. */
  immediate?: boolean;
}) {
  const reduced = useReducedMotion();

  if (immediate) {
    return (
      <div className={cn("animate-rise", className)} style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
