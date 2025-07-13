import { useState, useEffect, useCallback, useRef } from "react";
import "./CatsSlider.css";
import Card from '../Card/Card';
import { getCats } from '../../services/catApiServices'; 
import Loader from "../Loader/Loader";

const CatsSlider = () => {
  const [catsData, setCatsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null); // Referencia para el intervalo

  // Función para comenzar el desplazamiento automático
  const startAutoSlide = (direction) => {
    // Limpia cualquier intervalo existente
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Establece un nuevo intervalo
    intervalRef.current = setInterval(() => {
      if (direction === 'prev') {
        setCurrentIndex(prev => (prev === 0 ? catsData.length - 1 : prev - 1));
      } else {
        setCurrentIndex(prev => (prev === catsData.length - 1 ? 0 : prev + 1));
      }
    }, 500); // Ajusta este valor para cambiar la velocidad
  };

  // Función para detener el desplazamiento automático
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

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
      // Limpia el intervalo al desmontar el componente
      stopAutoSlide();
    };
  }, [preloadImages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? catsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === catsData.length - 1 ? 0 : prev + 1));
  };

  // Maneja el inicio del arrastre (tanto ratón como touch)
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  // Maneja el movimiento durante el arrastre (tanto ratón como touch)
  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  // Maneja el fin del arrastre (tanto ratón como touch)
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = startX - currentX;
    const threshold = 50; // Mínimo píxeles para cambiar de slide

    if (dragDistance > threshold) {
      nextSlide(); // Arrastre hacia la izquierda → siguiente slide
    } else if (dragDistance < -threshold) {
      prevSlide(); // Arrastre hacia la derecha → slide anterior
    }
  };

  // Eventos de ratón
  const handleMouseDown = (e) => {
    handleDragStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Eventos táctiles (móvil)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX);
    e.preventDefault(); // Evita el scroll en móvil
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

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
    <div 
      className="slider-container"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-content">
        <button 
          className="side-button" 
          onClick={prevSlide}
          onMouseDown={() => startAutoSlide('prev')}
          onMouseUp={stopAutoSlide}
          onMouseLeave={stopAutoSlide}
          onTouchStart={() => startAutoSlide('prev')}
          onTouchEnd={stopAutoSlide}
          aria-label="Previous cat" 
          aria-hidden="true"
        >
          ⏴
        </button>
        <div className="cards-wrapper">
          {visibleCards.map((index, i) => (
            <div
              key={catsData[index]?.id || index}
              className={`card ${i === 1 ? "active" : "side"}`}
            >
              <Card
                id={catsData[index]?.breeds[0]?.name}
                url={catsData[index]?.url}
                temperament={catsData[index]?.breeds[0]?.origin}
                imgRota={catsData[index]?.imgRota}
                isLoaded={loadedImages[index]}
                onClick={() => {
                  if (i === 0) prevSlide();
                  else if (i === 2) nextSlide();
                }}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
              />
            </div>
          ))}
        </div>
        <button 
          className="side-button" 
          onClick={nextSlide}
          onMouseDown={() => startAutoSlide('next')}
          onMouseUp={stopAutoSlide}
          onMouseLeave={stopAutoSlide}
          onTouchStart={() => startAutoSlide('next')}
          onTouchEnd={stopAutoSlide}
          aria-label="Next cat" 
          aria-hidden="true"
        >
          ⏵
        </button>
      </div>
    </div>
  );
};

export default CatsSlider;