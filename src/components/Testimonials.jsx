import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5">
      <h2>Nuestros Clientes Opinan...</h2>
      <div className="row">
        <div className="col-md-4">
          <blockquote>
            "¡Quedé maravillada con mi experiencia en Elegantia!"
            <footer>María G. - Madrid</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote>
            "La atención al cliente fue excelente."
            <footer>Javier L. - Barcelona</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote>
            "Mi hogar ahora es más cómodo y elegante."
            <footer>Sofía R. - Valencia</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;