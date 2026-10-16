import { useState, useEffect } from 'react'
import { purchaseSteps } from '../data/products.js'

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 560)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 560)
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="how">
      <div className="container how-inner">
        <p className="eyebrow how-eyebrow on-dark">Cómo funciona</p>
        <h2 className="how-title">De catálogo a<br />pedido despachado.</h2>

        <div className="how-steps">
          {purchaseSteps.map((s, i) => {
            const isOpen = !isMobile || openIndex === i;
            return (
              <div 
                className={`how-step ${isOpen ? 'is-open' : ''} ${isMobile ? 'is-mobile' : ''}`} 
                key={s.n}
              >
                <div 
                  className="how-step-header" 
                  onClick={() => isMobile && setOpenIndex(prev => prev === i ? null : i)}
                >
                  <div>
                    <span className="how-step-n">{s.n}</span>
                    <h3 className="how-step-title">{s.title}</h3>
                  </div>
                  {isMobile && (
                    <span className="how-chevron">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  )}
                </div>
                
                <div className="how-step-content">
                  <p className="how-step-text">{s.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .how {
          background: var(--carbon);
          color: var(--white);
          padding: 88px 0;
        }
        .how-eyebrow { color: var(--yellow); margin-bottom: 16px; }
        .how-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
          max-width: 520px;
        }
        .how-steps {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .how-step {
          border-top: 2px solid var(--yellow);
          padding-top: 18px;
          display: flex;
          flex-direction: column;
        }
        .how-step-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          -webkit-tap-highlight-color: transparent;
        }
        .how-step-n {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--yellow);
          font-weight: 700;
          display: block;
        }
        .how-step-title {
          margin-top: 12px;
          font-size: 17px;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 700;
          letter-spacing: 0;
        }
        .how-chevron {
          margin-top: 10px;
          color: var(--yellow);
          transition: transform 0.3s ease;
        }
        .how-step.is-open .how-chevron {
          transform: rotate(180deg);
        }
        
        .how-step-content {
          display: grid;
          grid-template-rows: 1fr;
          transition: grid-template-rows 0.3s ease;
        }
        .how-step-text {
          min-height: 0;
          overflow: hidden;
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--light-gray);
          transition: margin-top 0.3s ease, opacity 0.3s ease;
        }

        .how-step.is-mobile .how-step-header {
          cursor: pointer;
        }
        .how-step.is-mobile:not(.is-open) .how-step-content {
          grid-template-rows: 0fr;
        }
        .how-step.is-mobile:not(.is-open) .how-step-text {
          margin-top: 0;
          opacity: 0;
        }

        @media (max-width: 900px) {
          .how-steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .how { padding: 56px 0; }
          .how-steps { grid-template-columns: 1fr; gap: 22px; }
        }
      `}</style>
    </section>
  )
}
