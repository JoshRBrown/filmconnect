import React from 'react';
import Movie2 from './Movie2';
import ReviewList from './ReviewList';
import AddReview from './AddReview';
import axios from 'axios';

class MovieDetail extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            userId: 1,
            movieId: this.props.match.params.id,
            movieDetail: {},
            reviews: [{
                rating: 5,
                comment: 'I enjoyed this film....',
                userId: 5,
                movieId: this.props.match.params.id
            }]
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

        fetch(`http://localhost:4000/api/reviews/${this.state.movieId}`)
        //should return an array of reviews associated with above movide id
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
            reviews: data
        })
        }).catch(console.log);
        // pull reviews here from DB and set state
        // this.setState({
        //     reviews: [{
        //             rating: 9,
        //             comment: 'I enjoyed this film....',
        //             userId: 5,
        //             movieId: this.props.match.params.id
        //         },
        //         {
        //             rating: 5,
        //             comment: 'Needs improvement..',
        //             userId: 1,
        //             movieId: this.props.match.params.id
        //         }
        //     ]}
        // )
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


    _insertReviewIntoDatabase = (reviewObject) => {
        axios.post('http://localhost:4000/api/addreview', 
            reviewObject
        )
        // .then((response) => {
        //     return response.json()
        // })
        .then((data) => {
            alert('Review Submitted');
        }
        )}

    _insertMovieIntoDatabase = (movieObject) => {
        axios.post('http://localhost:4000/api/addmovie',
                movieObject
            )
            .then((data) => {
            })
        }
    

    render () {

        return (
            <div>
                {this._renderMovie()}
                <AddReview submit={this._submitReview} 
                />
                


                <ReviewList movieId={this.props.match.params.id}

                reviews={this.state.reviews}/>

            
            </div>
        );
    }
}

export default MovieDetail;