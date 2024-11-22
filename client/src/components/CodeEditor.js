import React, { useState } from "react";
import Editor from '@monaco-editor/react';
import { Button, Dropdown } from "flowbite-react";
import AxiosInstance from "./AxiosInstance";
import TitleEditor from "./TitleEditor";

const CodeEditor = () => {
  const url = AxiosInstance.getUri() + "notes";
  const [code,setCode] = useState("// some comment");
  const [language,setLanguage] = useState("javascript");
  const [title, setTitle] = useState('');  
  function handleChange(value) {
    setCode(value);
  }

  const postData = async() => {
      const data = {
        text: code,
        title: title,
        language: language
      };
      const responseData = await AxiosInstance.post(url,data);
      console.log(responseData);
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }
  function saveCode() {
    postData();
  }
  return (
    <div>
    <TitleEditor placeholder="New Page" value={title} setValue={setTitle} />
      <div className="border-solid border-4  w-[100rem] border-gray-600">
        <Editor  
          theme="light" 
          height="50vh" 
          defaultLanguage={language} 
          language={language}
          defaultValue="// write some code" 
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