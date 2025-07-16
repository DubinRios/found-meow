// src/context/ThemeContext/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react'; // <-- ¡IMPORTACIONES CORRECTAS DE REACT!

// 1. Crear el contexto
// ThemeContext se CREA y se EXPORTA AQUÍ. No se importa de ningún otro archivo.
export const ThemeContext = createContext();

// 2. Crear el componente proveedor (Provider)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crear un Hook personalizado para un uso más fácil del contexto
// Este hook 'useTheme' se DEFINE y se EXPORTA AQUÍ.
export const useTheme = () => {
  const context = useContext(ThemeContext); // Usa useContext de React y el ThemeContext creado arriba
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};