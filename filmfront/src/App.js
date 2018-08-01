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

  // _searchText = (val) => {
  //     this.setState({
  //       searchString: val 
  //     })
  //   }
  
  _updateChange = (e) => {
    e.preventDefault();
    this.setState({
      searchVal: e.target.value
    })
  };

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
        <SearchBar onChange={this._updateChange} />
        
        <Route path='/search' exact={true} 
        render={(props) => 
        <Search {...props} searchString={this.state.searchVal} /> 
        } 
        /> 
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
