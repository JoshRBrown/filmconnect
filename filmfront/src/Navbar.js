import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {

    return (
      <ul>
        <li><Link to='/browse'>Browse Movies</Link></li>
        <li><Link to='/mymovies'>My Movie</Link></li>
      </ul>
  )
};

export default Navbar;