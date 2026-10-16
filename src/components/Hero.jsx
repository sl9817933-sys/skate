const HERO_IMAGES = [
  'https://bunkerskateshop.com/wp-content/uploads/2025/12/image-9.jpg',
  'https://mantisshop.de/cdn/shop/files/Theories-Of-Atlantis-16mm-Chrysler-Deck-1_54802.jpg?v=1769597987&width=713',
  'https://mantisshop.de/cdn/shop/files/polzrsuckzs_68671.jpg?v=1769604806&width=713',
  'https://mantisshop.de/cdn/shop/files/polstdnjukzs_68622.jpg?v=1769605587&width=713',
  'https://mantisshop.de/cdn/shop/files/dreamcatcheratmo_68620.jpg?v=1769605576&width=713',
  'https://mantisshop.de/cdn/shop/files/Hopps-Meinholz-Bender-Deck-1_56571.jpg?v=1769596416&width=713',
]

export default function Hero({ whatsappHref, quoteHref }) {
  return (
    <section id="top" className="hero">
      <div className="hero-collage" aria-hidden="true">
        {HERO_IMAGES.map((src, i) => (
          <div className="hero-collage-tile" key={i}>
            <img
              src={src}
              alt=""
              loading="eager"
              fetchpriority={i === 0 ? 'high' : 'auto'}
              decoding={i === 0 ? 'sync' : 'async'}
              width="200"
              height="300"
            />
          </div>
        ))}
      </div>
      <div className="hero-scrim" />

      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">Catálogo mayorista 2026 · By LET Procurement</p>
        <h1 className="hero-title">
          Inventario en<br />surtido, listo<br />para rodar.
        </h1>
        <p className="hero-sub">
          Tablas, ejes, ruedas y rodamientos por volumen. Las cajas llegan
          surtidas de bodega: las imágenes son de referencia, el diseño
          exacto que recibes depende de la rotación disponible al momento
          del despacho.
        </p>

        <div className="hero-ctas">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-primary">
            Cotizar por WhatsApp
          </a>
          <a href={quoteHref} className="btn btn-outline-light">
            Ver catálogo por categoría
          </a>
        </div>

        <div className="hero-note stencil-badge on-dark">
          Distribución equitativa de diseños por pedido, sin gráfica garantizada
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: flex-end;
          background: var(--carbon);
          overflow: hidden;
        }
        .hero-collage {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2px;
          opacity: 0.55;
        }
        .hero-collage-tile {
          overflow: hidden;
          background: var(--dark-gray);
        }
        .hero-collage-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.15) contrast(1.05);
        }
        @media (max-width: 700px) {
          .hero-collage { grid-template-columns: repeat(3, 1fr); }
          .hero-collage-tile:nth-child(n+4) { display: none; }
        }
        .hero-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(18,18,18,0.55) 0%, rgba(18,18,18,0.35) 35%, rgba(18,18,18,0.92) 100%);
        }
        .hero-content {
          position: relative;
          padding-top: 140px;
          padding-bottom: 76px;
          max-width: 760px;
        }
        .hero-eyebrow { color: var(--yellow); margin-bottom: 18px; }
        .hero-title {
          font-size: clamp(46px, 8vw, 92px);
          line-height: 0.98;
          color: var(--white);
        }
        .hero-sub {
          margin-top: 22px;
          max-width: 520px;
          color: var(--light-gray);
          font-size: 16px;
          line-height: 1.6;
        }
        .hero-ctas {
          margin-top: 34px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-note {
          margin-top: 28px;
        }

        @media (max-width: 600px) {
          .hero { min-height: 86vh; }
          .hero-content { padding-top: 110px; padding-bottom: 48px; }
        }
      `}</style>
    </section>
  )
}
