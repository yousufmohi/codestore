import React from 'react'
import { NavComponent } from './NavComponent'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  const link = localStorage.getItem("token") ? "/notes" : "/login";
  return (
    <div className='bg-black h-screen'>
      <NavComponent/>
      <div className='max-w-[900px] m-auto mt-20 flex flex-col'>
        <div className="m-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Code. Store. Today.
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-400">
            Get started today by creating an account and save snippets now!
          </p>
        </div>
        <div className='m-auto mt-10'>
          <button 
          onClick={(e) => navigate(link)} 
          className='text-lg sm:text-xl max-w-64 font-semibold text-black bg-[#6FEB2A] hover:bg-[#53992d] w-48 sm:w-56 h-12 px-3 py-2 rounded-md'>
          Start Storing
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home