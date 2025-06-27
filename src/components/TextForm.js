import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text has been cleared","success")
  };


  const handleRemoveSpaces = () => {
    let newtext = text.split(/\s+/).filter(Boolean).join(" ");
    setText(newtext);
    props.showAlert("Spaces has been removed","success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode=='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode=='dark'? 'grey':'white',color:props.mode=='dark'? 'white':'black'}}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode=='dark'? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text above to preview it here."}</p>
      </div>
    </>
  );
}
