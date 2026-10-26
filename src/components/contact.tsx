import { Mail } from "lucide-react";
import { contact, personalInfo } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { label: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail },
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: personalInfo.github, Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-foreground/70">{contact.blurb}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-lavender-400 hover:text-lavender-700 sm:w-auto dark:hover:text-lavender-300"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
