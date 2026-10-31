import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
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

// Toolkit and experience live on /about to keep the home page focused on the work.
function Index() {
  return (
    <>
      <Hero />
      <Clients />
      <Projects items={featured} withPortfolioLink />
      <Services />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
