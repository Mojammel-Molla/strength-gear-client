import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGetAllCartQuery } from '../../redux/api/baseApi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, error, isLoading } = useGetAllCartQuery({});
  const cart = data?.data || [];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/product-management"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Product Management
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Cart <sup className="text-green-500 font-bold">{cart.length}</sup>
      </NavLink>

      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        About Us
      </NavLink>
    </>
  );
  return (
    <nav className="bg-gray-900 text-white shadow-lg md:h-20 content-center z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold italic">
            <Link to="/">Strength Gear</Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links - Hidden on Mobile */}
          <div className="hidden lg:flex space-x-6">{navlinks}</div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden z-10">
            <div className="flex flex-col space-y-2 pb-4">
              <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/product-management"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Product Management
              </Link>

              <Link
                to="/cart"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Cart
              </Link>
              <NavLink
                to="/about-us"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
