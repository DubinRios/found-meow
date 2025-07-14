import React, { useState, useEffect, useCallback } from "react";
import "./CatsSlider.css";
import Card from '../Card/Card';
import { getCats } from '../../services/catApiServices'; 
import Loader from "../Loader/Loader";

const CatsSlider = () => {
  const [catsData, setCatsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [transition, setTransition] = useState(false);


  const preloadImages = useCallback((cats) => {
    const newLoadedImages = {};
    
    cats.forEach((cat, index) => {
      const img = new Image();
      img.src = cat.url;
      img.onload = () => {
        newLoadedImages[index] = true;
        setLoadedImages(prev => ({...prev, [index]: true}));
      };
      img.onerror = () => {
        newLoadedImages[index] = false;
      };
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchCats = async () => {
      setIsLoading(true);
      try {
        const cats = await getCats();
        if (isMounted) {
          setCatsData(cats);
          preloadImages(cats);
        }
      } catch (error) {
        console.error("Error fetching cats:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCats();

    return () => {
      isMounted = false;
    };
  }, [preloadImages]);

  const navigate = (direction) => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      setCurrentIndex(prev => 
        direction === 'next' 
          ? (prev === catsData.length - 1 ? 0 : prev + 1)
          : (prev === 0 ? catsData.length - 1 : prev - 1)
      );
    }, 500);
  };

  const prevSlide = () => navigate('prev');
  const nextSlide = () => navigate('next');

  const getVisibleCards = useCallback(() => {
    const prev = (currentIndex - 1 + catsData.length) % catsData.length;
    const next = (currentIndex + 1) % catsData.length;
    return [prev, currentIndex, next];
  }, [currentIndex, catsData.length]);

  if (isLoading || catsData.length === 0) {
    return <Loader />;
  }

  const visibleCards = getVisibleCards();

  return (
    <div className="slider-container">
      <div className="slider-content">
        <button className="side-button" onClick={prevSlide} aria-label="Previous cat">⏴</button>
        <div className={`cards-wrapper ${transition ? 'transition-active' : ''}`}>
          {visibleCards.map((index, i) => (
            <div
              key={catsData[index]?.id || index}
              className={`card ${i === 1 ? 'center' : i === 0 ? 'left' : 'right'}`}
            >
              <Card
                id={catsData[index]?.breeds[0]?.name}
                url={catsData[index]?.url}
                temperament={catsData[index]?.breeds[0]?.origin}
                imgRota={catsData[index]?.imgRota}
                isLoaded={loadedImages[index]}
              />
            </div>
          ))}
        </div>
        <button className="side-button" onClick={nextSlide} aria-label="Next cat">⏵</button>
      </div>
    </div>
  );
};

export default CatsSlider;
