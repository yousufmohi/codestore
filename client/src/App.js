import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Notes from './components/Notes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/notes" element={<Notes/>} />
    </Routes>
  );
}

export default App;
