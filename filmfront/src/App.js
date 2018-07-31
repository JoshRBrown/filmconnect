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
        <Route path='/mymovies' component={MyList} exact={true} />
        <Route path='/browse/:id' component={MovieDetail} exact={true} />

      </div>
    );
  }
}

export default App;
