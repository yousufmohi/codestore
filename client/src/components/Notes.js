import React, { useContext, useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import { NavComponent } from './NavComponent';
import { AuthContext } from './AuthContext';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
function Notes() {
  const {token} = useContext(AuthContext);
  const navigate = useNavigate();
  const[data,setData] = useState([]);
  const [edit,setEdit] = useState(false);
  const url = AxiosInstance.getUri() + "notes";

  useEffect(() => {
    const fetchData = async () => {
      console.log(url);
      const responseData = await AxiosInstance.get(url);
      setData(responseData.data);
   }
   fetchData();
  },[]);

  const handleEdit = (id) => {
    console.log(id);
  }
  return (
    <div>
      <NavComponent/>
      <h1>We Here in the notes</h1>
      <ul>

      </ul>
      <DashBoard/>
    </div>
  )
}

export default Notes