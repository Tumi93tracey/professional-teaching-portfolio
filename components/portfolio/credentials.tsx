import { Award, Download, Sparkles, FileText } from "lucide-react"
import { certifications, otherQualifications, cvUrl, profile } from "@/lib/portfolio-data"

export function Credentials() {
  return (
    <section id="credentials" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Qualifications &amp; certifications
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
              Verified training in early childhood education.
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Download my CV or any individual certificate below.
            </p>
          </div>

          <a
            href={cvUrl}
            download={`${profile.name.replace(/\s+/g, "-")}-CV.pdf`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Award className="size-4" />
                {cert.type} · {cert.year}
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">{cert.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{cert.issuer}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {cert.description}
              </p>
              <a
                href={cert.image}
                download
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-3.5" />
                Download certificate
              </a>
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
              <li key={q.title} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <FileText className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{q.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{q.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
