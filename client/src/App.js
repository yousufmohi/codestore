import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Notes from './components/Notes';
import { NavComponent } from './components/NavComponent';
import SnippetPage from './components/SnippetPage';
import CreatePage from './components/CreatePage';
import NotFound from './components/NotFound';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/snippet" element={<SnippetPage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path='*' element={<div><NavComponent/><NotFound/></div>}/>
    </Routes>
  );
}

export default App;
