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
    <div className='cardCats' onClick={props.onClick}>
      <div>
        <div className='imgContainer'>
          <img src={props.url} alt={props.imgRota} className='unselectable-img' />
        </div>
        <h2>{props.id}</h2>
        <h4>Nací en: {props.temperament}</h4>
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