import React from 'react';


class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

render(){
  return(
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${this.props.pic}`}
 />
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