import type { LucideIcon } from "lucide-react";

export type ProjectType = "app" | "site";

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  live?: string;
  github?: string;
};

export type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  images: string[];
  type: ProjectType;
  links: ProjectLinks;
  /** Brand gradient used behind the screenshot carousel, as [from, to] hex colors. */
  accent: [string, string];
};

export type Skill = {
  name: string;
  icon: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type Highlight = {
  value: string;
  label: string;
};
