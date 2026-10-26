import { about } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {about.heading}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="leading-relaxed text-foreground/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
              A few fun facts
            </h3>
            <ul className="mt-4 space-y-4">
              {about.funFacts.map((fact) => (
                <li key={fact.label} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lavender-500" />
                  <div>
                    <p className="font-semibold text-foreground">{fact.label}</p>
                    <p className="text-sm text-foreground/70">{fact.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
