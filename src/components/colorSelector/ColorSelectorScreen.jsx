import React from 'react';
import { Link } from 'react-router-dom';

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="color-selector-container">
      <h3 style={{ color: '#4A2C1F', marginBottom: '15px' }}>Selecciona tu color</h3>
      <div className="color-grid">
        {colors.map(color => (
          <div 
            key={color.id}
            className={`color-card ${selectedColor?.id === color.id ? 'selected' : ''}`}
            onClick={() => onSelectColor(color)}
          >
            <img 
              src={color.image} 
              alt={color.name} 
              className="color-image"
            />
            <div className="color-info">
              <p className="color-name">{color.name}</p>
              <p className="color-ref">Ref: {color.ref}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;