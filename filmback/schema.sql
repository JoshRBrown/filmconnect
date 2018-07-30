CREATE TABLE users (
  user_id varchar PRIMARY KEY,
  user_name varchar(50) NOT NULL
);

CREATE TABLE movies (
  movie_id int PRIMARY KEY,
  title varchar NOT NULL,
  overview varchar,
  release_date varchar,
  poster varchar
);
CREATE TABLE reviews (
  user_id varchar NOT NULL REFERENCES users(user_id),
  movie_id int NOT NULL REFERENCES movies(movie_id),
  rating int NOT NULL,
  comment varchar(250)
);
