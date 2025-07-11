import React from 'react'
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import CatsSlider from '../components/CatsSlider/CatsSlider'
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

export default router