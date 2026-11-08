import { Link, useParams } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { Chevron } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { pages } from '../data'

export default function ContentPage() {
  const { slug } = useParams()
  const path = `/${slug ?? ''}`
  const page = pages.find((item) => item.path === path)

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
            <div className="section-actions">
              <Link className="btn btn-white" to={page.feature.to}>
                {page.feature.cta}
                <Chevron />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-body">
        <div className="container page-body__grid">
          <Reveal>
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {page.showContactForm ? <ContactForm /> : null}
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

      {page.stats?.length ? (
        <section className="page-stats">
          <div className="container page-stats__grid">
            {page.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 3) as 0 | 1 | 2} className="page-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <Reveal className="fields-head">
            <p className="overline">{page.topicsOverline}</p>
            <h2 className="section-title">{page.topicsTitle}</h2>
          </Reveal>
          <div className="topic-grid">
            {page.topics.map((topic, i) => {
              const inner = (
                <>
                  <h3>{topic.title}</h3>
                  <p>{topic.body}</p>
                  {topic.to ? (
                    <span className="topic-card__cta">
                      Learn more <Chevron />
                    </span>
                  ) : null}
                </>
              )
              return (
                <Reveal key={topic.title} delay={(i % 3) as 0 | 1 | 2}>
                  {topic.to ? (
                    <Link className="topic-card" to={topic.to}>
                      {inner}
                    </Link>
                  ) : (
                    <div className="topic-card">{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section page-feature">
        <div className="page-feature__bg">
          <img src={page.feature.image} alt="" />
        </div>
        <div className="page-feature__shade" />
        <div className="container">
          <Reveal>
            <p className="overline">{page.feature.overline}</p>
            <h2 className="section-title">
              {page.feature.title}
              {page.feature.accent ? <span className="accent"> {page.feature.accent}</span> : null}
            </h2>
            <p className="section-lead">{page.feature.body}</p>
            <div className="section-actions">
              <Link className="btn btn-white" to={page.feature.to}>
                {page.feature.cta}
                <Chevron />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section page-related">
        <div className="container">
          <Reveal>
            <p className="overline">Continue exploring</p>
            <h2 className="section-title">Related pages</h2>
          </Reveal>
          <div className="related-grid">
            {page.related
              .filter((item) => item.to !== '/contact')
              .map((item, i) => (
                <Reveal key={item.to} delay={(i % 3) as 0 | 1 | 2}>
                  <Link className="related-card" to={item.to}>
                    <span>{item.label}</span>
                    <Chevron />
                  </Link>
                </Reveal>
              ))}
            <Reveal delay={2}>
              <Link className="related-card related-card--accent" to="/contact">
                <span>Get in touch</span>
                <Chevron />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
