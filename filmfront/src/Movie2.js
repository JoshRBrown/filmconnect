import React from 'react';


class Movie extends React.Component {


render(){
  return(
    <div className="movie2-container">
      <div className="img-div">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.pic}`} alt='' />
      </div>
     {/* <div className="detailed-movie-text"> */}
      <h1>
        {this.props.title}
      </h1>
      <p>
        {this.props.summary}
      </p>
      <p>
        Release date: {this.props.date}
      </p>
    </div>

  )
}

};


export default Movie;