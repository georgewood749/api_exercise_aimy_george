const express = require('express');
const Cat = require('../models/cat');
const router = express.Router();

router.get('/', (req, res) => {
    const cat = Cat.all;
    res.send(cat);
})

router.get('/:id', (req, res) => {
    const catId = parseInt(req.params.id);
    const selectedCat = Cat.findById(catId);
    res.send(selectedCat);
})

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedCat = Cat.findById(id);
        if (!selectedCat) {
            throw new Error('This cat does not exist')
        }
        res.send(selectedCat)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

router.post('/', (req, res) => {
    res.status(405).send('Not Allowed yet!');
})

module.exports = router;
