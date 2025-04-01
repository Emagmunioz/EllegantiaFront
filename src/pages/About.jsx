import React from 'react';
import { Link } from 'react-router-dom';
import sobreNosotrosBg from '../assets/pag_sobreNosotros.png';

const About = () => {
  return (
    <div style={{
      backgroundImage: `url(${sobreNosotrosBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative'
    }}>
     
      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        color: '#4A2C1F'
      }}>
        {/* Título */}
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '2.5 rem',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)'
        }}>
          Descubre la Elegancia en Cada Detalle con Ellegantia
        </h1>

        {/* Contenido en dos columnas */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Columna izquierda - Texto principal */}
          <div style={{ flex: 1 }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.7' }}>
                En Ellegantia, tu tienda online de confianza, encontrarás una selección de estores a medida, cortinas, lamas verticales, paneles japoneses y venecianas diseñados para transformar tus espacios con estilo y funcionalidad.
              </p>

              <h2 style={{ 
                margin: '30px 0 15px 0', 
                fontSize: '1.5rem',
                fontWeight: '600',
                borderBottom: '2px solid #4A2C1F',
                paddingBottom: '8px'
              }}>
                ¿Por qué Elegir Ellegantia?
              </h2>

              <ul style={{ 
                paddingLeft: '20px',
                marginBottom: '30px'
              }}>
                <li style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                  <strong>Estores a Medida:</strong> Personaliza tus ventanas con estores de materiales como Screen, perfectos para controlar la insolación, la luz y la privacidad.
                </li>
                <li style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                  <strong>Cortinas de Lamas Verticales:</strong> Ideales para espacios amplios, nuestras cortinas de lamas verticales son una apuesta segura para tus ventanales.
                </li>
                <li style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                  <strong>Paneles Japoneses:</strong> Añade un toque práctico, moderno y minimalista con nuestros paneles japoneses.
                </li>
                <li style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                  <strong>Estores y cortinas de lino:</strong> El lino es perfecto para crear un ambiente acogedor y elegante.
                </li>
              </ul>

              <h2 style={{ 
                margin: '30px 0 15px 0',
                fontSize: '1.5rem',
                fontWeight: '600',
                borderBottom: '2px solid #4A2C1F',
                paddingBottom: '8px'
              }}>
                Calidad y Elegancia al Mejor Precio
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.7' }}>
                Nos enorgullece ofrecer productos de alta calidad que combinan diseño elegante y funcionalidad. Nuestro compromiso es brindarte soluciones a medida que se adapten a tus necesidades y presupuesto.
              </p>
            </div>
          </div>

          {/* Columna derecha - Texto adicional y botón */}
          <div style={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ 
                margin: '0 0 15px 0',
                fontSize: '1.5rem',
                fontWeight: '600',
                borderBottom: '2px solid #4A2C1F',
                paddingBottom: '8px'
              }}>
                Transforma tus Espacios Hoy
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                En Ellegantia encontrarás todo lo que necesitas para crear ambientes únicos y acogedores. Visita nuestra tienda online y descubre por qué somos la elección preferida de quienes buscan elegancia y calidad en productos para el hogar.
              </p>
            </div>

            {/* Botón destacado */}
            <div style={{ 
              textAlign: 'center',
              padding: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <Link
                to="/products"
                style={{
                  padding: '15px 40px',
                  backgroundColor: '#4A2C1F',
                  border: '2px solid #4A2C1F',
                  color: '#F5F5DC',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  borderRadius: '5px',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  display: 'inline-block',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#4A2C1F';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4A2C1F';
                  e.target.style.color = '#F5F5DC';
                }}
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;