import React, { useRef, useState, useEffect } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logoImg from "../../assets/images/logo-found-meow.svg"
import logoDark from "../../assets/images/logo-found-meow-light.svg"
import { Link } from 'react-router-dom';
import Menu from '../HamburguerMenu/Menu';
import { useTheme } from '../../context/ThemeContext/ThemeContext';


const Header = () => {
  
  const menuRef = useRef(null); 

  const handleSearch = (query) => {
    console.log('Buscando:', query);
  };

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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

      const { theme } = useTheme();

  return (
    <header className="header" ref={menuRef}>
      <div className="logo-container">
      <Link to="/">
        <img src={theme === 'dark' ? logoDark : logoImg} alt="Logo de la Empresa" />
        </Link>
      </div>
      
      <div className="header-right">
        <div className="searchbar-container">
          <SearchBar onSearch={handleSearch} />
        </div>
        <Menu 
          isOpen={isOpen} 
          toggleMenu={toggleMenu}
        />
        </div>
    </header>
  );
};

export default Header;