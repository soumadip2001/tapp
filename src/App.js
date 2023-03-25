//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js'
import About from './component/About.js'
import Textform from './component/Textform.js';
import React, { useState } from 'react';           // imported useState for using States=function
import Alert from './component/Alert';
//import { type } from '@testing-library/user-event/dist/type';

import {
 BrowserRouter as Router,
 //Switch,
  Routes,
  Route
 // Link
} from "react-router-dom";

function App() {
  //eventhandler is arroy function and added a app component
  // const eventhandler=()=>{
  //   let arr=['alice','Bob','ram']
  //   let i=Math.floor(Math.random()*3)
  //   return arr[i]
  // }
  //const [toggleMode, settoggleMode] = useState()
  let [mode, setMode] = useState('light');  //what is written within useState is the default or primary value of mode
  let [alert, setAlert] = useState(null)  //object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("")
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#061946"
      showAlert(" dark mode has been enabled", "success ")
      document.title = "TextUtils is in Dark mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" light mode has been enabled", "success ")
      document.title = "TextUtils is in Light mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode} />   {/*passing value to props through title,aboutText */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>                  {/* updated syntax */}
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter your text here" mode={mode} showAlert={showAlert} />}>{/* when you are routing then you have to change 'a' tag to 'link' tag and 'href' tag to 'to' tag */}
            </Route>
          </Routes>
        </div>
        {/*<About />*/}
      </Router>
    </>
  );
}

export default App;
