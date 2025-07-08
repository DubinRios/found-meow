import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div
        className='cardCats'
        style={{backgroundColor: props.color}}>
        <img src={props.url} alt={props.imgRota} />
        <h2>
            {props.id}
        </h2>
        <div className='h3'>
            <h3>
                Raza: {props.name}
            </h3>
            <h3>
                Personalidad: {props.temperament}
            </h3>
        </div>
        <p>
            <strong>Un poco sobre {props.id}</strong>: {props.description}
        </p>
    </div>
  )
}

export default Card