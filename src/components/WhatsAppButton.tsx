import { useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Floating chat shortcut — shows once the visitor scrolls past the first screen. */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The brief form already ends in a WhatsApp button.
  if (pathname === "/start") return null;

  return (
    <a
      href={`${site.whatsapp}?text=${encodeURIComponent("Hi Rajeev, I have a video project for you.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-4 bottom-4 z-[45] grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--glow-cyan)] transition-all duration-500 hover:scale-105 sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
