import { useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Chevron } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { pages } from '../data'

export default function ContentPage() {
  const { slug } = useParams()
  const path = `/${slug ?? ''}`
  const page = pages.find((item) => item.path === path)
  const [sent, setSent] = useState(false)

  if (!page) {
    return (
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">Page not found</h1>
          <p className="section-lead">The page you requested is not available.</p>
          <div className="section-actions">
            <Link className="btn btn-white" to="/" style={{ background: 'var(--blue)', color: '#fff' }}>
              Back home
              <Chevron />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={page.image} alt="" />
        </div>
        <div className="page-hero__shade" />
        <div className="container">
          <Reveal>
            <p className="overline">{page.overline}</p>
            <h1 className="section-title" style={{ maxWidth: '18ch' }}>
              {page.title}
            </h1>
            <p className="section-lead">{page.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="page-body">
        <div className="container page-body__grid">
          <Reveal>
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {page.path === '/contact' ? (
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  Name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label>
                  Message
                  <textarea name="message" required />
                </label>
                <button className="btn btn-white" type="submit" style={{ background: 'var(--blue)', color: '#fff' }}>
                  {sent ? 'Message sent' : 'Send message'}
                  <Chevron />
                </button>
              </form>
            ) : null}
          </Reveal>
          <Reveal delay={1} className="page-highlights">
            {page.highlights.map((item) => (
              <article key={item.title} className="page-highlight">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
