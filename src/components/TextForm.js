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
    return (
        <div className='container mt-5'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleChange} name="myBox" className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpSubmit} className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}

export default TextForm