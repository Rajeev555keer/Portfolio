import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/pricing";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 24,
  });

  return (
    <section
      id="experience"
      className="px-4 py-24"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="My"
          highlight="Experience"
          description="From first timeline to cinematic edits and cyber security — four years of building craft."
        />

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-12">
          <div
            className="absolute top-0 bottom-0 left-[9px] w-px bg-border sm:left-[13px]"
            aria-hidden="true"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-[9px] w-px origin-top bg-primary shadow-[0_0_14px_var(--color-primary)] sm:left-[13px]"
          />

          <ol className="space-y-8">
            {experience.map((item, i) => (
              <li key={item.year} className="relative">
                <span
                  className="absolute top-7 -left-8 size-[19px] rounded-full border border-primary/40 bg-background sm:-left-12 sm:size-[27px]"
                  aria-hidden="true"
                >
                  <span className="absolute inset-[5px] rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)] sm:inset-[8px]" />
                </span>
                <Reveal delay={i * 0.05}>
                  <article className="glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                    <span className="font-mono text-xs tracking-[0.3em] text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
