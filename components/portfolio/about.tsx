import { skillGroups, profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About me</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
              An educator who builds the tools children need to thrive.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{profile.summary}</p>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-foreground">Skills</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{group.title}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
