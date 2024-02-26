// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <>    

      <Navbar title="TeXtUtils" aboutText="About" link="https://www.google.com"/>
      <div className="container"> 
      

      
      
      </div>
      <Router>
      <Routes>
          <Route path="/" element={<TextForm heading="checking your text....."/>}></Route>
          <Route path="/about" element={<About/>}></Route>	

	    </Routes>
        </Router>

     
    </>

  );
}

export default App;
