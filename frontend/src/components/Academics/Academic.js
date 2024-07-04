import React from 'react';
import { Link } from 'react-router-dom';

const Academic = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Our Academic Resources</h2>
      
      <div className="flex flex-col md:flex-row py-20 mx-5 justify-center mb-2 items-center space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/academics/paper" className="bg-white border-2 border-transparent hover:border-green-500 shadow-lg rounded-lg p-20 w-full md:w-1/3 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0">
          <div className="text-3xl font-bold mb-4">Papers</div>
          <button className="bg-green-600 text-white py-2 px-6 hover:bg-green-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            👉 Explore Papers
          </button>
        </Link>
        <Link to="/academics/syllabus" className="bg-white border-2 border-transparent hover:border-green-500 shadow-lg rounded-lg p-20 w-full md:w-1/3 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0">
          <div className="text-3xl font-bold mb-4">Syllabus</div>
          <button className="bg-green-600 text-white py-2 px-4 hover:bg-green-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            👉 Explore Syllabus
          </button>
        </Link>
        <Link to="/academics/notes" className="bg-white border-2 border-transparent hover:border-green-500 shadow-lg rounded-lg p-20 w-full md:w-1/3 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0">
          <div className="text-3xl font-bold mb-4">Notes</div>
          <button className="bg-green-600 text-white py-2 px-4 hover:bg-green-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            👉 Explore Notes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Academic;
