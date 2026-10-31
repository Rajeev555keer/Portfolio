import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ShareButton } from "@/components/ShareButton";
import { categoryService } from "@/data/brief";
import { projects } from "@/data/projects";
import { pageMeta, site } from "@/data/site";
import { cn } from "@/lib/utils";

const findProject = (id: string) => projects.find((p) => p.id === id);

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    if (!findProject(params.projectId)) throw notFound();
  },
  head: ({ params }) => {
    const project = findProject(params.projectId);
    if (!project) return {};
    return pageMeta({
      title: `${project.title} — Rajeev Keer`,
      description: project.description,
      path: `/work/${project.id}`,
      image: project.image,
    });
  },
  component: WorkPage,
});

function WorkPage() {
  const { projectId } = Route.useParams();
  const navigate = useNavigate();
  const project = findProject(projectId)!;
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, project.vertical ? 3 : 2);
  const url = `${site.url}/work/${project.id}`;
  const whatsappText = `Hi Rajeev, I saw "${project.title}" on your portfolio and want something similar.`;

  return (
    <>
      <section className="px-4 pt-32 pb-16 sm:pt-40" aria-labelledby="work-title">
        <div className="mx-auto max-w-6xl">
          <Reveal immediate>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> All work
            </Link>
          </Reveal>

          <div
            className={cn(
              "mt-8 grid gap-10",
              project.vertical ? "md:grid-cols-[auto_1fr] md:items-start" : "",
            )}
          >
            <Reveal immediate delay={0.05}>
              <div
                className={cn(
                  "glass overflow-hidden rounded-3xl bg-black shadow-[var(--shadow-elevated)]",
                  project.vertical ? "mx-auto w-fit" : "",
                )}
              >
                {project.video ? (
                  <video
                    key={project.id}
                    src={project.video}
                    poster={project.image}
                    controls
                    playsInline
                    preload="metadata"
                    className={
                      project.vertical
                        ? "aspect-[9/16] h-[75dvh] max-h-[720px] w-auto"
                        : "aspect-video w-full"
                    }
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-contain"
                  />
                )}
              </div>
            </Reveal>

            <Reveal immediate delay={0.1}>
              <div className={project.vertical ? "" : "max-w-3xl"}>
                <span className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
                  {project.category} · {project.format}
                </span>
                <h1
                  id="work-title"
                  className="mt-3 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-semibold"
                >
                  {project.title}
                </h1>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                  {project.description}
                </p>

                {project.tools.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    to="/start"
                    search={{ service: categoryService[project.category] }}
                  >
                    Want something like this? <ArrowRight className="size-4" />
                  </MagneticButton>
                  <MagneticButton
                    href={`${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
                    variant="outline"
                  >
                    <MessageCircle className="size-4" /> WhatsApp
                  </MagneticButton>
                  <ShareButton url={url} title={project.title} />
                </div>

                <nav
                  aria-label="More projects"
                  className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-5"
                >
                  <Link
                    to="/work/$projectId"
                    params={{ projectId: prev.id }}
                    className="inline-flex min-h-11 max-w-[45%] items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronLeft className="size-4 shrink-0" />
                    <span className="truncate">{prev.title}</span>
                  </Link>
                  <Link
                    to="/work/$projectId"
                    params={{ projectId: next.id }}
                    className="inline-flex min-h-11 max-w-[45%] items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="truncate">{next.title}</span>
                    <ChevronRight className="size-4 shrink-0" />
                  </Link>
                </nav>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="px-4 pb-24" aria-labelledby="related-title">
          <div className="mx-auto max-w-6xl">
            <h2 id="related-title" className="text-2xl font-semibold sm:text-3xl">
              More <span className="text-gradient">{project.category.toLowerCase()}</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-6">
              {related.map((p) => (
                <div
                  key={p.id}
                  className={p.vertical ? "col-span-1 md:col-span-2" : "col-span-2 md:col-span-3"}
                >
                  <ProjectCard
                    project={p}
                    onOpen={() => navigate({ to: "/work/$projectId", params: { projectId: p.id } })}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
