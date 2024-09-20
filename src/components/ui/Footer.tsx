import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-8 gap-1">
          {/* Logo and Description */}
          <div className="flex-1  content-center lg:mb-11">
            <h2 className="text-2xl font-bold mb-4">Strength Gear</h2>
            <p className="text-gray-400">
              Your trusted source for premium gym equipment and accessories to
              power your fitness journey.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 md:py-3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#products" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Email: support@strengthgear.com
            </p>
            <p className="text-gray-400 mb-2">Phone: +123 456 7890</p>
            <p className="text-gray-400">123 Gym Street, FitCity, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* Copyright */}
        <div className="mt-10 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Strength Gear. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
