import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">
            Rajeev <span className="text-gradient">Keer</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="size-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] tracking-[0.24em] text-primary uppercase">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] tracking-[0.24em] text-primary uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="hover:text-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                {site.phone}
              </a>
            </li>
            <li>{site.instagramHandle}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rajeev Keer. All rights reserved.</p>
        <p>Video editing · Thumbnails · Motion graphics</p>
      </div>
    </footer>
  );
}
