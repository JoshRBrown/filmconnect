import React from 'react';
import Review from './Review'
import Movie from './Movie2';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: this.props.reviews
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/api/reviews/${this.props.movieId}`)
    //should return an array of reviews associated with above movide id
    .then(response => response.json())
    .then(data => {
      this.setState({
        reviews: data
      })
    }).catch(console.log);
  }


  // Check why this has duplicate key errors from this component...
  _renderReviews = () => {

    let newArr = this.props.reviews.map((review) => {

    return (<div>
      <Review rating={review.rating} comment={review.comment} key={review.userId} userId={review.userId} movieId={review.movieId} /> 
      </div>
      )
    })
    return newArr
}

render() {
  
  return (
    <div>      
      {this._renderReviews()}
    </div>
  )
}
}  

export default ReviewList;