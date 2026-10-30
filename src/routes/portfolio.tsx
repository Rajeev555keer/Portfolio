import { createFileRoute } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { pageMeta, site } from "@/data/site";

const showreel = projects.find((p) => p.id === "3d-divinity")!;
const videoCount = projects.filter((p) => p.category === "Videos").length;
const thumbCount = projects.filter((p) => p.category === "Thumbnails").length;

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta({
      title: "Portfolio — Rajeev Keer, Video Editor & Graphic Designer",
      description:
        "Cinematic video edits and YouTube thumbnails by Rajeev Keer. Watch the work, then get in touch for your next video.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setMuted(v.muted);
  };

  return (
    <>
      <section className="px-4 pt-36 pb-6 sm:pt-44" aria-labelledby="portfolio-title">
        <div className="mx-auto max-w-6xl">
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              Portfolio
            </span>
          </Reveal>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <Reveal immediate delay={0.05}>
              <h1
                id="portfolio-title"
                className="text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] font-semibold"
              >
                Selected <span className="text-gradient">Work</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <p className="flex gap-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <span>
                  <span className="font-display text-2xl text-foreground">{videoCount}</span> Videos
                </span>
                <span>
                  <span className="font-display text-2xl text-foreground">{thumbCount}</span>{" "}
                  Thumbnails
                </span>
              </p>
            </Reveal>
          </div>
          <Reveal immediate delay={0.12}>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Cinematic edits and YouTube thumbnails — every piece cut, graded or designed by me.
              Hover a card to preview, click to see it full size.
            </p>
          </Reveal>

          {/* showreel */}
          <div
            style={{ animationDelay: "200ms" }}
            className="glass grain animate-rise relative mt-12 overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]"
          >
            <div className="relative aspect-video sm:aspect-[21/9]">
              <video
                ref={videoRef}
                src={showreel.video}
                autoPlay={!reduced}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${showreel.title} — showreel`}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-primary uppercase">
                    Featured · {showreel.format}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-4xl">{showreel.title}</h2>
                  <p className="mt-2 hidden max-w-lg text-sm text-muted-foreground sm:block">
                    {showreel.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-pressed={!muted}
                  className="glass inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                  {muted ? "Play with sound" : "Mute"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects
        withFilters
        eyebrow="All work"
        title="Videos &"
        highlight="Thumbnails"
        description="Filter by type. Video cards play on hover; thumbnails open full size."
      />

      <section className="px-4 pb-24" aria-labelledby="portfolio-cta">
        <Reveal>
          <div className="glass relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl p-8 sm:p-10 md:flex-row md:items-center">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-[90px]"
            />
            <div className="relative">
              <h2 id="portfolio-cta" className="text-2xl font-semibold sm:text-3xl">
                Want your next video to look like this?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Send your footage and deadline — I'll reply with a plan and a price.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <MagneticButton
                href={`${site.whatsapp}?text=${encodeURIComponent("Hi Rajeev, I saw your portfolio and have a project for you.")}`}
              >
                <MessageCircle className="size-4" /> WhatsApp Me
              </MagneticButton>
              <MagneticButton to="/pricing" variant="outline">
                See pricing <ArrowRight className="size-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
