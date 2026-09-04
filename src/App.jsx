import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QuienesSomos from './components/QuienesSomos.jsx'
import Servicios from './components/Servicios.jsx'
import Galeria from './components/Galeria.jsx'
import Testimonios from './components/Testimonios.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import { useRevealOnScroll } from './hooks.js'

export default function App() {
  useRevealOnScroll()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Galeria />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
