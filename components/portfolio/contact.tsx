import { Mail, Phone, MapPin, Users } from "lucide-react"
import { profile, references } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get in touch</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Let&apos;s help a child love learning.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80 text-pretty">
              Available for tutoring, aftercare, lesson planning, and custom learning resources. Reach out and
              let&apos;s talk about how I can help.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="size-5" />
                  </span>
                  <span className="font-medium">{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-accent">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="size-5" />
                  </span>
                  <span className="font-medium">{profile.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10">
                  <MapPin className="size-5" />
                </span>
                <span className="font-medium">{profile.address}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
            <h3 className="flex items-center gap-2 font-serif text-xl font-semibold">
              <Users className="size-5 text-accent" />
              References
            </h3>
            <ul className="mt-6 space-y-6">
              {references.map((ref) => (
                <li key={ref.email} className="border-b border-primary-foreground/10 pb-6 last:border-0 last:pb-0">
                  <p className="font-semibold">{ref.name}</p>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">{ref.role}</p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-primary-foreground/85">
                    <a href={`mailto:${ref.email}`} className="hover:text-accent">
                      {ref.email}
                    </a>
                    <span>{ref.phone}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
      </div>
    </section>
  )
}
