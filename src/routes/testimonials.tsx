import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { reviewStats } from "@/data/testimonials";

const title = "Testimonials — Rajeev Keer, Video Editor";
const description =
  "Reviews and real results from creators who work with Rajeev Keer — higher retention, better CTR and consistent uploads.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="px-4 pt-36 pb-8 sm:pt-44" aria-labelledby="testimonials-hero">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
              Client words
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="testimonials-hero"
              className="mt-5 text-[clamp(2.5rem,9vw,5.5rem)] leading-[0.95] font-semibold"
            >
              Creators who <span className="text-gradient">grew</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex gap-0.5" aria-label="5 out of 5 average rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                5.0 average from 30+ creators
              </span>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {reviewStats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.06}>
                <div className="glass rounded-2xl p-5">
                  <p className="font-display text-3xl font-semibold text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials withFilters />
      <Contact />
    </>
  );
}