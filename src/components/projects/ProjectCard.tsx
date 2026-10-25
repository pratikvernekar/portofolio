import { useEffect, useRef, useState, type ComponentType } from "react";
import { ExternalLink, Github } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Reveal from "@/components/common/Reveal";
import { useSlideshowTurn } from "@/hooks/useSlideshowTurn";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

const SLIDE_INTERVAL_MS = 3200;

type ProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

const ProjectCard = ({ project, reversed = false }: ProjectCardProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const { images, accent, links } = project;
  const { active, setVisibleRatio } = useSlideshowTurn(project.id);
  const playing = active && !hovered && images.length > 1;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleRatio(entry.isIntersecting ? entry.intersectionRatio : 0);
      },
      { threshold: [0, 0.35, 0.6, 1] }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [setVisibleRatio]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setCurrent((index) => (index + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing, images.length]);

  useEffect(() => {
    if (!playing) return;
    const next = new Image();
    next.src = images[(current + 1) % images.length];
  }, [playing, current, images]);

  const actions: {
    label: string;
    href?: string;
    icon: ComponentType<{ size?: number }>;
  }[] = [
    { label: "App Store", href: links.appStore, icon: FaApple },
    { label: "Google Play", href: links.playStore, icon: FaGooglePlay },
    { label: "Live site", href: links.live, icon: ExternalLink },
    { label: "Source", href: links.github, icon: Github },
  ];

  return (
    <Reveal>
      <article className="surface grid overflow-hidden p-3 lg:grid-cols-2">
        <div
          ref={frameRef}
          className={cn(
            "relative flex h-[380px] items-center justify-center overflow-hidden rounded-[1.25rem] sm:h-[440px]",
            reversed && "lg:order-2"
          )}
          style={{
            background: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={images[current]}
            alt={`${project.title} screenshot ${current + 1} of ${images.length}`}
            width={1280}
            height={593}
            loading="lazy"
            decoding="async"
            className="relative h-[88%] w-auto object-contain"
          />

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2.5 py-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
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
          <p className="mt-2 font-medium" style={{ color: accent[1] }}>
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
