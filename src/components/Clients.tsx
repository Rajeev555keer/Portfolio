import { clients, site } from "@/data/site";
import { Reveal } from "./Reveal";

/** "Worked with" strip — only real clients whose edits are in the portfolio. */
export function Clients() {
  return (
    <section aria-label="Clients" className="px-4">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 border-y border-border py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Edits made for
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <li key={c.name}>
                <span className="font-display block text-lg font-semibold sm:text-xl">
                  {c.name}
                </span>
                <span className="block text-xs text-muted-foreground">{c.note}</span>
              </li>
            ))}
            <li>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="group block transition-colors hover:text-primary"
              >
                <span className="font-display block text-lg font-semibold sm:text-xl">
                  {site.youtubeHandle}
                </span>
                <span className="block text-xs text-muted-foreground">My own YouTube channel</span>
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
