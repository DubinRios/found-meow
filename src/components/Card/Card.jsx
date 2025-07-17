import React, { useState } from 'react';
import './Card.css';
import Boton from '../Boton/Boton';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (props.onFavoriteClick) {
      props.onFavoriteClick();
    }
  };

  return (
<<<<<<< HEAD
    <div className='cardCats' onClick={props.onClick}>
      <div>
        <div className='imgContainer'>
          <img src={props.url} alt={props.imgRota} className='unselectable-img' />
=======

    <div className='cardCats'>
      <div>
        <div className='cardCats__imgContainer'>
          <img className='cardCats__image' src={props.url} alt={props.imgRota} />
>>>>>>> 0be16c56fa2cab6a321b028e8f5015f12e8a0e23
        </div>
        <h2 class='cardCats__id'>
            {props.id}
        </h2>
        <h4 class='cardCats__temperament'>
            Nací en: {props.temperament}
        </h4>
      </div>

      {props.showFavorite && (
        <div 
          className="heart-icon"
          onClick={handleFavoriteClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <i className={
            props.isFavorite
              ? "fa-solid fa-heart text-red-500"
              : isHovered
                ? "fa-solid fa-heart text-red-300"
                : "fa-solid fa-heart text-gray-300"
          }/>
        </div>
      )}

      <Boton isActive={props.btnIsActive} />
    </div>
  );
};

export default Card;