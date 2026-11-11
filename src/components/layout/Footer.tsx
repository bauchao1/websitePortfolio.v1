import { Link } from 'react-router'
import { pages, profile } from '../../data/content.ts'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold tracking-tight text-white">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">{profile.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">{profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-slate-500 uppercase">Pages</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {pages.map((page) => (
              <li key={page.path}>
                <Link to={page.path} className="hover:text-white">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-slate-500 uppercase">Elsewhere</p>
          <ul className="grid gap-2 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="break-all hover:text-white">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-6 text-xs text-slate-500 sm:px-8">
          <p>
            © {year} {profile.name}
          </p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
