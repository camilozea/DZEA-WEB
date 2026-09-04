export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <img src="/logo.png" alt="Logo DZEA Autos" className="brand-logo" />
              DZEA <span className="brand-yellow">AUTOS</span>
            </div>
            <p className="footer-desc">
              Pintura y latonería para autos y motos. Recuperamos la imagen de
              tu vehículo con calidad y garantía.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#quienes-somos">Quiénes somos</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>Tel: 300 000 0000</li>
              <li>Calle 123 # 45-67</li>
              <li>Lun a Sáb: 8am – 6pm</li>
              <li><a href="https://wa.me/573000000000" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DZEA Autos. Todos los derechos reservados.</span>
          <span>Pintura &amp; Latonería para autos y motos.</span>
        </div>
      </div>
    </footer>
  )
}
