// src/components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext'; 

import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {theme === 'light' ? (
        // Icono de LUNA (para cuando el tema actual es CLARO y se quiere cambiar a OSCURO)
        <svg
          className="theme-icon moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Icono de SOL (para cuando el tema actual es OSCURO y se quiere cambiar a CLARO)
        <svg
          className="theme-icon sun-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm0 18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zM19.485 5.515a.5.5 0 0 1 .354-.854l1.414-1.414a.5.5 0 0 1 .707.707l-1.414 1.414a.5.5 0 0 1-.854-.354zM4.515 19.485a.5.5 0 0 1-.354.854l-1.414 1.414a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .854.354zM2.5 12a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm18 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM5.515 4.515a.5.5 0 0 1 .854-.354l1.414 1.414a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 1-.354-.854zM18.485 18.485a.5.5 0 0 1 .354.854l1.414 1.414a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 1-.854-.354zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;