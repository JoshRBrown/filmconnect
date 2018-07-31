import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Signin from './signin';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MyList from './MyList';
import MovieDetail from './MovieDetail';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route path='/browse' component={MovieList} exact={true} />
        <Route path='/mymovies' component={MyList} exact={true} />
        <Route path='/browse/:id' component={MovieDetail} exact={true} />

      </div>
    );
  }
}

export default App;
