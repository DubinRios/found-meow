import React from 'react'
import './Card.css'
import Boton from '../Boton/Boton'

const Card = (props) => {
  return (
    <div className='cardCats' onClick={props.onClick}>
      <div className='prueba'>
        <div className='imgContainer'>
            <img src={props.url} alt={props.imgRota} className='unselectable-img' />
        </div>
        <h2>
            {props.id}
        </h2>
        <h4>
            Nací en: {props.temperament}
        </h4>
      </div>

        <Boton 
          isActive={props.btnIsActive}
        />
    </div>
  )
}

export default Card