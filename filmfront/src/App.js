import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Signin from './signin';
import Navbar from './Navbar';
import Browse from './Browse';
import MyList from './MyList';


class App extends Component {
  render() {
    return (
      <div>
       <Navbar />

       <Route path='/browse' component={Browse} />
       <Route path='./mymovies' component={MyList} />
      </div>
    );
  }
}

export default App;
