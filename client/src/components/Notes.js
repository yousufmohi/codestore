import React from 'react'
import DashBoard from './DashBoard'
import { Navigate } from 'react-router-dom';
function Notes() {
  const logout = (e) => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
  };
  return (
    <div>
      <DashBoard/>
      <h1>We Here in the notes</h1>
      <button onClick={(e) => logout(e)}>Logout</button>
    </div>
  )
}

export default Notes