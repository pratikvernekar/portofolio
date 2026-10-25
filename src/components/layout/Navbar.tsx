import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.slice(1));

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500",
          scrolled
            ? "border-border bg-background shadow-md"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 rounded-full px-2 py-1 font-display text-lg font-bold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={profile.resumeUrl}
            className="btn-primary hidden px-5 py-2.5 md:inline-flex"
          >
            <Download size={15} />
            Resume
          </a>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-btn md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 -z-10 bg-background/80 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="surface mx-auto mt-3 max-w-5xl p-3 md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-display text-lg font-semibold transition-colors hover:bg-secondary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resumeUrl}
                className="btn-primary mt-2 w-full"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
