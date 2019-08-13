const express = require('express');
const Venue = require('../models/Venue');

const router = express.Router();

router.get('/', (req, res) => {
    Venue.find({}).exec((err, result) => {
        if (err) {
            console.error('Found error in venue find');
            console.error(err.message);
            res.send([]);
        } else {
            res.send(result);
        };
    });
});

module.exports = router;