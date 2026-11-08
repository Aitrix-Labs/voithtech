import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav, serviceNav } from '../data'
import { GlobeIcon, MailIcon, PhoneIcon, SearchIcon } from './Icons'
import { Logo } from './Logo'

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > Math.min(window.innerHeight * 0.55, 480))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header is-over-hero${solid || open ? ' is-solid' : ''}${open ? ' is-menu-open' : ''}`}>
        <div className="header__inner">
          <Logo />
          <nav className="header__nav" aria-label="Primary">
            <div className="header__primary">
              {mainNav.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="header__service">
              {serviceNav.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
              <div className="header__utils">
                <Link to="/contact" aria-label="Contact email">
                  <MailIcon />
                </Link>
                <Link to="/contact" aria-label="Call us">
                  <PhoneIcon />
                </Link>
                <span aria-label="Language">
                  <GlobeIcon /> EN
                </span>
                <span aria-hidden>
                  <SearchIcon />
                </span>
              </div>
            </div>
          </nav>
          <Link className="header__contact-mobile" to="/contact" aria-label="Contact">
            <MailIcon />
          </Link>
          <button
            type="button"
            className={`header__menu-btn${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} id="mobile-navigation">
        <p className="mobile-nav__label">Industries</p>
        {mainNav.map((item) => (
          <Link key={item.to} to={item.to} onClick={close}>
            {item.label}
          </Link>
        ))}
        <p className="mobile-nav__label">Company</p>
        {[...serviceNav, { label: 'Services', to: '/services' }, { label: 'Contact', to: '/contact' }].map((item) => (
          <Link key={item.to + item.label} to={item.to} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  )
}
