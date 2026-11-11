import { Link } from 'react-router'
import { experience, jobs, type Job } from '../data/content.ts'
import PageHeader from '../components/ui/PageHeader.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import Button from '../components/ui/Button.tsx'
import Icon from '../components/ui/Icon.tsx'

const card =
  'rounded-3xl bg-surface shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] ring-1 ring-line/60 dark:ring-line'

function RoleTimeline({ job }: { job: Job }) {
  return (
    <ol className="relative mt-8 grid gap-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line">
      {job.roles.map((role) => (
        <li key={role.title} className="relative pl-9">
          <span
            aria-hidden="true"
            className={`absolute top-1.5 left-0 size-[15px] rounded-full border-[3px] ${
              role.current ? 'border-sky bg-surface' : 'border-line bg-surface'
            }`}
          />
          <p className="text-sm font-semibold text-muted">
            <time>{role.period}</time>
            {role.current && (
              <span className="ml-2 rounded-full bg-surface-2 px-2 py-0.5 text-xs font-bold text-heading">Current</span>
            )}
          </p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight">{role.title}</h3>
          {role.note && <p className="mt-1 text-sm text-muted">{role.note}</p>}
        </li>
      ))}
    </ol>
  )
}

function Highlights({ job }: { job: Job }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {job.highlights.map((group, i) => (
        <li key={group.title}>
          <Reveal delay={i * 80} className="h-full rounded-2xl bg-surface-2/60 p-6 dark:bg-surface-2">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-surface text-heading shadow-sm dark:bg-navy">
                <Icon name={group.icon} className="size-[18px]" />
              </span>
              <h4 className="font-extrabold tracking-tight text-heading">{group.title}</h4>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[15px] leading-relaxed">
              {group.items.map((item) => (
                <li key={item.text} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-muted/60" />
                  <span>
                    {item.text}
                    {item.project && (
                      <>
                        {' '}
                        <Link to={`/projects/${item.project}`} className="font-semibold whitespace-nowrap text-link hover:underline">
                          Case study →
                        </Link>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <>
      <PageHeader eyebrow="Experience" title={experience.title} intro={experience.intro} />

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 sm:pb-28">
        {jobs.map((job, jobIndex) => (
          <Reveal key={job.company}>
            <article aria-labelledby={`job-${jobIndex}`} className={`grid gap-10 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14 ${card}`}>
              <div>
                <h2 id={`job-${jobIndex}`} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {job.company}
                </h2>
                <p className="mt-2 text-muted">{job.location}</p>
                <RoleTimeline job={job} />
              </div>
              <div>
                <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-muted uppercase">Highlights</h3>
                <Highlights job={job} />
              </div>
            </article>
          </Reveal>
        ))}

        <div className="flex flex-wrap gap-3 pt-4">
          <Button to="/projects">See the projects</Button>
          <Button to="/about" variant="secondary">
            Skills & education
          </Button>
        </div>
      </div>
    </>
  )
}
