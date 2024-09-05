import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-00">
              E-Commerce
            </a>
          </div>

          {/* Primary navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/shop" className="text-gray-800 hover:text-gray-600">
              Shop
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
            <a href="/cart" className="text-gray-800 hover:text-gray-600">
              Cart
            </a>
          </div>

          {/* User actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Login
            </a>
          
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/shop"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600"
          >
            Shop
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600"
          >
            Contact
          </a>
          <a
            href="/cart"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600"
          >
            Cart
          </a>
          <a
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
