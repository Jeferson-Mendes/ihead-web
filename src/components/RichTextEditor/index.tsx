import React from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './style.css';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    // [{ script:  "sub" }, { script:  "super" }],
    ["blockquote", "code-block"],
    [{ list:  "ordered" }, { list:  "bullet" }],
    [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
    ["link", "video"],
    ["clean"],
],
}

const RichEditor:React.FC = () => {
  // const [value, setValue] =  React.useState("");
    
  // function handleClick() {
  //   console.log(value)
  // }
    return (
        <>
          <ReactQuill
          modules={modules}
          theme="snow"
          // onChange={setValue}
          placeholder="Content goes here..." />
          {/* <button onClick={handleClick}>Ver html</button>

          <div className="ql-snow">
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: value }}>
              
            </div>
          </div> */}
        </>
    )
}
export default RichEditor;
