const express = require('express');

const mongoose = require('mongoose');

const morgan = require('morgan');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

const MONGO_URI = 'mongodb+srv://justindurocher:testtime@strains-y9329.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect('mongodb://localhost/searchStrain' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected' , () => {
    console.log("Mongoose is connected!!!");
});
