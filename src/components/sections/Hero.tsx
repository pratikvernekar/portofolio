import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";
import { highlights, profile } from "@/data/profile";
import { skills } from "@/data/skills";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-32"
  >
    <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

    <div className="container-page grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="order-2 text-center lg:order-1 lg:text-left">
        <motion.span {...fadeUp(0)} className="chip gap-2 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for new opportunities
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Hi, I'm {profile.name.split(" ")[0]}.
          <br />
          <span className="text-gradient">I build apps people love.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0"
        >
          <span className="font-semibold text-foreground">
            {profile.role} · {profile.specialty}.
          </span>{" "}
          {profile.intro}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <a href="#projects" className="btn-primary group">
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href="#contact" className="btn-ghost">
            Let's talk
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex justify-center lg:justify-start"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative order-1 mx-auto w-64 sm:w-80 lg:order-2 lg:w-full lg:max-w-sm"
      >
        <div className="aspect-square rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
          <img
            src={profile.image}
            alt={profile.name}
            width={960}
            height={960}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full rounded-full border-4 border-background object-cover"
          />
        </div>
      </motion.div>
    </div>

    <motion.div {...fadeUp(0.5)} className="container-page mt-20">
      <dl className="surface grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {highlights.map(({ value, label }) => (
          <div key={label} className="px-6 py-5 text-center">
            <dt className="sr-only">{label}</dt>
            <dd className="font-display text-2xl font-bold">{value}</dd>
            <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
          </div>
        ))}
      </dl>
    </motion.div>

    <ul className="container-page mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {skills.map((skill) => (
        <li key={skill.name} className="flex items-center gap-3 text-muted-foreground">
          <img src={skill.icon} alt="" className="h-7 w-7 object-contain" />
          <span className="font-display text-lg font-semibold">{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Hero;
