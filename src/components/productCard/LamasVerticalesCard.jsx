import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import lamasVerticales from '../../assets/lamasVerti.jpg';

const LamasVerticalesCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 product-card" style={{
      border: 'none',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}>
      {/* Imagen con título superpuesto */}
      <div className="card-image-container" style={{ position: 'relative' }}>
        <Card.Img 
          variant="top" 
          src={estoresGaleria} 
          alt="Lamas Verticales Screen"
          style={{
            height: '200px',
            objectFit: 'cover',
            width: '100%'
          }}
        />
        <div className="card-title-overlay" style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          padding: '15px',
          color: 'white'
        }}>
          <h3 className="mb-0">Lamas Verticales Screen</h3>
        </div>
      </div>

      <Card.Body className="d-flex flex-column" style={{ padding: '1.25rem' }}>
        {/* Subtítulo con precio */}
        <Card.Text className="text-center mb-3" style={{
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#4A2C1F'
        }}>
          Desde 60 €
        </Card.Text>

        {/* Botones */}
        <div className="d-grid gap-2 mt-auto">
          <Button 
            variant="outline-dark" 
            onClick={() => navigate('/lamas-verticales')}
            style={{
              borderRadius: '4px',
              fontWeight: '500'
            }}
          >
            Saber más
          </Button>
          <Button 
            variant="dark"
            onClick={() => navigate('/calculate-price?product=lamas-verticales')}
            style={{
              backgroundColor: '#4A2C1F',
              borderColor: '#4A2C1F',
              borderRadius: '4px',
              fontWeight: '500'
            }}
          >
            Comprar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LamasVerticalesCard;