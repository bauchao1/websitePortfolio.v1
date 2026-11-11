import { Link } from 'react-router'
import type { Project } from '../data/content.ts'
import ProjectCover from './ProjectCover.tsx'
import Chip from './ui/Chip.tsx'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] ring-1 ring-line/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgb(15_23_42/0.06),0_20px_40px_-16px_rgb(11_31_75/0.25)] dark:ring-line"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <ProjectCover project={project} className="transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">{project.subtitle}</p>
        <h3 className="mt-2 text-xl font-extrabold tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Chip key={tool}>{tool}</Chip>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-link">
          Read case study
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
