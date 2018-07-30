import React, { Component } from 'react';
import './App.css';
import Signin from './signin';
import {Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

export default App;
