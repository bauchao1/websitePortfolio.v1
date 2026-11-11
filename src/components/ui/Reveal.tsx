import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

type Props = { children: ReactNode; delay?: number; className?: string }

/**
 * Fades content up slightly when it scrolls into view.
 * Content is visible by default: only blocks that start below the fold are hidden (before the
 * first paint) and then revealed, so nothing on screen at load is ever blank, even if
 * JavaScript is slow or the observer never fires.
 */
export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return // already on screen
    // eslint-disable-next-line react-hooks/set-state-in-effect -- must hide before first paint
    setHidden(true)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !hidden) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hidden])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: hidden ? '0ms' : `${delay}ms` }}
      className={`transition-[opacity,translate] duration-700 ease-out ${hidden ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'} ${className}`}
    >
      {children}
    </div>
  )
}
