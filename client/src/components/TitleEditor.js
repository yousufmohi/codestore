import React, {useState} from 'react';


function TitleEditor({ value, setValue }) {

  return <input className="w-full border-none outline-none ml-40 mb-10 mt-10 text-lg font-bold" value={value} onChange={(e) => setValue(e.target.value)}/>;

}

export default TitleEditor