import { useMemo, useState } from 'react'
import { useScrolled, useActiveSection } from '../hooks.js'

const links = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#quienes-somos', label: 'Quiénes somos', id: 'quienes-somos' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#galeria', label: 'Galería', id: 'galeria' },
  { href: '#testimonios', label: 'Opiniones', id: 'testimonios' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const ids = useMemo(() => links.map((l) => l.id), [])
  const active = useActiveSection(ids)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container navbar-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Logo DZEA Autos" className="brand-logo" />
          DZEA <span className="brand-yellow">AUTOS</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="nav-cta" onClick={() => setOpen(false)}>
              Cotizar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
