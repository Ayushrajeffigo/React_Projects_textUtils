import React,{useState} from 'react'

export default function TextForm(props) {

    
    // text is the variable name where everything u write will go and setText is the function or method that will do something
   
    const handleClick = ()=>{
        alert("Upper case is Clicked");
        setText(text.toUpperCase());

    }
    const EnableUserWriting=(event)=>{
        setText(event.target.value);
    }
    const handleLeftClick=()=>{
        alert("lower case is clicked");
        setText(text.toLowerCase());
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleInput=()=>{
        setText("");
    }
    const[text,setText] = useState("Enter the text")

    
  return (
    <>
    <div className='container'>

        <h1 >Enter the Text to Analyze</h1>
        <div className="my-3">
                <label className="form-label" htmlFor="myBox">{props.heading}</label>
                <textarea id="myBox" className="form-control" rows="8" vw="100vh" vh="100vh" value={text} onClick={handleInput} onChange={EnableUserWriting}></textarea>
                
        </div>
        <button className='btn btn-primary btn-dark' onClick={handleClick} > To Uppercase</button>
        <button className='btn btn-primary mx-2 btn-dark' onClick={handleLeftClick} > To Lowercase</button>
        <button className='btn btn-primary mx-1 btn-dark' onClick={handleClearClick} > Clear text</button>
    </div>
    <div className='container my-2'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> Time Taken to Read {text.split(" ").length * 0.008 } minutes</p>
        </div>
        <div className='container my-3'>
        <h1>Preview</h1>
        <p>{text}</p>
       
        </div>

    </>
  )
}
