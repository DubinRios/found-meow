import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className='footer'>
          <nav className='footer-nav'> 
              <Link to="/contact">{t("Contacto")}</Link>
              <span className="footer-separator">|</span>
              <a href="">{t("Misión y Visión")}</a>
              <span className="footer-separator">|</span>
              <a href="">{t("T&S")}</a>
          </nav>
          <p className='footer-copyright'>
              &copy; {new Date().getFullYear()} {t("Found Meow. Todos los derechos reservados")}
          
      </p> 
      <LanguageSwitcher />
      
          {/* (© - &copy;) */}
</footer>
  )
}

export default Footer
