
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;

const db = require('./db');
const express = require('express');
const app = express();
const rp = require('request-promise');
const setupAuth = require('./auth');
const ensureAuthenticated = require('./auth').ensureAuthenticated;
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const staticMiddleware = express.static('build');
const cors = require('cors');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

const static = express.static;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
setupAuth(app);


// This is for cross domain fun
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    next();
});

app.use(cors({
    origin: ['*'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// app.get('/login', (req, res) => {
//     //send them page with a button to do authentication
//     let userID = 0;
//     if (req.session && req.session.passport && req.session.passport.user) {
//         userID = req.session.passport.user;
//     }
//     res.send(userID)
// })

// app.get('/logout', (req, res) => {
//     let userID = 0;
//     if (req.session && req.session.passport && req.session.passport.user) {
//         userID = req.session.passport.user;
//     }
//     res.send(req.session)
// })

//landing page with handlebars or whatever with a login button
app.get('/', (req, res, next)  => {
    if (req.session.passport && req.session.passport.user) {
        console.log('logged in');
        console.log(req.session.passport.user);
        next();
    } else {
        console.log('landing page');
        res.render('landing')
    }
})


app.get('/whoami', (req,res) => {
    if (req.session.passport && req.session.passport.user) {
        console.log(req.session.passport.user);
        res.send(req.session.passport.user);
    } else {
        // res.send('0');
        res.redirect('http://localhost:4000');
    }
})

app.get('/api/reviews/:id', (req, res) => {
    // console.log(Number(req.params.id))
    db.getMovieReviews(Number(req.params.id))
        .then((data) => {
            // console.log(data);
            res.send((data));
        }).catch(console.log)
})


app.post('/api/addmovie', (req, res) => {
    // console.log('movie.. req', req.body)
    let id = req.body.movieId;
    let title = req.body.title;
    let overview = req.body.overview;
    let releaseDate = req.body.releaseDate;
    let poster = req.body.poster;
    console.log(req)
    db.insertMovie(id, title, overview, releaseDate,poster)
        .then(data => res.send(data))
        .catch(err => console.log(err.message))
})

app.get('/api/myreviews', (req, res) => {
    console.log(req)
})

app.post('/api/addreview', (req, res) => {
    console.log('review.. req', req.body)

    let user_id = req.body.userId.toString();
    console.log(user_id);
    console.log(typeof(user_id));
    let movie_id = req.body.movieId;
    let rating = req.body.rating;
    let comment = req.body.comment;
    // console.log(req);
    db.insertReview(user_id, movie_id, rating, comment)
        .then(data => res.send(data))
        .catch(err => console.log(err.message))
})

app.use(staticMiddleware);


//server initialization
app.listen(process.env.PORT, () => {
    console.log(`Your server is running at http://localhost:${process.env.PORT}`);

});
