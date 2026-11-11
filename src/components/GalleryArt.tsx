import type { GalleryItem } from '../data/content.ts'
import { asset } from '../lib/asset.ts'

function PlaceholderArt({ item }: { item: GalleryItem }) {
  const { category, title } = item
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-navy to-blue p-[8%] text-white dark:from-surface-2 dark:to-navy-deep">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />
      {category === 'Company IDs' ? (
        <>
          <div aria-hidden="true" className="relative flex items-center gap-2">
            <span className="size-5 rounded-md bg-white/80" />
            <span className="h-1.5 w-12 rounded-full bg-white/40" />
          </div>
          <div aria-hidden="true" className="relative mx-auto aspect-square w-1/2 rounded-full bg-white/15 ring-2 ring-white/30" />
          <div className="relative text-center">
            <p className="text-sm font-extrabold">Employee Name</p>
            <p className="mt-1 text-[11px] text-white/70">Position</p>
            <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-10 rounded-full bg-sky" />
          </div>
        </>
      ) : (
        <>
          <span className="relative w-fit rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase">
            {category}
          </span>
          {category === 'Branding' && (
            <div aria-hidden="true" className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-white/90 text-lg font-extrabold text-navy">
              Aa
            </div>
          )}
          <div className="relative">
            <p className={`font-extrabold tracking-tight ${category === 'Posters' ? 'text-2xl leading-tight' : 'text-lg'}`}>{title}</p>
            <span aria-hidden="true" className="mt-3 block h-1 w-10 rounded-full bg-sky" />
          </div>
        </>
      )}
    </div>
  )
}

export default function GalleryArt({ item }: { item: GalleryItem }) {
  if (item.image) {
    return (
      <img
        src={asset(item.image)}
        alt={item.alt ?? item.title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    )
  }
  return (
    <div role="img" aria-label={`${item.title} (placeholder)`} className="h-full w-full">
      <PlaceholderArt item={item} />
    </div>
  )
}
