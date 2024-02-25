
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() {
  const[mode,setMode] = useState('light');
  const[text,setText] = useState('enable light mode')
  const toggleMode=()=>{

    if(mode==='light')
    {
    setMode('dark');
    setText('enable light Mode');
    document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light')
      setText('enable dark Mode');
      document.body.style.backgroundColor = 'white'
      
    }
  }
  
  return (
    <>
      <div className='container'>
          <Navbar mode={mode} toggleMode={toggleMode} naming={text}/>
          <About/>

        </div>
    </>
  );
}

export default App;
