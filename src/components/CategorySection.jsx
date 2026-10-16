import ProductCard from './ProductCard.jsx'
import { iconMap } from './Icons.jsx'
import { useState } from 'react'

// Tramos de beneficios por total de cajas en el carrito
function getBenefit(totalBoxes) {
  if (totalBoxes >= 6) return { level: 3, label: 'Flete Gratis + 10% OFF + Prioridad FULL', color: '#0033A0' }
  if (totalBoxes >= 3) return { level: 2, label: 'Flete Gratis + 5% de Descuento', color: '#2a7d2e' }
  return { level: 1, label: null, color: null }
}

function getNextMilestone(totalBoxes) {
  if (totalBoxes >= 6) return null
  if (totalBoxes >= 3) return { needed: 6 - totalBoxes, reward: '10% OFF + Prioridad FULL' }
  return { needed: 3 - totalBoxes, reward: 'Flete Gratis Nacional + 5% OFF' }
}

export default function CategorySection({ category, index, onBoxAdd, onBoxRemove, cartQty, totalBoxes }) {
  const Icon = iconMap[category.icon]
  const num = String(index + 1).padStart(2, '0')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(category.products.length / itemsPerPage)
  const displayedProducts = category.products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const benefit = getBenefit(totalBoxes)
  const milestone = getNextMilestone(totalBoxes)

  return (
    <section id={category.slug} className="catsec">
      <div className="container">
        <div className="catsec-head">
          <div className="catsec-head-left">
            <span className="catsec-num">{num}</span>
            <Icon size={30} color="var(--carbon)" />
          </div>
          <div>
            <h2 className="catsec-title">{category.name}</h2>
            <p className="catsec-intro">{category.intro}</p>
          </div>
        </div>

        {/* Aviso de surtido aleatorio */}
        <div className="catsec-assortment-notice">
          <span>
            <strong>Los modelos que ves son de referencia.</strong> Al pedir una caja, recibirás un surtido aleatorio de los diseños disponibles en bodega al momento del despacho. No garantizamos ningún modelo específico.
          </span>
        </div>

        {/* Galería visual */}
        <div className="catsec-grid">
          {displayedProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              icon={category.icon}
              categoryName={category.name}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="btn btn-outline-dark"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
            >
              Anterior
            </button>
            <span className="page-info">Página {currentPage} de {totalPages}</span>
            <button
              className="btn btn-outline-dark"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
            >
              Siguiente
            </button>
          </div>
        )}

        {/* Panel de compra por caja — nivel de categoría */}
        <div className="box-panel reg-corners">
          <div className="box-panel-info">
            <span className="box-panel-label">{category.boxLabel}</span>
            <p className="box-panel-desc">
              Pedido mínimo: <strong>{category.moq} unidades</strong> por caja · Surtido aleatorio de los modelos del catálogo.
            </p>

            {/* Termómetro de beneficios */}
            {milestone && (
              <div className="benefit-nudge">
                <span>
                  Añade <strong>{milestone.needed} caja{milestone.needed > 1 ? 's' : ''} más</strong> (cualquier categoría) para desbloquear: <em>{milestone.reward}</em>
                </span>
              </div>
            )}
            {benefit.level >= 2 && (
              <div className="benefit-active" style={{ borderColor: benefit.color }}>
                <span style={{ color: benefit.color }}>Beneficio activo: {benefit.label}</span>
              </div>
            )}
          </div>

          <div className="box-panel-actions">
            <div className="qty-control">
              <button
                className="qty-btn"
                onClick={() => onBoxRemove(category.id)}
                disabled={cartQty === 0}
                aria-label="Quitar una caja"
              >
                −
              </button>
              <span className="qty-value">
                {cartQty} <span className="qty-unit">caja{cartQty !== 1 ? 's' : ''}</span>
              </span>
              <button
                className="qty-btn"
                onClick={() => onBoxAdd(category)}
                aria-label="Añadir una caja"
              >
                +
              </button>
            </div>
            {cartQty === 0 ? (
              <button className="btn btn-primary box-cta" onClick={() => onBoxAdd(category)}>
                Añadir Caja a Cotización
              </button>
            ) : (
              <a href="#cotizacion-box" className="btn btn-outline-dark box-cta">
                Ver Cotización ({cartQty} caja{cartQty !== 1 ? 's' : ''}) →
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .catsec {
          padding: 72px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .catsec-head {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 28px;
          border-bottom: 3px solid var(--carbon);
        }
        .catsec-head-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .catsec-num {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--mid-gray);
        }
        .catsec-title {
          font-size: clamp(32px, 4vw, 44px);
        }
        .catsec-intro {
          margin-top: 8px;
          max-width: 520px;
          color: var(--mid-gray);
          font-size: 14.5px;
        }

        /* Aviso surtido */
        .catsec-assortment-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #fffbea;
          border: 1.5px solid var(--yellow);
          border-radius: var(--radius);
          padding: 14px 18px;
          margin-bottom: 28px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--dark-gray);
        }
        .notice-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Galería visual */
        .catsec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        /* Paginación */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }
        .page-info {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--mid-gray);
        }

        /* Panel de caja */
        .box-panel {
          margin-top: 36px;
          background: var(--carbon);
          color: var(--white);
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .box-panel-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          min-width: 220px;
        }
        .box-panel-label {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.5vw, 26px);
          letter-spacing: 0.04em;
          color: var(--yellow);
          text-transform: uppercase;
        }
        .box-panel-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
        }
        .box-panel-desc strong {
          color: var(--white);
        }

        /* Nudge de beneficio */
        .benefit-nudge {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 6px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border-left: 3px solid var(--yellow);
          border-radius: var(--radius);
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }
        .benefit-nudge strong { color: var(--yellow); }
        .benefit-nudge em { color: var(--white); font-style: normal; font-weight: 600; }
        .benefit-nudge-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

        .benefit-active {
          margin-top: 6px;
          padding: 8px 14px;
          border: 1.5px solid;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          background: rgba(255,255,255,0.05);
        }

        /* Controles de cantidad */
        .box-panel-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }
        .qty-control {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .qty-btn {
          background: none;
          border: none;
          color: var(--white);
          font-size: 22px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          transition: background 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
        }
        .qty-btn:hover:not(:disabled) {
          background: var(--yellow);
          color: var(--carbon);
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-value {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          min-width: 64px;
          text-align: center;
          color: var(--white);
        }
        .qty-unit {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          margin-left: 4px;
        }
        .box-cta {
          justify-content: center;
          white-space: nowrap;
        }

        @media (max-width: 760px) {
          .box-panel {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .box-panel-actions {
            align-items: flex-start;
            width: 100%;
          }
          .box-cta { width: 100%; justify-content: center; }
        }
        @media (max-width: 560px) {
          .catsec { padding: 52px 0; }
          .catsec-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .catsec-assortment-notice { font-size: 12px; padding: 12px 14px; }
        }
      `}</style>
    </section>
  )
}
