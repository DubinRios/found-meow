import React from 'react'
import './Boton.css'

const Boton = ({btnIsActive}) => {
  return (
    <button 
      className='btnAdoptame' 
      disabled={btnIsActive}
    >
      Adóptame <i class="fa-solid fa-paw"></i>
    </button>
  )
}

export default Boton