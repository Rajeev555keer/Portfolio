import { Film, Smartphone, Image, Sparkles, PenTool, Handshake } from "lucide-react";
import { services } from "@/data/pricing";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { Film, Smartphone, Image, Sparkles, PenTool, Handshake };

export function Services() {
  return (
    <section id="services" className="px-4 py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services-title"
          eyebrow="What I do"
          title="Creative"
          highlight="Services"
          description="Everything you need to publish consistently and look premium doing it."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group glass relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                  <div className="absolute inset-x-0 -top-24 h-40 bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className="size-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
