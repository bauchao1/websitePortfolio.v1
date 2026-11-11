import { about, education, skills } from '../data/content.ts'
import PageHeader from '../components/ui/PageHeader.tsx'
import Section from '../components/ui/Section.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import Chip from '../components/ui/Chip.tsx'
import Button from '../components/ui/Button.tsx'
import Icon from '../components/ui/Icon.tsx'

const card =
  'rounded-3xl bg-surface p-7 shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] ring-1 ring-line/60 dark:ring-line sm:p-8'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title={about.title}>
        <Reveal className="mt-8 grid max-w-3xl gap-5 text-lg leading-relaxed">
          {about.summary.map((p, i) => (
            <p key={p} className={i === 0 ? 'text-xl font-medium text-heading' : 'text-text'}>
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={100}>
          <ul aria-label="Highlights" className="mt-10 flex flex-wrap gap-3">
            {about.stats.map((stat) => (
              <li
                key={stat}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-semibold text-heading shadow-sm ring-1 ring-line"
              >
                <span className="grid size-5 place-items-center rounded-full bg-navy text-white dark:bg-sky dark:text-navy-deep">
                  <Icon name="check" className="size-3" />
                </span>
                {stat}
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHeader>

      <Section id="skills" title="Skills" intro="The tools and practices I use day to day, grouped by the kind of work.">
        <ul className="grid gap-6 md:grid-cols-2">
          {skills.map((group, i) => (
            <li key={group.title}>
              <Reveal delay={i * 80} className={`h-full ${card}`}>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-surface-2 text-heading">
                    <Icon name={group.icon} />
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <Reveal className={`grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start ${card}`}>
          <span className="grid size-14 place-items-center rounded-2xl bg-navy text-white dark:bg-surface-2">
            <Icon name="cap" className="size-7" />
          </span>
          <div>
            <p className="text-sm font-semibold text-muted">{education.years}</p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight">
              {education.degree}
              <span className="ml-3 inline-block translate-y-[-3px] rounded-full bg-surface-2 px-3 py-1 align-middle text-xs font-bold text-heading">
                {education.honor}
              </span>
            </h3>
            <p className="mt-2 text-base text-muted">{education.school}</p>
          </div>
          <ul className="grid gap-3 md:min-w-64">
            {education.awards.map((award) => (
              <li key={award.title} className="flex items-start gap-3 rounded-2xl bg-surface-2 px-4 py-3">
                <Icon name="award" className="mt-0.5 size-5 shrink-0 text-heading" />
                <div>
                  <p className="text-sm font-bold text-heading">{award.title}</p>
                  <p className="text-xs text-muted">{award.years}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button to="/experience">See my experience</Button>
          <Button to="/projects" variant="secondary">
            View projects
          </Button>
        </div>
      </Section>
    </>
  )
}
