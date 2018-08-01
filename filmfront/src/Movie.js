import React from 'react';
import {Link} from 'react-router-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

render(){
  return(
    <Link to={`/browse/${this.props.id}`}>
    <div className='movie-poster'>
      <img className="movie-list-movie-image" src={`https://image.tmdb.org/t/p/w500${this.props.pic}`}/>
      <h1>
      {/* {this.props.title} */}
      </h1>
      <p>
      {/* {this.props.summary} */}
      </p>
      <p>
      {/* Release date: {this.props.date} */}
      </p>
    </div>
  </Link>
  )
}

};


export default Movie;