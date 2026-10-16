import { categories } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-inner">
        <div className="foot-brand">
          <p className="foot-logo">CATÁLOGO 2026<span>BY LET PROCUREMENT</span></p>
          <p className="foot-copy">
            Distribuidora B2B de productos de skateboarding. Venta exclusiva
            por volumen a distribuidores, tiendas y puntos de reventa.
          </p>
          <p className="foot-copy" style={{ marginTop: '12px' }}>
            Un catálogo operado por <a href="https://letprocurement.com" target="_blank" rel="noreferrer" style={{ color: 'var(--yellow)', textDecoration: 'underline' }}>LET Procurement</a>.
          </p>
        </div>

        <div className="foot-col">
          <p className="eyebrow foot-heading">Categorías</p>
          <ul>
            {categories.map((c) => (
              <li key={c.id}><a href={`#${c.slug}`}>{c.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <p className="eyebrow foot-heading">Política de surtido</p>
          <ul className="foot-notes">
            <li>Diseños asignados por rotación de bodega.</li>
            <li>Imágenes de referencia: no se garantiza gráfica exacta.</li>
            <li>Equilibrio de diseños en cada paquete.</li>
          </ul>
        </div>
      </div>

      <div className="container foot-bottom">
        <p>© {new Date().getFullYear()} Catálogo 2026 Skateboarding. Catálogo de uso exclusivo B2B.</p>
      </div>

      <style>{`
        .foot { background: var(--carbon); color: var(--light-gray); padding: 64px 0 0; }
        .foot-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 44px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .foot-logo { font-family: var(--font-display); font-size: 20px; color: var(--white); }
        .foot-logo span { display: block; color: var(--yellow); font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em; margin-top: 4px; }
        .foot-copy { margin-top: 14px; font-size: 13.5px; line-height: 1.6; max-width: 320px; color: var(--light-gray); }
        .foot-heading { color: var(--mid-gray); margin-bottom: 14px; }
        .foot-col ul { display: flex; flex-direction: column; gap: 10px; }
        .foot-col a { font-size: 13.5px; }
        .foot-col a:hover { color: var(--yellow); }
        .foot-notes li { font-size: 13px; color: var(--light-gray); line-height: 1.5; }
        .foot-bottom {
          padding: 20px 0 26px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--mid-gray);
        }

        @media (max-width: 700px) {
          .foot-inner { grid-template-columns: 1fr; gap: 30px; }
        }
      `}</style>
    </footer>
  )
}
