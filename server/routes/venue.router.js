const express = require('express');
const router = express.Router();

const venues = [
    {
        name: 'Bauhaus Brew Labs'
    },
    {
        name: 'Fair State Brewing Cooperative'
    },
    {
        name: 'Modist Brewing Co.'
    },
    {
        name: 'Pryes Brewing Company'
    }
];

router.get('/', (req, res) => {
    res.send(venues);
});

module.exports = router;