import React, {useState} from 'react';


function TitleEditor({ value, setValue }) {

  return <input className="w-full border-none outline-none mb-10 mt-10 text-2xl font-bold" placeholder="New Page" value={value} onChange={(e) => setValue(e.target.value)}/>;

}

export default TitleEditor