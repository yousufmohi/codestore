import React, { useState } from "react";
import Editor from '@monaco-editor/react';
import { Button, Dropdown } from "flowbite-react";
import AxiosInstance from "./AxiosInstance";
import TitleEditor from "./TitleEditor";
import { toast } from 'react-hot-toast';
const CodeEditor = () => {
  const url = AxiosInstance.getUri() + "notes";
  const [code,setCode] = useState("// some comment");
  const [language,setLanguage] = useState("javascript");
  const [title, setTitle] = useState('');  
  function handleChange(value) {
    setCode(value);
  }

  const postData = async() => {
      if(!title) {
        setTitle("Untitled");
      } 
      const data = {
        text: code,
        title: title,
        language: language
      };

      const responseData = await AxiosInstance.post(url,data);
      toast.success('Saved');
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }
  function saveCode() {
    postData();
  }
  return (
    <div className="flex flex-col items-center justify-center">
    <TitleEditor placeholder="New Page" value={title} setValue={setTitle} />
      <div className="border-solid border-2 w-[82.5vw]  border-gray-600">
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
      <div className="flex gap-3 w-[82.5vw] mt-4 justify-end">
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