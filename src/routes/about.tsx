import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Captions, Clock, Layers, Smartphone } from "lucide-react";
import profile from "@/assets/profile.png";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Software } from "@/components/Software";
import { clients, pageMeta, site } from "@/data/site";

const facts = [
  { label: "Based in", value: "India" },
  { label: "Editing since", value: "2022" },
  { label: "Languages", value: "Hindi & English" },
  { label: "Reels delivered in", value: "24–48 hours" },
];

const strengths = [
  {
    Icon: Clock,
    title: "Retention-first cuts",
    body: "Hook in the first seconds, cut anything that doesn't earn its place, keep the pace up to the last frame.",
  },
  {
    Icon: Captions,
    title: "Captions people can read",
    body: "Word-by-word Hindi and English captions sized for phones, with highlights on the words that matter.",
  },
  {
    Icon: Smartphone,
    title: "Made for short-form",
    body: "Vertical edits with B-roll, on-screen graphics and transitions that suit Reels and YouTube Shorts.",
  },
  {
    Icon: Layers,
    title: "Edit and design together",
    body: "Thumbnails and graphics designed alongside the video, so the click and the watch feel like one brand.",
  },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Rajeev Keer — Video Editor & Graphic Designer",
      description:
        "Rajeev Keer is a video editor and graphic designer from India, editing reels, YouTube videos and promos for creators and educators since 2022.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="px-4 pt-36 pb-16 sm:pt-44" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal immediate>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
                <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
                About
              </span>
            </Reveal>
            <Reveal immediate delay={0.05}>
              <h1
                id="about-title"
                className="mt-5 text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] font-semibold"
              >
                Hi, I'm <span className="text-gradient">Rajeev.</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <div className="mt-6 max-w-xl space-y-4 text-base text-muted-foreground sm:text-lg">
                <p>
                  I'm a video editor and graphic designer from India. I started editing in 2022 on
                  my own YouTube channel — gaming and farming videos — which is where I learned what
                  makes people click, and what keeps them watching.
                </p>
                <p>
                  Today I edit for creators and educators: brand promos and channel intros,
                  short-form reels for CA faculty, cinematic pieces and YouTube thumbnails. Send me
                  raw footage, and you get back something people actually finish watching.
                </p>
              </div>
            </Reveal>
            <Reveal immediate delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton to="/portfolio">
                  See my work <ArrowRight className="size-4" />
                </MagneticButton>
                <MagneticButton to="/start" variant="outline">
                  Start a project
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal immediate delay={0.2}>
            <div className="glass relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl p-3 shadow-[var(--shadow-elevated)]">
              <div
                className="absolute -top-20 -right-20 size-56 rounded-full bg-primary/20 blur-[80px]"
                aria-hidden="true"
              />
              <img
                src={profile}
                alt="Rajeev Keer"
                width={816}
                height={816}
                className="relative aspect-square w-full rounded-2xl object-cover"
              />
              <dl className="relative mt-3 grid grid-cols-2 gap-2">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl border border-border bg-background/40 p-3"
                  >
                    <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24" aria-labelledby="strengths-title">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="strengths-title"
            eyebrow="What I bring"
            title="Edits built for"
            highlight="attention"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} className="h-full">
                <article className="glass group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <s.Icon className="size-6 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
                Worked with
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {clients.map((c) => (
                  <li key={c.name}>
                    <span className="font-display block text-lg font-semibold">{c.name}</span>
                    <span className="block text-xs text-muted-foreground">{c.note}</span>
                  </li>
                ))}
                <li>
                  <span className="font-display block text-lg font-semibold">
                    {site.youtubeHandle}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    My own YouTube channel
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Software />
      <Experience />
      <Contact />
    </>
  );
}
