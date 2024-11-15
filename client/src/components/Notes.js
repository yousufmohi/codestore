import React, {useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import { NavComponent } from './NavComponent';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
function Notes() {
  const[data,setData] = useState([]);
  const url = AxiosInstance.getUri() + "notes";
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await AxiosInstance.get(url);
      setData(responseData.data);
   }
   fetchData();
  },[]);

  const handleCodeClick = (id) => {
    localStorage.setItem("CodeID",id);
    navigate("/snippet");
  }; 

  const createSnippet = () => {
    navigate("/create");
  };
  return (
    <div>
      <NavComponent/>
      <ul>
        {data.map((item,i) => {
          return(
            <Button onClick={() => handleCodeClick(item._id)} key={i}>{item.title}</Button>
          )
        })}
      </ul>
      <Button onClick={createSnippet}>Create</Button>
      <DashBoard/>
    </div>
  )
}

export default Notes