const express = require('express');
const catRoutes = require('./controllers/cats');
const app = express();
let cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Gustaf!');
})

app.use('/cats', catRoutes);

app.get('/cats/:id', (req, res) => {
    const id = req.params.id - 1;
    if (id < data.length){
        res.send(data[id])
    } else {
        res.status(404).send('Not found!');
    }
})

module.exports = app;
