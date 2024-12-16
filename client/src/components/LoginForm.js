import React, {useState,useContext, useEffect} from 'react';
import '../index.css';
import axios from "axios";
import { AuthContext } from './AuthContext';
import { toast } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { NavComponent } from './NavComponent';

const LoginForm = () => {
  const {token,setToken,setName,setUserEmail} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage,setErrorMessage] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("token")) {
      navigate('/');
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: email,
        password: password
      });
      setToken(response.data.token);
      setName(response.data.name);
      setUserEmail(response.data.email);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("name", response.data.name);
      navigate('/notes');  
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
    <div className='h-screen bg-gray-100'>
      <NavComponent/>
      <div className="mt-[14.5rem] max-w-md w-72 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {token && <Navigate to="/notes" replace/>}
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 text-sm backdrop:block w-full border h-8 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium  text-gray-700" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border h-8 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button
          type="submit"
          className="w-24 bg-black h-8 text-white font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
      <p className=' mt-3 text-sm'>Don't have an account? <span className='ont-medium text-blue-600 dark:text-blue-500 hover:underline'><Link to={'/register'}>Register</Link></span></p>
    </div>
    </div>  
  );
};

export default LoginForm;
