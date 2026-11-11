import { Link } from 'react-router'
import { home, profile, projects } from '../data/content.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { asset } from '../lib/asset.ts'
import Button from '../components/ui/Button.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import ProfilePhoto from '../components/ProfilePhoto.tsx'
import ProjectCard from '../components/ProjectCard.tsx'

const featured = projects.filter((p) => p.featured)

export default function Home() {
  usePageTitle()

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-surface-2/70 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 md:grid-cols-[1.25fr_1fr] md:gap-16 md:pb-28">
          <Reveal>
            <p className="flex flex-wrap gap-x-2 text-sm font-semibold text-muted">
              {profile.titles.map((title, i) => (
                <span key={title} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-sky" />}
                  {title}
                </span>
              ))}
            </p>
            <h1 id="hero-title" className="mt-5 text-5xl leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-snug font-medium text-muted sm:text-2xl">{profile.tagline}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {profile.location}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/projects">View Work</Button>
              <Button href={asset(profile.resume)} download variant="secondary">
                Download Resume
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
                </svg>
              </Button>
              <Button to="/contact" variant="ghost">
                Contact →
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ProfilePhoto />
          </Reveal>
        </div>
      </section>

      {/* Short intro */}
      <section aria-labelledby="intro-title" className="border-y border-line bg-surface">
        <Reveal className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 id="intro-title" className="text-3xl font-extrabold tracking-tight">
            {home.introTitle}
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-text">{home.intro}</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 font-semibold text-link hover:underline">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured projects */}
      <section aria-labelledby="featured-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="featured-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {home.featuredTitle}
            </h2>
            <p className="mt-3 text-lg text-muted">{home.featuredIntro}</p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 font-semibold text-link hover:underline">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <li key={project.slug} className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : undefined}>
              <Reveal delay={i * 100} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
