export default function FloatingWhatsapp({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="fab" aria-label="Escribir por WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Z" />
        <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" strokeLinecap="round" />
      </svg>

      <style>{`
        .fab {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 60;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--carbon);
          color: var(--yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--yellow);
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .fab:hover { transform: translateY(-2px); background: var(--blue); border-color: var(--blue); color: var(--white); }
      `}</style>
    </a>
  )
}
