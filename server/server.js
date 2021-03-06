require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Routes
app.use(require('./routes/user'));

mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true });

app.listen(process.env.PORT, () => {
    console.log('Listening PORT: ', process.env.PORT);
});