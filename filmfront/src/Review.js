import React from 'react';


class Review extends React.Component {
    constructor(props) {
    super(props)
  }

render(){
  return(
    <div>
    <h1>
    Rating: {this.props.rating}
    </h1>
    <p>
    User comments: {this.props.comment}
    From user: {this.props.userId} for movie: {this.props.movieId}
    </p>
    </div>
  )
}

};


export default Review;