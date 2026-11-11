import { useEffect, useRef } from 'react'
import type { GalleryItem } from '../data/content.ts'
import GalleryArt from './GalleryArt.tsx'
import { ratios } from '../lib/galleryRatios.ts'

type Props = {
  items: GalleryItem[]
  index: number | null
  onChange: (index: number | null) => void
}

/** Full-screen viewer. Uses the native <dialog>, which keeps keyboard focus inside and closes on Esc. */
export default function Lightbox({ items, index, onChange }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const open = index !== null
  const item = open ? items[index] : null

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // If the page changes while the viewer is open, unlock scrolling again.
  useEffect(() => () => void (document.documentElement.style.overflow = ''), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, items.length, onChange])

  const close = () => onChange(null)

  return (
    <dialog
      ref={ref}
      aria-label={item ? item.title : 'Image viewer'}
      onClose={() => {
        document.documentElement.style.overflow = ''
        if (open) close()
      }}
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-navy-deep/90 backdrop:backdrop-blur-sm"
    >
      {item && index !== null && (
        <div className="flex h-full flex-col items-center justify-center gap-5 p-4 sm:p-8" onClick={(e) => e.target === e.currentTarget && close()}>
          <div
            className="overflow-hidden rounded-2xl shadow-2xl"
            style={{
              aspectRatio: ratios[item.category],
              height: `min(76dvh, calc((100vw - 2rem) / (${ratios[item.category]})))`,
            }}
          >
            <GalleryArt item={item} />
          </div>

          <div className="flex w-full max-w-xl items-center justify-between gap-4 text-white">
            <button
              type="button"
              onClick={() => onChange((index - 1 + items.length) % items.length)}
              aria-label="Previous design"
              className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              ←
            </button>
            <div className="min-w-0 text-center">
              <p className="truncate font-bold">{item.title}</p>
              <p className="text-sm text-white/60">
                {item.category} · {index + 1} / {items.length}
              </p>
              {item.description && <p className="mt-1 text-sm text-white/80">{item.description}</p>}
            </div>
            <button
              type="button"
              onClick={() => onChange((index + 1) % items.length)}
              aria-label="Next design"
              className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              →
            </button>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:top-6 sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </dialog>
  )
}
