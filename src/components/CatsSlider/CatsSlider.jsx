import React, { useState } from "react";
import "./CatsSlider.css";

const cardsData = [
  { id: 1, title: "Card 1", content: "Contenido 1" },
  { id: 2, title: "Card 2", content: "Contenido 2" },
  { id: 3, title: "Card 3", content: "Contenido 3" },
  { id: 4, title: "Card 4", content: "Contenido 4" },
  { id: 5, title: "Card 5", content: "Contenido 5" },
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
            <h2>{cardsData[index].title}</h2>
            <p>{cardsData[index].content}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Siguiente</button>
      </div>
    </div>
  );
}

export default CatsSlider
