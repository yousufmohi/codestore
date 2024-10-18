import {React, useState} from 'react'
import axios from "axios";

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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' required></input>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required></input>
        <button type='submit'>Register</button>
      </form>
    </div>
  )

}

export default Register;