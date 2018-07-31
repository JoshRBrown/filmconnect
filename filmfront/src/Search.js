import React from 'react';
import Movie from './Movie';

class Search extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      movies: [],
    }
  }

  componentDidMount(){
    console.log(this.props.searchString);
    console.log('Fetching data now');
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=644f21e59b17cbf67e64dbcba7a57278&language=en-US&query=${this.props.searchString}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => (data.results))
      .then(arr => {
        console.log(arr)
        this.setState({
          movies: arr
        })
      }).catch(console.log);
  }
  // _handleChange = (val) => {
  //   this.setState({
  //     search: val
  //   })
  // }

  // _updateChange = (e) => {
  //   e.preventDefault();
  //   this._handleChange(e.target.value);
  // };

  // _submitSearch = (e) => {
  //   e.preventDefault();
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=644f21e59b17cbf67e64dbcba7a57278&language=en-US&query=${this.props.searchString}&page=1&include_adult=false`)
  //   .then(response => response.json())
  //   .then(data => (data.results))
  //   .then(arr => {
  //     console.log(arr)
  //     this.setState({ movies: arr })
  //   }).catch(console.log);
  // };

  _renderMovies = () => {
    let newArr = this.state.movies.map((movie) => {
    return (<div>
      <Movie id={movie.id} title={movie.title} pic={movie.poster_path} summary={movie.overview} date={movie.release_date} /> 
      </div>
      )
    })
    return newArr
}


  render() {
    return (
      <div>
        {/* <form onSubmit={this._submitSearch}>
        <input type="text" placeholder='Search for movie' onChange={this._updateChange}/>
        <input type="submit"/>
        </form> */}
        {this._renderMovies()}
      </div>
    )
  };
};


export default Search;