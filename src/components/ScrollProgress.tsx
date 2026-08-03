import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 25, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 z-[60] h-[2px] w-full origin-left bg-primary shadow-[0_0_18px_var(--color-primary)]"
    />
  );
}