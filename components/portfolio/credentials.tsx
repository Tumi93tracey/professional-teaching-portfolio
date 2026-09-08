"use client"

import { useEffect, useState } from "react"
import { X, Award, ExternalLink, Sparkles } from "lucide-react"
import { certifications, otherQualifications } from "@/lib/portfolio-data"

export function Credentials() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  const current = active !== null ? certifications[active] : null

  return (
    <section id="credentials" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Qualifications &amp; certifications</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            Verified training in early childhood education.
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Click any certificate to view the full document.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <article key={cert.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden bg-secondary text-left"
                aria-label={`View ${cert.title} certificate`}
              >
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Award className="size-4" />
                  {cert.type} · {cert.year}
                </div>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{cert.description}</p>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View certificate
                  <ExternalLink className="size-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/60 p-7">
          <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
            <Sparkles className="size-5 text-accent" />
            Additional training
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {otherQualifications.map((q) => (
              <li key={q.title} className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-foreground">{q.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{q.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} certificate`}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-card p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow hover:bg-background"
            >
              <X className="size-5" />
            </button>
            <img
              src={current.image || "/placeholder.svg"}
              alt={`${current.title} certificate from ${current.issuer}`}
              className="w-full rounded-lg"
            />
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">{current.title}</h3>
              <p className="text-sm text-muted-foreground">
                {current.issuer} · {current.type} · {current.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
