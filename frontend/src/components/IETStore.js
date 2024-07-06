import React from 'react';
import { Link } from 'react-router-dom';
import buyerImage from '../assets/images/Buy.png'; // Import buyer image
import sellerImage from '../assets/images/Sell.png'; // Import seller image

const IETStore = () => {
  return (
    <div className="flex items-center justify-center  h-screen mb-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">IET Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Link to="/iet-store/buyer" className="flex flex-col items-center transform transition-transform hover:scale-105">
            <div className="relative w-64 h-64 bg-indigo-500 text-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden hover:bg-indigo-600 transition duration-300 ease-in-out">
              <img src={buyerImage} alt="Buyer" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl font-semibold text-white">Buyer</span>
              </div>
            </div>
            <h1 className='text-2xl  text-center mt-2 mb-10'>Buyer</h1>
          </Link>
          <Link to="/iet-store/seller" className="flex flex-col items-center transform transition-transform hover:scale-105">
            <div className="relative w-64 h-64 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden hover:bg-green-600 transition duration-300 ease-in-out">
              <img src={sellerImage} alt="Seller" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-green-600 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl font-semibold text-white">Seller</span>
              </div>
            </div>
            <h1 className='text-2xl  text-center mt-2 mb-10 '>Seller</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IETStore;
