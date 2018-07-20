import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './_components/Home.js';
import NavBar from './NavBar.js';
import Login from './_components/Login.js';

import Button from '@material-ui/core/Button';
class App extends Component {
  render() {
    return (

      <div className="App">
        <HashRouter>
          <div >
            <ul>
              <li><NavLink to="/">Cart</NavLink></li>
              <li><NavLink to="/Home">Home</NavLink></li>
              <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
            <div >
              <Route path="/" component={NavBar} />
              <Route path="/Home" component={Home} />
              <Route path="/Login" component={Login} />
            </div>
          </div>
        </HashRouter>
        <Button variant="contained" color="primary"></Button>
      </div>
    );
  }
}

export default App;
