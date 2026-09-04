# DZEA Autos

Sitio web corporativo para **DZEA Autos**, taller especializado en pintura y latonería para autos y motos.

## Descripción

Web moderna y responsiva que muestra los servicios, experiencia y trabajos del taller DZEA Autos. La página incluye secciones de presentación, servicios, galería de proyectos, testimonios de clientes, información de contacto y un formulario de cotización.

## Tecnologías

- **React 18** con Vite
- **CSS personalizado** con variables CSS y animaciones
- **Hooks personalizados** para revelado en scroll, conteo animado y sección activa
- **Fontes**: Barlow Condensed y Barlow

## Características

- Diseño responsive (mobile-first)
- Animaciones de revelado en scroll
- Estadísticas animadas con conteo progresivo
- Marquee horizontal automático
- Navbar fijo con efecto de scroll
- Formulario de contacto con validación
- Botón "Volver al inicio" flotante
- Accesibilidad básica (ARIA, focus-visible)

## Secciones

1. **Hero** - Presentación con estadísticas animadas y llamado a la acción
2. **Quiénes Somos** - Historia y valores del taller
3. **Servicios** - Servicios de pintura, latonería, desabollado y más
4. **Galería** - Portafolio de trabajos realizados
5. **Testimonios** - Opiniones de clientes satisfechos
6. **Contacto** - Información de contacto y formulario de cotización
7. **Footer** - Enlaces y información de contacto

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Construye la producción en la carpeta `dist/` |
| `npm run preview` | Previsualiza la build de producción |

## Estructura de componentes

```
src/components/
  - Navbar.jsx       - Menú de navegación responsive
  - Hero.jsx         - Sección principal con estadísticas
  - QuienesSomos.jsx - Quienes son y valores
  - Servicios.jsx    - Grid de servicios
  - Galeria.jsx      - Galería de imágenes con filtros
  - Testimonios.jsx  - Tarjetas de testimonios
  - Contacto.jsx     - Formulario y datos de contacto
  - Footer.jsx       - Footer con enlaces
  - BackToTop.jsx    - Botón flotante para volver arriba

src/hooks.js
  - useRevealOnScroll - Animación de revelado en scroll
  - useScrolled       - Estado de scrolled
  - useActiveSection  - Sección activa en navbar
  - useCountUp         - Conteo animado de estadísticas
```

## Personalización

- Modificar colores actualizando las variables CSS en `src/index.css`
- Actualizar las estadísticas en `src/components/Hero.jsx`
- Cambiar enlaces del navbar en `src/components/Navbar.jsx`
- Modificar el contenido de cada sección en sus respectivos componentes