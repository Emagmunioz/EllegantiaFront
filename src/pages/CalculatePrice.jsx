import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Estilos para las ventanas emergentes
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F5F5DC', // Fondo beige
    border: '2px solid #4A2C1F', // Borde grano de café
    borderRadius: '10px',
    padding: '20px',
  },
};

const CalculatePriceModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(40); // Ancho inicial de 40 cm
  const [height, setHeight] = useState(60); // Alto inicial de 60 cm
  const [price, setPrice] = useState(null); // Precio calculado

  // Función para abrir la ventana emergente
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar la ventana emergente
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Función para calcular el precio
  const calculatePrice = () => {
    const totalWidth = parseFloat(width) + 20; // Ancho total + 20 cm
    const totalHeight = parseFloat(height);
    const calculatedPrice = (totalWidth * 2.5) * 40; // Fórmula de cálculo
    setPrice(calculatedPrice.toFixed(2)); // Redondea a 2 decimales
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        style={{
          padding: '10px 20px',
          backgroundColor: 'transparent',
          border: '2px solid #4A2C1F',
          color: '#4A2C1F',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Calcular Precio
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Calcula el precio de la cortina</h2>
        <p>Introduce las medidas para calcular el precio.</p>

        {/* Campo para el ancho */}
        <div style={{ marginBottom: '10px' }}>
          <label>Ancho (cm): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        {/* Campo para el alto */}
        <div style={{ marginBottom: '20px' }}>
          <label>Alto (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        {/* Botón para calcular el precio */}
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

        {/* Mostrar el precio calculado */}
        {price !== null && (
          <div style={{ marginTop: '20px' }}>
            <p>Precio calculado: <strong>{price} €</strong></p>
          </div>
        )}

        {/* Botón para comprar (enlace al carrito) */}
        <Link to="/carrito">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#4A2C1F',
              color: '#F5F5DC',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Comprar
          </button>
        </Link>

        {/* Botón para cerrar el modal */}
        <button
          onClick={closeModal}
          style={{
            padding: '10px 20px',
            backgroundColor: 'transparent',
            border: '2px solid #4A2C1F',
            color: '#4A2C1F',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default CalculatePriceModal;