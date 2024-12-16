import React, {useEffect, useState} from 'react';
import '../index.css';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { NavComponent } from './NavComponent';
import DashBoard from './DashBoard';
import { useNavigate } from 'react-router-dom';
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
      await axios.post("http://localhost:5000/api/users/", DTO).catch((err) => {console.error(err)});
      toast.success("User Registered")
    } catch(error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <NavComponent/>
      <div className="mt- max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button
          type="submit"
          className="w-24 bg-black text-white font-semibold py-2 rounded-md "
        >
          Register
        </button>
      </form>
    </div>
    <DashBoard/>
  </div>
  );
};

export default RegisterForm;
