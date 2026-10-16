const benefits = [
  {
    n: '01',
    title: 'Más diversidad, menos stock repetido',
    text: 'Cada caja combina diseños distintos, así que tu inventario final no se satura de una sola línea gráfica.',
  },
  {
    n: '02',
    title: 'Rotación constante',
    text: 'La selección responde a lo que se mueve en bodega, no a un catálogo fijo que se queda quieto en tus estantes.',
  },
  {
    n: '03',
    title: 'Compra al por mayor, un solo pedido',
    text: 'Defines la cantidad por categoría y nosotros garantizamos equilibrio de diseños dentro del paquete.',
  },
  {
    n: '04',
    title: 'Imágenes reales de referencia',
    text: 'Cada ficha muestra una foto real de una unidad del surtido, para que tengas una idea fiel del estilo y la calidad, aunque el diseño exacto varíe.',
  },
]

export default function WhyAssortment() {
  return (
    <section className="why">
      <div className="container why-inner">
        <div className="why-head">
          <p className="eyebrow why-eyebrow">Modelo de surtido</p>
          <h2 className="why-title">Vendemos por caja,<br />no por unidad exacta.</h2>
          <p className="why-copy">
            No prometemos una gráfica específica: garantizamos una combinación
            equilibrada. Es la forma más eficiente de mover volumen sin generar
            stock muerto de un solo diseño, ni para nosotros ni para ti.
          </p>
        </div>

        <div className="why-grid">
          {benefits.map((b) => (
            <div className="why-item" key={b.n}>
              <span className="why-n">{b.n}</span>
              <h3 className="why-item-title">{b.title}</h3>
              <p className="why-item-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why {
          background: var(--carbon);
          color: var(--white);
          padding: 88px 0;
        }
        .why-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
        }
        .why-eyebrow { color: var(--yellow); margin-bottom: 16px; }
        .why-title {
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.02;
        }
        .why-copy {
          margin-top: 22px;
          color: var(--light-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.12);
        }
        .why-item {
          background: var(--carbon);
          padding: 26px;
        }
        .why-n {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--yellow);
          font-weight: 700;
        }
        .why-item-title {
          margin-top: 14px;
          font-size: 19px;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 700;
          letter-spacing: 0;
        }
        .why-item-text {
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--light-gray);
        }

        @media (max-width: 900px) {
          .why-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .why { padding: 60px 0; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
