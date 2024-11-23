import React, { useEffect, useState } from "react";
import Editor from '@monaco-editor/react';
import { Button, Dropdown } from "flowbite-react";
import AxiosInstance from "./AxiosInstance";
import TitleEditor from "./TitleEditor";
import { toast } from 'react-hot-toast';

const ExistingCodeEditor = (props) => {
  const url = AxiosInstance.getUri() + "notes/" + props.id;
  const [code,setCode] = useState("// some comment");
  const [title, setTitle] = useState('');  
  const [language,setLanguage] = useState("");
  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const snippet = props.data.find(item => item._id === props.id);
      if (snippet) {
        setCode(snippet.text);
        setTitle(snippet.title);
        setLanguage(snippet.language);
      }
    }
  }, [props.data, props.id]);

  function handleChange(value) {
    setCode(value)
  }

  const updateCode = async() => {
    const snippet = props.data.find(item => item._id === props.id);
    snippet.text = code;
    snippet.title = title;
    snippet.language = language;
    const responseData = await AxiosInstance.put(url, snippet);
    toast.success("Saved");
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }

  if(!props.data || props.data.length < 1) {
    return null;
  }

  return (
    <div className="w-[100rem] content-center m-auto">
      <TitleEditor value={title} setValue={setTitle} />
      <div className="border-solid border-2 w-[82.5vw]  border-gray-600">
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
      <div className="m-auto">
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