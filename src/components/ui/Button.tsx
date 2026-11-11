import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary: 'bg-btn text-btn-text shadow-sm hover:bg-btn-hover hover:shadow-md',
  secondary: 'bg-surface text-heading ring-1 ring-line hover:-translate-y-0.5 hover:shadow-sm hover:ring-blue/40',
  ghost: 'text-link hover:bg-surface-2',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  /** A page on this site, e.g. "/projects". Use `href` for files and other websites. */
  to?: string
  children: ReactNode
}

/** A link styled as a button. */
export default function Button({ variant = 'primary', to, className = '', children, ...rest }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}
