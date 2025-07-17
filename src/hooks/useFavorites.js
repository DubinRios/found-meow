import { useReducer, useEffect } from 'react';
import { favoritesReducer } from './reducers/favoritesReducer.js';

const initFavorites = () => {
  try {
    const saved = JSON.parse(localStorage.getItem('catFavorites'));
    return saved || [];
  } catch (error) {
    console.error("Error loading favorites:", error);
    return [];
  }
};

export const useFavorites = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], initFavorites);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('catFavorites')) || [];
      dispatch({ type: 'LOAD', payload: saved });
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('catFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  return { favorites, toggleFavorite };
};