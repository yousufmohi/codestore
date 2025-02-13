import React from 'react'
import { NavComponent } from './NavComponent'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  const link = localStorage.getItem("token") ? "/notes" : "/login";
  return (
    <div>
      <NavComponent/>
      <div className='w-[500px] m-auto mr-[60rem] mt-40'>
        <h1 className='leading-[6rem] text-7xl font-bold'>Code and Store.</h1>
        <p className='mt-6'>Get started today by creating an account and save snippets now!</p>
        <button onClick={(e) => navigate(link)} className='bg-black text-white mt-6 px-4 py-2 rounded-md'>Get started</button>
      </div>
    </div>
  )
}

export default Home