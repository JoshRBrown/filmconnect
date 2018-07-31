import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';

class Search extends React.Component {

  _submitSearch = (e) => {
    e.preventDefault();
    console.log('hello');
    <Link to='/search'>Search</Link>
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this._submitSearch}>
        <input type="text" placeholder='Search for movie' onChange={this.props.onChange}/>
        {/* <Link to='/search'> */}
          <input type="submit"/>
        {/* </Link> */}

        </form>
      </div>
    )
  };
};

export default Search;