const pasos = [
  {
    titulo: 'Evaluación y cotización',
    desc: 'Revisamos tu vehículo, diagnosticamos el daño y te damos un presupuesto claro sin sorpresas.',
  },
  {
    titulo: 'Preparación de superficie',
    desc: 'Desarmado, latonería, masillado y lijado profesional para dejar una base perfecta.',
  },
  {
    titulo: 'Pintura y acabado',
    desc: 'Aplicamos la pintura en cabina con materiales de primera calidad y pulimos hasta el detalle.',
  },
]

const valores = [
  {
    titulo: 'Calidad',
    desc: 'Materiales de primera y revisión de cada detalle para acabados impecables.',
  },
  {
    titulo: 'Compromiso',
    desc: 'Cumplimos los plazos y cuidamos tu vehículo como si fuera nuestro.',
  },
  {
    titulo: 'Honestidad',
    desc: 'Presupuestos claros, trabajo transparente y sin costos ocultos.',
  },
]

export default function QuienesSomos() {
  return (
    <section className="section quienes-somos" id="quienes-somos">
      <div className="container">
        <span className="eyebrow" data-reveal>Quiénes somos</span>
        <h2 className="section-title" data-reveal>
          El taller que tu vehículo <span>merece</span>
        </h2>

        <div className="qs-grid">
          <div className="qs-text" data-reveal>
            <p>
              En <strong>DZEA Autos</strong> entendemos que tu vehículo es más
              que un medio de transporte: es parte de tu día a día. Por eso
              tratamos cada trabajo con dedicación y oficio, combinando técnicas
              modernas con un trato cercano y honesto.
            </p>
            <p>
              Desde un pequeño retoque hasta una reparación completa de
              latonería y repintado, nuestro objetivo es que salgas del taller
              con un resultado que supere tus expectativas.
            </p>
            <div className="qs-values">
              {valores.map((v) => (
                <div className="qs-value" key={v.titulo}>
                  <h3>{v.titulo}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="qs-steps">
            {pasos.map((p, i) => (
              <div className="step" key={p.titulo} data-reveal>
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
