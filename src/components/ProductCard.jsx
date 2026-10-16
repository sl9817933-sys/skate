import { useState } from 'react'
import AssortmentMosaic from './AssortmentMosaic.jsx'

export default function ProductCard({ product, icon, categoryName }) {
  const [imgError, setImgError] = useState(false)
  const showImage = product.image && !imgError

  return (
    <article className="pcard reg-corners">
      <div className="pcard-media">
        {showImage ? (
          <img
            src={product.image}
            alt={`${product.name} — ${categoryName} al por mayor, catálogo skate B2B LET Procurement`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <AssortmentMosaic seed={product.id} icon={icon} tiles={4} />
        )}
        <span className="pcard-random-badge">Surtido aleatorio</span>
      </div>

      <div className="pcard-body">
        <p className="eyebrow pcard-sku">Ref. {product.sku}</p>
        <h3 className="pcard-title">{product.name}</h3>
        <p className="pcard-note">
          Este diseño puede estar en tu caja surtida.
        </p>
      </div>

      <style>{`
        .pcard {
          background: var(--white);
          border: 1px solid var(--light-gray);
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pcard:hover {
          border-color: var(--carbon);
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
        }
        .pcard-media {
          position: relative;
          padding: 14px;
          background: var(--off-white);
          border-bottom: 1px solid var(--light-gray);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .pcard-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }
        .pcard:hover .pcard-media img {
          transform: scale(1.04);
        }
        .pcard-random-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 8px;
          background: var(--yellow);
          color: var(--carbon);
          border-radius: var(--radius);
        }
        .pcard-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .pcard-sku {
          font-size: 10px;
          color: var(--mid-gray);
        }
        .pcard-title {
          font-size: 15px;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }
        .pcard-note {
          font-size: 11px;
          line-height: 1.45;
          color: var(--mid-gray);
          font-style: italic;
        }

        @media (max-width: 560px) {
          .pcard-body { padding: 10px 10px 12px; }
          .pcard-media { padding: 10px; }
          .pcard-title { font-size: 12px; }
          .pcard-note { display: none; }
          .pcard-sku { font-size: 9px; }
        }
      `}</style>
    </article>
  )
}
