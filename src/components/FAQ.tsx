import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<string[]>([faqs[0].q]);

  const toggle = (q: string) =>
    setOpen((prev) => (prev.includes(q) ? prev.filter((x) => x !== q) : [...prev, q]));

  return (
    <section id="faq" className="px-4 py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked"
          highlight="questions"
          align="center"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f) => {
            const isOpen = open.includes(f.q);
            return (
              <div key={f.q} className="glass overflow-hidden rounded-2xl">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(f.q)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:text-primary sm:text-base"
                  >
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary">
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </motion.span>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}