
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

app.use(bodyParser.urlencoded({
    extended: false
}));
const staticMiddleware = express.static('public');
app.use(staticMiddleware);

setupAuth(app);

app.get('/api/login', (req, res) => {
    let userID = 0;
    if (req.session && req.session.passport && req.session.passport.user) {
        userID = req.session.passport.user;
    }
    res.send(req.session)
})

app.get('/api/logout', (req, res) => {
    let userID = 0;
    if (req.session && req.session.passport && req.session.passport.user) {
        userID = req.session.passport.user;
    }
    res.send(req.session)
})




//server initialization
app.listen(process.env.PORT, () => {
    console.log(`Your server is running at http://localhost:${process.env.PORT}`);

});
