const express = require('express');
const mongoose = require('mongoose');
const fitness = require('./models/fitnesstrack');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) =>
    res.sendFile(__dirname + '/public/views/index.html')
);

app.get('/exercise', (req, res) =>
    res.sendFile(__dirname + '/public/views/exercise.html')
);

app.get('/stats', (req, res) =>
    res.sendFile(__dirname + '/public/views/stats.html')
);
