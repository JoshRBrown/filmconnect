import React from 'react';
import Movie2 from './Movie2';
import ReviewList from './ReviewList';
import AddReview from './AddReview';
import axios from 'axios';

class MovieDetail extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            movieId: this.props.match.params.id,
            movieDetail: {},
            reviews: []
        }
    }
    
    componentDidMount() {
        let movieDetailUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a52e05e82970ac75c588634e53f1caa4`;
        fetch(movieDetailUrl)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                movieDetail: data,
            })
            // console.log(this.state.movieDetail)
        })
        .catch(console.log);

        fetch(`/api/reviews/${this.state.movieId}`)
        //should return an array of reviews associated with above movide id
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
            reviews: data
        })
        }).catch(console.log);
        // pull reviews here from DB and set state
        this._getUserId();
        
    }

    _getUserId = () => {
        axios.get('/whoami')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    userId: data
                })
            })
            .catch(console.log)
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

    _submitReview = (rating, comment, e) => {
        
        e.preventDefault();
        console.log(this.state.userId, this.state.movieId);
        let reviewObject = {
            rating,
            comment,
            userId: this.state.userId,
            movieId: this.state.movieId
        };

        let movieObject = {
            movieId: this.state.movieId,
            title: this.state.movieDetail.original_title,
            overview: this.state.movieDetail.overview,
            releaseDate: this.state.movieDetail.release_date,
            poster: this.state.movieDetail.poster_path
        }
        console.log(movieObject, reviewObject);
        this._insertMovieIntoDatabase(movieObject);
        // make put call to API backend DB....
        this._insertReviewIntoDatabase(reviewObject);


        let newReviewArray = this.state.reviews.slice();
        newReviewArray.unshift(reviewObject);
        this.setState({
            reviews: newReviewArray
        })

    }

    _insertMovieIntoDatabase = (movieObject) => {
        console.log(movieObject);
        axios.post('http://localhost:4000/api/addmovie',
                movieObject
            )
            .then((data) => {
            })
        }

    _insertReviewIntoDatabase = (reviewObject) => {
        console.log(reviewObject);

        // fetch('/api/addreview', {
        //         method: 'POST', // or 'PUT'
        //         body: JSON.stringify(reviewObject), // data can be `string` or {object}!
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => res.json())
        //     .catch(error => console.error('Error:', error))
        //     .then(response => console.log('Success:', response));
        axios.post('/api/addreview',
            reviewObject
        )
        // .then((response) => {
        //     return response.json()
        // })
        .then((data) => {
            alert('Review Submitted');
        }
        )
    }

    _insertMovieIntoDatabase = (movieObject) => {

        // fetch('/api/addmovie', {
        //         method: 'POST', // or 'PUT'
        //         body: JSON.stringify(movieObject), // data can be `string` or {object}!
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => res.json())
        //     .catch(error => console.error('Error:', error))
        //     .then(response => console.log('Success:', response));

        axios.post('/api/addmovie',
                movieObject
            )
            .then((data) => {
            })
        }
    

    render () {

        return (
            <div className="detailed-movie">
                <div className="detailed-movie-poster">
                    {this._renderMovie()}
                </div>
                <div className="detailed-movie-text">
                    <ReviewList movieId={this.props.match.params.id}
                    reviews={this.state.reviews}/>
            
            
                    <AddReview submit={this._submitReview} 
                    />                
                </div>
            </div>
        );
    }
}

export default MovieDetail;