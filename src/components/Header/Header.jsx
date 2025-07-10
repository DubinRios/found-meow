import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logoImg from "../../assets/images/logo-found-meow.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query) => {
    console.log('Buscando:', query);
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header" ref={menuRef}>
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
          <button className="menu-button">Favoritos ♡</button>
        </div>
      )}
    </header>
  );
};

export default Header;