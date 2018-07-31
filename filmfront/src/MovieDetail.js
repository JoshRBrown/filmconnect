import React from 'react';
import Movie2 from './Movie2';
import ReviewList from './ReviewList';
import AddReview from './AddReview';

class MovieDetail extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            movieDetail: {}
        }
    }

    
    componentDidMount() {
        let movieDetailUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a52e05e82970ac75c588634e53f1caa4`;
        fetch(movieDetailUrl)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                movieDetail: data 
            })
            console.log(this.state.movieDetail)
        })
        .catch(console.log);
    }

    _renderMovieDetail = () => {
        return (
            <div>
                <h1>
                {this.state.movieDetail.original_title}
                </h1>
            </div>
        );
    }

    _renderMovie = () => {
        let movie = 'this.state.movieDetail';
        return (
        <div>
            <Movie2 
            title={this.state.movieDetail.original_title} 
            pic={this.state.movieDetail.poster_path} 
            summary={this.state.movieDetail.overview} 
            date={this.state.movieDetail.release_date} /> 
        </div>
        // potentially loop through genre array description and pass that in
        )
    }

    render () {

        return (
            <div>
                {this._renderMovie()}
                <AddReview />
                <ReviewList movieId={this.props.match.params.id} />
            
            </div>
        );
    }
}

export default MovieDetail;