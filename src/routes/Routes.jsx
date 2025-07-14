import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact'; 
import AdoptForm from '../pages/AdoptForm';

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
        path: "AdoptForm",
        element: <AdoptForm />
      }
    ]
  }
])

export default router