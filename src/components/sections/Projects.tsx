import { Sparkles } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => (
  <section id="projects" className="section">
    <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

    <div className="container-page">
      <SectionHeader
        eyebrow="Selected work"
        title="Featured"
        highlight="projects"
        description="Production apps I've built and shipped to the App Store and Google Play."
      />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-10 flex items-center justify-center gap-2 rounded-3xl border border-dashed border-border px-6 py-8 text-center text-muted-foreground">
        <Sparkles size={18} className="text-primary" />
        <span>More projects are on the way — stay tuned.</span>
      </Reveal>
    </div>
  </section>
);

export default Projects;
