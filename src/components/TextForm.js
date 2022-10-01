import React, {useState} from 'react'

// rfc - react form component
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const changeLength = ()=>{
        if (text.length == 0){
            return text.split(" ").length -1;
        }
        else 
            return text.split(" ").length;
    }
    const [text, setText] = useState('');
    // text = "something something" // Wrong way to change the state
    // setText("new Text"); // Correct way to change the statw
    return (
        <>
        <div className='contaner'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-2">
            <h1>
                Your Text Summary
            </h1>
            <p>{changeLength()} words and {text.length} characters </p>
            <p>{0.008*changeLength} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
