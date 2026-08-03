import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  to?: string;
  hash?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const base =
  "relative inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold",
  outline:
    "glass text-foreground hover:border-primary/50 hover:text-primary",
  ghost: "text-muted-foreground hover:text-primary",
};

export function MagneticButton({
  children,
  variant = "primary",
  to,
  hash,
  href,
  onClick,
  className,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="inline-flex rounded-full"
      >
        {inner}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} hash={hash} aria-label={ariaLabel} className="inline-flex rounded-full">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-flex rounded-full">
      {inner}
    </button>
  );
}