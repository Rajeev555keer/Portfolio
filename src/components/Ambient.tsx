/** Animated background orbs + grid. Purely decorative. */
export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
        }}
      />
      <div className="animate-pulse-glow absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/12 blur-[140px]" />
      <div className="animate-pulse-glow absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[150px]" />
      <div className="animate-pulse-glow absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-[160px]" />
    </div>
  );
}