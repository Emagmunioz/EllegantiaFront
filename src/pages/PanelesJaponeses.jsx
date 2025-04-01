import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import panelesJaponesesImg from '../assets/pagina-paneles.jpg'; 
import color5 from '../assets/screen-blanco.webp';
import color6 from '../assets/screen-beige.webp';
import color7 from '../assets/screen-gris.webp';
import color8 from '../assets/screen-marron.webp';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F5F5DC',
    border: '2px solid #4A2C1F',
    borderRadius: '10px',
    padding: '20px',
  },
};

const PanelesJaponeses = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(40); // Añadido estado para ancho
  const [height, setHeight] = useState(60); // Añadido estado para alto
  const [price, setPrice] = useState(null); // Añadido estado para precio

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Función para calcular el precio (ejemplo)
  const calculatePrice = () => {
    const totalWidth = parseFloat(width);
    const totalHeight = parseFloat(height);
    const calculatedPrice = (totalWidth * totalHeight / 100) * 1.2; // Fórmula de ejemplo
    setPrice(calculatedPrice.toFixed(2));
  };

  return (
    <div style={{
      backgroundImage: `url(${panelesJaponesesImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative'
    }}>
      
     
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Título con sombra para mejor legibilidad */}
        <h1 style={{ 
          color: '#4A2C1F', 
          textAlign: 'center', 
          marginTop: '20px',
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
        }}>
          Paneles Japoneses
        </h1>

        {/* Contenido de la página */}
        <div className="row mt-4">
          {/* Fotografía grande a la izquierda */}
          <div className="col-md-6">
            <img
              src={panelesJaponesesImg}
              alt="Paneles Japoneses"
              style={{ 
                width: '100%', 
                borderRadius: '10px',
                border: '2px solid #4A2C1F',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>

          {/* 4 fotografías a la derecha */}
          <div className="col-md-6">
            <div className="row">
              {[
                { src: color5, ref: '005' },
                { src: color6, ref: '006' },
                { src: color7, ref: '007' },
                { src: color8, ref: '008' },
              ].map((image, index) => (
                <div className="col-6 mb-3" key={index}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={image.src}
                      alt={`Color ${index + 1}`}
                      style={{ 
                        width: '100%', 
                        borderRadius: '10px',
                        border: '2px solid #4A2C1F',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    <Link to={`/ampliacion/${image.ref}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        color: '#4A2C1F',
                        fontWeight: 'bold'
                      }}
                    >
                      {image.ref}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón "Comprar" - Solo visible cuando el modal está cerrado */}
        {!modalIsOpen && (
          <div className="text-center mt-4">
            <button
              onClick={openModal}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(74, 44, 31, 0.8)',
                border: '2px solid #4A2C1F',
                color: '#F5F5DC',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1em',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#4A2C1F';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(74, 44, 31, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Comprar
            </button>
          </div>
        )}
      </div>

      {/* Ventana emergente mejorada */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Calcula el precio de Paneles Japoneses</h2>
        <p>Introduce las medidas para calcular el precio.</p>

        {/* Campos para medidas */}
        <div style={{ marginBottom: '10px' }}>
          <label>Ancho (cm): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Alto (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        {/* Botón para calcular */}
        <button
          onClick={calculatePrice}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4A2C1F',
            color: '#F5F5DC',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Calcular Precio
        </button>

        {/* Mostrar precio calculado */}
        {price !== null && (
          <div style={{ marginTop: '20px' }}>
            <p>Precio calculado: <strong>{price} €</strong></p>
          </div>
        )}

        {/* Botón para comprar */}
        <Link to="/carrito">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#4A2C1F',
              color: '#F5F5DC',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Comprar
          </button>
        </Link>

        {/* Botón para cerrar */}
        <button
          onClick={closeModal}
          style={{
            padding: '10px 20px',
            backgroundColor: 'transparent',
            border: '2px solid #4A2C1F',
            color: '#4A2C1F',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default PanelesJaponeses;