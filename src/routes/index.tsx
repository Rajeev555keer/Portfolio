import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Software } from "@/components/Software";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { projects } from "@/data/projects";
import { pageMeta } from "@/data/site";

const featured = projects.filter((p) => p.featured);

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Rajeev Keer — Video Editor & Graphic Designer",
      description:
        "Rajeev Keer creates cinematic videos, viral reels, YouTube content and professional graphics. Video editing, thumbnail design and motion graphics for creators and brands.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Projects items={featured} withPortfolioLink />
      <Services />
      <Process />
      <Software />
      <Experience />
      <FAQ />
      <Contact />
    </>
  );
}
