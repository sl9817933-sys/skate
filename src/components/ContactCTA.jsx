export default function ContactCTA({
  whatsappNumber,
  cart = {},
  totalBoxes = 0,
  removeCategory,
  handleBoxAdd,
  handleBoxRemove,
  buildWhatsappHref,
}) {
  const cartItems = Object.values(cart) // [{ category, qty }]
  const hasItems = cartItems.length > 0

  // --- Lógica de beneficios ---
  function getBenefitLabel(boxes) {
    if (boxes >= 6) return { label: '10% de Descuento + Flete Gratis + Prioridad FULL', color: '#0033A0' }
    if (boxes >= 3) return { label: 'Flete Gratis Nacional + 5% de Descuento', color: '#2a7d2e' }
    return null
  }

  function getNextMilestone(boxes) {
    if (boxes >= 6) return null
    if (boxes >= 3) return { needed: 6 - boxes, reward: '10% OFF + Prioridad FULL' }
    return { needed: 3 - boxes, reward: 'Flete Gratis + 5% OFF' }
  }

  const benefit = getBenefitLabel(totalBoxes)
  const milestone = getNextMilestone(totalBoxes)

  // --- Mensaje WhatsApp alineado con el saludo del negocio ---
  const cartLines = hasItems
    ? cartItems.map(({ category, qty }) =>
        `• ${qty} caja${qty > 1 ? 's' : ''} de ${category.name} (${category.boxLabel})`
      ).join('\n')
    : '• (Sin productos seleccionados aún)'

  const benefitLine = benefit
    ? `\nBeneficio aplicable: ${benefit.label}`
    : `\nConsejo: pidiendo 3+ cajas aplicas a Flete Gratis + 5% OFF`

  const waMessage =
    `Hola, acabo de revisar el catálogo digital de *Rotación Mayorista Skate*.\n\n` +
    `Me gustaría cotizar el siguiente pedido:\n\n` +
    `*Productos de Interés:*\n${cartLines}\n` +
    `*Total de cajas:* ${totalBoxes}${benefitLine}\n\n` +
    `Por favor confírmame disponibilidad, precios y tiempos de entrega. Gracias.`

  const waHref = buildWhatsappHref(encodeURIComponent(waMessage))

  // --- Barra de progreso del termómetro ---
  const progressPct = Math.min((totalBoxes / 6) * 100, 100)
  const milestone2Pct = (3 / 6) * 100
  const milestone3Pct = 100

  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">

        {/* Columna izquierda */}
        <div className="contact-left">
          <p className="eyebrow contact-eyebrow">Cotización mayorista B2B</p>
          <h2 className="contact-title">Arma tu pedido<br />por cajas surtidas.</h2>
          <p className="contact-copy">
            Selecciona las categorías que te interesan y la cantidad de cajas. Te enviamos disponibilidad real, precios y tiempos de entrega por WhatsApp Business.
          </p>

          {/* Termómetro de beneficios */}
          <div className="benefit-meter">
            <div className="benefit-meter-header">
              <span className="eyebrow">Beneficios por volumen</span>
              <span className="benefit-meter-total">{totalBoxes} caja{totalBoxes !== 1 ? 's' : ''}</span>
            </div>
            <div className="benefit-progress-track">
              <div
                className="benefit-progress-fill"
                style={{ width: `${progressPct}%` }}
              />
              <div className="benefit-milestone" style={{ left: `${milestone2Pct}%` }}>
                <span className="milestone-dot" data-active={totalBoxes >= 3} />
                <span className="milestone-label">3 cajas<br />Flete Gratis + 5% OFF</span>
              </div>
              <div className="benefit-milestone" style={{ left: `${milestone3Pct}%` }}>
                <span className="milestone-dot" data-active={totalBoxes >= 6} />
                <span className="milestone-label">6 cajas<br />10% OFF + Prioridad</span>
              </div>
            </div>
            {milestone && (
              <p className="benefit-hint">
                Añade <strong>{milestone.needed} caja{milestone.needed > 1 ? 's' : ''} más</strong> para desbloquear: <em>{milestone.reward}</em>
              </p>
            )}
            {benefit && (
              <p className="benefit-unlocked" style={{ color: benefit.color }}>
                <strong>Beneficio desbloqueado:</strong> {benefit.label}
              </p>
            )}
          </div>

          <div className="contact-direct">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp directo
            </a>
          </div>

          <p className="contact-disclaimer">
            Los productos se entregan en surtido aleatorio de diseños según disponibilidad en bodega. Las imágenes del catálogo son de referencia: no garantizamos diseño específico por unidad.
          </p>
        </div>

        {/* Formulario / Resumen de cotización */}
        <div id="cotizacion-box" className="contact-form reg-corners">
          <div className="form-header">
            <span className="eyebrow">Tu cotización</span>
            <span className="form-box-count">{totalBoxes} caja{totalBoxes !== 1 ? 's' : ''} en total</span>
          </div>

          {!hasItems ? (
            <div className="form-empty">
              <p>Aún no has añadido cajas a tu cotización.</p>
              <p>Usa los botones <strong>"Añadir Caja"</strong> en cada categoría del catálogo.</p>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map(({ category, qty }) => (
                <li key={category.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{category.boxLabel}</span>
                    <span className="cart-item-moq">MOQ {category.moq} u. · Surtido aleatorio</span>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      type="button"
                      className="qty-btn-sm"
                      onClick={() => handleBoxRemove(category.id)}
                      aria-label="Quitar una caja"
                    >
                      −
                    </button>
                    <span className="cart-item-qty">{qty}</span>
                    <button
                      type="button"
                      className="qty-btn-sm"
                      onClick={() => handleBoxAdd(category)}
                      aria-label="Añadir una caja"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => removeCategory(category.id)}
                      aria-label="Eliminar esta categoría"
                    >
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {benefit && (
            <div className="cart-benefit-tag" style={{ borderColor: benefit.color, color: benefit.color }}>
              {benefit.label}
            </div>
          )}

          <div className="contact-form-actions">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Enviar por WhatsApp
            </a>
          </div>

          <p className="form-footer-note">
            * Exclusivo para comercio mayorista con RUT/NIT verificado. Los precios finales se confirman por WhatsApp Business.
          </p>
        </div>
      </div>

      <style>{`
        .contact { padding: 90px 0; background: var(--off-white); }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .contact-eyebrow { color: var(--blue); margin-bottom: 16px; }
        .contact-title { font-size: clamp(32px, 4vw, 46px); }
        .contact-copy {
          margin-top: 18px;
          color: var(--dark-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 460px;
        }

        /* Termómetro */
        .benefit-meter {
          margin-top: 28px;
          background: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: var(--radius);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .benefit-meter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .benefit-meter-total {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--carbon);
        }
        .benefit-progress-track {
          position: relative;
          height: 8px;
          background: var(--light-gray);
          border-radius: 99px;
          margin: 24px 0 36px;
        }
        .benefit-progress-fill {
          height: 100%;
          background: var(--yellow);
          border-radius: 99px;
          transition: width 0.4s ease;
          min-width: 4px;
        }
        .benefit-milestone {
          position: absolute;
          top: -4px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .milestone-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--light-gray);
          border: 2px solid var(--mid-gray);
          transition: background 0.3s ease, border-color 0.3s ease;
          display: block;
        }
        .milestone-dot[data-active="true"] {
          background: var(--yellow);
          border-color: var(--carbon);
        }
        .milestone-label {
          position: absolute;
          top: 22px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          text-align: center;
          color: var(--mid-gray);
          line-height: 1.3;
          white-space: nowrap;
          transform: translateX(-50%);
          left: 50%;
          pointer-events: none;
        }
        .benefit-milestone:last-child .milestone-label {
          left: auto;
          right: 0;
          transform: translateX(0);
          text-align: right;
        }
        .benefit-hint {
          font-size: 13px;
          color: var(--dark-gray);
          line-height: 1.5;
          padding: 8px 12px;
          background: #fffbea;
          border-left: 3px solid var(--yellow);
          border-radius: var(--radius);
        }
        .benefit-hint strong { color: var(--carbon); }
        .benefit-hint em { font-style: normal; font-weight: 600; }
        .benefit-unlocked {
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.5;
          padding: 8px 12px;
          border-radius: var(--radius);
          background: rgba(0,0,0,0.04);
        }

        .contact-direct {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .contact-disclaimer {
          margin-top: 20px;
          padding: 14px 16px;
          border-left: 3px solid var(--red);
          background: var(--white);
          font-size: 13px;
          color: var(--dark-gray);
          max-width: 460px;
          line-height: 1.55;
        }

        /* Formulario / resumen */
        .contact-form {
          background: var(--white);
          border: 1px solid var(--light-gray);
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
        }
        .contact-form::before,
        .contact-form::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          pointer-events: none;
        }
        .contact-form::before {
          top: -2px;
          left: -2px;
          border-top: 3px solid var(--yellow);
          border-left: 3px solid var(--yellow);
        }
        .contact-form::after {
          bottom: -2px;
          right: -2px;
          border-bottom: 3px solid var(--yellow);
          border-right: 3px solid var(--yellow);
        }
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--carbon);
        }
        .form-box-count {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          background: var(--yellow);
          color: var(--carbon);
          padding: 4px 12px;
          border-radius: var(--radius);
        }
        .form-empty {
          text-align: center;
          color: var(--mid-gray);
          font-size: 14px;
          line-height: 1.7;
          padding: 28px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Lista del carrito */
        .cart-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          background: var(--off-white);
          padding: 12px 14px;
          border: 1px solid var(--light-gray);
          border-radius: var(--radius);
          flex-wrap: wrap;
        }
        .cart-item-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
          min-width: 160px;
        }
        .cart-item-name {
          font-family: var(--font-display);
          font-size: 14px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .cart-item-moq {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--mid-gray);
          letter-spacing: 0.05em;
        }
        .cart-item-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .qty-btn-sm {
          background: var(--white);
          border: 1.5px solid var(--light-gray);
          color: var(--carbon);
          width: 30px;
          height: 30px;
          border-radius: var(--radius);
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.15s, background 0.15s;
        }
        .qty-btn-sm:hover {
          border-color: var(--carbon);
          background: var(--carbon);
          color: var(--white);
        }
        .cart-item-qty {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          min-width: 24px;
          text-align: center;
        }
        .btn-remove {
          background: none;
          border: none;
          color: var(--red);
          font-size: 20px;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        }
        .btn-remove:hover { color: darkred; }

        .cart-benefit-tag {
          padding: 10px 14px;
          border: 1.5px solid;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .contact-form-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .contact-form-actions .btn { flex: 1; justify-content: center; }

        .form-footer-note {
          font-size: 11px;
          color: var(--mid-gray);
          line-height: 1.5;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .contact { padding: 60px 0; }
          .contact-form { padding: 20px; }
          .milestone-label { display: none; }
          .benefit-progress-track { margin-bottom: 16px; }
        }
      `}</style>
    </section>
  )
}
