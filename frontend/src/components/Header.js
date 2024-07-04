import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ietlogo from '../Ietlogo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest('nav') && !event.target.closest('button')) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="bg-green-100 shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={ietlogo} alt="College Logo" className="h-10 mx-5" />
          </Link>
        </div>
        <nav className="flex-1 text-center hidden md:block">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/academics" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300">
                Academics
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300">
                IET Store
              </a>
            </li>
            <li>
              <a href="https://alumni-speak.iethub.org/" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300" target="_blank" rel="noopener noreferrer">
                Alumni
              </a>
            </li>
            <li>
              <a href="https://iethub.org/clubs" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300" target="_blank" rel="noopener noreferrer">
                Clubs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300">
                Events
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link to="/login" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300">
            Log In
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-black hover:bg-gray-200 hover:ring-2 hover:ring-green-400 p-2 rounded transition duration-300">
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleClick} className="text-gray-600 hover:text-black">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
  <nav className="md:hidden bg-gray-300 w-full absolute top-16 left-0 right-0 z-40">
    <ul className="flex flex-col items-center space-y-4 py-4">
      <li>
        <Link
          to="/academics"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Academics
        </Link>
      </li>
      <li>
        <a
          href="#"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          IET Store
        </a>
      </li>
      <li>
        <a
          href="https://alumni-speak.iethub.org/"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alumni
        </a>
      </li>
      <li>
        <a
          href="https://iethub.org/clubs"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clubs
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Events
        </a>
      </li>
      <li>
        <Link
          to="/login"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Log In
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          onClick={handleMenuItemClick}
          className="text-gray-600 hover:text-black hover:bg-green-200 hover:border hover:border-gray-400 block py-2 px-4 rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  </nav>
)}

    </header>
  );
}

export default Header;
