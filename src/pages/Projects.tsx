import { projects, projectsPage } from '../data/content.ts'
import PageHeader from '../components/ui/PageHeader.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import ProjectCard from '../components/ProjectCard.tsx'

export default function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projects" title={projectsPage.title} intro={projectsPage.intro} />
      <ul className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:grid-cols-2 sm:px-8 sm:pb-28 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={(i % 3) * 100} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  )
}
