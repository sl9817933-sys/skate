import { useState, useEffect } from 'react'

function FaqItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const showContent = !isMobile || isOpen

  return (
    <div className="seo-faq-item">
      <h4 
        onClick={() => isMobile && setIsOpen(!isOpen)} 
        className={isMobile ? 'faq-clickable' : ''}
      >
        {title}
        {isMobile && <span className="faq-icon">{isOpen ? '−' : '+'}</span>}
      </h4>
      {showContent && <div className="faq-content">{children}</div>}
    </div>
  )
}

export default function SeoText() {
  return (
    <section className="seo-text" aria-label="Información sobre compra mayorista de skateboarding">
      <div className="container seo-text-inner">
        <div className="seo-text-grid">
          <div className="seo-col">
            <h2 className="seo-heading">Distribuidora mayorista de skateboarding en Colombia</h2>
            <p>
              <strong>LET Procurement</strong> es la solución B2B para tiendas de skateboarding, distribuidores
              y puntos de reventa que buscan <strong>tablas de skate al por mayor</strong> en Colombia con
              inventario real. Nuestro catálogo 2026 reúne más de 60 referencias de{' '}
              <strong>tablas (decks), ejes (trucks), ruedas y rodamientos</strong> de marcas originales
              importadas directamente.
            </p>
            <p>
              A diferencia de la preventa o el encargo, nuestro inventario está{' '}
              <strong>físicamente en bodega en Colombia</strong>, ya nacionalizado y listo para despacho.
              Eso nos permite ofrecerte <strong>precio de importador mayorista</strong> sin los tiempos de
              espera ni los riesgos de la importación propia.
            </p>
          </div>

          <div className="seo-col">
            <h3 className="seo-subheading">Productos disponibles al por mayor</h3>
            <ul className="seo-list">
              <li>
                <strong>Tablas de skate (decks) 7.75" a 8.5"</strong> — Más de 60 referencias de marcas
                como Theories of Atlantis, Hopps, Trap Skateboards, Traffic Skateboards y Natural Konzepts.
                Ideal para renovar la vitrina de tu tienda con producto de marca.
              </li>
              <li>
                <strong>Ejes de skate (trucks) por volumen</strong> — Ejes Bolzen en aluminio fundido,
                tallas 5.25, 5.5 y 5.85. Compatibles con tablas street y transición.
              </li>
              <li>
                <strong>Ruedas de skate mayorista 52–54mm</strong> — Poliuretano de alta resistencia
                en distintas durezas. Diseños surtidos para variedad de vitrina.
              </li>
              <li>
                <strong>Rodamientos ABEC7 por caja</strong> — Trap Titanium Bearings de acero de
                alta velocidad, disponibles en lote mayorista.
              </li>
            </ul>
          </div>

          <div className="seo-col">
            <h3 className="seo-subheading">¿Por qué comprar skate al por mayor con LET Procurement?</h3>
            <ul className="seo-list">
              <li><strong>Stock real en Colombia</strong> — Sin tiempos de importación ni incertidumbre de proveedor.</li>
              <li><strong>Precio de importador</strong> — Accedes al costo de mayorista por comprar directamente del lote.</li>
              <li><strong>Marcas de la escena skate</strong> — No genérico: producto reconocido para tiendas exigentes.</li>
              <li><strong>Atención directa B2B</strong> — Cotización personalizada por WhatsApp Business.</li>
              <li><strong>Despacho a todo Colombia</strong> — Coordinamos envío a tu ciudad una vez confirmado el pedido.</li>
            </ul>
          </div>
        </div>

        <div className="seo-faq">
          <h3 className="seo-subheading">Preguntas frecuentes — Compra mayorista de skate</h3>
          <div className="seo-faq-grid">
            <FaqItem title="¿Tienen mínimo de compra?">
              <p>
                El catálogo está orientado a <strong>compras por volumen</strong>. Contáctanos por WhatsApp
                para discutir el mínimo de unidades por categoría según tu necesidad.
              </p>
            </FaqItem>
            <FaqItem title="¿Puedo elegir el diseño exacto de las tablas?">
              <p>
                Los pedidos llegan en <strong>surtido de bodega</strong>: las imágenes son de referencia.
                La distribución de diseños es equitativa dentro de cada paquete, pero no se garantiza
                una gráfica específica por unidad.
              </p>
            </FaqItem>
            <FaqItem title="¿Solo venden a Colombia?">
              <p>
                Por ahora nuestra operación mayorista está enfocada en el{' '}
                <strong>mercado colombiano</strong>. Si eres distribuidor en otro país latinoamericano,
                escríbenos y evaluamos la posibilidad.
              </p>
            </FaqItem>
            <FaqItem title="¿Cómo solicito el precio mayorista?">
              <p>
                Usa el formulario de cotización del catálogo, agrega los productos que te interesan
                y envía la consulta por WhatsApp. Respondemos con{' '}
                <strong>precio por volumen y disponibilidad actualizada</strong>.
              </p>
            </FaqItem>
          </div>
        </div>
      </div>

      <style>{`
        .seo-text {
          background: var(--off-white);
          border-top: 1px solid var(--light-gray);
          padding: 72px 0 64px;
        }
        .seo-text-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }
        .seo-heading {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          text-transform: none;
          letter-spacing: 0;
          margin-bottom: 16px;
          color: var(--carbon);
        }
        .seo-subheading {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          text-transform: none;
          letter-spacing: 0;
          margin-bottom: 14px;
          color: var(--carbon);
        }
        .seo-col p {
          font-size: 13.5px;
          line-height: 1.75;
          color: var(--dark-gray);
          margin-bottom: 12px;
        }
        .seo-list {
          list-style: disc;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .seo-list li {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--dark-gray);
        }

        .seo-faq {
          border-top: 1px solid var(--light-gray);
          padding-top: 40px;
        }
        .seo-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 40px;
          margin-top: 24px;
        }
        .seo-faq-item h4 {
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: none;
          color: var(--carbon);
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-clickable {
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 0 !important;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .faq-icon {
          font-family: var(--font-mono);
          font-size: 18px;
          color: var(--mid-gray);
          font-weight: 400;
        }
        .faq-content {
          margin-top: 8px;
        }
        .seo-faq-item p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--dark-gray);
        }

        @media (max-width: 900px) {
          .seo-text-grid { grid-template-columns: 1fr 1fr; }
          .seo-faq-grid { grid-template-columns: 1fr; gap: 0; }
          .seo-faq-item {
            border-bottom: 1px solid rgba(0,0,0,0.06);
            padding: 4px 0;
          }
          .seo-faq-item:last-child {
            border-bottom: none;
          }
          .faq-content {
            margin-bottom: 16px;
          }
        }
        @media (max-width: 560px) {
          .seo-text { padding: 48px 0 40px; }
          .seo-text-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </section>
  )
}

