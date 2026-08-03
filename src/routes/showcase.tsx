import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import { showcaseStats } from "@/data/projects";

const title = "Video Showcase — Rajeev Keer";
const description =
  "A reel of cinematic edits, high-retention reels, YouTube videos and thumbnails edited and designed by Rajeev Keer.";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/showcase" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/showcase" }],
  }),
  component: ShowcasePage,
});

function ShowcasePage() {
  return (
    <>
      <section className="px-4 pt-36 pb-8 sm:pt-44" aria-labelledby="showcase-title">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
              The reel
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="showcase-title"
              className="mt-5 text-[clamp(2.5rem,9vw,5.5rem)] leading-[0.95] font-semibold"
            >
              Video <span className="text-gradient">Showcase</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Every frame here was cut, graded and finished in-house. Filter by
              format and open any project for the full breakdown.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {showcaseStats.map((s, i) => (
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

      <Projects
        eyebrow="Gallery"
        title="Featured"
        highlight="Projects"
        description="Videos, reels, thumbnails and graphics — click to open the lightbox."
      />
      <Contact />
    </>
  );
}