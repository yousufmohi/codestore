import React, {useContext} from "react";
import  {AuthContext} from "./AuthContext";
import { Navigate } from "react-router-dom";
const DashBoard = () => {
  const {token,loading} = useContext(AuthContext);
  if(loading) {
    return null;
  }

  if(!token) {
    return <Navigate to="/register" replace/>
  }

  return (
    <></>
  )
}

export default DashBoard