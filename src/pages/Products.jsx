import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Importa las imágenes
import estoresLino from '../assets/estores-lino.jpg';
import linoArrastre from '../assets/lino-arrastre.jpg';
import panelJapones from '../assets/panel-japones.jpg';
import lamasVerticales from '../assets/lamas-verticales.jpg';
import estoresEnrollables from '../assets/estores-enrollables.jpg';

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

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState({
    lino: false,
    linoArrastre: false,
    panelesJaponeses: false,
    lamasVerticales: false,
    estoresEnrollables: false,
  });

  // Función para abrir la ventana emergente
  const openModal = (type) => {
    setModalIsOpen({ ...modalIsOpen, [type]: true });
  };

  // Función para cerrar la ventana emergente
  const closeModal = (type) => {
    setModalIsOpen({ ...modalIsOpen, [type]: false });
  };

  return (
    <div style={{ backgroundColor: '#E0D8C0', minHeight: '100vh', padding: '20px' }}>
      {/* Título */}
      <h1 style={{ color: '#4A2C1F', textAlign: 'center', marginTop: '20px' }}>
        A TU DISPOSICIÓN Y A MEDIDA
      </h1>

      {/* Contenedor de las tarjetas */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '40px',
        }}
      >
        {/* Tarjeta 1: Estores de Lino */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={estoresLino} // Usa la imagen importada
            alt="Estores de Lino"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Estores de Lino</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 10 €</p>
          <button
            onClick={() => openModal('lino')}
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
            Calcula tu precio
          </button>
          <Link
            to="/estores-lino"
            className="btn btn-link"
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
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={linoArrastre} // Usa la imagen importada
            alt="Lino con Arrastre"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Lino con Arrastre</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 10 €</p>
          <button
            onClick={() => openModal('linoArrastre')}
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
            Calcula tu precio
          </button>
          <Link
            to="/lino-arrastre"
            className="btn btn-link"
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
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={panelJapones} // Usa la imagen importada
            alt="Panel Japonés"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Panel Japonés</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 10 €</p>
          <button
            onClick={() => openModal('panelJapones')}
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
            Calcula tu precio
          </button>
          <Link
            to="/paneles-japoneses"
            className="btn btn-link"
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
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={lamasVerticales} // Usa la imagen importada
            alt="Lamas Verticales"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Lamas Verticales</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 10 €</p>
          <button
            onClick={() => openModal('lamasVerticales')}
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
            Calcula tu precio
          </button>
          <Link
            to="/lamas-verticales"
            className="btn btn-link"
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
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={estoresEnrollables} // Usa la imagen importada
            alt="Estores Enrollables"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: '#4A2C1F', marginTop: '10px' }}>Estores Enrollables</h3>
          <p style={{ color: '#4A2C1F' }}>Desde 10 €</p>
          <button
            onClick={() => openModal('estoresEnrollables')}
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
            Calcula tu precio
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

      {/* Ventanas emergentes */}
      <Modal
        isOpen={modalIsOpen.lino}
        onRequestClose={() => closeModal('lino')}
        style={customStyles}
      >
        <h2>Calcula el precio de Estores de Lino</h2>
        <p>Introduce las medidas para calcular el precio.</p>
        <button onClick={() => closeModal('lino')}>Cerrar</button>
      </Modal>

      <Modal
        isOpen={modalIsOpen.linoArrastre}
        onRequestClose={() => closeModal('linoArrastre')}
        style={customStyles}
      >
        <h2>Calcula el precio de Lino con Arrastre</h2>
        <p>Introduce las medidas para calcular el precio.</p>
        <button onClick={() => closeModal('linoArrastre')}>Cerrar</button>
      </Modal>

      <Modal
        isOpen={modalIsOpen.panelJapones}
        onRequestClose={() => closeModal('panelJapones')}
        style={customStyles}
      >
        <h2>Calcula el precio de Paneles Japoneses</h2>
        <p>Introduce las medidas para calcular el precio.</p>
        <button onClick={() => closeModal('panelJapones')}>Cerrar</button>
      </Modal>

      <Modal
        isOpen={modalIsOpen.lamasVerticales}
        onRequestClose={() => closeModal('lamasVerticales')}
        style={customStyles}
      >
        <h2>Calcula el precio de Lamas Verticales</h2>
        <p>Introduce las medidas para calcular el precio.</p>
        <button onClick={() => closeModal('lamasVerticales')}>Cerrar</button>
      </Modal>

      <Modal
        isOpen={modalIsOpen.estoresEnrollables}
        onRequestClose={() => closeModal('estoresEnrollables')}
        style={customStyles}
      >
        <h2>Calcula el precio de Estores Enrollables</h2>
        <p>Introduce las medidas para calcular el precio.</p>
        <button onClick={() => closeModal('estoresEnrollables')}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Products;