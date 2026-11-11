import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { projects, type Project } from '../data/content.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import ProjectCover from '../components/ProjectCover.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import Chip from '../components/ui/Chip.tsx'
import NotFound from './NotFound.tsx'

const blocks = [
  { id: 'problem', title: 'Problem' },
  { id: 'role', title: 'My role' },
  { id: 'process', title: 'Process' },
  { id: 'tools', title: 'Tools' },
  { id: 'outcome', title: 'Outcome' },
] as const

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line pt-8">
        <h2 id={`${id}-title`} className="text-xs font-bold tracking-[0.18em] text-muted uppercase">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  )
}

function Neighbors({ index }: { index: number }) {
  const prev: Project | undefined = projects[index - 1]
  const next: Project | undefined = projects[index + 1]
  return (
    <nav aria-label="More projects" className="mt-20 grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link to={`/projects/${prev.slug}`} className="group rounded-2xl bg-surface p-5 ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-xs font-semibold text-muted">← Previous</p>
          <p className="mt-1 font-extrabold tracking-tight text-heading">{prev.title}</p>
        </Link>
      ) : (
        <Link to="/projects" className="rounded-2xl bg-surface p-5 ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-xs font-semibold text-muted">← Back</p>
          <p className="mt-1 font-extrabold tracking-tight text-heading">All projects</p>
        </Link>
      )}
      {next ? (
        <Link to={`/projects/${next.slug}`} className="rounded-2xl bg-surface p-5 text-right ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-xs font-semibold text-muted">Next →</p>
          <p className="mt-1 font-extrabold tracking-tight text-heading">{next.title}</p>
        </Link>
      ) : (
        <Link to="/contact" className="rounded-2xl bg-surface p-5 text-right ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-xs font-semibold text-muted">Like what you see? →</p>
          <p className="mt-1 font-extrabold tracking-tight text-heading">Get in touch</p>
        </Link>
      )}
    </nav>
  )
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  usePageTitle(project.title, project.summary)
  const cs = project.caseStudy

  return (
    <article className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-28">
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.18em] text-muted uppercase">{project.subtitle}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
      </header>

      <Reveal className="mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgb(11_31_75/0.45)] ring-1 ring-line">
        <ProjectCover project={project} />
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
        {/* On this page (desktop only) */}
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <nav aria-label="On this page" className="rounded-3xl bg-surface p-6 ring-1 ring-line">
            <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">On this page</p>
            <ul className="mt-4 grid gap-1 text-sm">
              {blocks.map((b) => (
                <li key={b.id}>
                  <a href={`#${b.id}`} className="block rounded-lg px-2 py-1.5 font-medium text-muted hover:bg-surface-2 hover:text-heading">
                    {b.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Story */}
        <div className="grid max-w-2xl gap-12 text-lg leading-relaxed">
          <Block id="problem" title="Problem">
            <p>{cs.problem}</p>
          </Block>
          <Block id="role" title="My role">
            <p>{cs.role}</p>
          </Block>
          <Block id="process" title="Process">
            <ol className="grid gap-4">
              {cs.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 text-sm font-bold text-heading">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </Block>
          <Block id="tools" title="Tools">
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool}>
                  <Chip>{tool}</Chip>
                </li>
              ))}
            </ul>
          </Block>
          <Block id="outcome" title="Outcome">
            <ul className="grid gap-3">
              {cs.outcome.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.55em] size-2 shrink-0 rounded-full bg-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      <Neighbors index={index} />
    </article>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />
  // `key` resets scroll-reveal state when moving between case studies.
  return <CaseStudy key={slug} project={projects[index]} index={index} />
}
