import Image from "next/image"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Projects &amp; community work</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            Giving back through outreach and events.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Beyond the classroom, I plan and lead community projects that raise funds, support vulnerable groups, and
            bring people together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.tag}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground text-balance">{project.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
