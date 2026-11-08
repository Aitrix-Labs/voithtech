import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data'
import { Chevron } from './Icons'

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured stories">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide${i === index ? ' is-active' : ''}${slide.solid ? ' is-solid' : ''}`}
          aria-hidden={i !== index}
        >
          <div className="hero__media">
            <img src={slide.image} alt="" />
          </div>
          <div className="hero__shade" />
          <div className="hero__content">
            <div className="container">
              <div className="hero__copy">
                {slide.overline ? <p className="hero__overline">{slide.overline}</p> : null}
                <h2 className="hero__title">
                  {slide.title}
                  {slide.accent ? <span className="accent">{slide.accent}</span> : null}
                </h2>
                <div className="hero__cta">
                  <Link className="btn btn-white" to={slide.to}>
                    {slide.cta}
                    <Chevron />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero__pager" role="tablist" aria-label="Slides">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`hero__dot${i === index ? ' is-active' : ''}`}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setPaused(true)
              setIndex(i)
            }}
          />
        ))}
      </div>
    </section>
  )
}
