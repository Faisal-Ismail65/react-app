import React from 'react'
import { useState } from 'react'
const TextForm = (props) => {
    const [text, setText] = useState('');
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const  handleUpSubmit = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowSubmit = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () =>{
        setText('');
    }
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <div className='container my-5'>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea value={text} onChange={handleChange} name="myBox" className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpSubmit} className="btn btn-primary mx-1  my-1">Convert to Uppercase</button>
            <button onClick={handleLowSubmit} className='btn btn-primary mx-1 my-1'>Convert to Lowercase</button>
            <button onClick={handleClearText} className='btn btn-primary mx-1'>Clear Text</button>
            <button onClick={handleCopy} className='btn btn-primary mx-1 my-1'>Copy Text</button>
            <button onClick={handleExtraSpaces} className='btn btn-primary mx-1 my-1'>Remove Extra Spaces</button>
            <h2 className='py-2'>Your Text Summary</h2>
            <p>Words : {text.split(/\s+/).filter(e=>e.length!==0).length}</p>
            <p>Characters : {text.length}</p>
        </div>
    )
}

export default TextForm