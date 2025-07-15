// src/components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext'; 
// Importa los íconos específicos de Bootstrap que elegiste
import { BsBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'; 

import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("Valor actual de theme:", theme); // Mantén esta línea para depurar

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {theme === 'light' ? (
        // Icono de LUNA (para cuando el tema actual es CLARO y se quiere cambiar a OSCURO)
        // Usamos BsFillMoonStarsFill para la luna
        <BsFillMoonStarsFill className="theme-toggle__icon theme-toggle__icon--moon" /> 
      ) : (
        // Icono de SOL (para cuando el tema actual es OSCURO y se quiere cambiar a CLARO)
        // Usamos BsBrightnessHighFill para el sol
        <BsBrightnessHighFill className="theme-toggle__icon theme-toggle__icon--sun" /> 
      )}
    </button>
  );
};

export default ThemeToggle;