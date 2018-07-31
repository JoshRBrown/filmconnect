import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Signin from './signin';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MyList from './MyList';
import MovieDetail from './MovieDetail';
import Search from './Search'
import SearchBar from './SearchBar';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: ' '
    }
  }
  
  _searchSubmit = (val) => {
    this.setState({
      searchVal: val
    }, () => {
      // console.log(this.state.searchVal);
    })
    // console.log(this.state.searchVal);
  }


  render() {
    return (
      <div>
        <Signin />
        <Navbar />
        <SearchBar searchSubmit={this._searchSubmit} />
        
        <Route path='/search/:searchstring' 
        render={(props) => {
          return <Search {...props} key={this.state.searchVal} /> 
        }}/> 
        <Route path='/browse' component={MovieList} exact={true} />
        <Route path='/mymovies' component={MyList} exact={true} />
        <Route path='/browse/:id' component={MovieDetail} exact={true} />

      </div>
    );
  }
}

export default App;
