import React, {useState} from 'react';


function TitleEditor({ value, setValue }) {

  return <input value={value} onChange={(e) => setValue(e.target.value)}/>;

}

export default TitleEditor