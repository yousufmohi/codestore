import { Button } from "flowbite-react";
import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Snippet = (props) => {
  const codeString = `function add(a, b) {
    return a + b;
  }`;
  if(!props.data || props.data.length < 1) {
    return null;
  }

  return (
    props.data.map((item,i) => {
      return (
        <div key={i} style={{width: '200px',marginBottom:'20px'}}>
        <SyntaxHighlighter language="javascript" style={solarizedDark}>
          {item.text}
        </SyntaxHighlighter>
        <Button>Edit</Button>
        <button onClick={() => props.handles[0](item._id)}>Delete</button>
        </div>
      )
    })
  )
}

export default Snippet