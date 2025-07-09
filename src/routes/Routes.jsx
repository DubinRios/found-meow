import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default router