import { useEffect, useState } from 'react'
import { categories } from '../data/products.js'

export default function Navbar({ whatsappHref }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          CATÁLOGO 2026<span>BY LET PROCUREMENT</span>
        </a>

        <nav className="nav-links">
          <a href="#marca">La marca</a>
          {categories.map((c) => (
            <a key={c.id} href={`#${c.slug}`}>{c.name}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-primary">
            Cotizar por WhatsApp
          </a>
        </div>

        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Abrir menú" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <a href="#marca" onClick={() => setOpen(false)}>La marca</a>
          {categories.map((c) => (
            <a key={c.id} href={`#${c.slug}`} onClick={() => setOpen(false)}>{c.name}</a>
          ))}
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
            Cotizar por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(18,18,18,0.94);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s ease;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 20px;
          letter-spacing: 0.03em;
          color: var(--white);
          white-space: nowrap;
        }
        .nav-logo span { display: block; color: var(--yellow); margin-top: 1px; font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em; }
        .nav-links {
          display: flex;
          gap: 26px;
        }
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--light-gray);
          transition: color 0.15s ease;
        }
        .nav-links a:hover { color: var(--yellow); }
        .nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 8px; }
        .nav-toggle span { width: 22px; height: 2px; background: var(--white); }
        .nav-mobile { display: none; }

        @media (max-width: 900px) {
          .nav-links, .nav-actions { display: none; }
          .nav-toggle { display: flex; }
          .nav-mobile.nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 12px var(--edge) 20px;
            background: var(--carbon);
            border-top: 1px solid rgba(255,255,255,0.08);
          }
          .nav-mobile a {
            padding: 12px 0;
            font-family: var(--font-mono);
            font-size: 13px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--light-gray);
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .nav-mobile .btn { margin-top: 12px; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
