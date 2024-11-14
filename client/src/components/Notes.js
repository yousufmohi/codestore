import React, {useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import { NavComponent } from './NavComponent';
import AxiosInstance from './AxiosInstance';

import CodeEditor from './CodeEditor';
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

  return (
    <div>
      <NavComponent/>
      <CodeEditor data={data}/>
      <DashBoard/>
    </div>
  )
}

export default Notes