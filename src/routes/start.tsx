import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import {
  briefBudgets,
  briefServices,
  briefVolumes,
  isBriefService,
  type BriefServiceId,
} from "@/data/brief";
import { pageMeta, site } from "@/data/site";
import { cn } from "@/lib/utils";

type StartSearch = { service?: BriefServiceId; monthly?: boolean };

export const Route = createFileRoute("/start")({
  validateSearch: (search: Record<string, unknown>): StartSearch => ({
    service: isBriefService(search.service) ? search.service : undefined,
    monthly: search.monthly === true || search.monthly === "true" ? true : undefined,
  }),
  head: () =>
    pageMeta({
      title: "Start a Project — Rajeev Keer, Video Editor",
      description:
        "Tell Rajeev Keer what you need — reels, YouTube edits, promos or thumbnails — and get a reply with a plan and a price.",
      path: "/start",
    }),
  component: StartPage,
});

const field =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none";
const label = "text-sm font-medium";

function StartPage() {
  const search = Route.useSearch();
  const [name, setName] = useState("");
  const [services, setServices] = useState<BriefServiceId[]>(
    search.service ? [search.service] : [],
  );
  const [volume, setVolume] = useState(search.monthly ? "Monthly retainer" : "");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const toggleService = (id: BriefServiceId) =>
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const buildMessage = () => {
    const details = [
      `• Need: ${services.map((id) => briefServices.find((s) => s.id === id)?.label).join(", ")}`,
      volume && `• How many: ${volume}`,
      // Parse as local midnight so the date doesn't shift a day in UTC.
      deadline &&
        `• Deadline: ${new Date(`${deadline}T00:00`).toLocaleDateString("en-IN", { dateStyle: "medium" })}`,
      budget && `• Budget: ${budget}`,
      link.trim() && `• Footage / reference: ${link.trim()}`,
      notes.trim() && `• Notes: ${notes.trim()}`,
    ].filter(Boolean);
    return [`Hi Rajeev, I'm ${name.trim()}. I'd like to start a project.`, "", ...details].join(
      "\n",
    );
  };

  const validate = () => {
    if (!name.trim()) return "Please add your name.";
    if (services.length === 0) return "Pick at least one thing you need.";
    return "";
  };

  const send = (channel: "whatsapp" | "email") => (e?: FormEvent) => {
    e?.preventDefault();
    const problem = validate();
    setError(problem);
    if (problem) return;
    const message = buildMessage();
    if (channel === "whatsapp") {
      window.open(`${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    } else {
      const subject = encodeURIComponent(`New project from ${name.trim()}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <section className="px-4 pt-36 pb-24 sm:pt-44" aria-labelledby="start-title">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              Start a project
            </span>
          </Reveal>
          <Reveal immediate delay={0.05}>
            <h1
              id="start-title"
              className="mt-5 text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-semibold"
            >
              Tell me about <span className="text-gradient">your video.</span>
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="mt-5 max-w-md text-muted-foreground">
              Fill this in and it opens WhatsApp (or email) with your brief already written — just
              hit send. I usually reply within a few hours with a plan and a price.
            </p>
          </Reveal>
          <Reveal immediate delay={0.15}>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Nothing is stored on this website",
                "Footage can be shared later on Drive or WeTransfer",
                "Clear timeline before any work starts",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal immediate delay={0.1}>
          <form
            onSubmit={send("whatsapp")}
            noValidate
            className="glass space-y-6 rounded-3xl p-6 sm:p-8"
          >
            <div className="space-y-2">
              <label htmlFor="brief-name" className={label}>
                Your name <span className="text-primary">*</span>
              </label>
              <input
                id="brief-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                placeholder="e.g. Aman, or your channel name"
                className={field}
              />
            </div>

            <fieldset className="space-y-3">
              <legend className={label}>
                What do you need? <span className="text-primary">*</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {briefServices.map((s) => {
                  const on = services.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleService(s.id)}
                      className={cn(
                        "min-h-10 rounded-full px-4 text-sm transition-all duration-300",
                        on
                          ? "bg-primary font-semibold text-primary-foreground"
                          : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
                      )}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="brief-volume" className={label}>
                  How many videos?
                </label>
                <select
                  id="brief-volume"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className={field}
                >
                  <option value="">Choose…</option>
                  {briefVolumes.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="brief-deadline" className={label}>
                  Deadline
                </label>
                <input
                  id="brief-deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className={field}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="brief-budget" className={label}>
                Budget
              </label>
              <select
                id="brief-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={field}
              >
                <option value="">Choose…</option>
                {briefBudgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="brief-link" className={label}>
                Footage or reference link
              </label>
              <input
                id="brief-link"
                type="url"
                inputMode="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Google Drive, YouTube or Instagram link (optional)"
                className={field}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="brief-notes" className={label}>
                Anything else?
              </label>
              <textarea
                id="brief-notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Style you like, video length, language, where it will be posted…"
                className={cn(field, "resize-y")}
              />
            </div>

            {error ? (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="glow-cyan inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" /> Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={send("email")}
                className="glass inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="size-4" /> Send by email
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
