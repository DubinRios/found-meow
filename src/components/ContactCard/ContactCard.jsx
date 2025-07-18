import { useState } from "react";
import { useForm } from "react-hook-form";
import './ContactCard.css'
import { useTranslation } from "react-i18next";

const scriptURL = 'https://script.google.com/macros/s/AKfycbxURbRrgJJ42fdUKDwo4WjAgr03GAGv5HSAJzm4qCP_3mPXl6RmqzKYG90RKg5SCZq3/exec';

const ContactCard = () => {

  const getValidationRules = (t) => ({
    name: {
      required: t("form.name_required"),
    },
    category: {
      required: t("form.category_required"),
    },
    email: {
      required: t("form.email_required"),
      pattern: {
        value: /^\S+@\S+$/i,
        message: t("form.email_invalid"),
      },
    }
  });


  const { t } = useTranslation();
  const validation = getValidationRules(t);

  

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
      setStatus("Success");
    }
  };

  return (
    <div className="contact-container">
        <section className="contact-info">
      <h4>{t("ATENCIÓN AL CLIENTE")}</h4>

      <div className="contact-hours">
        <h5>{t("Nuestro horario")}</h5>
        <p>{t("L-V: 9:00 - 19:30")}</p>
        <p>{t("S: 10:00 - 16:00")}</p>
        <p>{t("*Te respondemos durante el día laboral")}</p>
      </div>

      <div className="contact-phone">
        <h5>{t("Teléfono:")}</h5>
        <p>+34 600 123 456</p>
      </div>

      <div className="contact-address">
        <h5>{t("Nuestra dirección:")}</h5>
        <p>C. María Josefa, 27, Centro, 33209 Gijón, Asturias</p>
      </div>
      </section>
      
<section className="contact-section">
        <h4 className="contact-title">{t("CONTÁCTANOS")}</h4>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", validation.name)}
            placeholder="Nombre"
        />
        {errors.name && <p className="input-paragraph">{errors.name.message}</p>}

      <select {...register("category", validation.category)}>
        <option value="">{t("Elegir")}</option>
        <option value="A">{t("Infórmese sobre cómo adoptar un gato")}</option>
        <option value="B">{t("Desea saber cómo puede ayudar a nuestra empresa")}</option>
        <option value="C">{t("Otro")}</option>
        </select>
        {errors.category && <p className="input-paragraph">{errors.category.message}</p>}
        <input {...register("email", validation.email)} placeholder="Email"
          />
        {errors.email && <p className="input-paragraph">{errors.email.message}</p>}

      <textarea {...register("message")} placeholder={("Describe")} />
      <p>{status}</p>
      <input type="submit" value={t("Enviar")} />
        </form>
        </section>
    </div>
  )
}

export default ContactCard




