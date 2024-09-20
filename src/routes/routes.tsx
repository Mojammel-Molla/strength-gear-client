import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import CartPage from '../pages/CartPage';
import CheckOut from '../pages/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/check-out',
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
