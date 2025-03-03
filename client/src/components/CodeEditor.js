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
  const [id,setID] = useState("");

  function handleChange(value) {
    setCode(value);
  }

  const postData = async() => {
      if (code === "// some comment" || !code) {
        return;
      }

      if (id) {
        console.log("Updating existing snippet");
        await updateCode(); 
        return;
      }

      if(!title) {
        setTitle("Untitled");
      } 
      const data = {
        text: code,
        title: title,
        language: language
      };

      try {
        const response = await AxiosInstance.post(url, data);
        setID(response.data._id); 
        toast.success("Saved");
      } catch (err) {
        console.error("Save failed:", err);
        toast.error("Save failed");
      }
  }

  const updateCode = async () => {
    if (!id) return; 
  
    const data = {
      text: code,
      title: title || "Untitled",
      language: language
    };
  
    try {
      await AxiosInstance.put(`${url}/${id}`, data); // ✅ Send the update request
      toast.success("Updated");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Update failed");
    }
  };
  
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
          theme="vs-dark" 
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
      <Button color="none" className="!bg-[#6FEB2A] hover:bg-[#53992d] text-black font-medium" onClick={saveCode}>Save</Button>
      <Dropdown color="blue" label={capitalize(language)} dismissOnClick={true} >
        <Dropdown.Item onClick={() => setLanguage("javascript")}>Javascript</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("python")}>Python</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage("java")}>Java</Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  );
}

export default CodeEditor