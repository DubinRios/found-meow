// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import { ThemeProvider } from './context/ThemeContext/ThemeContext'; // Tu ruta correcta
import ThemeToggle from './components/ThemeToggle/ThemeToggle'; // <-- ¡IMPORTA EL THEMETOGGLE!
import './styles/Styles.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* Puedes renderizar el ThemeToggle aquí, fuera del RouterProvider */}
      <ThemeToggle /> 
      <RouterProvider router={AppRoutes} />
    </ThemeProvider>
  </React.StrictMode>,
);