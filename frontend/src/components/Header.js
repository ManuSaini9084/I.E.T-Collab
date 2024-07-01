import React from 'react';
import { Link } from 'react-router-dom';
import ietlogo from '../Ietlogo.png';
function Header() {
  return (
    <header className="bg-green-100 shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4">
      <div className="flex-shrink-0">
      <Link to="/" > <img src={ietlogo} alt="College Logo" className="h-10 mx-5" /></Link>
      </div>
      <nav className="flex-1 text-center">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="text-gray-600 hover:text-black hover:underline">
              Academics
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black hover:underline">
              IET Store
            </a>
          </li>
          <li>
          <a href="https://alumni-speak.iethub.org/" className="text-gray-600 hover:text-black hover:underline" target="_blank"  >
           Alumni
         </a>
         </li>
         <li>
            <a href="https://iethub.org/clubs" className="text-gray-600 hover:text-black hover:underline" target="_blank">
              Clubs
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black hover:underline">
              Events
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <Link
          to="/login"
          className="text-grey-600  py-2 px-4 rounded mr-4 hover:text-black hover:underline"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="  text-grey  py-2 px-4 rounded mr-4 hover:text-black hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </header>

  );
}

export default Header;
