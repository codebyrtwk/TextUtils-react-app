import React  from 'react'
import Form from "./MyCcomponents/Form";
import Header from "./MyCcomponents/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";




function App() {
  

  return (
    <>
    <Header title = "TEXT UTILS" />
    <Form Heading = "Enter your Text to Process" />
    
    </>
    );
    
  
}

export default App;
 