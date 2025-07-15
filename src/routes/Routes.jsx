import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact'; 
import FavoritesPage from "../pages/FavoritesPage";

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
      },
      {
        path: "FavoritesPage",
        element: <FavoritesPage />
      }
    ]
  }
])

export default router