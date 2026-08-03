import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, IndianRupee, Mail } from "lucide-react";
import profile from "@/assets/profile.png";
import { site } from "@/data/site";
import { EditingLab } from "./EditingLab";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative px-4 pt-32 pb-20 sm:pt-40 md:pb-28"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.28em] text-primary uppercase"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Creative Editor / Designer
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3rem,10vw,6.5rem)] leading-[0.9] font-semibold"
          >
            Rajeev
            <br />
            <span className="text-gradient">Keer</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            {site.tagline} I help creators and brands turn raw footage into content
            people actually finish watching.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton to="/" hash="projects">
              View My Work <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton to="/pricing" variant="outline">
              <IndianRupee className="size-4" /> Price &amp; Order
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} variant="ghost">
              <Mail className="size-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-primary/25 blur-xl" aria-hidden="true" />
              <motion.img
                src={profile}
                alt="Portrait of Rajeev Keer, video editor and graphic designer"
                width={816}
                height={816}
                className="glass relative size-20 rounded-full object-cover object-center transition-transform duration-500 hover:scale-105 sm:size-24"
                animate={reduced ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium">Video Editor &amp; Graphic Designer</p>
              <p className="text-sm text-muted-foreground">
                YouTube Content Creator · Cyber Security Learner
              </p>
            </div>
          </motion.div>
        </div>

        <EditingLab />
      </div>
    </section>
  );
}