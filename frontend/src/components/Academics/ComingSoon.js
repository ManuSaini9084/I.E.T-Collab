import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-lg">Stay tuned for exciting updates.</p>
      </div>
      <div className="thank-you-container">
        <div className="thank-you text-2xl mt-10 animate-bounce">Thank you!</div>
      </div>
      <div className='py-4'>
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg border border-gray-400 hover:bg-gray-100 hover:border-gray-500 transition duration-300 ease-in-out" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
