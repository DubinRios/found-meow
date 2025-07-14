import React from 'react'
import './Card.css'
import Boton from '../Boton/Boton'

const Card = (props) => {
  return (

    <div className='cardCats'>
      <div>
        <div className='imgContainer'>
            <img className='imgContainer_cats' src={props.url} alt={props.imgRota} />
        </div>
        <h2 class='cardCats_id'>
            {props.id}
        </h2>
        <h4 class='cardCats_temperament'>
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