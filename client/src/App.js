import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/AppNavbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  

  
  
  
  render() {
    return (
   
  
  
      <div className="App">
        <Router >
          <div>
          <Navbar />
           <Routes />
           </div>
        </Router>
      </div>
   
    
     
    );
  }
}

export default App;
