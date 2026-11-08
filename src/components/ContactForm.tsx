import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Chevron, ChevronDown } from './Icons'

const CONTACT_EMAIL = 'hello@voithtech.com'
const STORAGE_KEY = 'voithtech-contact-requests'

const TOPICS = [
  'Drive Technology',
  'Hydropower',
  'Papermaking',
  'Services & support',
  'Careers',
  'Media & company',
  'Other',
] as const

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  topic: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const emptyForm: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  topic: 'Services & support',
  message: '',
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'Enter your full name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address'
  if (form.phone.trim() && !/^[\d\s()+.-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Use a valid phone format'
  }
  if (!form.topic) errors.topic = 'Select a topic'
  if (!form.message.trim() || form.message.trim().length < 12) {
    errors.message = 'Please write at least 12 characters'
  }
  return errors
}

function saveRequest(payload: FormState & { submittedAt: string }) {
  try {
    const prior = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown[]
    localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prior].slice(0, 30)))
  } catch {
    // Still show success if storage is blocked.
  }
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [submitted, setSubmitted] = useState<FormState | null>(null)
  const [topicOpen, setTopicOpen] = useState(false)
  const topicRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!topicOpen) return
    const onPointerDown = (event: MouseEvent) => {
      if (!topicRef.current?.contains(event.target as Node)) setTopicOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTopicOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [topicOpen])

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    if (touched) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const canSubmit = useMemo(() => Object.keys(validate(form)).length === 0, [form])

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setTouched(true)
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 700))

    const payload = { ...form, submittedAt: new Date().toISOString() }
    saveRequest(payload)

    setSubmitted(form)
    setForm(emptyForm)
    setErrors({})
    setTouched(false)
    setStatus('success')
  }

  if (status === 'success' && submitted) {
    return (
      <div className="contact-success" role="status">
        <p className="overline">Request received</p>
        <h3>Thank you, {submitted.name.split(' ')[0]}</h3>
        <p>
          Your message about <strong>{submitted.topic}</strong> was received. Our team will follow up at{' '}
          <strong>{submitted.email}</strong>.
        </p>
        <button
          type="button"
          className="btn btn-white"
          style={{ background: 'var(--blue)', color: '#fff', marginTop: '1.25rem' }}
          onClick={() => {
            setStatus('idle')
            setSubmitted(null)
          }}
        >
          Send another message
          <Chevron />
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__row">
        <label className={errors.name ? 'is-invalid' : undefined}>
          Full name *
          <input
            name="name"
            value={form.name}
            onChange={(event) => setField('name', event.target.value)}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </label>
        <label className={errors.email ? 'is-invalid' : undefined}>
          Work email *
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setField('email', event.target.value)}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
      </div>

      <div className="contact-form__row">
        <label>
          Company
          <input
            name="company"
            value={form.company}
            onChange={(event) => setField('company', event.target.value)}
            autoComplete="organization"
            placeholder="Company name"
          />
        </label>
        <label className={errors.phone ? 'is-invalid' : undefined}>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => setField('phone', event.target.value)}
            autoComplete="tel"
            placeholder="+1 555 000 0000"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </label>
      </div>

      <div className={`contact-field${errors.topic ? ' is-invalid' : ''}`} ref={topicRef}>
        <span className="contact-field__label" id="topic-label">
          Topic *
        </span>
        <input type="hidden" name="topic" value={form.topic} />
        <button
          type="button"
          className={`topic-select${topicOpen ? ' is-open' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={topicOpen}
          aria-labelledby="topic-label"
          aria-invalid={Boolean(errors.topic)}
          onClick={() => setTopicOpen((open) => !open)}
        >
          <span>{form.topic}</span>
          <ChevronDown />
        </button>
        {topicOpen ? (
          <ul className="topic-menu" role="listbox" aria-labelledby="topic-label">
            {TOPICS.map((topic) => (
              <li key={topic} role="option" aria-selected={form.topic === topic}>
                <button
                  type="button"
                  className={form.topic === topic ? 'is-active' : undefined}
                  onClick={() => {
                    setField('topic', topic)
                    setTopicOpen(false)
                  }}
                >
                  {topic}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        {errors.topic ? <span className="field-error">{errors.topic}</span> : null}
      </div>

      <label className={errors.message ? 'is-invalid' : undefined}>
        Message *
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setField('message', event.target.value)}
          placeholder="Tell us about your project, service need, or question…"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <span className="field-error">{errors.message}</span> : null}
      </label>

      <div className="contact-form__actions">
        <button
          className="btn btn-white"
          type="submit"
          disabled={status === 'submitting'}
          style={{ background: 'var(--blue)', color: '#fff', opacity: status === 'submitting' ? 0.75 : 1 }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
          <Chevron />
        </button>
        <p className="contact-form__hint">
          {touched && !canSubmit ? 'Please fix the highlighted fields.' : `We reply to ${CONTACT_EMAIL}`}
        </p>
      </div>
    </form>
  )
}
