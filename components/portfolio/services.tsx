import { BookOpen, CalendarDays, Heart, GraduationCap, type LucideIcon } from "lucide-react"
import { services } from "@/lib/portfolio-data"

const icons: Record<string, LucideIcon> = {
  BookOpen,
  CalendarDays,
  Heart,
  GraduationCap,
}

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What I offer</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            Learning resources &amp; support, made for each child.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground text-pretty">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
