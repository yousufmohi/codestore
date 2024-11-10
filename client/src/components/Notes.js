import React, { useContext, useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import { NavComponent } from './NavComponent';
import { AuthContext } from './AuthContext';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Snippet from './Snippet';
function Notes() {
  const[data,setData] = useState([]);
  const url = AxiosInstance.getUri() + "notes";

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await AxiosInstance.get(url);
      setData(responseData.data);
   }
   fetchData();
  },[]);

  const deleteData = async (id) => {
    const deleteUrl = `${url}/${id}`;
    console.log(deleteUrl);
    const deleteResponse = await AxiosInstance.delete(deleteUrl)
    console.log(deleteResponse);
  }
  const handleDelete = (id) => {
    deleteData(id);
    window.location.reload();
  };

  const handleEdit = () => {
    console.log("Editing");
  };
  return (
    <div>
      <NavComponent/>
      <h1>We Here in the notes</h1>
      <Snippet data={data} handles={[handleDelete,handleEdit]}/>
      <DashBoard/>
    </div>
  )
}

export default Notes