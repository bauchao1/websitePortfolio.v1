import type { ReactNode } from 'react'

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-heading">
      {children}
    </span>
  )
}
