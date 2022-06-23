import React from "react";
import DOMPurify from 'dompurify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

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
    ["link"],
    ["clean"],
],
}

interface IProps {
  // textContent: string;
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
  defaultText?: string;
}

const RichEditor:React.FC<IProps> = ({ setTextContent, defaultText }) => {
  // const [value, setValue] = React.useState<string>("");

  function handleChangeTextContent(content: string) {
    
    const sanitized = createMarkup(content);

    setTextContent(sanitized.__html);
  }

  const createMarkup = (html:string) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

    return (
        <>
          <ReactQuill
          modules={modules}
          theme="snow"
          defaultValue={defaultText}
          onChange={(content: string) => handleChangeTextContent(content)}
          placeholder="Comece a digitar por aqui..." />
          {/* <button onClick={handleClick}>Ver html</button> */}

          {/* <div className="ql-snow" >
            <div className="ql-editor" dangerouslySetInnerHTML={createMarkup(value)}>
              
            </div>
          </div> */}
        </>
    )
}
export default RichEditor;
