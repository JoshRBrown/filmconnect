import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Signin from './signin';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MyList from './MyList';


class App extends Component {
  render() {
    return (
      <div>
       <Navbar />

       <Route path='/browse' component={MovieList} />
       <Route path='/mymovies' component={MyList} />
      </div>
    );
  }
}

export default App;
