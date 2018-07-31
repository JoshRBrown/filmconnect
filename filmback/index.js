
const dotenv = require('dotenv');
dotenv.config();
const db = require('./db');
const express = require('express');
const app = express();
const static = express.static;
const rp = require('request-promise');
const apiKey = process.env.API_KEY;
const setupAuth = require('./auth');
const ensureAuthenticated = require('./auth').ensureAuthenticated;
const bodyParser = require('body-parser');
const staticMiddleware = express.static('public');
app.use(staticMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

setupAuth(app);

// This is for cross domain fun
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    next();
});

// app.get('/api/login', (req, res) => {
//     let userID = 0;
//     if (req.session && req.session.passport && req.session.passport.user) {
//         userID = req.session.passport.user;
//     }
//     res.send(userID)
// })

app.get('/api/logout', (req, res) => {
    let userID = 0;
    if (req.session && req.session.passport && req.session.passport.user) {
        userID = req.session.passport.user;
    }
    res.send(req.session)
})


app.get('/api/reviews/:id', (req, res) => {
    console.log(Number(req.params.id))
    db.getMovieReviews(Number(req.params.id))
        .then((data) => {
            console.log(data);
            res.send((data));
        }).catch(console.log)
})


app.post('/api/addmovie', (req, res) => {
    let id = req.body.movieId;
    let title = req.body.title;
    let overview = req.body.overview;
    let releaseDate = req.body.releaseDate;
    let poster = req.body.poster;
    db.insertMovie(id, title, overview, releaseDate,poster)
        .then(data => res.send(data))
        .catch(err => console.log(err.message))
})


app.post('/api/addreview', (req, res) => {
    let user_id = req.body.userId;
    let movie_id = req.body.movieId;
    let rating = req.body.rating;
    let comment = req.body.comment;
    db.insertReview(user_id, movie_id, rating, comment)
        .then(data => res.send(data))
        .catch(err => console.log(err.message))
})


//server initialization
app.listen(process.env.PORT, () => {
    console.log(`Your server is running at http://localhost:${process.env.PORT}`);

});
