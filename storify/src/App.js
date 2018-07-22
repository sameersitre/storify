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

class App extends Component {
  render() {
    return (

      <div >
        <HashRouter>
          <div >
            <ul
            >
{          <li><NavLink to="/"></NavLink></li>
}              <li><NavLink to="/Home"></NavLink></li>
              <li><NavLink to="/Login"></NavLink></li>
            </ul>
            <div >
              <Route  path="/" component={NavBar} />
              <Route path="/Home" component={Home} />
              <Route path="/Login" component={Login} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
