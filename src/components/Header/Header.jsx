import React, { useState } from 'react';
import './Header.css';
import logoImg from "../../assets/images/logo-found-meow.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImg} alt="Logo de la Empresa" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`}>

          <div className="circle"></div>
      
          <div className="lines">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>

          </div>
        </div>
        {isOpen && (
          <div className="menu-buttons">
            <button className="menu-button">Inicio</button>
            <button className="menu-button">Página en Construcción</button>
            <button className="menu-button">Contacto</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;