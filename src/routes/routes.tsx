import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import CartPage from '../pages/CartPage';
import CheckOut from '../pages/CheckOut';
import ProductDetails from '../pages/ProductDetails';
import ProductManagement from '../pages/ProductManagement';
import PaymentHistory from '../pages/PaymentHistory';

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
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/product-management',
        element: <ProductManagement />,
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
      {
        path: '/payment-history',
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
