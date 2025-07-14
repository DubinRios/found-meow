import React, { useState } from 'react';
import Confirm from './Confirm';
import './Form.css';

const Form = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{7,15}$/;

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'Nombre y apellido requeridos';
    } else if (!nombreRegex.test(formulario.nombre.trim())) {
      nuevosErrores.nombre = 'Nombre inválido';
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = 'Correo electrónico requerido';
    } else if (!correoRegex.test(formulario.correo.trim())) {
      nuevosErrores.correo = 'Correo inválido';
    }

    if (!formulario.telefono.trim()) {
      nuevosErrores.telefono = 'Teléfono requerido';
    } else if (!telefonoRegex.test(formulario.telefono.trim())) {
      nuevosErrores.telefono = 'Teléfono inválido';
    }

    return nuevosErrores;
  };

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length === 0) {
      setErrores({});
      setEnviado(true);
    } else {
      setErrores(erroresValidacion);
    }
  };

  if (enviado) return <Confirm />;

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2 className="formulario__titulo">Formulario de adopción </h2>

      <div className="formulario__contenedor">
        <div className="formulario__grupo">
          Nombre y Apellido:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            className="formulario__input"
          />
          {errores.nombre && <p className="formulario__error">{errores.nombre}</p>}
        </div>

        <div className="formulario__grupo">
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            className="formulario__input"
          />
          {errores.correo && <p className="formulario__error">{errores.correo}</p>}
        </div>

        <div className="formulario__grupo">
          Número de Teléfono:
          <input
            type="text"
            name="telefono"
            value={formulario.telefono}
            onChange={handleChange}
            className="formulario__input"
          />
          {errores.telefono && <p className="formulario__error">{errores.telefono}</p>}
        </div>

        <div className="formulario__grupo">
          Mensaje (opcional):
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            className="formulario__textarea"
          />
        </div>
      </div>

      <button type="submit" className="formulario__boton">
        Enviar formulario <i class="fa-solid fa-paw"></i>
      </button>
    </form>
  );
};

export default Form;
