import { useState, lazy, Suspense } from 'react'

// Above-the-fold: se cargan inmediatamente (visibles sin scroll)
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import InfoBar from './components/InfoBar.jsx'

// Below-the-fold: carga diferida (no bloquea el render inicial)
const BrandVideo = lazy(() => import('./components/BrandVideo.jsx'))
const BrandOrigin = lazy(() => import('./components/BrandOrigin.jsx'))
const WhyBuyUs = lazy(() => import('./components/WhyBuyUs.jsx'))
const HowItWorks = lazy(() => import('./components/HowItWorks.jsx'))
const CategorySection = lazy(() => import('./components/CategorySection.jsx'))
const WhyAssortment = lazy(() => import('./components/WhyAssortment.jsx'))
const ContactCTA = lazy(() => import('./components/ContactCTA.jsx'))
const FloatingWhatsapp = lazy(() => import('./components/FloatingWhatsapp.jsx'))
const SeoText = lazy(() => import('./components/SeoText.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))

import { categories } from './data/products.js'

// --- Datos de contacto de la empresa: reemplazar por los reales ---
const WHATSAPP_NUMBER = '573118785553' // formato internacional sin '+' ni espacios
const EMAIL = 'info@letprocurement.com'
const BRAND_YOUTUBE_ID = 'dXKgk423hu0' // video de marca mostrado en la sección "Conoce la marca"

function buildWhatsappHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

function buildMailHref(subject, body) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function App() {
  // cart: { [categoryId]: { category, qty } }
  const [cart, setCart] = useState({})
  const [toast, setToast] = useState(null)

  // Total de cajas en el carrito (suma de todas las categorías)
  const totalBoxes = Object.values(cart).reduce((sum, item) => sum + item.qty, 0)

  const handleBoxAdd = (category) => {
    setCart((prev) => {
      const existing = prev[category.id]
      const newQty = existing ? existing.qty + 1 : 1
      return { ...prev, [category.id]: { category, qty: newQty } }
    })
    setToast(`+1 caja de ${category.name} añadida a tu cotización.`)
    setTimeout(() => setToast(null), 4000)
  }

  const handleBoxRemove = (categoryId) => {
    setCart((prev) => {
      const existing = prev[categoryId]
      if (!existing || existing.qty <= 0) return prev
      const newQty = existing.qty - 1
      if (newQty === 0) {
        const updated = { ...prev }
        delete updated[categoryId]
        return updated
      }
      return { ...prev, [categoryId]: { ...existing, qty: newQty } }
    })
  }

  const removeCategory = (categoryId) => {
    setCart((prev) => {
      const updated = { ...prev }
      delete updated[categoryId]
      return updated
    })
  }

  const heroWhatsapp = buildWhatsappHref('Hola, tengo algunas dudas sobre el catálogo mayorista y el proceso de compra. ¿Me podrían asesorar?')

  return (
    <>
      {/* Above-the-fold: render inmediato */}
      <Navbar whatsappHref={heroWhatsapp} />
      <Hero whatsappHref={heroWhatsapp} quoteHref={`#${categories[0].slug}`} />
      <InfoBar />

      {/* Below-the-fold: carga diferida, invisible para el usuario */}
      <Suspense fallback={null}>
        <BrandVideo youtubeId={BRAND_YOUTUBE_ID} title="Video de la marca" />
        <BrandOrigin />
        <WhyBuyUs />
        <HowItWorks />

        {categories.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat}
            index={i}
            onBoxAdd={handleBoxAdd}
            onBoxRemove={handleBoxRemove}
            cartQty={cart[cat.id]?.qty || 0}
            totalBoxes={totalBoxes}
          />
        ))}

        <WhyAssortment />

        <ContactCTA
          whatsappNumber={WHATSAPP_NUMBER}
          cart={cart}
          totalBoxes={totalBoxes}
          removeCategory={removeCategory}
          handleBoxAdd={handleBoxAdd}
          handleBoxRemove={handleBoxRemove}
          buildWhatsappHref={buildWhatsappHref}
        />

        <SeoText />
        <Footer />
        <FloatingWhatsapp href={heroWhatsapp} />

        {totalBoxes > 0 && (
          <a href="#cotizacion-box" className="floating-cart">
            <span className="cart-count">{totalBoxes}</span>
            Ver cotización
          </a>
        )}

        {toast && (
          <div className="toast-notification reg-corners">
            <span>{toast}</span>
            <a href="#cotizacion-box" onClick={() => setToast(null)} className="toast-link">
              Ver cotización &rarr;
            </a>
          </div>
        )}
      </Suspense>
    </>
  )
}
