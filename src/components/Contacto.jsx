import { useState } from 'react'

const TEL = '300 000 0000'
const WHATSAPP = 'https://wa.me/573000000000'

const initialState = {
  nombre: '',
  telefono: '',
  vehiculo: 'Auto',
  mensaje: '',
}

export default function Contacto() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.nombre.trim().length < 2) next.nombre = 'Escribe tu nombre.'
    if (form.telefono.trim().length < 7) next.telefono = 'Escribe un teléfono válido.'
    if (form.mensaje.trim().length < 5) next.mensaje = 'Cuéntanos qué necesitas.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const texto = encodeURIComponent(
      `Hola DZEA Autos, soy ${form.nombre}. Quiero cotizar un trabajo de ${
        form.vehiculo
      }. ${form.mensaje}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/573000000000?text=${texto}`, '_blank')
      setStatus('done')
    }, 600)
  }

  return (
    <section className="section contacto" id="contacto">
      <div className="container">
        <span className="eyebrow" data-reveal>Hablemos</span>
        <h2 className="section-title" data-reveal>
          Contáctanos y <span>cotiza</span>
        </h2>
        <p className="section-subtitle" data-reveal>
          Cuéntanos qué necesitas y te respondemos a la brevedad. También puedes
          escribirnos directo por WhatsApp.
        </p>

        <div className="contacto-grid">
          <div className="contacto-info" data-reveal>
            <h3>Información de contacto</h3>

            <div className="contacto-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <div>
                <div className="label">Teléfono</div>
                <div className="value">{TEL}</div>
              </div>
            </div>

            <div className="contacto-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="label">Dirección</div>
                <div className="value">Calle 123 # 45-67, Ciudad</div>
              </div>
            </div>

            <div className="contacto-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div>
                <div className="label">Horario</div>
                <div className="value">Lun a Sáb: 8:00 am – 6:00 pm</div>
              </div>
            </div>

            <a className="btn whatsapp-btn" href={WHATSAPP} target="_blank" rel="noreferrer">
              Escríbenos por WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} noValidate data-reveal>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                className={errors.nombre ? 'error' : ''}
                aria-invalid={!!errors.nombre}
                value={form.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <div className="form-error">{errors.nombre}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                placeholder="Tu teléfono"
                className={errors.telefono ? 'error' : ''}
                aria-invalid={!!errors.telefono}
                value={form.telefono}
                onChange={handleChange}
              />
              {errors.telefono && <div className="form-error">{errors.telefono}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="vehiculo">Vehículo</label>
              <select id="vehiculo" name="vehiculo" value={form.vehiculo} onChange={handleChange}>
                <option>Auto</option>
                <option>Moto</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Describe el trabajo que necesitas…"
                className={errors.mensaje ? 'error' : ''}
                aria-invalid={!!errors.mensaje}
                value={form.mensaje}
                onChange={handleChange}
              />
              {errors.mensaje && <div className="form-error">{errors.mensaje}</div>}
            </div>
            <button
              type="submit"
              className="btn btn-yellow"
              style={{ width: '100%' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Abriendo WhatsApp…' : 'Enviar cotización'}
            </button>
            {status === 'done' && (
              <div className="form-feedback" role="status">
                ¡Mensaje listo! Revisa tu WhatsApp para enviarlo.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
