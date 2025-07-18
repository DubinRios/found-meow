import { useEffect, useState } from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import { getSingleCat } from '../../services/catApiServices';
import { useFavorites } from '../../hooks/useFavorites';
import { useTranslation } from 'react-i18next';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [favoriteCats, setFavoriteCats] = useState([]);
    const { t } = useTranslation();

  useEffect(() => {
    const loadFavoriteCats = async () => {
      try {
        const catsData = await Promise.all(
          favorites.map(id => getSingleCat(id))
        );
        setFavoriteCats(catsData);
      } catch (error) {
        console.error('Error loading favorite cats:', error);
      }
    };

    if (favorites.length > 0) {
      loadFavoriteCats();
    } else {
      setFavoriteCats([]);
    }
  }, [favorites]);

  return (
    <div className="cards-fav">
      {favoriteCats.length === 0 ? (
        <h3>{t("No tienes ningún gato favorito aún.")}</h3>
      ) : (
        [...favoriteCats].reverse().map(cat => (
          <Card
            key={cat.id}
            id={cat.breeds[0]?.name}
            url={cat.url}
            temperament={cat.breeds[0]?.origin}
            isLoaded={true}
            onClick={() => {}}
            showFavorite={true}
            isFavorite={favorites.includes(cat.id)}
            onFavoriteClick={() => toggleFavorite(cat.id)}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
