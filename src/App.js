import React ,{useState}  from 'react'
import About from "./MyCcomponents/About";
import Form from "./MyCcomponents/Form";
import Header from "./MyCcomponents/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [alert , setAlert] = useState(null);
  const showAlert = (type , message) => {
    setAlert({
      msg : message,
      type:type
    })};

  return (
    <>
    <Header title = "TEXT UTILS" />
    <Router>
    <Switch>
          <Route  exact path="/about">
            <About />
            
          </Route>
         
          <Route  exact path="/">
          <Form Heading = "Enter your Text to Process" />
          </Route>
        </Switch>
    </Router>
    
  
    
    </>
    );
    
  
}

export default App;
 