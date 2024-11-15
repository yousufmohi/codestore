import React, { useEffect, useState } from "react";
import Editor from '@monaco-editor/react';
import { Button, Dropdown } from "flowbite-react";

import AxiosInstance from "./AxiosInstance";
const ExistingCodeEditor = (props) => {
  const url = AxiosInstance.getUri() + "notes/" + props.id;
  const [code,setCode] = useState("// some comment");
  const [language,setLanguage] = useState("javascript");
  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const snippet = props.data.find(item => item._id === props.id);
      if (snippet) {
        setCode(snippet.text);
      }
    }
  }, [props.data, props.id]);

  function handleChange(value) {
    setCode(value)
  }

  const updateCode = async() => {
    const snippet = props.data.find(item => item._id === props.id);
    snippet.text = code;
    const responseData = await AxiosInstance.put(url, snippet);
    console.log(responseData);
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }

  if(!props.data || props.data.length < 1) {
    return null;
  }

  return (
    <div>
      <div className="border-solid border-4 border-gray-600">
        <Editor  
          theme="light" 
          height="50vh" 
          defaultLanguage={language} 
          language={language}
          defaultValue={code}
          onChange={handleChange}
          options={{
            minimap: { enabled: false }, 
          }}
          />
      </div>
      <div className=" mr-5 mt-4 flex gap-3 justify-end">
      <Button onClick={updateCode}>Save</Button>
      <Dropdown label={capitalize(language)} dismissOnClick={true}>
        <Dropdown.Item onClick={() => setLanguage("javascript")}>Javascript</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("python")}>Python</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("java")}>Java</Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  );
}

export default ExistingCodeEditor