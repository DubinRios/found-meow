import './Menu.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const Menu = ({isOpen, toggleMenu}) => { 

  const { theme } = useTheme();
      
  return (
    <div className={`hamburger-menu ${theme}`}>
    <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''} ${theme}`}>
            <div className="circle"></div>
            <div className="lines">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </div>
        
      </div>

      {isOpen && (
        <div className="menu-buttons">
          <Link to="/" className="menu-button">Inicio</Link>
          <Link to="/FavoritesPage" className="menu-button">Favoritos ♡</Link>
          <Link to="/contact" className="menu-button">Contáctanos</Link> 
        </div>
        
      )}
      </div>
  )
}

export default Menu