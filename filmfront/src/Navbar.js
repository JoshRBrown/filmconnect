import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';


const Navbar = (props) => {

    return (
      <div className='navbar'>
        <ul>
          <li><Link to='/browse'>Browse Movies</Link></li>
          <li><Link to='/mymovies'>My Movie</Link></li>
          {/* <li><Link to='/search'>Search</Link></li> */}
        </ul>
      </div>
  )
};

export default Navbar;