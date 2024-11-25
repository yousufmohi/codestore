import React, {useEffect, useState } from 'react'
import { NavComponent } from './NavComponent'
import ExistingCodeEditor from './ExistingCodeEditor'
import AxiosInstance from './AxiosInstance';
import DashBoard from './DashBoard';

function SnippetPage() {
  const[data,setData] = useState([]);

  const ID = localStorage.getItem("CodeID");
  const url = AxiosInstance.getUri() + "notes";

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await AxiosInstance.get(url).then((res) => setData(res.data)).catch((err) => {
        console.log(err);
    });
   }
   fetchData();
  },[]);

  return (
    <div>
      <NavComponent/>
      {ID && <ExistingCodeEditor data={data} id={ID}/>}
    </div>
  )
}

export default SnippetPage