const express = require('express');
const cookieParser = require('cookie-parser');
const validateUser = require('./util/valdiateUser');
const api = require('./api');

const app = express();

app.locals.users = [];

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', (req, res, next) => {
    if (!req.cookies.time) {
        const timeString = new Date().toTimeString().split(' ')[0];
        res.cookie('time', timeString, {
            maxAge: 5*60*1000 // make cookie expire in 5 minutes
        });
    } 
    next();
});
app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index', { time: req.cookies.time });
});

app.route('/form')
    .get((req, res) => {
        res.render('form');
    })
    .post(validateUser('form'), (req, res) => {
        if(res.locals.userIsValid) {
            app.locals.users.push(res.locals.newUser);
            res.redirect('/results');
        } else {
            res.render('form', { error: 'Something went wrong, user not saved' });
        }
    })

app.get('/results', (req, res) => {
    res.render('results', { users: app.locals.users });
});   

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on ${port}`);
});