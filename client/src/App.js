import React, { Component } from 'react';
import './App.css';
import { Route,NavLink,HashRouter} from "react-router-dom";
import Home from './_components/Home.js';
import NavBar from './_components/NavBar';
import Login from './_components/Login.js';
import Signup from './_components/Signup';
import CompletedStory from './_components/Completedstory.js';
import ViewStory from './_components/ViewStory';
import CreateStory from './_components/CreateStory';
import OngoingStories from './_components/OngoingStories'

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
              <li><NavLink to="/ViewStory"></NavLink></li>
              <li><NavLink to="/CreateStory"></NavLink></li>
              <li><NavLink to="/OngoingStories"></NavLink></li>
            </ul>
            
            <div >
              <Route exact path="/" component={NavBar} />
              <Route path="/Home" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route path="/Stories" component={CompletedStory}/>
              <Route path="/ViewStory" component={ViewStory}/>
              <Route path="/CreateStory" component={CreateStory}/>
              <Route path="/OngoingStories" component={OngoingStories}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
