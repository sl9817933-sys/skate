import { brands } from '../data/products.js'

export default function BrandOrigin() {
  return (
    <section id="marca" className="origin">
      <div className="container origin-inner">
        <div className="origin-head">
          <p className="eyebrow origin-eyebrow">De dónde viene tu mercancía</p>
          <h2 className="origin-title">Producto importado,<br />marcas de la escena skate.</h2>
          <p className="origin-copy">
            Este lote llegó a bodega en aduana ya nacionalizado: no es
            preventa ni encargo, es inventario físico en Colombia listo para
            despacho. Corresponde a marcas reconocidas dentro de la industria
            del skateboarding, importadas directamente y liberadas por
            volumen &mdash; por eso puedes comprar a precio de importador en
            vez de precio de tienda al detal.
          </p>
        </div>

        <div className="origin-brands">
          {brands.map((b) => (
            <div className="origin-brand" key={b.name}>
              <span className="origin-brand-name">{b.name}</span>
              <span className="origin-brand-note">{b.note}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .origin {
          background: var(--white);
          padding: 88px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .origin-head { max-width: 640px; }
        .origin-eyebrow { color: var(--red); margin-bottom: 16px; }
        .origin-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
        }
        .origin-copy {
          margin-top: 18px;
          color: var(--dark-gray);
          font-size: 15px;
          line-height: 1.7;
        }
        .origin-brands {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1px;
          background: var(--light-gray);
          border: 1px solid var(--light-gray);
        }
        .origin-brand {
          background: var(--off-white);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .origin-brand-name {
          font-family: var(--font-display);
          font-size: 19px;
          letter-spacing: 0.01em;
          color: var(--carbon);
        }
        .origin-brand-note {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--mid-gray);
        }

        @media (max-width: 560px) {
          .origin { padding: 56px 0; }
          .origin-brands { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 380px) {
          .origin-brands { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
