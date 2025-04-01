import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoVisible.png'; // Importa el logo
import homeBg from '../assets/salonIA.png'; // Importa la fotografía de fondo

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`, // Fotografía de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ocupa toda la altura de la pantalla
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%', // Espaciado a la izquierda
        color: '#4A2C1F', // Color grano de café
        fontFamily: 'Georgia, serif', // Fuente Georgia
        position: 'relative', // Para posicionar el logo de manera absoluta
      }}
    >
      
      {/* Texto "Elegancia a tu alcance" */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
        Elegancia a tu alcance
      </h2>

      {/* Texto "TRABAJAMOS PARA TRANSFORMAR TU ESPACIO CON ELEGANCIA Y SENCILLEZ" */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
       TRANSFORMA TU ESPACIO CON ELEGANCIA Y SENCILLEZ !!
      </h1>

      {/* Botón "Ver más" */}
      <Link
        to="/about"
        style={{
          padding: '10px 20px',
          backgroundColor: 'transparent',
          border: '2px solid #4A2C1F', // Borde grano de café
          color: '#4A2C1F', // Texto grano de café
          textDecoration: 'none',
          fontSize: '1rem',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#4A2C1F'; // Fondo grano de café al hacer hover
          e.target.style.color = '#fff'; // Texto blanco al hacer hover
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent'; // Fondo transparente al salir
          e.target.style.color = '#4A2C1F'; // Texto grano de café al salir
        }}
      >
        Ver más
      </Link>
    </div>
  );
};

export default Home;