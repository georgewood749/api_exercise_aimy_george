const express = require('express');
const catRoutes = require('./controllers/cats');
const app = express();
let cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Gustaf!');
})

app.use('/cats', catRoutes);

module.exports = app;
