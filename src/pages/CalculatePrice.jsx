import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ColorSelectorLino from '../components/colorSelector/ColorSelectorScreen';
import ColorSelectorScreen from '../components/colorSelector/ColorSelectorLino';
import MeasureForm from '../components/measureForm/MeasureForm';


  // Función para calcular el precio
  const calculatePrice = () => {
    const totalWidth = parseFloat(width) + 20; // Ancho total + 20 cm
    const totalHeight = parseFloat(height);
    const calculatedPrice = (totalWidth * 2.5) * 40; // Fórmula de cálculo
    setPrice(calculatedPrice.toFixed(2)); // Redondea a 2 decimales
  };

  return (
    
      
       <div>
      
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

        
    </div>
  );


export default CalculatePrice;