const express = require('express');
const api = express.Router();

const users = [];

api.get('/time', (req, res) => {
    const currentTime = new Date().toTimeString().split(' ')[0];
    res.json({ time: currentTime});
});

api.post('/users', (req, res) => {
    const newUser = req.body;
    const { username, gender, agree, password } = newUser;

    const isValid = (
        Object.keys(newUser).length === 4 &&
        typeof username === 'string'      &&
        typeof gender   === 'string'      &&
        typeof agree    === 'boolean'     &&
        typeof password === 'string'
    );

    if (isValid) {
        users.push(newUser);
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }    
});

api.get('/users', (req, res) => {
    res.json(users);
});


module.exports = api;