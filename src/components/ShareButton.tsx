import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Native share sheet on phones, copy-to-clipboard elsewhere. */
export function ShareButton({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    if (typeof navigator === "undefined") return;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // Dismissed or unsupported for this payload; fall back to copying.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-primary",
        className,
      )}
    >
      {copied ? <Check className="size-4 text-primary" /> : <Share2 className="size-4" />}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
