import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingWhatsapp from './FloatingWhatsapp.jsx';

export default function NotFound() {
  const WHATSAPP_NUMBER = '573132310746';
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20no%20pude%20encontrar%20lo%20que%20buscaba%20en%20el%20cat%C3%A1logo.`;

  return (
    <>
      <Navbar whatsappHref={whatsappHref} />
      
      <section className="not-found-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--carbon)', color: 'var(--white)', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: '20px', color: 'var(--yellow)' }}>404</h1>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Página no encontrada</h2>
        <p style={{ maxWidth: '500px', color: 'var(--light-gray)', marginBottom: '30px' }}>
          Lo sentimos, no pudimos encontrar la página que estás buscando. Es posible que el enlace sea incorrecto o que la página haya sido movida.
        </p>
        <a href="/" className="btn btn-primary">
          Volver al catálogo
        </a>
      </section>

      <Footer />
      <FloatingWhatsapp href={whatsappHref} />
    </>
  );
}
