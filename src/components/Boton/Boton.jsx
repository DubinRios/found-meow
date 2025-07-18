import React from 'react'
import './Boton.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Boton = () => {
  const { t } = useTranslation();
  
  return (
    <Link to="/AdoptForm"><button className='btnAdoptame'>{t("Adóptame")} <i class="fa-solid fa-paw"></i></button></Link>
  )
}

export default Boton