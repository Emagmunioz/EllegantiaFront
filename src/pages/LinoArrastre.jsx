import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Importa las imágenes
import cortinasLino from '../assets/pagina-linoArrastre.jpg';
import color1 from '../assets/lino-blanco.webp';
import color2 from '../assets/lino-beige.webp';
import color3 from '../assets/lino-saco.jpg';
import color4 from '../assets/lino-gris.webp';

// Estilos para las ventanas emergentes
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

const CortinasLino = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(60);
  const [price, setPrice] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const calculatePrice = () => {
    const totalWidth = parseFloat(width) + 20;
    const totalHeight = parseFloat(height);
    const calculatedPrice = (totalWidth * 2.5) * 0.4;
    setPrice(calculatedPrice.toFixed(2));
  };

  return (
    <div style={{
      backgroundImage: `url(${cortinasLino})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative'
    }}>
      
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Título */}
        <h1 style={{ 
          color: '#4A2C1F', 
          textAlign: 'center', 
          marginTop: '20px',
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
        }}>
          Cortinas de Lino
        </h1>

        {/* Contenido */}
        <div className="row mt-4">
          <div className="col-md-6">
            <img
              src={cortinasLino}
              alt="Cortinas de Lino"
              style={{ 
                width: '100%', 
                borderRadius: '10px',
                border: '2px solid #4A2C1F',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>

          <div className="col-md-6">
            <div className="row">
              {[
                { src: color1, ref: '001' },
                { src: color2, ref: '002' },
                { src: color3, ref: '003' },
                { src: color4, ref: '004' },
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

        {/* Botón Comprar (solo visible cuando modal cerrado) */}
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

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Calcula el precio de Cortinas de Lino</h2>
        <p>Introduce las medidas para calcular el precio.</p>

        <div style={{ marginBottom: '10px' }}>
          <label>Ancho (cm sin coma): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Alto (cm sin coma. Máx 270): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

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

        {price !== null && (
          <div style={{ marginTop: '20px' }}>
            <p>Precio calculado: <strong>{price} €</strong></p>
          </div>
        )}

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

export default CortinasLino;