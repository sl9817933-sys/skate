import { useState, useEffect, useRef } from 'react'

export default function BrandVideo({ youtubeId, title = 'Conoce la marca' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)

  // Solo cargar el iframe cuando el usuario llegue cerca de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // empieza a cargar 200px antes de ser visible
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=0`
  // Thumbnail de YouTube — carga sin JS de YouTube, muy ligero
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`

  return (
    <section className="brandvid" aria-label="Video de la marca">
      <div className="container brandvid-inner">
        <div className="brandvid-head">
          <p className="eyebrow brandvid-eyebrow">Conoce la marca</p>
          <h2 className="brandvid-title">Así se ve la línea<br />que estás comprando.</h2>
          <p className="brandvid-copy">
            Un vistazo rápido a la marca detrás de este lote: estilo,
            calidad de construcción y espíritu de la gráfica. El surtido
            que recibes sale de esta misma línea de producto.
          </p>
        </div>

        <div className="brandvid-frame reg-corners" ref={containerRef}>
          {isVisible ? (
            <iframe
              src={src}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
              style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
            />
          ) : (
            /* Placeholder thumbnail ligero hasta que el iframe sea necesario */
            <div className="brandvid-placeholder" aria-hidden="true">
              <img
                src={thumb}
                alt=""
                loading="lazy"
                width="560"
                height="315"
              />
              <span className="brandvid-play-icon">▶</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .brandvid {
          background: var(--off-white);
          padding: 88px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .brandvid-inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: center;
        }
        .brandvid-eyebrow { color: var(--blue); margin-bottom: 16px; }
        .brandvid-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
        }
        .brandvid-copy {
          margin-top: 18px;
          color: var(--dark-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }
        .brandvid-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--carbon);
          overflow: hidden;
        }
        .brandvid-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .brandvid-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--carbon);
          overflow: hidden;
        }
        .brandvid-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }
        .brandvid-play-icon {
          position: absolute;
          font-size: 42px;
          color: var(--white);
          opacity: 0.9;
          pointer-events: none;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }

        @media (max-width: 900px) {
          .brandvid-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .brandvid { padding: 56px 0; }
        }
      `}</style>
    </section>
  )
}
