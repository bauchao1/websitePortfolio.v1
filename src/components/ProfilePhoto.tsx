import { profile } from '../data/content.ts'
import { asset } from '../lib/asset.ts'

/** Your portrait, or an initials placeholder until `profile.photo` is set. */
export default function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* soft glow behind the photo */}
      <div aria-hidden="true" className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sky/25 via-blue/10 to-transparent blur-2xl" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-surface shadow-[0_30px_60px_-30px_rgb(11_31_75/0.45)] ring-1 ring-line">
        {profile.photo ? (
          <img src={asset(profile.photo)} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
        ) : (
          <div
            role="img"
            aria-label={`Photo placeholder for ${profile.name}`}
            className="grid h-full w-full place-items-center bg-gradient-to-b from-surface-2 to-surface"
          >
            <div className="grid place-items-center gap-4 text-center">
              <span className="grid size-28 place-items-center rounded-full bg-navy text-4xl font-extrabold tracking-tight text-white dark:bg-surface-2">
                {profile.initials}
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Photo coming soon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
