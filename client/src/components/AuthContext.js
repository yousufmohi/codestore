import React, { createContext, useState, useEffect } from "react";
import '../index.css';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // sets the initial states for auth related variables
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [name,setName] = useState(null);
  const [userEmail,setUserEmail] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading, name, setName, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };