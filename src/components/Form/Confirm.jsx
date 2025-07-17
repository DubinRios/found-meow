import React from 'react';
import './Confirm.css';

const Confirm = () => {
  return (
    <div className="formulario formulario--confirmacion">
      <h2 className="formulario__titulo">¡Perfecto!</h2>
      <p className="formulario__mensaje">
        Nos alegra que desees adoptar este michi, muy pronto nos pondremos en contacto contigo.
      </p>
    </div>
  );
};

export default Confirm;
