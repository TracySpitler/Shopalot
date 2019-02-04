import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
   
      <Provider store={store}>
  
      <div className="App">
        <Router >
          <div>
          <Navbar />
           <Routes />
           </div>
        </Router>
      </div>
   
      </Provider>
     
    );
  }
}

export default App;
