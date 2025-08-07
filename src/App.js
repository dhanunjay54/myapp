// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
import React,{useState} from 'react';
import Alert from './component/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const toggleMode = () =>
  {
    console.log("toggle button will be enable");
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Enabled the Dark mode", "success");
      document.title = 'Dhanu React App - Dark mode';
      // setInterval(() =>{
      //   document.title ='Text utils is Amazing'
      // },2000);
    }
    else  
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled the Light mode", "success");
      document.title = 'Dhanu React App - Light mode';
      //  setInterval(() =>{
      //   document.title ='Install Now Text Utils'
      // },1500);
    }
  }
  const [mode, setMode] = useState('light')
  const[variablealert, setVariableAlert] = useState(null)
  
  const showAlert = (message, type) =>
  {
    setVariableAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{

      setVariableAlert(null);

    },3000);
  }
  return (
    <>
    {/* <About/> */}
    {/* <Navbar/> */}
    <Router>
<Navbar title = "TextUtils" abouttext = "AboutUS" mode ={mode} toggleMode = {toggleMode}/>
<Alert variablealert = {variablealert}/>

<div className="container my-3"> 

  <Routes>
          <Route exact path="/about" element ={<About />}>
          
          </Route>
         
          <Route exact path="/" element ={<TextForm heading = "Enter the Text to Analyze" showAlert = {showAlert} mode ={mode}/>}>
          
          </Route>
        </Routes>

</div>
</Router>
    </>
  );
}

export default App;
