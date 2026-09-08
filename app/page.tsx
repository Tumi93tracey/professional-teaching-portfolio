import { SiteHeader } from "@/components/portfolio/site-header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Services } from "@/components/portfolio/services"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Credentials } from "@/components/portfolio/credentials"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </>
  )
}
