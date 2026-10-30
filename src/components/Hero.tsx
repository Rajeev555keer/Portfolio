import { ArrowRight, IndianRupee, Mail } from "lucide-react";
import profile from "@/assets/profile.png";
import { site } from "@/data/site";
import { EditingLab } from "./EditingLab";
import { MagneticButton } from "./MagneticButton";

const facts = ["Editing since 2022", "Reels in 24–48h", "Videos · Thumbnails · Motion"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="home"
      className="relative px-4 pt-32 pb-20 sm:pt-40 md:pb-28"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="glass animate-rise inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] text-primary uppercase">
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Available for freelance work
          </span>

          <h1
            id="hero-title"
            style={delay(80)}
            className="animate-rise mt-6 text-[clamp(3rem,10vw,6.5rem)] leading-[0.9] font-semibold"
          >
            Rajeev
            <br />
            <span className="text-gradient">Keer</span>
          </h1>

          <p
            style={delay(140)}
            className="animate-rise mt-5 font-display text-lg font-medium text-foreground/90 sm:text-xl"
          >
            {site.role}
          </p>

          <p
            style={delay(180)}
            className="animate-rise mt-3 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            {site.tagline} I help creators and brands turn raw footage into content people actually
            finish watching.
          </p>

          <div style={delay(260)} className="animate-rise mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton to="/portfolio">
              View Portfolio <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton to="/pricing" variant="outline">
              <IndianRupee className="size-4" /> Price &amp; Order
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} variant="ghost">
              <Mail className="size-4" /> Contact Me
            </MagneticButton>
          </div>

          <div
            style={delay(400)}
            className="animate-rise mt-12 flex items-center gap-5 border-t border-border pt-8"
          >
            <div className="relative shrink-0">
              <div
                className="absolute -inset-1 rounded-full bg-primary/25 blur-xl"
                aria-hidden="true"
              />
              <img
                src={profile}
                alt="Portrait of Rajeev Keer, video editor and graphic designer"
                width={816}
                height={816}
                className="glass relative size-16 rounded-full object-cover object-center sm:size-20"
              />
            </div>
            <ul className="flex min-w-0 flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
              {facts.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <EditingLab />
      </div>
    </section>
  );
}
