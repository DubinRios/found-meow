import React, { useState } from 'react';
import './Card.css';
import Boton from '../Boton/Boton';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false)
  

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (props.onFavoriteClick) {
      props.onFavoriteClick();
    }
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
    console.log(props.description.length)
  }

  return (

    <div className='cardCats' onClick={!props.isActive ? props.onClick : handleShowDescription}>
      <div className={`cardCats__frontCard ${!showDescription ? '' : 'hidden'}`}>
        <div className={`cardCats__imgContainer ${props.isActive? 'pointer scaling' : ''}` }>
          <img className='cardCats__image unselectable-img' src={props.url} alt={props.imgRota} />
        </div>
        <h2 className='cardCats__id'>
            {props.id}
        </h2>
        <h4 className='cardCats__temperament'>
            Nací en: {props.temperament}
        </h4>
      </div>

      <div className={`cardCats__reverseCard ${showDescription ? '' : 'hidden'}`} >
        <div className={`${props.isActive? 'pointer' : ''}`}>
          <p>
            {props.description}
          </p>
        </div>
      </div>

      {props.isActive && (
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