import React from 'react';

const MeasureForm = ({ width, height, onWidthChange, onHeightChange, price }) => {
  return (
    <div className="measure-form-container">
      <h3 style={{ color: '#4A2C1F', marginBottom: '15px' }}>Especifica las medidas</h3>
      <div className="measure-inputs">
        <div className="measure-group">
          <label className="measure-label">Ancho (cm)</label>
          <input
            type="number"
            value={width}
            onChange={onWidthChange}
            className="measure-input"
          />
        </div>
        <div className="measure-group">
          <label className="measure-label">Alto (cm)</label>
          <input
            type="number"
            value={height}
            onChange={onHeightChange}
            className="measure-input"
          />
        </div>
      </div>

      {price && (
        <div className="price-estimate">
          <p className="price-text">Precio estimado: {price} €</p>
        </div>
      )}

      <button
        className="add-to-cart-btn"
        disabled={!price}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default MeasureForm;