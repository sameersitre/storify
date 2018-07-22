import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './_components/Home.js';
import NavBar from './_components/NavBar';
import Login from './_components/Login.js';
import Signup from './_components/Signup';

class App extends Component {
  render() {
    return (

      <div >
        <HashRouter>
          <div >
            <ul>
              <li><NavLink to="/"></NavLink></li>
              <li><NavLink to="/Home"></NavLink></li>
              <li><NavLink to="/Login"></NavLink></li>
            </ul>
            <div >
              <Route path="/" component={NavBar} />
              <Route path="/Home" component={Home} />
              <Route path="/Login" component={Login} />
              <Route path="/Signup" component={Signup} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
