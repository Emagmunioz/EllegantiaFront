import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section text-center py-5" style={{ backgroundImage: 'url(/assets/salonIA.png)' }}>
      <h1>ELEGANCIA Y SENCILLEZ A TU ALCANCE</h1>
      <p>TRABAJAMOS PARA TRANSFORMAR TU ESPACIO CON ELEGANCIA Y FUNCIONALIDAD.</p>
      <button className="btn btn-primary">CONTÁCTANOS</button>
    </section>
  );
};

export default HeroSection;