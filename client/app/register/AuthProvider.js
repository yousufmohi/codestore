"use client";
import {React, useState, useContext, useEffect} from 'react'
export const AuthContext = useContext();

export const AuthProvider = ({children}) => {

  const [token,setToken] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider