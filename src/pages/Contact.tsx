import { useEffect, useRef, useState } from 'react'
import { contact, profile } from '../data/content.ts'
import PageHeader from '../components/ui/PageHeader.tsx'
import Reveal from '../components/ui/Reveal.tsx'
import ContactForm from '../components/ContactForm.tsx'

const card =
  'rounded-3xl bg-surface shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] ring-1 ring-line/60 dark:ring-line'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full bg-surface-2 px-3 py-1.5 text-xs font-bold text-heading transition hover:bg-line"
    >
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={contact.title} intro={contact.intro} />

      <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <Reveal className="grid content-start gap-4">
          <div className={`p-6 ${card}`}>
            <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">Email</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <a href={`mailto:${profile.email}`} className="font-semibold break-all text-heading hover:text-link">
                {profile.email}
              </a>
              <CopyEmail />
            </div>
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`group block p-6 transition hover:-translate-y-0.5 ${card}`}>
            <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">LinkedIn</p>
            <p className="mt-2 flex items-center justify-between font-semibold text-heading">
              Christian Bausin
              <span aria-hidden="true" className="text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-link">
                ↗
              </span>
            </p>
          </a>
          <div className={`p-6 ${card}`}>
            <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">Based in</p>
            <p className="mt-2 font-semibold text-heading">{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={100} className={`p-6 sm:p-10 ${card}`}>
          <h2 className="text-2xl font-extrabold tracking-tight">Send a message</h2>
          <p className="mt-2 mb-8 text-muted">All fields are required.</p>
          <ContactForm />
        </Reveal>
      </div>
    </>
  )
}
