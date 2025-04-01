import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Iconos de redes sociales

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#4A2C1F', color: '#FFFFFF', padding: '20px 0', textAlign: 'center' }}>
      <div className="container">
        {/* Iconos de redes sociales */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://wa.me/1234567890" // Reemplaza con tu enlace de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaWhatsapp style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de WhatsApp en blanco */}
          </a>
          <a
            href="https://facebook.com" // Reemplaza con tu enlace de Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaFacebook style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de Facebook en blanco */}
          </a>
          <a
            href="https://instagram.com" // Reemplaza con tu enlace de Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaInstagram style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de Instagram en blanco */}
          </a>
          <a
            href="https://tiktok.com" // Reemplaza con tu enlace de TikTok
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaTiktok style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de TikTok en blanco */}
          </a>
        </div>

        {/* Texto de derechos de autor */}
        <p className="mb-0" style={{ color: '#FFFFFF' }}>
          © 2023 Ellegantia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;