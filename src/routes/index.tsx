import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Software } from "@/components/Software";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const title = "Rajeev Keer — Video Editor & Graphic Designer";
const description =
  "Rajeev Keer creates cinematic videos, viral reels, YouTube content and professional graphics. Video editing, thumbnail design and motion graphics for creators and brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Software />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
