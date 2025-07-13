import { createBrowserRouter } from "react-router-dom";
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