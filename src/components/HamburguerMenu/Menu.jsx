import './Menu.css';
import { Link } from 'react-router-dom';


const Menu = ({isOpen, toggleMenu}) => { 
     
    
  return (
    <div>
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

      {isOpen && (
        <div className="menu-buttons">
          <Link to="/" className="menu-button">Inicio</Link>
          <a className="menu-button">Favoritos ♡</a>
          <a className="menu-button">Contáctanos</a> 
        </div>
        
      )}
      </div>
  )
}

export default Menu