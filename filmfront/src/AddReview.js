import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      rating: 5,
      comment: '',
      userId: 1,
      movieId: 2
  }
}

  // componentDidMount(){
  //  check DB to see if user has already reviewed.. if they have disable form
  //  or allow editing
  // }

render() {
  return (
    <div>
      <form action="">
      put a dropdown 1-5 here or checkbox
      <br/>
      put a text area input for comments   
      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
      <br/>
      on submit... have ajax calls refresh the ReviewList to pull new review
      </form>
    </div>
  )
}
}  

export default AddReview;