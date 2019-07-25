const express = require('express');
const cookieParser = require('cookie-parser');
const api = require('./api');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', (req, res, next) => {
    if (!req.cookies.time) {
        const timeString = new Date().toTimeString().split(' ')[0];
        res.cookie('time', timeString);
    } 
    next();
});
app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index', { time: req.cookies.time });
});

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on ${port}`);
});