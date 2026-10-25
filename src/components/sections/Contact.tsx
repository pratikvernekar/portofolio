import { Copy, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/common/Reveal";
import SocialLinks from "@/components/common/SocialLinks";
import { profile } from "@/data/profile";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
];

const Contact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — please copy it manually");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal className="surface p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-6 bg-primary" />
                Get in touch
              </span>
              <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                Have a project in mind?{" "}
                <span className="text-gradient">Let's work together.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                {profile.availability}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Send size={16} />
                  Say hello
                </a>
                <button onClick={copyEmail} className="btn-ghost">
                  <Copy size={16} />
                  Copy email
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate font-medium group-hover:text-primary">
                      {value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/50 p-4">
                <span className="text-sm text-muted-foreground">
                  Find me on
                </span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
