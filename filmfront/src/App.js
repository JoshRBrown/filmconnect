import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Signin from './Signin';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MyList from './MyList';
import MovieDetail from './MovieDetail';
import Search from './Search'


class App extends Component {
  constructor(props) {
    super(props)
  }

  _searchText = (val) => {
      this.setState({
        searchString: val 
      })
    }
  


  render() {
    return (
      <div>
        {/* <Signin /> */}
        <Navbar />
        
        <Route path='/search' component={Search} exact={true} />
        <Route path='/browse' component={MovieList} exact={true} />
        <Route path='/mymovies' component={MyList} exact={true} />
        <Route path='/browse/:id' component={MovieDetail} exact={true} />

      </div>
    );
  }
}

export default App;
