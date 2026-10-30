import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const title = "Pricing & Services — Rajeev Keer";
const description =
  "Video editing, reels, thumbnails and motion graphics pricing. Pay per video or save with a monthly retainer.";

export const Route = createFileRoute("/pricing")({
  head: () => pageMeta({ title, description, path: "/pricing" }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="px-4 pt-36 pb-4 text-center sm:pt-44" aria-labelledby="pricing-hero">
        <div className="mx-auto max-w-3xl">
          <Reveal immediate>
            <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
              Work with me
            </span>
          </Reveal>
          <Reveal immediate delay={0.05}>
            <h1
              id="pricing-hero"
              className="mt-5 text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] font-semibold"
            >
              Pricing &amp; <span className="text-gradient">Services</span>
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Clear packages for creators and brands. Pick a plan, send your footage, get a finished
              edit.
            </p>
          </Reveal>
        </div>
      </section>

      <Services />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
