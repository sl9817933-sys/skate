// Iconografía lineal estilo plantilla de corte (stencil), un trazo por categoría.

const common = { fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconBoard({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <path d="M4 20c2-6 6-9 12-9s10 3 12 9" />
      <circle cx="9" cy="22" r="2.4" />
      <circle cx="23" cy="22" r="2.4" />
      <path d="M9 19.6h14" />
    </svg>
  )
}

export function IconDeck({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <path d="M5 16c0-6 3-10 11-10s11 4 11 10-3 10-11 10S5 22 5 16Z" />
      <path d="M8 12h16M8 20h16" />
    </svg>
  )
}

export function IconTruck({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <path d="M16 6v8M9 22h14" />
      <path d="M16 14 9 22M16 14l7 8" />
      <circle cx="9" cy="22" r="2.2" />
      <circle cx="23" cy="22" r="2.2" />
    </svg>
  )
}

export function IconWheel({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="3.4" />
    </svg>
  )
}

export function IconBearing({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="4.5" />
      <circle cx="16" cy="6.4" r="1" fill={color} />
      <circle cx="24.2" cy="11.2" r="1" fill={color} />
      <circle cx="24.2" cy="20.8" r="1" fill={color} />
      <circle cx="16" cy="25.6" r="1" fill={color} />
      <circle cx="7.8" cy="20.8" r="1" fill={color} />
      <circle cx="7.8" cy="11.2" r="1" fill={color} />
    </svg>
  )
}

export function IconAccessory({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" stroke={color} {...common}>
      <rect x="7" y="7" width="18" height="18" rx="1.5" />
      <path d="M7 13h18M13 7v18" />
    </svg>
  )
}

export const iconMap = {
  board: IconBoard,
  deck: IconDeck,
  truck: IconTruck,
  wheel: IconWheel,
  bearing: IconBearing,
  accessory: IconAccessory,
}
