import React, {useEffect, useState} from 'react';
import '../index.css';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { NavComponent } from './NavComponent';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/");
    }
  },[navigate])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const DTO = {
      name: name,
      email:email,
      password:password
    }
    try {
      await axios.post("https://codestore.onrender.com/api/users/", DTO).catch((err) => {console.error(err)});
      toast.success("User Registered")
    } catch(error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='bg-black h-screen'>
      <NavComponent/>
      <div className="mt-[14.5rem] max-w-md w-full mx-auto  p-6 bg-[#292929] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block text-sm w-full border  h-8 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block text-sm w-full border h-8 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full text-sm border h-8 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6FEB2A] hover:bg-[#53992d] h-8 text-black font-semibold rounded-md"
        >
          Register
        </button>
      </form>
      <p className=' mt-3 text-white text-center text-sm'>Already have an account? <span className='ont-medium text-blue-600 dark:text-blue-500 hover:underline'><Link to={'/login'}>Login</Link></span></p>

    </div>
  </div>
  );
};

export default RegisterForm;
