import { useEffect } from 'react'
import { profile, seo } from '../data/content.ts'

const defaultTitle = `${profile.name} · Front-End Developer & UI/UX Designer`

function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('content', value)
}

/** Sets the browser-tab title and description, e.g. "Projects · Christian E. Bausin". */
export function usePageTitle(title?: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${profile.name}` : defaultTitle
    const desc = description ?? seo.description
    document.title = fullTitle
    setMeta('meta[name="description"]', desc)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', desc)
    setMeta('meta[property="og:url"]', `${seo.siteUrl}${window.location.pathname}`)
  }, [title, description])
}
