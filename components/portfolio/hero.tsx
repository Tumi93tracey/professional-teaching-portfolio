import { MapPin, ArrowRight, Download } from "lucide-react"
import { profile, stats, cvUrl } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            Tutor &amp; ECD Educator
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.tagline}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Work with me
              <ArrowRight className="size-4" />
            </a>
            <a
              href={cvUrl}
              download={`${profile.name.replace(/\s+/g, "-")}-CV.pdf`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-primary">{stat.value}</dd>
                <p className="mt-1 text-xs font-medium leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/25 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5">
            <img
              src="/learning-flatlay.png"
              alt="Early childhood learning materials: storybooks, alphabet blocks, and a lesson-plan notebook"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
