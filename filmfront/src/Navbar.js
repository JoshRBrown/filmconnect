import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Signin from './Signin';

const Navbar = (props) => {

    return (
      <div className='navbar'>
      <Signin />
        <ul>
          <li><Link to='/browse'>Browse Movies</Link></li>
          <li><Link to='/mymovies'>My Movie</Link></li>
        </ul>
      </div>
  )
};

export default Navbar;