import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react";
import { site } from "@/data/site";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

const socials = [
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    Icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    Icon: Instagram,
  },
  {
    label: "YouTube",
    value: site.youtubeHandle,
    href: site.youtube,
    Icon: Youtube,
  },
];

export function Contact({ immediate = false }: { immediate?: boolean }) {
  return (
    <section id="contact" className="relative px-4 py-24" aria-labelledby="contact-title">
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute inset-x-8 top-10 h-72 rounded-full bg-primary/12 blur-[130px]"
      />
      <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
        <Reveal immediate={immediate}>
          <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
            Contact
          </span>
        </Reveal>
        <Reveal immediate={immediate} delay={0.05}>
          <h2
            id="contact-title"
            className="mt-5 text-[clamp(2rem,6vw,3.75rem)] leading-[1.05] font-semibold"
          >
            Have a project in mind?
            <br />
            <span className="text-gradient">Let's create something great.</span>
          </h2>
        </Reveal>
        <Reveal immediate={immediate} delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell me about your channel, your footage and your deadline. I usually reply within a few
            hours.
          </p>
        </Reveal>

        <Reveal immediate={immediate} delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton
              href={`${site.whatsapp}?text=${encodeURIComponent("Hi Rajeev, I have a video project for you.")}`}
            >
              <MessageCircle className="size-4" /> WhatsApp Me
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} variant="outline">
              <Mail className="size-4" /> {site.email}
            </MagneticButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Prefer to send a full brief?{" "}
            <Link to="/start" className="text-primary underline-offset-4 hover:underline">
              Fill the project form →
            </Link>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.label} immediate={immediate} delay={0.2 + i * 0.06}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-background/40 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                  <s.Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{s.label}</span>
                  <span className="block truncate text-xs text-muted-foreground">{s.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
