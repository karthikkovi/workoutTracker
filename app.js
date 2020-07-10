const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.get('/exercise', (req, res) =>
    res.sendFile(__dirname + '/public/exercise.html')
);

app.get('/stats', (req, res) => res.sendFile(__dirname + '/public/stats.html'));

app.get('/api/workout', (req, res) => {
    res.send(200);
});

app.listen(PORT, () => {
    console.log(`App started on Port: ${PORT}`);
});
