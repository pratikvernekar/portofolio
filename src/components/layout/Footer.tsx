import SocialLinks from "@/components/common/SocialLinks";
import { navLinks, profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-border/70">
    <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
      <div className="text-center md:text-left">
        <p className="font-display text-lg font-bold">{profile.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with React, Tailwind CSS &
          Framer Motion
        </p>
      </div>

      <ul className="flex items-center gap-6 text-sm">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
