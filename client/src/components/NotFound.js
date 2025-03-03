import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-black overflow-hidden'>
      <div className="flex flex-col items-center justify-center mt-36 bg-black">
        <h1 className="text-9xl font-bold text-white">4∅4</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
        <p className="text-lg text-gray-500 mt-2">The page you're looking for doesn't exist or another error occurred.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-6 px-6 py-2 bg-[#6FEB2A] text-black font-semibold rounded-lg hover:bg-[#53992d] transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;