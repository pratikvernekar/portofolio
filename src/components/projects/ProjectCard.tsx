import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

const SLIDE_INTERVAL_MS = 2200;

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

const ProjectCard = ({ project, reversed = false }: ProjectCardProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { images, accent, links } = project;

  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = setInterval(
      () => setCurrent((index) => (index + 1) % images.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused, images.length]);

  const actions: { label: string; href?: string; icon: ComponentType<{ size?: number }> }[] = [
    { label: "App Store", href: links.appStore, icon: FaApple },
    { label: "Google Play", href: links.playStore, icon: FaGooglePlay },
    { label: "Live site", href: links.live, icon: ExternalLink },
    { label: "Source", href: links.github, icon: Github },
  ];

  return (
    <Reveal>
      <article className="surface group grid overflow-hidden p-3 lg:grid-cols-2">
        <div
          className={cn(
            "relative flex h-[380px] items-center justify-center overflow-hidden rounded-[1.25rem] sm:h-[440px]",
            reversed && "lg:order-2"
          )}
          style={{
            background: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`${project.title} screenshot ${current + 1}`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative h-[88%] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/20 px-2.5 py-1.5 backdrop-blur">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Show screenshot ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full bg-white transition-all duration-300",
                  index === current ? "w-5" : "w-1.5 opacity-50 hover:opacity-80"
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10">
          <span className="chip w-fit">
            {project.type === "app" ? "Mobile app · iOS & Android" : "Web app"}
          </span>

          <h3 className="mt-5 text-3xl font-bold sm:text-4xl">{project.title}</h3>
          <p
            className="mt-2 font-medium"
            style={{ color: accent[1] }}
          >
            {project.tagline}
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {actions
              .filter((action) => action.href)
              .map(({ label, href, icon: Icon }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 0 ? "btn-primary" : "btn-ghost"}
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ProjectCard;
