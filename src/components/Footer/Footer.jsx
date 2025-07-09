import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
          <nav className='footer-nav'> 
              <a href="">Contacto</a> |
              <a href=""> Misión y Visión</a> |
              <a href=""> T&S</a>
          </nav>
          <p className='footer-copyright'>
              &copy; {new Date().getFullYear()} Found Meow. Todos los derechos reservados
          
          </p> 
          {/* (© - &copy;) */}
</footer>
  )
}

export default Footer
