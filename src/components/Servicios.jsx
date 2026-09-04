const servicios = [
  {
    title: 'Pintura para autos',
    tag: 'Auto',
    desc: 'Pintura completa o parcial con materiales de primera calidad, preparación de superficie y acabados duraderos.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      </svg>
    ),
  },
  {
    title: 'Latonería',
    tag: 'Auto',
    desc: 'Reparación y enderezado de chapa: golpes, abolladuras y desabollado sin pintura cuando es posible.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4l6 6-9 9H5v-6z" />
        <path d="M10 8l3 3" />
      </svg>
    ),
  },
  {
    title: 'Pintura para motos',
    tag: 'Moto',
    desc: 'Repintado de carenados, tanques y piezas de moto con colores personalizados y acabados de alto brillo.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M9 17.5h6M5.5 17.5L3 9h5l-1.5 8M18.5 17.5L15 6H9" />
      </svg>
    ),
  },
  {
    title: 'Desabollado sin pintura',
    tag: 'Auto',
    desc: 'Técnica de reparación que elimina abolladuras sin repintar, preservando la pintura original del vehículo.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Pulido y detallado',
    tag: 'Todos',
    desc: 'Pulido de pintura, corrección de rayones leves y limpieza profunda para que tu vehículo luzca como nuevo.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12c4-6 14-6 18 0M3 12c4 6 14 6 18 0" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: 'Preparación de superficies',
    tag: 'Todos',
    desc: 'Masillado, lijado y fondeado profesional para garantizar una base perfecta antes de pintar.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M7 7V5h10v2" />
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <section className="section servicios" id="servicios">
      <div className="container">
        <span className="eyebrow" data-reveal>Qué hacemos</span>
        <h2 className="section-title" data-reveal>
          Nuestros <span>servicios</span>
        </h2>
        <p className="section-subtitle" data-reveal>
          Trabajamos autos y motos con técnicas y materiales profesionales para
          devolverle la vida a tu vehículo.
        </p>
        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <article className="card" key={s.title} data-reveal>
              <span className="card-tag">{s.tag}</span>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
