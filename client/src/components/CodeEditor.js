import React, { useState } from "react";
import Editor from '@monaco-editor/react';
import { Button, Dropdown } from "flowbite-react";
import AxiosInstance from "./AxiosInstance";
const CodeEditor = (props) => {
  const url = AxiosInstance.getUri() + "notes";
  const [code,setCode] = useState("// some comment");
  const [language,setLanguage] = useState("javascript");
  if(!props.data || props.data.length < 1) {
    return null;
  }
  function handleChange(value) {
    setCode(value);
  }

  const postData = async() => {
      const data = {
        text: code
      };
      const responseData = await AxiosInstance.post(url,data);
      console.log(responseData);
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }
  function saveCode() {
    postData(code);
  }
  return (
    <div>
      <div className="border-solid border-4 border-gray-600">
        <Editor  
          theme="light" 
          height="50vh" 
          defaultLanguage={language} 
          language={language}
          defaultValue="// some comment" 
          onChange={handleChange}
          options={{
            minimap: { enabled: false }, 
          }}
          />
      </div>
      <div className=" mr-5 mt-4 flex gap-3 justify-end">
      <Button onClick={saveCode}>Save</Button>
      <Dropdown label={capitalize(language)} dismissOnClick={true}>
        <Dropdown.Item onClick={() => setLanguage("javascript")}>Javascript</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("python")}>Python</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("java")}>Java</Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  );
}

export default CodeEditor