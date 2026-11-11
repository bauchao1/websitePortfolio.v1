import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

/** Shared frame for every page: header, page content, footer. */
export default function Layout() {
  const { pathname } = useLocation()

  // Start each new page at the top, and move keyboard/screen-reader focus to the content.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
