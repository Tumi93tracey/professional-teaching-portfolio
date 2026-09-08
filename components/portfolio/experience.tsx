import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Experience</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            Five years of hands-on classroom teaching.
          </h2>
        </div>

        <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-10">
          {experience.map((job) => (
            <li key={job.role + job.org} className="relative">
              <span
                className="absolute -left-[calc(1.5rem+5px)] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl font-semibold text-foreground">{job.role}</h3>
                <span className="text-sm font-medium text-muted-foreground">{job.period}</span>
              </div>
              <p className="mt-0.5 font-medium text-primary">{job.org}</p>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-muted-foreground leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
