import { socialLinks } from "@/data/profile";
import { cn } from "@/lib/utils";

const SocialLinks = ({ className }: { className?: string }) => (
  <ul className={cn("flex items-center gap-3", className)}>
    {socialLinks.map(({ name, href, icon: Icon }) => (
      <li key={name}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="icon-btn"
        >
          <Icon size={18} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
