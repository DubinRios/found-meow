import React, { useState, useEffect } from "react";
import "./CatsSlider.css";
import Card from '../Card/Card'
import { getCats } from '../../services/catApiServices'; 

const CatsSlider = () => {
  const [catsData, setCatsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getCats();
      setCatsData(cats);
    };
    fetchCats();
    console.log(catsData[0])
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? catsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === catsData.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + catsData.length) % catsData.length;
    const next = (currentIndex + 1) % catsData.length;
    return [prev, currentIndex, next];
  };

    if (catsData.length === 0) {
    return <p>Cargando gatitos...</p>;
  }

  const visibleCards = getVisibleCards();

  return (
  <div className="slider-container">
    <div className="slider-content">
      <button className="side-button" onClick={prevSlide}>⏴</button>
      <div 
        className="cards-wrapper"
      >
        {visibleCards.map((index, i) => (
          <div
            key={catsData[index].id}
            className={`card ${i === 1 ? "active" : "side"}`}
          >
            <Card
              id={catsData[index].breeds[0].name}
              url={catsData[index].url}
              temperament={catsData[index].breeds[0].origin}
              imgRota={catsData[index].imgRota}
            />
          </div>
        ))}
      </div>
      <button className="side-button" onClick={nextSlide}>⏵</button>
    </div>
  </div>
);
};

export default CatsSlider
