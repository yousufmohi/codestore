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
  const [copyText, setCopyText] = useState('Copy');  
  const [language,setLanguage] = useState("");
  const btnStyle = "focus:ring-cyan-300 focus:ring-opacity-0"
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

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(code);
    setCopyText('Copied!')
    setTimeout(()=> {
      setCopyText('Copy');
    }, 2000);
  }
  const updateCode = async() => {
    const snippet = props.data.find(item => item._id === props.id);
    snippet.text = code;
    snippet.title = title;
    snippet.language = language;
    await AxiosInstance.put(url, snippet).catch((err) => { console.error(err); });
    toast.success("Saved");
  }

  function capitalize(s) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }

  if(!props.data || props.data.length < 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
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
      <div className="flex gap-3 w-[82.5vw] mt-4 justify-end">
      <Button className={btnStyle} onClick={updateCode}>Save</Button>
      <Dropdown className={btnStyle} label={capitalize(language)} dismissOnClick={true}>
        <Dropdown.Item onClick={() => setLanguage("javascript")}>Javascript</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("python")}>Python</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("java")}>Java</Dropdown.Item>
      </Dropdown>
      <Button className={btnStyle} onClick={copyToClipBoard}>{copyText}</Button>
      </div>
    </div>
  );
}

export default ExistingCodeEditor