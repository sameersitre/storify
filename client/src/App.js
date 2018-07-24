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
import CompletedStory from './_components/Completedstory.js'
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
              <li><NavLink to="/Stories"></NavLink></li>
            </ul>
            <div >
              <Route exact path="/" component={NavBar} />
              <Route path="/Home" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route path="/Stories" component={CompletedStory}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
