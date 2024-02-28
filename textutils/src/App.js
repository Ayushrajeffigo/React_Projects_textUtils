import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar title="TeXtUtils" aboutText="About" />
        <div className="container"> 
          <Routes>
            <Route exact path="/" element={<TextForm heading="checking your text....."/>} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
