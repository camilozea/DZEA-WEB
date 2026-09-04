const testimonios = [
  {
    nombre: 'Andrés Mejía',
    rol: 'Cliente • Auto',
    iniciales: 'AM',
    texto:
      'El repintado quedó impecable, como recién salido de agencia. Excelente trato y cumplieron con el tiempo prometido.',
  },
  {
    nombre: 'Laura Gómez',
    rol: 'Cliente • Moto',
    iniciales: 'LG',
    texto:
      'Pintaron el tanque y los carenados de mi moto con un color personalizado. El acabado es espectacular, súper recomendados.',
  },
  {
    nombre: 'Carlos Ramírez',
    rol: 'Cliente • Auto',
    iniciales: 'CR',
    texto:
      'Me quitaron un golpe que pensé que no tenía arreglo. Latonería perfecta, no se nota nada. Volveré sin dudar.',
  },
]

function Stars() {
  return (
    <div className="stars" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section className="section testimonios" id="testimonios">
      <div className="container">
        <span className="eyebrow" data-reveal>Opiniones</span>
        <h2 className="section-title" data-reveal>
          Lo que dicen <span>nuestros clientes</span>
        </h2>
        <p className="section-subtitle" data-reveal>
          La mejor garantía es la confianza de quienes ya confiaron en nosotros.
        </p>
        <div className="testimonios-grid">
          {testimonios.map((t) => (
            <article className="testimonio" key={t.nombre} data-reveal>
              <div className="testimonio-quote">“</div>
              <Stars />
              <p>{t.texto}</p>
              <div className="testimonio-author">
                <div className="testimonio-avatar">{t.iniciales}</div>
                <div>
                  <div className="name">{t.nombre}</div>
                  <div className="role">{t.rol}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
