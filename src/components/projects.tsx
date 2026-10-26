import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./reveal";

function isPlaceholder(url: string) {
  return url.includes("PLACEHOLDER") || url.includes("example.com");
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Things I&apos;ve built
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-500/10">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-lavender-300/60 px-2.5 py-0.5 text-xs text-lavender-700 dark:border-lavender-700 dark:text-lavender-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4 border-t border-border-subtle pt-4 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-lavender-600 hover:underline dark:text-lavender-300"
                    >
                      {link.label}
                      <ExternalLink size={13} />
                      {isPlaceholder(link.url) && (
                        <span className="ml-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                          Add your link
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
