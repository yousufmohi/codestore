import React from 'react';


function TitleEditor({ value, setValue }) {

  return <input className="w-[82.5vw] bg-black outline-none mb-10 mt-10 text-2xl text-white font-bold" placeholder="New Page" value={value} onChange={(e) => setValue(e.target.value)}/>;

}

export default TitleEditor