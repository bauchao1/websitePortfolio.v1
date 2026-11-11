import type { ReactNode } from 'react'

type Props = {
  id?: string
  title?: string
  intro?: string
  children?: ReactNode
  className?: string
}

/** A block inside a page, with consistent spacing and an optional subheading. */
export default function Section({ id, title, intro, children, className = '' }: Props) {
  const headingId = id ? `${id}-title` : undefined
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={`pb-20 sm:pb-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {title && (
          <h2 id={headingId} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
        )}
        {intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
        {children && <div className={title || intro ? 'mt-10' : ''}>{children}</div>}
      </div>
    </section>
  )
}
