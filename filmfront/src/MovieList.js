import React from 'react';
import Movie from './Movie'




class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movies: []}
  }

  componentDidMount(){
    console.log(this.props.match.params)    
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=644f21e59b17cbf67e64dbcba7a57278&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(response => response.json())
      .then(data => (data.results))
      .then(arr => {
        this.setState({ movies: arr })
      }).catch(console.log);
    
  }

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
      {this._renderMovies()}
    </div>
  )
}
}  

export default MovieList;