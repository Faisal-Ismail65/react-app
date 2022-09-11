// import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route path='/' element={<TextForm heading="Enter Your Text To Analyze" />} />
        <Route path='/About' element={<About />} /> 
      </Routes>
    </Router>
    </>
  );
}


export default App;
