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

  const deleteSnippet = async (id) => {
    const newURL = `${url}/${id}`;
    const responseData = await AxiosInstance.delete(newURL);
    window.location.reload();
  }
  const createSnippet = () => {
    navigate("/create");
  };
  return (
    <div>
      <NavComponent/>
      <div className='mx-auto w-[40.5vw]'>
        <ul>
          {data.map((item,i) => {
            return(
              <div className='flex flex-row justify-between'>
                <button onClick={() => handleCodeClick(item._id)} key={i}>{item.title}</button>
                <button onClick={() => deleteSnippet(item._id)}>Delete</button>
              </div>
            )
          })}
        </ul>
        <DashBoard/>
      </div>
      <Button onClick={createSnippet}>Create</Button>

    </div>
  )
}

export default Notes