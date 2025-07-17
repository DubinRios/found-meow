import React from 'react'
import './Boton.css'
import { Link } from 'react-router-dom'

const Boton = () => {
  return (
    <Link to="/AdoptForm"><button className='btnAdoptame'>Adóptame <i class="fa-solid fa-paw"></i></button></Link>
  )
}

export default Boton