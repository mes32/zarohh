const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String
});

const Venue = mongoose.model('venues', schema);

module.exports = Venue;