import type { Project } from '../data/content.ts'
import { asset } from '../lib/asset.ts'

/** The project's screenshot, or a branded placeholder until a real image is added. */
export default function ProjectCover({ project, className = '' }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={asset(project.image)}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} cover image placeholder`}
      className={`relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-navy to-blue dark:from-surface-2 dark:to-navy-deep ${className}`}
    >
      {/* faint grid, like a canvas waiting for a screenshot */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* a mock window frame */}
      <div aria-hidden="true" className="relative w-3/4 rounded-xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm">
        <div className="mb-3 flex gap-1.5">
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-white/40" />
          <span className="size-2 rounded-full bg-sky" />
        </div>
        <p className="text-lg font-extrabold tracking-tight text-white sm:text-xl">{project.title}</p>
        <p className="mt-1 text-xs font-medium text-white/70">{project.subtitle}</p>
        <div className="mt-4 grid gap-1.5">
          <span className="h-1.5 w-full rounded-full bg-white/20" />
          <span className="h-1.5 w-2/3 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}
