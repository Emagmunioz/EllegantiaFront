import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorSelector from '../components/colorSelector/ColorSelectorScreen';
import MeasureForm from '../components/measureForm/MeasureForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importar imágenes
import medidasImage from '../assets/medidas.jpg';
import color1 from '../assets/lino-blanco.webp';
import color2 from '../assets/lino-gris.webp';
import color3 from '../assets/lino-saco.jpg';
import color4 from '../assets/lino-beige.webp';

const EstoresEnrollables = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [price, setPrice] = useState(null);

  const colors = [
    { id: 1, name: 'Blanco', image: color1, ref: 'C001' },
    { id: 2, name: 'Beige', image: color2, ref: 'C002' },
    { id: 3, name: 'Gris', image: color3, ref: 'C003' },
    { id: 4, name: 'Marrón', image: color4, ref: 'C004' }
  ];

  const calculatePrice = (w, h) => {
    const baseWidth = parseFloat(w) + 20;
    const calculatedPrice = (baseWidth * 0.62).toFixed(2);
    setPrice(calculatedPrice);
    return calculatedPrice;
  };

  return (
    <div>
      <Navbar />
      <div className="product-page">
        <h1>Estores Enrollables</h1>
        
        <div className="product-configurator">
          <div className="color-section">
            <ColorSelector 
              colors={colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />
          </div>
          
          <div className="measure-section">
            <MeasureForm 
              width={width}
              height={height}
              onWidthChange={(e) => {
                setWidth(e.target.value);
                calculatePrice(e.target.value, height);
              }}
              onHeightChange={(e) => {
                setHeight(e.target.value);
                calculatePrice(width, e.target.value);
              }}
              price={price}
            />
          </div>
          
          <div className="instructions-section">
            <img src={medidasImage} alt="Instrucciones de medidas" />
            <div className="instructions-text">
              <h3>Instrucciones para medir</h3>
              <ol>
                <li>Mide el ancho del hueco donde irá el estor</li>
                <li>Mide la altura deseada</li>
                <li>Especifica si quieres instalación interior o exterior</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EstoresEnrollables;