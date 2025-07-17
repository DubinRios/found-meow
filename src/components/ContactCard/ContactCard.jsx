import { useState } from "react";
import { useForm } from "react-hook-form";
import './ContactCard.css'

const scriptURL = 'https://script.google.com/macros/s/AKfycbxURbRrgJJ42fdUKDwo4WjAgr03GAGv5HSAJzm4qCP_3mPXl6RmqzKYG90RKg5SCZq3/exec';

const ContactCard = () => {

  const [status, setStatus] = useState("");
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(scriptURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Error al enviar');
        } 
        const result = await response.json();
      console.log('respuesta del servidor:', result);
      
      setStatus("success");
      
    } catch (error) {
      console.error('Error:', error.message);
      setStatus("error");
    }
  };

  return (
    <div className="contact-container">
        <section className="contact-info">
      <h4>ATENCIÓN AL CLIENTE</h4>

      <div className="contact-hours">
        <h5>Nuestro horario</h5>
        <p>L-V: 9:00 - 19:30</p>
        <p>S: 10:00 - 16:00</p>
        <p>*Te respondemos durante el día laboral</p>
      </div>

      <div className="contact-phone">
        <h5>Teléfono:</h5>
        <p>+34 600 123 456</p>
      </div>

      <div className="contact-address">
        <h5>Nuestra dirección:</h5>
        <p>C. María Josefa, 27, Centro, 33209 Gijón, Asturias</p>
      </div>
      </section>
      
<section className="contact-section">
        <h4 className="contact-title">CONTÁCTANOS</h4>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "* El nombre es obligatorio" })}
            placeholder="Nombre"
        />
        {errors.name && <p className="input-paragraph">{errors.name.message}</p>}

      <select {...register("category", { required: "* Seleccione una categoría" })}>
        <option value="">Elegir</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        </select>
        {errors.category && <p className="input-paragraph">{errors.category.message}</p>}
        <input {...register("email", { required: "* Email es obligatorio",  pattern: {
            value: /^\S+@\S+$/i,
            message: "* Email no válido",
        },
        })} placeholder="Email"
          />
        {errors.email && <p className="input-paragraph">{errors.email.message}</p>}

      <textarea {...register("message")} placeholder="Describe, si quiere" />
      <p>{status}</p>
      <input type="submit" value="Enviar" />
        </form>
        </section>
    </div>
  )
}

export default ContactCard




