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
      const response = await axios.post("https://codestore.onrender.com/api/users/login", {
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
    <div className='bg-black h-screen'>
      <NavComponent/>
      <div className="mt-[14.5rem] max-w-lg w-96 mx-auto p-6 bg-[#292929] rounded-lg shadow-lg">
      {token ? <Navigate to="/notes" replace/> : undefined}
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white" htmlFor="email">
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
          <label className="block text-sm font-medium  text-white" htmlFor="email">
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
          className="w-full h-8 bg-[#6FEB2A] hover:bg-[#53992d] text-black font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
      <p className=' mt-3 text-white  text-center text-sm'>Don't have an account? <span className='ont-medium text-blue-600 dark:text-blue-500 hover:underline'><Link to={'/register'}>Register</Link></span></p>
    </div>
    </div>  
  );
};

export default LoginForm;
