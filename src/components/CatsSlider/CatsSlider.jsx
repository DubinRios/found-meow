import React, { useState } from "react";
import "./CatsSlider.css";
import Card from '../Card/Card'

const cardsData = [
  {
    id: 1,
    url: "https://placekitten.com/200/200",
    temperament: "Juguetón",
    imgRota: "gatito 1",
  },
  {
    id: 2,
    url: "https://placekitten.com/201/200",
    temperament: "Curioso",
    imgRota: "gatito 2",
  },
  {
    id: 3,
    url: "https://placekitten.com/202/200",
    temperament: "Tranquilo",
    imgRota: "gatito 3",
  },
  {
    id: 4,
    url: "https://placekitten.com/203/200",
    temperament: "Cariñoso",
    imgRota: "gatito 4",
  },
  {
    id: 5,
    url: "https://placekitten.com/204/200",
    temperament: "Independiente",
    imgRota: "gatito 5",
  },
];

const CatsSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + cardsData.length) % cardsData.length;
    const next = (currentIndex + 1) % cardsData.length;
    return [prev, currentIndex, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="slider-container">
      <div className="cards-wrapper">
        {visibleCards.map((index, i) => (
          <div
            key={cardsData[index].id}
            className={`card ${i === 1 ? "active" : "side"}`}
          >
            <Card
              id={cardsData[index].id}
              url={cardsData[index].url}
              temperament={cardsData[index].temperament}
              imgRota={cardsData[index].imgRota}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

export default CatsSlider
