import { iconMap } from './Icons.jsx'

const palette = ['#FFD100', '#0033A0', '#121212', '#E5E5E5', '#CE1126']

function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}

/**
 * Representa visualmente el modelo de "surtido" sin prometer un diseño exacto:
 * una cuadrícula de piezas del mismo producto en distintos tonos de acento,
 * como si fueran unidades distintas dentro de una misma caja.
 */
export default function AssortmentMosaic({ seed, icon, tiles = 9 }) {
  const Icon = iconMap[icon] || iconMap.board
  const base = hash(seed)

  return (
    <div className="mosaic" role="img" aria-label="Vista de referencia del surtido de diseños">
      {Array.from({ length: tiles }).map((_, i) => {
        const n = base + i * 97
        const bg = n % 5 === 0 ? '#1A1A1A' : '#FFFFFF'
        const fg = palette[(n >> 3) % palette.length]
        const rot = ((n >> 6) % 7) - 3
        return (
          <div
            className="mosaic-tile"
            key={i}
            style={{ background: bg, transform: `rotate(${rot}deg)` }}
          >
            <Icon size={22} color={fg} />
          </div>
        )
      })}
      <style>{`
        .mosaic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--light-gray);
          border: 1px solid var(--light-gray);
          aspect-ratio: 1 / 1;
          width: 100%;
        }
        .mosaic-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
        }
      `}</style>
    </div>
  )
}
