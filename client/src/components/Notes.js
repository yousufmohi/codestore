import React, {useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import { NavComponent } from './NavComponent';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
function Notes() {
  const[data,setData] = useState([]);
  const url = AxiosInstance.getUri() + "notes";
  const navigate = useNavigate();
  const images = {
    python: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
    java: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
  };
  useEffect(() => {
    const fetchData = async () => {
      if(!localStorage.getItem("token")) {
        navigate("/login");
        return;
      }
      const responseData = await AxiosInstance.get(url).catch((err) => console.error(err));
      setData(responseData.data);
   }
   fetchData();
  },[url,navigate]);

  const handleCodeClick = (id) => {
    localStorage.setItem("CodeID",id);
    navigate("/snippet");
  }; 

  const deleteSnippet = async (id) => {
    const newURL = `${url}/${id}`;
    await AxiosInstance.delete(newURL).catch((err) => console.error(err));
    window.location.reload();
  }
  const createSnippet = () => {
    navigate("/create");
  };
  return (
    <div>
      <NavComponent/>
      <div className='mt-20 mx-auto w-[40.5vw]'>
        <h1 className='text-5xl font-bold'>Snippets</h1>
        <p className='mt-3'>Write and tweak your code snippets in a super clean, IDE-style setup that’s easy to read and use.</p>
      </div>
      <div className='mt-20 mx-auto w-[40.5vw]'>
        <ul>
          {data.map((item,i) => {
            return(
              <div className='flex flex-row justify-between'>
                <div className='flex mt-3'>
                  <img src={images[item.language]} alt={item.language} className='w-5 mr-6 object-contain'/>
                  <button className='hover:border-b-[1.5px] hover:border-dashed hover:border-black' onClick={() => handleCodeClick(item._id)} key={i}>{item.title}</button>
                </div>
                <button onClick={() => deleteSnippet(item._id)}>Delete</button>
              </div>
            )
          })}
        </ul>
        <div className="flex justify-end mt-8">
          <button onClick={createSnippet} className="px-4 py-2 bg-black text-white rounded">
            Create Snippet
          </button>
        </div>

        <DashBoard/>
      </div>

    </div>
  )
}

export default Notes