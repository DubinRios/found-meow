import React, { useState } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logoImg from "../../assets/images/logo-found-meow.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query) => {
    console.log('Buscando:', query);
    // Aquí iría la lógica de búsqueda
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImg} alt="Logo de la Empresa" />
      </div>
      
      <div className="header-right">
        <div className="searchbar-container">
          <SearchBar onSearch={handleSearch} />
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
        </div>
      </div>

      {isOpen && (
        <div className="menu-buttons">
          <button className="menu-button">Inicio</button>
          <button className="menu-button">Página en Construcción</button>
          <button className="menu-button">Contacto</button>
        </div>
      )}
    </header>
  );
};

export default Header;