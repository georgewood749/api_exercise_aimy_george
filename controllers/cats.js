const express = require('express');
const Cat = require('../models/cat');
const router = express.Router();

router.get('/', (req, res) => {
    const cat = Cat.all;
    res.send(cat);
})

router.get('/:id', (req, res) => {
    const catId = parseInt(req.params.id);
    const selectedPoke = Cat.findById(catId);
    res.send(selectedPoke);
})

router.post('/', (req, res) => {
    res.status(405).send('Not Allowed yet!');
})

module.exports = router;
