import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MyList from './MyList';
import MovieDetail from './MovieDetail';
import Search from './Search'
import SearchBar from './SearchBar';
import axios from 'axios';
axios.defaults.withCredentials = true;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: ' '
    }
  }
  
  componentDidMount() {
    this._getUserId();

  }

  _searchSubmit = (val) => {
    this.setState({
      searchVal: val,
      userId: ''
    })
  }

  _getUserId = () => {
    axios.get('/whoami')
    .then(response => response.data)
    .then(data => {
        this.setState({
          userId: data
        })
        })
    .catch(console.log)
      }


  render() {
    return (
      <div>
        <Navbar />
        <SearchBar searchSubmit={this._searchSubmit} />
        
        <Route path='/search/:searchstring' 
        render={(props) => {
          return <Search {...props} key={this.state.searchVal} user={this.state.userId} /> 
        }}/> 
        <Route path='/browse' component={MovieList} exact={true} />
        <Route path='/mymovies'  exact={true} render={(props) =>
        <MyList {...props} userId={this.state.userId} />}/>
        <Route path='/browse/:id' exact={true} render={(props) => 
        <MovieDetail {...props} userId={this.state.userId}  />}/>

      </div>
    );
  }
}

export default App;
