const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

const databaseURI = process.env.MONGOLAB_URI || 'mongodb://localhost/zarohh';

const venueSchema = new mongoose.Schema({
    name: String
});

const Venue = mongoose.model('venues', venueSchema);
const newVenue = new Venue({
    name: 'New Venue !!'
});

mongoose = require('mongoose');

mongoose.connect(databaseURI, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + databaseURI + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + databaseURI);
    }
});

newVenue.save(function (err) { if (err) console.log('Error on save!') });

Venue.find({}).exec((err, result) => {
    if (err) {
        console.log('Found error in venue find');
        console.error(err.message);
    } else {
        console.log('Result from venue find');
        console.log(result);
    };
});

router.get('/', (req, res) => {
    Venue.find({}).exec((err, result) => {
        if (err) {
            console.log('Found error in venue find');
            console.log(err.message);
            res.send([]);
        } else {
            console.log('Result from venue find');
            console.log(result);
            res.send(result);
        };
    });
});

module.exports = router;