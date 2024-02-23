// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>    

      <Navbar title="TeXtUtils" aboutText="About" link="https://www.google.com"/>
      <div className="container"> <TextForm heading="checking your text....."/></div>
     
    </>

  );
}

export default App;
