import { motion } from "framer-motion";
import { Gauge, Layout, Smartphone } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { profile } from "@/data/profile";
import { additionalSkills, skills } from "@/data/skills";

const focusAreas = [
  {
    icon: Smartphone,
    title: "Mobile apps",
    text: "Cross-platform iOS & Android apps with React Native.",
  },
  {
    icon: Layout,
    title: "Web interfaces",
    text: "Responsive, accessible UIs with React & TypeScript.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Smooth interactions, lean bundles and fast loads.",
  },
];

const About = () => (
  <section id="about" className="section">
    <div className="container-page">
      <SectionHeader
        eyebrow="About me"
        title="Passionate about crafting"
        highlight="impactful digital products"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="surface p-8 lg:col-span-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="surface p-8">
          <h3 className="mb-6 text-lg font-semibold">What I do</h3>
          <ul className="space-y-5">
            {focusAreas.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="surface p-8 lg:col-span-2">
          <h3 className="mb-6 text-lg font-semibold">Core toolkit</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-background/50 p-4 transition-colors hover:border-primary/40"
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="surface p-8">
          <h3 className="mb-6 text-lg font-semibold">Also experienced in</h3>
          <ul className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <li
                key={skill}
                className="chip px-3.5 py-1.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
