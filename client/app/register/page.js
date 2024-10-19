"use client";
import {React, useState} from 'react'
import axios from "axios";
import RegisterForm from '../components/RegisterForm';
const Register = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const DTO = {
      name: name,
      email:email,
      password:password
    }
    try {
      const response = await axios.post("http://localhost:5000/api/users/", DTO);
      console.log(response);
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div>
      <RegisterForm/>
    </div>
  )

}

export default Register;