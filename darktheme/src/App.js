
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() {
  const[mode,setMode] = useState('light');
  const[text,setText] = useState('enable light mode')
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    });
  }
  const toggleMode=()=>{

    if(mode==='light')
    {
    setMode('dark');
    setText('enable light Mode');
    document.body.style.backgroundColor = 'black';
    showAlert("Enabled Dark Mode","success");
    }
    else{
      setMode('light')
      setText('enable dark Mode');
      document.body.style.backgroundColor = 'white'
      showAlert("Enabled Light Mode","success");
      
    }
  }
  
  return (
    <>
      <div className='container'>
          <Alert alert={alert}/>
          <Navbar mode={mode} toggleMode={toggleMode} naming={text}/>
          <About/>

        </div>
    </>
  );
}

export default App;
