import { useState, type FormEvent } from 'react'
import { contact, profile } from '../data/content.ts'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-set-up'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const field =
  'mt-2 block w-full rounded-xl bg-bg px-4 py-3 text-base text-text ring-1 ring-line transition placeholder:text-muted/70 focus:ring-2 focus:ring-sky focus:outline-none aria-[invalid=true]:ring-red-500'

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'Enter your name.'
  if (!email) errors.email = 'Enter your email so I can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter an email like name@example.com.'
  if (message.length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    if (data.get('botcheck')) return // filled by a spam bot
    if (!contact.web3formsKey) {
      setStatus('not-set-up')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject: contact.subject,
          from_name: 'Portfolio contact form',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      const json = (await res.json()) as { success?: boolean }
      if (!res.ok || !json.success) throw new Error('Send failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="grid place-items-start gap-3 rounded-2xl bg-surface-2 p-8">
        <p className="text-xl font-extrabold text-heading">Message sent.</p>
        <p className="text-muted">Thanks for reaching out. I’ll reply to the email you gave.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-2 font-semibold text-link hover:underline">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-heading">
            Name
          </label>
          <input id="cf-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-error' : undefined} />
          {errors.name && <p id="cf-name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-heading">
            Email
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-error' : undefined} />
          {errors.email && <p id="cf-email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-heading">
          Message
        </label>
        <textarea id="cf-message" name="message" rows={6} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-message-error' : undefined} />
        {errors.message && <p id="cf-message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>

      {/* Hidden from people; spam bots tend to tick it. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-full bg-btn px-6 py-3 text-sm font-semibold text-btn-text shadow-sm transition hover:bg-btn-hover hover:shadow-md active:scale-[0.98] disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status === 'error' && (
            <>
              The message didn’t send. Check your connection and try again, or email{' '}
              <a href={`mailto:${profile.email}`} className="font-semibold text-link underline">
                {profile.email}
              </a>
              .
            </>
          )}
          {status === 'not-set-up' && (
            <>
              The form isn’t connected yet. Please email{' '}
              <a href={`mailto:${profile.email}`} className="font-semibold text-link underline">
                {profile.email}
              </a>{' '}
              instead.
            </>
          )}
        </p>
      </div>
    </form>
  )
}
