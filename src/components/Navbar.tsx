import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <nav
          aria-label="Main"
          className={cn(
            "glass mt-4 flex w-full max-w-5xl items-center justify-between rounded-full transition-all duration-500",
            scrolled ? "px-4 py-2 shadow-[var(--shadow-elevated)]" : "px-5 py-3",
          )}
        >
          <Link
            to="/"
            className="font-display text-sm font-semibold tracking-tight sm:text-base"
          >
            Rajeev<span className="text-primary">.</span>
            <span className="hidden sm:inline"> Keer</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  activeOptions={{ exact: l.to === "/" && !l.hash, includeHash: false }}
                  className="group relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
            >
              Let's Work Together
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid min-h-11 min-w-11 place-items-center rounded-full text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background/92 px-6 backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    hash={l.hash}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-border py-4 text-3xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Let's Work Together
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}