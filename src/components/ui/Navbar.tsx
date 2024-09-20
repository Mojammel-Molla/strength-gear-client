import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = (
    <>
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>
      <Link to="/products" className="hover:text-gray-300">
        Products
      </Link>
      <Link to="/product-management" className="hover:text-gray-300">
        Product Management
      </Link>
      <Link to="/product-details" className="hover:text-gray-300">
        Product Details
      </Link>
      <Link to="/cart" className="hover:text-gray-300">
        Cart
      </Link>
      <Link to="/checkout" className="hover:text-gray-300">
        Checkout
      </Link>
      <Link to="/about-us" className="hover:text-gray-300">
        About Us
      </Link>
    </>
  );
  return (
    <nav className="bg-gray-900 text-white shadow-lg md:h-20 content-center">
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
          <div className="lg:hidden">
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
                to="/product-details"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Product Details
              </Link>
              <Link
                to="/cart"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Cart
              </Link>
              <Link
                to="/checkout"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Checkout
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
