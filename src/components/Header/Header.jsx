import React, { useState } from 'react';
import './Header.css';
import logoImg from "../../assets/images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="Logo de la Empresa" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
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