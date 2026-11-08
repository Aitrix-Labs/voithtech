import { useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'
import { Hero } from '../components/Hero'
import { Chevron, ChevronDown } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { businessFields, career, news, portfolio, promise, standFor } from '../data'

export default function HomePage() {
  const [openPillar, setOpenPillar] = useState<string>(standFor.pillars[0].id)

  return (
    <>
      <Hero />

      <section className="section section-blue">
        <div className="container stand-for__grid">
          <Reveal>
            <p className="overline">{standFor.overline}</p>
            <h2 className="section-title">{standFor.title}</h2>
            <p className="section-lead">{standFor.body}</p>
            <div className="section-actions">
              <Link className="btn btn-white" to={standFor.to}>
                {standFor.cta}
                <Chevron />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="pillars">
              {standFor.pillars.map((pillar) => {
                const open = openPillar === pillar.id
                return (
                  <div key={pillar.id} className={`pillar${open ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="pillar__btn"
                      aria-expanded={open}
                      onClick={() => setOpenPillar(open ? '' : pillar.id)}
                    >
                      {pillar.title}
                      <ChevronDown />
                    </button>
                    <div className="pillar__body">
                      <div>
                        <p>{pillar.body}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="fields-head">
            <p className="overline">{businessFields.overline}</p>
            <h2 className="section-title">{businessFields.title}</h2>
          </Reveal>
          <div className="fields-grid">
            {businessFields.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <Link className="field-card" to={item.to}>
                  <img src={item.image} alt="" />
                  <div className="field-card__copy">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section promise">
        <div className="promise__bg">
          <img src={promise.image} alt="" />
        </div>
        <div className="promise__shade" />
        <div className="container">
          <Reveal>
            <p className="overline">{promise.overline}</p>
            <h2 className="section-title">
              {promise.title} <span className="accent">{promise.accent}</span>
            </h2>
            <p className="section-lead">{promise.body}</p>
            <div className="section-actions">
              <Link className="btn btn-white" to={promise.to}>
                {promise.cta}
                <Chevron />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="overline">{portfolio.overline}</p>
            <h2 className="section-title">{portfolio.title}</h2>
          </Reveal>
          <div className="portfolio-grid">
            {portfolio.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <Link className={`portfolio-card is-${item.tone}`} to={item.to}>
                  <div className="portfolio-card__panel">
                    <h3>{item.title}</h3>
                    <span className="btn" style={{ padding: 0 }}>
                      <Chevron />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section career">
        <div className="container career__layout">
          <Reveal>
            <p className="overline">{career.overline}</p>
            <h2 className="section-title">
              {career.title} <span className="accent">{career.accent}</span>
            </h2>
            <p className="section-lead">{career.body}</p>
            <p className="section-lead">{career.support}</p>
            <div className="section-actions">
              <Link className="btn btn-white" to={career.to}>
                {career.cta}
                <Chevron />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={1} className="career__media">
            <img src={career.image} alt="" />
            <img className="career__stripes" src={asset('images/sections/stripes.svg')} alt="" />
          </Reveal>
        </div>
      </section>

      <section className="jobs-bar">
        <div className="container jobs-bar__inner">
          <div>
            <strong>{career.positions}</strong>
            <span>open positions worldwide</span>
          </div>
          <Link className="btn btn-white" to="/career">
            Find your job
            <Chevron />
          </Link>
        </div>
      </section>

      <section className="section section-grey">
        <div className="container news-layout">
          <Reveal>
            <p className="overline">{news.overline}</p>
            <h2 className="section-title">
              {news.title} <span className="accent">{news.accent}</span>
            </h2>
            <div className="section-actions">
              <Link className="btn btn-outline" to={news.to}>
                {news.cta}
                <Chevron />
              </Link>
            </div>
            <div className="news-list" style={{ marginTop: '2rem' }}>
              {news.items.map((item) => (
                <Link key={item.title} className="news-item" to={item.to}>
                  <time>{item.date}</time>
                  <strong>{item.title}</strong>
                  <Chevron />
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1} className="news-visual">
            <img src={news.image} alt="" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
