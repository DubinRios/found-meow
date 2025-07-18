import React from 'react';
import './Confirm.css';
import { useTranslation } from 'react-i18next';

const Confirm = () => {

  const { t } = useTranslation();

  return (
    <div className="formulario formulario--confirmacion">
      <h2 className="formulario__titulo">{t("¡Perfecto!")}</h2>
      <p className="formulario__mensaje">
        {t("Nos alegra que desees adoptar este michi, muy pronto nos pondremos en contacto contigo.")}
      </p>
    </div>
  );
};

export default Confirm;
