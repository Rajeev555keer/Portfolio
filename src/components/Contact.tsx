import { Mail, MessageCircle, Instagram, Youtube, Radio } from "lucide-react";
import { site } from "@/data/site";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

const socials = [
  { label: "Instagram", value: site.instagramHandle, href: site.instagram, Icon: Instagram },
  { label: "YouTube", value: site.youtubeHandle, href: site.youtube, Icon: Youtube },
  { label: "WhatsApp Channel", value: "Join Now", href: site.whatsappChannel, Icon: Radio },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24" aria-labelledby="contact-title">
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute inset-x-8 top-10 h-72 rounded-full bg-primary/12 blur-[130px]"
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
            Contact
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="contact-title"
            className="mt-5 text-[clamp(2rem,6vw,3.75rem)] leading-[1.05] font-semibold"
          >
            Have a project in mind?
            <br />
            <span className="text-gradient">Let's create something great.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell me about your channel, your footage and your deadline. I usually
            reply within a few hours.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton href={`mailto:${site.email}`}>
              <Mail className="size-4" /> Email Me
            </MagneticButton>
            <MagneticButton href={site.whatsapp} variant="outline">
              <MessageCircle className="size-4" /> WhatsApp Me
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a className="hover:text-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:text-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
              {site.phone}
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={0.25 + i * 0.06}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex h-full items-center gap-4 rounded-2xl p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
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