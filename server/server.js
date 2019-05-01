require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


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

mongoose.connect('mongodb://localhost:27017/cafe', (err) => {
    if (err) throw console.log("Error: ", err);
});

app.listen(process.env.PORT, () => {
    console.log('Listening PORT: ', process.env.PORT);
});