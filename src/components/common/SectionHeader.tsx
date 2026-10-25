import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) => (
  <Reveal
    className={cn(
      "mb-14 max-w-2xl",
      align === "center" && "mx-auto text-center"
    )}
  >
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {eyebrow}
    </span>
    <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
      {title} {highlight && <span className="text-gradient">{highlight}</span>}
    </h2>
    {description && (
      <p className="mt-5 text-lg text-muted-foreground">{description}</p>
    )}
  </Reveal>
);

export default SectionHeader;
