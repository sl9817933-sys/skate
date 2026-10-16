import { keyMessages } from '../data/products.js'

export default function InfoBar() {
  return (
    <section className="infobar">
      <div className="container infobar-inner">
        {keyMessages.map((m) => (
          <div className="infobar-item" key={m.tag}>
            <span className="infobar-tag">{m.tag}</span>
            <span className="infobar-text">{m.text}</span>
          </div>
        ))}
      </div>

      <style>{`
        .infobar {
          background: var(--carbon);
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .infobar-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .infobar-item {
          padding: 20px 22px;
          border-left: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .infobar-item:first-child { border-left: none; }
        .infobar-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--yellow);
        }
        .infobar-text {
          font-size: 13.5px;
          color: var(--light-gray);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .infobar-inner { grid-template-columns: repeat(2, 1fr); }
          .infobar-item:nth-child(2n+1) { border-left: none; }
          .infobar-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
        @media (max-width: 520px) {
          .infobar-inner { grid-template-columns: 1fr; }
          .infobar-item { border-left: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
      `}</style>
    </section>
  )
}
