import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Iconos de carrito y usuario
import logo from '../assets/logoVisible.png'; // Importa el logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4A2C1F', fontFamily: "'Playfair Display', serif",
      padding: '0.8rem 1rem' }}>
      <div className="container-fluid">
        {/* Logo y texto "Elegantía estores y cortinas" */}
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo Ellegantia"
            style={{
              width: '55px', // Tamaño del logo
              height: '55px',
              marginRight: '12px', // Espacio entre el logo y el texto
            }}
          />
          <Link to="/" className="navbar-brand" style={{ color: '#FFFFFF', fontSize: '1.4rem', }}>
            Ellegantia estores y cortinas
          </Link>
        </div>

        {/* Botón para colapsar la Navbar en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Contenido de la Navbar (pestañas a la derecha) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto para alinear a la derecha */}
            {/* Pestaña Inicio */}
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: '#FFFFFF' }}>
                Inicio
              </Link>
            </li>

            {/* Pestaña Sobre Nosotros */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: '#FFFFFF' }}>
                Sobre Nosotros
              </Link>
            </li>

            {/* Pestaña Estores y Cortinas */}
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={{ color: '#FFFFFF' }}>
                Estores y Cortinas
              </Link>
            </li>

            {/* Pestaña Contacto */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: '#FFFFFF' }}>
                Contacto
              </Link>
            </li>
          </ul>

          {/* Iconos de carrito y usuario */}
          <div className="d-flex">
            <Link to="/cart" className="nav-link me-3">
              <FaShoppingCart style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de carrito en blanco */}
            </Link>
            <Link to="/user" className="nav-link">
              <FaUser style={{ color: '#FFFFFF', fontSize: '1.5rem' }} /> {/* Icono de usuario en blanco */}
            </Link>
             {/* Botón de Registro */}
             <Link 
              to="/register" 
              className="btn btn-outline-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: '500',
                fontSize: '1.1rem',
                border: '1.5px solid #F5E7D4',
                color: '#F5E7D4',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.3)',
                borderRadius: '4px',
                padding: '6px 18px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#F5E7D4';
                e.target.style.color = '#4A2C1F';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#F5E7D4';
              }}
            >
              Registro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;