import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <div className="font-display text-2xl font-semibold tracking-tight">
              Rajeev <span className="text-gradient">Keer</span>
            </div>
            <div className="relative mx-auto mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-border">
              <span className="animate-scan absolute inset-y-0 w-1/3 bg-primary" />
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Loading timeline
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}