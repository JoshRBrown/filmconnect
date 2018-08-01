import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
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

  _getUserId = () => {
    fetch('http://localhost:4000/whoami')
      .then((res) => res)
      .then(data => {
        console.log(data)
      })
  };


  render() {
    return (
      <div>
        {/* <Signin /> */}
        <Navbar />
        <SearchBar searchSubmit={this._searchSubmit} />
        
        <Route path='/search/:searchstring' 
        render={(props) => {
          return <Search {...props} key={this.state.searchVal} /> 
        }}/> 
        <Route path='/browse' component={MovieList} exact={true} />
        <Route path='/mymovies'  exact={true} render={(props) =>
        <MyList {...props} userID={this._getUserId()} />}/>
        <Route path='/browse/:id' exact={true} render={(props) => 
        <MovieDetail {...props} userID={this._getUserId()} />}/>

      </div>
    );
  }
}

export default App;
