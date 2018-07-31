import React from 'react';
import Review from './Review'
import Movie from './Movie2';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reviews: [
      { rating: 9, comment: 'I enjoyed this film....', userId: 5, movieId: this.props.movieId},
      { rating: 5, comment: 'Needs improvement..', userId: 1, movieId: this.props.movieId}
    ]}
  }

  // componentDidMount(){
  //   fetch(`http://localhost:4000/api/reviews/${this.props.match.params.id}`)
  //   //should return an array of reviews associated with above movide id
  //   .then(response => response.json())
  //   .then(data => (data.results))
  //   .then(arr => {
  //     console.log(arr)
  //     this.setState({ 
  //       reviews: arr })
  //   }).catch(console.log);
  // }


  // Check why this has duplicate key errors from this component...
  _renderReviews = () => {
    let newArr = this.state.reviews.map((review) => {
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