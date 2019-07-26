const express = require('express');
const validateUser = require('../util/valdiateUser');

const api = express.Router();

api.use(express.json());

api.get('/time', (req, res) => {
    const currentTime = new Date().toTimeString().split(' ')[0];
    res.json({ time: currentTime});
});

api.post('/users', validateUser(), (req, res) => {
    if (res.locals.userIsValid) {
        req.app.locals.users.push(res.locals.newUser);
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }    
});

api.get('/users', (req, res) => {
    res.json(req.app.locals.users);
});


module.exports = api;