import React, { Component } from 'react';
import './App.css';
import {Button, } from '@material-ui/core/';
import Login from './_components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
        <Button variant="contained" color="primary">Hello World i am here</Button>
        <Login />
      </div>
    );
  }
}

export default App;
