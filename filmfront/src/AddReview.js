import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      rating: 3,
      comment: '',
      userId: 1,
      movieId: 2
  }
}

  // componentDidMount(){
  //  check DB to see if user has already reviewed.. if they have disable form
  //  or allow editing
  // }

  _updateRating = (e) => {
    this.setState({
      rating: parseInt(e.target.value)
    })
  }
  
  _updateComment = (e) => {
    this.setState({
      comment: e.target.value
    })
    // console.log(this.state.comment);
  }

  render() {
    return (
      <div>
        <form action="" 
        onSubmit={(e) => this.props.submit(
          this.state.rating, 
          this.state.comment, 
          this.state.userId, 
          this.state.movieId,
          e
          )}>
          Rating:  

          <select value={this.state.rating} name="rating" id="" required onChange={this._updateRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <br/>
        <textarea value={this.state.value} name="comment" id="" cols="40" rows="7"
        onChange={this._updateComment}>
        </textarea>
        <br/>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
        <br/>

        </form>
      </div>
    )
  }
}  

export default AddReview;