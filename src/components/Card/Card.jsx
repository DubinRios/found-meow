import React from 'react'
import './Card.css'
import Boton from '../Boton/Boton'

const Card = (props) => {
  return (
    <div className='cardCats'>
      <div className='prueba'>
        <div className='imgContainer'>
            <img src={props.url} alt={props.imgRota} />
        </div>
        <h2>
            {props.id}
        </h2>
        <h4>
            Nací en: {props.temperament}
        </h4>
      </div>

        <Boton />
    </div>
  )
}

export default Card