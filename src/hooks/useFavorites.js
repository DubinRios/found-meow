import { useReducer, useEffect } from 'react';
import { favoritesReducer } from './reducers/favoriteReducer';

export const useFavorites = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('catFavorites'));
    dispatch({ type: 'LOAD', payload: savedFavorites });
  }, []);

  useEffect(() => {
    localStorage.setItem('catFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR' });
  };

  return { favorites, toggleFavorite, clearFavorites };
};