import { experience } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-surface-muted/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-10 border-l-2 border-lavender-200 pl-8 dark:border-lavender-800">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.company}-${entry.period}`} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[2.56rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-lavender-500" />
                <p className="text-sm font-medium text-lavender-600 dark:text-lavender-400">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {entry.role} &middot; {entry.company}
                </h3>
                <p className="text-sm text-foreground/60">{entry.location}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                  {entry.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
