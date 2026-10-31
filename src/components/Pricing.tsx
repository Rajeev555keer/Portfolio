import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { plans, addOns, comparison } from "@/data/pricing";
import { planService } from "@/data/brief";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type Mode = "video" | "monthly";

export function Pricing() {
  const [mode, setMode] = useState<Mode>("video");

  return (
    <section id="pricing" className="px-4 py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple, honest"
          highlight="pricing"
          description="Pay per video, or lock a monthly slot and save. No hidden costs."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <div className="glass relative flex items-center gap-1 rounded-full p-1">
            {(
              [
                { id: "video", label: "Per Video" },
                { id: "monthly", label: "Monthly Retainer" },
              ] as const
            ).map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setMode(o.id)}
                aria-pressed={mode === o.id}
                className={cn(
                  "relative min-h-10 rounded-full px-5 text-sm transition-colors duration-300",
                  mode === o.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {mode === o.id ? (
                  <motion.span
                    layoutId="pricing-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {mode === "monthly" ? (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-xs text-primary"
            >
              Save 20% on every plan with a monthly retainer
            </motion.p>
          ) : null}
        </AnimatePresence>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article
                className={cn(
                  "glass relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5",
                  p.popular && "border-primary/45 shadow-[var(--glow-cyan)]",
                )}
              >
                {p.popular ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold tracking-widest text-primary-foreground uppercase">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

                <div className="mt-6 flex items-end gap-2">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={mode + p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-4xl font-semibold"
                    >
                      {mode === "video" ? p.perVideo : p.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="pb-1.5 text-xs text-muted-foreground">
                    {mode === "video" ? "/ video" : `/ month · ${p.monthlyNote}`}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <MagneticButton
                    to="/start"
                    search={{
                      service: planService[p.id],
                      ...(mode === "monthly" ? { monthly: "true" } : {}),
                    }}
                    variant={p.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Order Now
                  </MagneticButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* comparison */}
        <Reveal className="mt-20">
          <div className="glass overflow-x-auto rounded-3xl">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Feature comparison between plans</caption>
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th scope="col" className="p-4 font-medium">
                    Feature
                  </th>
                  <th scope="col" className="p-4 font-medium">
                    Reels
                  </th>
                  <th scope="col" className="p-4 font-medium">
                    YouTube
                  </th>
                  <th scope="col" className="p-4 font-medium">
                    Cinematic
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/60 last:border-0">
                    <th scope="row" className="p-4 font-normal">
                      {row.feature}
                    </th>
                    {[row.starter, row.pro, row.cinematic].map((v, i) => (
                      <td key={i} className="p-4">
                        {v ? (
                          <Check className="size-4 text-primary" aria-label="Included" />
                        ) : (
                          <X className="size-4 text-muted-foreground" aria-label="Not included" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* add-ons */}
        <div className="mt-20">
          <h3 className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
            Add-ons
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05}>
                <div className="glass flex h-full items-start justify-between gap-4 rounded-2xl p-5 transition-colors duration-500 hover:border-primary/40">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.note}</p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-primary">{a.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
