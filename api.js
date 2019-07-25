const express = require('express');
const validateUser = require('./util/valdiateUser');

const api = express.Router();

api.use(express.json());

api.get('/time', (req, res) => {
    const currentTime = new Date().toTimeString().split(' ')[0];
    res.json({ time: currentTime});
});

api.post('/users', validateUser(), (req, res) => {
    if (res.locals.userIsValid) {
        app.locals.users.push(newUser);
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }    
});

api.get('/users', (req, res) => {
    res.json(app.locals.users);
});


module.exports = api;