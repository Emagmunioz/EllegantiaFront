import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Importa las imágenes
import medidasImage from '../assets/medidas.jpg';
import color1 from '../assets/lino-blanco.jpg';
import color2 from '../assets/lino-humo.jpg';
import color3 from '../assets/lino-saco.jpg';
import color4 from '../assets/lino-beige.webp';
import estoresLino from '../assets/estores-lino.jpg';
import linoArrastre from '../assets/lino-arrastre.jpg';
import panelJapones from '../assets/panel-japones.jpg';
import lamasVerticales from '../assets/lamas-verticales.jpg';
import estoresEnrollables from '../assets/estores-enrollables.jpg';

// Estilos para los modales
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
    width: '80%',
    maxWidth: '500px',
  },
};

const largeModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F5F5DC',
    border: '2px solid #4A2C1F',
    borderRadius: '10px',
    padding: '30px',
    width: '90%',
    maxWidth: '900px',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

const ColorSelectorModal = ({ isOpen, onClose, onAddToCart, productType }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const colors = [
    { id: 1, name: 'Blanco', image: color1, ref: 'C001' },
    { id: 2, name: 'Beige', image: color2, ref: 'C002' },
    { id: 3, name: 'Gris', image: color3, ref: 'C003' },
    { id: 4, name: 'Marrón', image: color4, ref: 'C004' }
  ];

  const handleAddToCart = () => {
    if (selectedColor && width && height) {
      onAddToCart({
        productType,
        color: selectedColor,
        width,
        height,
        price: calculatePrice(width, height)
      });
      onClose();
    }
  };

  const calculatePrice = (width, height) => {
    // Fórmula de cálculo de precio basada en el tipo de producto
    const baseWidth = parseFloat(width) + 20;
    let pricePerUnit = 0;
    
    switch(productType) {
      case 'lino':
        pricePerUnit = 0.55; // 0.35 + 0.2
        break;
      case 'linoArrastre':
        pricePerUnit = 0.70; // 0.45 + 0.25
        break;
      case 'panelJapones':
        pricePerUnit = 0.85; // 0.55 + 0.3
        break;
      case 'lamasVerticales':
        pricePerUnit = 0.95; // 0.6 + 0.35
        break;
      case 'estoresEnrollables':
        pricePerUnit = 0.62; // 0.4 + 0.22
        break;
      default:
        pricePerUnit = 0;
    }
    
    return (baseWidth * pricePerUnit).toFixed(2);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={largeModalStyles}
      contentLabel="Seleccionar color y medidas"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <h2 style={{ color: '#4A2C1F', textAlign: 'center', marginBottom: '20px' }}>
          Configura tu producto
        </h2>
        
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ flex: 1 }}>
            <img
              src={medidasImage}
              alt="Instrucciones de medidas"
              style={{ 
                width: '100%', 
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ color: '#4A2C1F', marginBottom: '15px' }}>
                Selecciona tu color
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px'
              }}>
                {colors.map(color => (
                  <div 
                    key={color.id}
                    style={{
                      border: selectedColor?.id === color.id ? '3px solid #4A2C1F' : '1px solid #ddd',
                      borderRadius: '8px',
                      padding: '10px',
                      cursor: 'pointer',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    <img 
                      src={color.image} 
                      alt={color.name} 
                      style={{
                        width: '100%',
                        borderRadius: '5px',
                        marginBottom: '8px'
                      }} 
                    />
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{color.name}</p>
                      <p style={{ margin: 0, fontSize: '0.9em' }}>Ref: {color.ref}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ color: '#4A2C1F', marginBottom: '15px' }}>
                Especifica las medidas
              </h3>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                    Ancho (cm)
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #4A2C1F'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                    Alto (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #4A2C1F'
                    }}
                  />
                </div>
              </div>
            </div>

            {width && height && (
              <div style={{ 
                backgroundColor: '#E0D8C0',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>
                  Precio estimado: {calculatePrice(width, height)} €
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
              <button
                onClick={onClose}
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'transparent',
                  border: '2px solid #4A2C1F',
                  color: '#4A2C1F',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  flex: 1
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!selectedColor || !width || !height}
                style={{
                  padding: '12px 20px',
                  backgroundColor: selectedColor && width && height ? '#4A2C1F' : '#ccc',
                  color: '#F5F5DC',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: selectedColor && width && height ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  flex: 1
                }}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Products = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    width: 40,
    height: 60,
    price: null
  });

  const [showColorModal, setShowColorModal] = useState(false);
  const [currentProductType, setCurrentProductType] = useState(null);

  const openModal = (type) => {
    setModalState({
      ...modalState,
      isOpen: true,
      type,
      price: null
    });
  };

  const openColorModal = (type) => {
    setCurrentProductType(type);
    setShowColorModal(true);
  };

  const closeModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
      type: null
    });
  };

  const calculatePrice = () => {
    const { width, height, type } = modalState;
    let calculatedPrice;
    
    switch(type) {
      case 'lino':
        calculatedPrice = (parseFloat(width) + 20) * 0.35 + (parseFloat(width) + 20) * 0.2;
        break;
      case 'linoArrastre':
        calculatedPrice = (parseFloat(width) + 20) * 0.45 + (parseFloat(width) + 20) * 0.25;
        break;
      case 'panelJapones':
        calculatedPrice = (parseFloat(width) + 20) * 0.55 + (parseFloat(width) + 20) * 0.3;
        break;
      case 'lamasVerticales':
        calculatedPrice = (parseFloat(width) + 20) * 0.6 + (parseFloat(width) + 20) * 0.35;
        break;
      case 'estoresEnrollables':
        calculatedPrice = (parseFloat(width) + 20) * 0.4 + (parseFloat(width) + 20) * 0.22;
        break;
      default:
        calculatedPrice = 0;
    }
    
    setModalState({
      ...modalState,
      price: calculatedPrice.toFixed(2)
    });
  };

  const getProductTitle = () => {
    switch(modalState.type) {
      case 'lino': return 'Estores de Lino';
      case 'linoArrastre': return 'Lino con Arrastre';
      case 'panelJapones': return 'Panel Japonés';
      case 'lamasVerticales': return 'Lamas Verticales';
      case 'estoresEnrollables': return 'Estores Enrollables';
      default: return 'Producto';
    }
  };

  const handleAddToCart = (product) => {
    console.log('Producto añadido al carrito:', product);
    // Aquí implementarías la lógica para añadir al carrito
  };

  return (
    <div style={{ backgroundColor: '#E0D8C0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#4A2C1F', textAlign: 'center', marginTop: '20px' }}>
        A TU DISPOSICIÓN Y A MEDIDA
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        {/* Tarjeta 1: Estores de Lino */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center' }}>
          <img src={estoresLino} alt="Estores de Lino" style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Estores de Lino</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 33 €</p>
          <button
            onClick={() => openColorModal('lino')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Personalizar
          </button>
          <Link
            to="/estores-lino"
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#4A2C1F',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>

        {/* Tarjeta 2: Lino con Arrastre */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center' }}>
          <img src={linoArrastre} alt="Lino con Arrastre" style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Lino con Arrastre</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 49 €</p>
          <button
            onClick={() => openColorModal('linoArrastre')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Personalizar
          </button>
          <Link
            to="/lino-arrastre"
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#4A2C1F',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>

        {/* Tarjeta 3: Panel Japonés */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center' }}>
          <img src={panelJapones} alt="Panel Japonés" style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Panel Japonés</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 85 €</p>
          <button
            onClick={() => openColorModal('panelJapones')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Personalizar
          </button>
          <Link
            to="/paneles-japoneses"
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#4A2C1F',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>

        {/* Tarjeta 4: Lamas Verticales */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center' }}>
          <img src={lamasVerticales} alt="Lamas Verticales" style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Lamas Verticales</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 66.50 €</p>
          <button
            onClick={() => openColorModal('lamasVerticales')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Personalizar
          </button>
          <Link
            to="/lamas-verticales"
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#4A2C1F',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>

        {/* Tarjeta 5: Estores Enrollables */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center' }}>
          <img src={estoresEnrollables} alt="Estores Enrollables" style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Estores Enrollables</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 36 €</p>
          <button
            onClick={() => openColorModal('estoresEnrollables')}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Personalizar
          </button>
          <Link
            to="/estores-enrollables"
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#4A2C1F',
              textDecoration: 'none',
            }}
          >
            Ver más
          </Link>
        </div>
      </div>

      {/* Modal de cálculo de precio */}
      <Modal
        isOpen={modalState.isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 style={{ color: '#4A2C1F', textAlign: 'center' }}>
          Calcula el precio de {getProductTitle()}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Introduce las medidas para calcular el precio.
        </p>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Ancho (cm sin comas):
          </label>
          <input
            type="number"
            value={modalState.width}
            onChange={(e) => setModalState({...modalState, width: e.target.value})}
            style={{ 
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #4A2C1F'
            }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Alto (cm sin comas. Máx 270):
          </label>
          <input
            type="number"
            value={modalState.height}
            onChange={(e) => setModalState({...modalState, height: e.target.value})}
            style={{ 
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #4A2C1F'
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={calculatePrice}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4A2C1F',
              color: '#F5F5DC',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              minWidth: '150px'
            }}
          >
            Calcular Precio
          </button>
        </div>

        {modalState.price !== null && (
          <div style={{ 
            backgroundColor: '#E0D8C0',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4A2C1F', margin: '0' }}>
              Precio calculado: <strong>{modalState.price} €</strong>
            </h3>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={closeModal}
            style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              border: '2px solid #4A2C1F',
              color: '#4A2C1F',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Cerrar
          </button>
          
          <Link 
            to="/carrito" 
            onClick={closeModal}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4A2C1F',
              color: '#F5F5DC',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Comprar
          </Link>
        </div>
      </Modal>

      {/* Modal de selección de color */}
      <ColorSelectorModal 
        isOpen={showColorModal} 
        onClose={() => setShowColorModal(false)}
        onAddToCart={handleAddToCart}
        productType={currentProductType}
      />
    </div>
  );
};

export default Products;