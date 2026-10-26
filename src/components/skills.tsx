import { skills } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section id="skills" className="bg-surface-muted/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-lavender-600 dark:text-lavender-400">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-500/10">
                <h3 className="font-semibold text-lavender-700 dark:text-lavender-300">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-lavender-100 px-3 py-1 text-xs font-medium text-lavender-800 dark:bg-lavender-900/50 dark:text-lavender-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
