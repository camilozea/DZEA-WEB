import { useState } from 'react'

const items = [
  { label: 'Repintado completo', cat: 'Auto' },
  { label: 'Reparación de latón', cat: 'Auto' },
  { label: 'Auto deportivo', cat: 'Auto' },
  { label: 'Pintura de moto', cat: 'Moto' },
  { label: 'Desabollado DPS', cat: 'Auto' },
  { label: 'Acabado brillo', cat: 'Auto' },
  { label: 'Carenados de moto', cat: 'Moto' },
  { label: 'Tanque de moto', cat: 'Moto' },
  { label: 'Retoque y pulido', cat: 'Moto' },
]

const filtros = ['Todos', 'Auto', 'Moto']

export default function Galeria() {
  const [filtro, setFiltro] = useState('Todos')

  const visibles = filtro === 'Todos' ? items : items.filter((i) => i.cat === filtro)

  return (
    <section className="section galeria" id="galeria">
      <div className="container">
        <span className="eyebrow" data-reveal>Nuestro trabajo</span>
        <h2 className="section-title" data-reveal>
          Galería de <span>trabajos</span>
        </h2>
        <p className="section-subtitle" data-reveal>
          Algunos de nuestros trabajos recientes en autos y motos.
        </p>

        <div className="filter-tabs" role="tablist" aria-label="Filtrar galería" data-reveal>
          {filtros.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filtro === f}
              className={`filter-tab ${filtro === f ? 'active' : ''}`}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="galeria-grid">
          {visibles.map((item) => (
            <div className="galeria-item" key={item.label}>
              <div className="galeria-placeholder">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="M21 15l-5-5-9 9" />
                </svg>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p className="galeria-note" data-reveal>
          Próximamente estaremos subiendo fotos reales de nuestros trabajos.
          ¿Quieres ver el tuyo aquí? ¡Contáctanos!
        </p>
      </div>
    </section>
  )
}
