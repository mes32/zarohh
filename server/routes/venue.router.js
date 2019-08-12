const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

var databaseURI = process.env.MONGOLAB_URI || 'mongodb://localhost/zarohh';

mongoose.connect(databaseURI, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + databaseURI + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + databaseURI);
    }
});

const venueSchema = new mongoose.Schema({
    name: String
});

const venueModel = mongoose.model('venues', venueSchema);
const newVenue = new venueModel({
    name: 'New Venue !!'
});

newVenue.save(function (err) { if (err) console.log('Error on save!') });

venueModel.find({}).exec((err, result) => {
    if (err) {
        console.log('Found error in venue find');
        console.log(err.message);
    } else {
        console.log('Result from venue find');
        console.log(result);
    };
});

router.get('/', (req, res) => {
    venueModel.find({}).exec((err, result) => {
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