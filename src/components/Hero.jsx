import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '../hooks.js'

function Stat({ value, suffix = '', label, delay = 0 }) {
  const [start, setStart] = useState(false)
  const ref = useRef(null)
  const n = useCountUp(value, { start, duration: 1700 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setStart(true), delay)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {n}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero-content">
          <span className="hero-tag">
            <span className="dot" /> Pintura &amp; Latonería
          </span>
          <h1>
            Recuperamos tu vehículo <span className="accent">como nuevo</span>
          </h1>
          <p>
            En <strong>DZEA Autos</strong> devolvemos la vida a autos y motos
            con pintura automotriz profesional y latonería de precisión.
            Acabados que se ven y duran.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-yellow">
              Cotizar ahora
            </a>
            <a href="#galeria" className="btn btn-outline">
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="container">
          <div className="hero-stats">
            <Stat value={10} suffix="+" label="Años de experiencia" />
            <Stat value={1200} suffix="+" label="Vehículos transformados" delay={150} />
            <Stat value={98} suffix="%" label="Clientes satisfechos" delay={300} />
            <Stat value={15} suffix="" label="Días de garantía" delay={450} />
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span>Pintura automotriz</span>
              <span>•</span>
              <span>Latonería de precisión</span>
              <span>•</span>
              <span>Desabollado sin pintura</span>
              <span>•</span>
              <span>Autos y motos</span>
              <span>•</span>
              <span>Garantía en cada trabajo</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
