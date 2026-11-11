import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { pages, profile } from '../../data/content.ts'
import ThemeToggle from './ThemeToggle.tsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the phone menu whenever the page changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 bg-header backdrop-blur-xl backdrop-saturate-150 transition-shadow ${
        scrolled || open ? 'shadow-[0_1px_0_var(--line)]' : ''
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-btn focus:px-4 focus:py-2 focus:text-btn-text"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-extrabold tracking-tight text-heading" aria-label={`${profile.name}, home`}>
          <span className="grid size-8 place-items-center rounded-lg bg-navy text-xs text-white dark:bg-surface-2">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {pages.map((page) => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    `relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-heading' : 'text-muted hover:text-heading'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {page.label}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-sky transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-heading hover:bg-surface-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
          {[{ path: '/', label: 'Home' }, ...pages].map((page) => (
            <li key={page.path}>
              <NavLink
                to={page.path}
                end={page.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold ${
                    isActive ? 'bg-surface-2 text-heading' : 'text-muted hover:bg-surface-2 hover:text-heading'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {page.label}
                    {isActive && <span aria-hidden="true" className="size-1.5 rounded-full bg-sky" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
