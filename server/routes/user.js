const express = require('express');
const app = express();
const User = require('../models/user');

app.get('/user', function(req, res) {
    res.json('get LOCAL USER!!!');
});

app.post('/user', function(req, res) {
    let body = req.body;
    let user = new User({
        name: body.name,
        age: body.age,
        email: body.email,
        password: body.password,
        role: body.role
    });

    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: user
        });
    });
});

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user', function(req, res) {
    res.json('delete user.');
});

module.exports = app;