const express = require('express');
const router = express.Router();

const venues = [
    {
        id: 0,
        name: 'Bauhaus Brew Labs'
    },
    {
        id: 1,
        name: 'Fair State Brewing Cooperative'
    },
    {
        id: 2,
        name: 'Modist Brewing Co.'
    },
    {
        id: 3,
        name: 'Pryes Brewing Company'
    }
];

router.get('/', (req, res) => {
    res.send(venues);
});

module.exports = router;