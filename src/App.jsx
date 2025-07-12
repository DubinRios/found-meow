import React from 'react';
import { RouterProvider } from "react-router-dom";
import AppRoutes from './routes/Routes';
import './App.css';
import './index.css'; 

const App = () => {
  return <RouterProvider router={AppRoutes} />;
};

export default App;

