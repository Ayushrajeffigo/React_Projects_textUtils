import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text");
    const[textColor,setTextColor] = useState("black");


    const handleClick = () => {
        alert("Upper case is Clicked");
        setText(text.toUpperCase());
    };

    const handleLeftClick = () => {
        alert("lower case is clicked");
        setText(text.toLowerCase());
    };

    const handleClearClick = (message,type) => {
        setText("");
    };

    const handleFontColorClick = () => {
        setTextColor(("red"));
    };
    const handleInverseClick=()=>{
        let newText = "";
        for(let i = text.length-1;i>=0;i--){
            newText +=text[i]
        }
        setText(newText);
    }

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    const ClipboardAction=()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const PasteAction = () => {
        var text = document.getElementById('myBox');
        navigator.clipboard.readText().then(clipboardText => {
            text.value = clipboardText;
        }).catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }
    

    const textToSpeech=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }

    return (
        <>
            <div className='container'>
                <h1>Enter the Text to Analyze</h1>
                <div className="my-3">
                    <label className="form-label" htmlFor="myBox">{props.heading}</label>
                    <textarea
                        id="myBox"
                        className="form-control"
                        rows="8"
                        vw="100vh"
                        vh="100vh"
                        value={text}
                        onChange={handleInputChange}
                        style={{color:textColor}}
                        >
                    </textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={handleClick} disabled={text.length===0}>To Uppercase</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={handleLeftClick} disabled={text.length===0}>To Lowercase</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={handleClearClick} disabled={text.length===0}>Clear text</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={handleFontColorClick} disabled={text.length===0}>Change font color</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={handleInverseClick} disabled={text.length===0}>InverseKey</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={textToSpeech} disabled={text.length===0}>Speech</button>
                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={PasteAction} disabled={text.length===0}>Paste</button>

                <button className='btn btn-primary mx-1 my-1 btn-dark' onClick={ClipboardAction} disabled={text.length===0}>Copy</button>
            </div>
            <div className='container my-2'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter(Boolean).length} words and {text.length} characters</p>
                <p>Time Taken to Read {text.split(" ").filter(Boolean).length * 0.008} minutes</p>
            </div>
            <div className='container my-3'>
                <h1>Preview</h1>
                <p>{text.length>=0?text:"enter the text in textBox to preview"}</p>
            </div>
        </>
    );
}
