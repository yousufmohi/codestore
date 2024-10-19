"use client";

import {useState, React, useEffect, useContext} from 'react';
import axios from "axios";
import { AuthContext } from './AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage,setErrorMessage] = useState(null);
  const setToken = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: email,
        password: password
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      if(error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
        toast.error(errorMessage);
      } else {
        setErrorMessage("An error occured. Please try again.");
        toast.error(errorMessage);
      }
    }
  }
  return (
    <div className="mt-auto max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
