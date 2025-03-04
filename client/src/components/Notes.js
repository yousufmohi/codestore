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
      if (responseData?.data) {
        setData(responseData.data);
      }
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
      <div className='mt-20 mx-auto w-[40.5vw] bg-black'>
        <h1 className='text-5xl font-bold text-white'>Snippets</h1>
        <p className='mt-3 text-white'>Code smarter and faster in a sleek, developer-friendly IDE built for effortless editing.</p>
      </div>
      <div className='mt-20 mx-auto w-[40.5vw]'>
        <ul>
          {data.map((item,i) => {
            return(
              <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start w-full p-2'>
                <div className='flex items-center sm:mt-3 space-x-4'>
                  <img 
                    src={images[item.language]} 
                    alt={item.language} 
                    className='w-5 h-5 object-contain' 
                  />
                  <button className='text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 hover:border-b-[1.5px] hover:border-dashed hover:border-white text-white' onClick={() => handleCodeClick(item._id)} key={i} >{item.title}</button>
                </div>
                <button className='text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 text-white mt-2 sm:mt-0'   onClick={() => deleteSnippet(item._id)}>Delete</button>
              </div>
            )
          })}
        </ul>
        <div className="flex justify-end mt-8 sm:mt-0">
          <button onClick={createSnippet} className="px-2 py-1 sm:px-4 sm:py-2 bg-[#6FEB2A] hover:bg-[#53992d] text-black rounded text-sm sm:text-base">
            Create Snippet
          </button>
        </div>

        <DashBoard/>
      </div>

    </div>
  )
}

export default Notes