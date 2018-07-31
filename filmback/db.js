const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'movies',
    user: process.env.postgres,
    password: ''
}
const db = pgp(cn);



function insertMovie(id, title, overview, release_date, poster) {
  return db.one('INSERT INTO movies (movied_id, title, overview, release_date, poster) VALUES ($1, $2, $3, $4, $5);', [id, title, overview, release_date, poster]);
};

function insertUser(id, username) {
  return db.one(`INSERT INTO users (user_id, user_name) VALUES ('$1#', '$2#') returning user_id;`, [id, username]);
};

function insertReview(user_id, movie_id, rating, comment) {
  return db.one('INSERT INTO reviews (user_id, movie_id, rating, comment) VALUES ($1, $2, $3, $4);', [user_id, movie_id, rating, comment]);
};

function getMovieReviews(movie_id) {
  return db.any('SELECT * FROM reviews WHERE movie_id = $1;', [movie_id]);
};

function getUserReviews(user_id) {
  return db.any('SELECT * FROM reviews WHERE user_id = 1#', [user_id]);
};

function getUser(user_id) {
  return db.oneOrNone('SELECT * from users WHERE user_id = $1;', [user_id]);
};

module.exports = {
  insertMovie,
  insertUser,
  insertReview,
  getMovieReviews,
  getUserReviews,
  getUser
};


