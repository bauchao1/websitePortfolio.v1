import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { gallery, galleryCategories, galleryPage, type GalleryCategory } from '../data/content.ts'
import PageHeader from '../components/ui/PageHeader.tsx'
import GalleryArt from '../components/GalleryArt.tsx'
import { ratios } from '../lib/galleryRatios.ts'
import Lightbox from '../components/Lightbox.tsx'

const filters = ['All', ...galleryCategories] as const
type Filter = (typeof filters)[number]

function toFilter(value: string | null): Filter {
  return filters.find((f) => f === value) ?? 'All'
}

export default function Gallery() {
  // The active filter lives in the URL (/gallery?type=Posters) so a filtered view can be shared.
  const [params, setParams] = useSearchParams()
  const active = toFilter(params.get('type'))
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = useMemo(
    () => (active === 'All' ? gallery : gallery.filter((item) => item.category === (active as GalleryCategory))),
    [active],
  )

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: gallery.length }
    for (const item of gallery) c[item.category] = (c[item.category] ?? 0) + 1
    return c
  }, [])

  function choose(filter: Filter) {
    setOpenIndex(null)
    setParams(filter === 'All' ? {} : { type: filter }, { replace: true, preventScrollReset: true })
  }

  return (
    <>
      <PageHeader eyebrow="Gallery" tabTitle={galleryPage.title} title={galleryPage.title} intro={galleryPage.intro} />

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div role="group" aria-label="Filter designs" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((filter) => {
            const isActive = filter === active
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => choose(filter)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-btn text-btn-text shadow-sm' : 'bg-surface text-muted ring-1 ring-line hover:text-heading'
                }`}
              >
                {filter}
                <span className={`text-xs ${isActive ? 'opacity-70' : 'text-muted/70'}`}>{counts[filter] ?? 0}</span>
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {items.length} {items.length === 1 ? 'design' : 'designs'}
        </p>

        <ul className="mt-8 columns-2 gap-4 sm:gap-6 md:columns-3">
          {items.map((item, i) => (
            <li key={item.id} className="mb-4 break-inside-avoid sm:mb-6">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${item.title}`}
                className="group block w-full overflow-hidden rounded-2xl bg-surface text-left shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] ring-1 ring-line/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:ring-line"
              >
                <div style={{ aspectRatio: ratios[item.category] }} className="overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <GalleryArt item={item} />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="truncate text-sm font-bold text-heading">{item.title}</p>
                  <p className="text-xs text-muted">{item.category}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
    </>
  )
}
