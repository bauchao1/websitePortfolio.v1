import type { ReactNode } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle.ts'

type Props = {
  eyebrow: string
  title: string
  intro?: string
  /** Browser-tab title; defaults to the eyebrow. */
  tabTitle?: string
  children?: ReactNode
}

/** The big title block at the top of every inner page. Also sets the browser-tab title. */
export default function PageHeader({ eyebrow, title, intro, tabTitle, children }: Props) {
  usePageTitle(tabTitle ?? eyebrow)
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24 sm:pb-14">
      <p className="mb-3 text-xs font-bold tracking-[0.18em] text-muted uppercase">{eyebrow}</p>
      <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      {children}
    </div>
  )
}
