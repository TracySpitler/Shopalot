import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <AppNavbar />
         <Router>
            <Routes />
         </Router>
      </div>
    );
  }
}

export default App;
