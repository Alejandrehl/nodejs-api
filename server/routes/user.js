const express = require('express');
const app = express();

app.get('/user', function(req, res) {
    res.json('get LOCAL USER!!!');
});

app.post('/user', function(req, res) {
    let body = req.body;
    console.log(body);
    console.log(body.name);
    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'The name is required.'
        });
    } else {
        res.json({
            user: body
        });
    }
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