const db = require('./db');
const express = require('express');

const bodyParser = require('body-parser');

const static = express.static;
app.use(static('public'));
app.user(bodyParser.urlencoded({ extended: false }))


app.get('/login', (req, res) => {
  
});
